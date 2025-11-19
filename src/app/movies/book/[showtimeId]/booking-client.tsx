"use client";

import { useState } from "react";
import { SeatMap } from "@/components/seat-map";
import { BookingForm } from "@/components/booking-form";
import { Showtime, Movie } from "@/lib/types";
import { X } from "lucide-react";
import Script from "next/script";
import { useRouter } from "next/navigation";

interface BookingClientProps {
  showtime: Showtime;
  movie: Movie;
  initialBookedSeats: string[];
}

declare global {
  interface RazorpayHandlerResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }

  interface RazorpayOptions {
    key: string | undefined;
    amount?: number;
    currency?: string;
    name?: string;
    description?: string;
    order_id?: string;
    handler?: (response: RazorpayHandlerResponse) => void;
    prefill?: { name?: string; email?: string; contact?: string };
    theme?: { color?: string };
  }

  interface RazorpayInstance {
    open: () => void;
    on?: (event: string, handler: (...args: unknown[]) => void) => void;
  }

  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export function BookingClient({
  showtime,
  movie,
  initialBookedSeats,
}: BookingClientProps) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const toggleSeat = (seatId: string) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId);
      }
      if (prev.length >= 10) {
        alert("You can only select up to 10 seats.");
        return prev;
      }
      return [...prev, seatId];
    });
  };

  const totalAmount = selectedSeats.length * showtime.price;

  const handlePayment = async (userDetails: {
    name: string;
    email: string;
    phone: string;
  }) => {
    setIsProcessing(true);
    try {
      // 1. Create Order
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          showtimeId: showtime.id,
          seats: selectedSeats,
          userDetails,
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        throw new Error(orderData.error || "Failed to create order");
      }

      // 2. Open Razorpay
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Make sure to expose this in .env
        amount: orderData.amount,
        currency: "INR",
        name: "College Tech Fest",
        description: `Movie Tickets: ${movie.title}`,
        order_id: orderData.id,
        handler: async function (response: RazorpayHandlerResponse) {
          // 3. Verify Payment
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature,
                bookingDetails: {
                  showtimeId: showtime.id,
                  seats: selectedSeats,
                  userDetails,
                  amount: totalAmount,
                },
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok) {
              router.push("/movies/success");
            } else {
              alert("Payment verification failed: " + verifyData.error);
            }
          } catch (err: unknown) {
            console.error(err);
            const message = err instanceof Error ? err.message : String(err);
            alert(message || "Payment verification failed");
          }
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        theme: {
          color: "#9333ea",
        },
      };

      const RazorpayConstructor = window.Razorpay;
      if (!RazorpayConstructor) {
        throw new Error("Razorpay SDK not loaded");
      }
      const rzp = new RazorpayConstructor(options);
      rzp.open();
    } catch (err: unknown) {
      console.error(err);
      const message = err instanceof Error ? err.message : String(err);
      alert(message || "Something went wrong");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        {/* Header */}
        <header className="p-4 border-b border-white/10 bg-[#0a0a0a] sticky top-0 z-20">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-lg font-bold">{movie.title}</h1>
              <p className="text-sm text-gray-400">
                {new Date(showtime.start_time).toLocaleString("en-US", {
                  weekday: "short",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10">
              {selectedSeats.length} Seats Selected
            </div>
          </div>
        </header>

        {/* Seat Map */}
        <div className="flex-grow bg-[#0a0a0a]">
          <SeatMap
            bookedSeats={initialBookedSeats}
            selectedSeats={selectedSeats}
            onSeatToggle={toggleSeat}
          />
        </div>

        {/* Footer */}
        {selectedSeats.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-white/10 p-4 z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className="container mx-auto flex justify-between items-center max-w-2xl">
              <div>
                <div className="text-sm text-gray-400">Total Price</div>
                <div className="text-2xl font-bold">₹{totalAmount}</div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-xl font-bold text-white shadow-lg hover:scale-105 transition-transform"
              >
                Proceed
              </button>
            </div>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#111] w-full max-w-md rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 fade-in">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Confirm Booking</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Movie</span>
                    <span className="font-medium text-right">
                      {movie.title}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Seats</span>
                    <span className="font-medium text-right">
                      {selectedSeats.join(", ")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time</span>
                    <span className="font-medium text-right">
                      {new Date(showtime.start_time).toLocaleTimeString(
                        "en-US",
                        { hour: "numeric", minute: "2-digit" }
                      )}
                    </span>
                  </div>
                </div>

                <BookingForm
                  amount={totalAmount}
                  seatCount={selectedSeats.length}
                  isProcessing={isProcessing}
                  onSubmit={handlePayment}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
