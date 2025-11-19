import { NextResponse } from "next/server";
import { createRazorpayClient } from "@/lib/razorpay";
import { supabase } from "@/lib/supabase";
import { THEATRE_CONFIG } from "@/lib/theatre-config";

type CreateOrderBody = {
  showtimeId: string;
  seats: string[];
  userDetails: { name: string; email: string; phone: string };
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CreateOrderBody;
    const { showtimeId, seats, userDetails } = body;

    if (!showtimeId || !seats || seats.length === 0 || !userDetails) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Validate Seats (Check if damaged)
    const damagedSeats = THEATRE_CONFIG.damagedSeats;
    const hasDamagedSeat = seats.some((seat) => damagedSeats.includes(seat));
    if (hasDamagedSeat) {
      return NextResponse.json({ error: "One or more selected seats are unavailable." }, { status: 400 });
    }

    // 2. Check Availability in DB
    // We check if any of the requested seats are already in a 'confirmed' booking for this showtime
    const { data: existingBookings, error: dbError } = await supabase
      .from('bookings')
      .select('seats')
      .eq('showtime_id', showtimeId)
      .eq('status', 'confirmed');

    if (dbError) {
      console.error("DB Error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    const allBookedSeats = existingBookings?.flatMap((b) => b.seats) || [];
    const isAlreadyBooked = seats.some((seat) => allBookedSeats.includes(seat));

    if (isAlreadyBooked) {
      return NextResponse.json({ error: "Some seats were just booked by someone else. Please select different seats." }, { status: 409 });
    }

    // 3. Get Price
    const { data: showtime, error: showtimeError } = await supabase
      .from('showtimes')
      .select('price')
      .eq('id', showtimeId)
      .single();

    if (showtimeError || !showtime) {
      return NextResponse.json({ error: "Showtime not found" }, { status: 404 });
    }

    const amount = showtime.price * seats.length;

    // 4. Create Razorpay Order
    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: {
        showtimeId,
        seats: seats.join(","),
      },
    };

    const razorpayClient = createRazorpayClient();
    const order = await razorpayClient.orders.create(options);

    return NextResponse.json(order);

  } catch (err: unknown) {
    console.error("Create Order Error:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message || "Internal Server Error" }, { status: 500 });
  }
}
