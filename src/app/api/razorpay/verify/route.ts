import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabase } from "@/lib/supabase";
import { sendTicketEmail } from "@/lib/email";

type BookingDetails = {
  showtimeId: string;
  seats: string[];
  userDetails: { name: string; email: string; phone: string };
  amount: number;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { paymentId: string; orderId: string; signature: string; bookingDetails: BookingDetails };
    const { paymentId, orderId, signature, bookingDetails } = body;

    // 1. Verify Signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(orderId + "|" + paymentId)
      .digest("hex");

    if (generatedSignature !== signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // 2. Save Booking to DB
    const { showtimeId, seats, userDetails, amount } = bookingDetails as BookingDetails;

    const { data: booking, error: dbError } = await supabase
      .from('bookings')
      .insert({
        showtime_id: showtimeId,
        seats: seats,
        user_name: userDetails.name,
        user_email: userDetails.email,
        user_phone: userDetails.phone,
        payment_id: paymentId,
        order_id: orderId,
        amount: amount,
        status: 'confirmed'
      })
      .select()
      .single();

    if (dbError) {
      console.error("DB Save Error:", dbError);
      // Payment succeeded but DB failed. This is a critical edge case.
      // In a real app, you'd log this to a separate system for manual reconciliation.
      return NextResponse.json({ error: "Booking saved failed, but payment received. Contact support." }, { status: 500 });
    }

    // 3. Get Movie Details for Email
    // We need to fetch movie title and showtime details again to send a nice email
    // Or we could pass them from client, but fetching is safer/cleaner
    const { data: showtimeData } = await supabase
      .from('showtimes')
      .select('start_time, movies(title)')
      .eq('id', showtimeId)
      .single();
    
    let movieTitle = "Movie";
    if (showtimeData?.movies) {
      const moviesField = showtimeData.movies as unknown;
      if (Array.isArray(moviesField)) {
        const arr = moviesField as Array<{ title?: string }>;
        movieTitle = arr[0]?.title ?? movieTitle;
      } else {
        const obj = moviesField as { title?: string };
        movieTitle = obj.title ?? movieTitle;
      }
    }
    const showtimeStr = new Date(showtimeData?.start_time).toLocaleString('en-US', { 
      weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' 
    });

    // 4. Send Email (Fire and forget, don't block response)
    sendTicketEmail(userDetails.email, {
      movieTitle,
      showtime: showtimeStr,
      seats,
      amount,
      orderId,
      name: userDetails.name
    }).catch(console.error);

    return NextResponse.json({ success: true, bookingId: booking.id });

  } catch (err: unknown) {
    console.error("Verify Error:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message || "Internal Server Error" }, { status: 500 });
  }
}
