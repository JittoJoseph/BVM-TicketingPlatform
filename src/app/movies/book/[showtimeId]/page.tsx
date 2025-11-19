import { BookingClient } from "./booking-client";
import { supabase } from "@/lib/supabase";
import { Movie, Showtime } from "@/lib/types";

async function getShowtimeAndMovie(showtimeId: string) {
  const { data: showtime, error: showtimeError } = await supabase
    .from("showtimes")
    .select("*")
    .eq("id", showtimeId)
    .single();

  if (showtimeError || !showtime) {
    console.error("Showtime not found", showtimeError);
    return null;
  }

  const { data: movie, error: movieError } = await supabase
    .from("movies")
    .select("*")
    .eq("id", showtime.movie_id)
    .single();

  if (movieError || !movie) {
    console.error("Movie for showtime not found", movieError);
    return null;
  }

  return { showtime: showtime as Showtime, movie: movie as Movie };
}

async function getBookedSeats(showtimeId: string) {
  const { data, error } = await supabase
    .from("bookings")
    .select("seats")
    .eq("showtime_id", showtimeId)
    .eq("status", "confirmed");

  if (error) {
    console.error("Failed to load booked seats", error);
    return [];
  }

  return (data ?? []).flatMap((b) => b.seats) as string[];
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ showtimeId: string }>;
}) {
  const { showtimeId } = await params;
  const data = await getShowtimeAndMovie(showtimeId);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Showtime not found
      </div>
    );
  }

  const bookedSeats = await getBookedSeats(showtimeId);

  return (
    <BookingClient
      showtime={data.showtime}
      movie={data.movie}
      initialBookedSeats={bookedSeats}
    />
  );
}
