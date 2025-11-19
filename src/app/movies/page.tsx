import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { MovieWithShowtimes, Showtime } from "@/lib/types";
import { Film, Ticket, Clock, MapPin, Star } from "lucide-react";

async function getMoviesWithShowtimes(): Promise<MovieWithShowtimes[]> {
  const { data, error } = await supabase
    .from("movies")
    .select("*, showtimes(*)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load movies", error);
    return [];
  }

  return (data ?? []) as MovieWithShowtimes[];
}

function getNextShowtime(showtimes?: Showtime[] | null) {
  if (!showtimes) return null;
  const now = Date.now();
  return (
    showtimes
      .filter(
        (show) => show.is_active && new Date(show.start_time).getTime() >= now
      )
      .sort(
        (a, b) =>
          new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
      )[0] ?? null
  );
}

function formatShowtimeLabel(date: Date) {
  const day = date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const time = date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${day} · ${time}`;
}

export default async function MoviesPage() {
  const movies = await getMoviesWithShowtimes();

  return (
    <main className="min-h-screen bg-[#05050c] text-white">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/30 via-[#05050c] to-blue-900/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-purple-300 mb-4">
              <Film className="h-4 w-4" />
              Now Showing
            </div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl mb-4">
              Movies at BVM Theatre
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-6">
              Book your movie tickets for screenings at our college theatre.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Star className="h-4 w-4 text-yellow-400" />
                Easy Booking
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Ticket className="h-4 w-4 text-purple-400" />
                Secure Payments
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Clock className="h-4 w-4 text-blue-400" />
                Instant Email Tickets
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <section className="px-4 pt-8 pb-6 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Now Showing
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                {movies.length} {movies.length === 1 ? "movie" : "movies"}{" "}
                available for booking
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Bookings open
              </span>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movies.length === 0 && (
              <li className="col-span-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
                <Film className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">
                  New screenings will be announced soon.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Check back later for updates.
                </p>
              </li>
            )}

            {movies.map((movie) => {
              const nextShowtime = getNextShowtime(movie.showtimes);
              const hasShowtime = Boolean(nextShowtime);
              const showtimeDate = nextShowtime
                ? new Date(nextShowtime.start_time)
                : null;
              const showtimeLabel = showtimeDate
                ? formatShowtimeLabel(showtimeDate)
                : "Coming soon";
              const priceLabel = nextShowtime ? `₹${nextShowtime.price}` : null;

              const card = (
                <div
                  className={`group relative rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden transition-all duration-300 ${
                    hasShowtime
                      ? "hover:border-purple-500/60 hover:shadow-[0_20px_40px_rgba(79,70,229,0.25)] hover:-translate-y-1"
                      : "opacity-60 cursor-not-allowed"
                  }`}
                >
                  <div className="relative aspect-[2/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={movie.poster_url || "/globe.svg"}
                      alt={movie.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                        {movie.rating}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      {priceLabel ? (
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white">
                            {priceLabel}
                          </span>
                          <span className="text-[10px] uppercase tracking-wide text-white/80">
                            Book now
                          </span>
                        </div>
                      ) : (
                        <div className="text-[10px] font-semibold uppercase tracking-wide text-white/80">
                          Coming soon
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white line-clamp-2 mb-1">
                      {movie.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 mb-2">
                      {showtimeLabel}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-gray-500">
                      <MapPin className="h-3 w-3" />
                      <span>BVM Theatre</span>
                    </div>
                  </div>
                </div>
              );

              return (
                <li key={movie.id}>
                  {hasShowtime && nextShowtime ? (
                    <Link
                      href={`/movies/book/${nextShowtime.id}`}
                      className="block"
                    >
                      {card}
                    </Link>
                  ) : (
                    <div>{card}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
