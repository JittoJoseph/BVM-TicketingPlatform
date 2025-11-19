import { Movie, Showtime } from "@/lib/types";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";

async function getMovie(id: string) {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Movie not found", error);
    return null;
  }

  return data as Movie;
}

async function getShowtimes(movieId: string) {
  const { data, error } = await supabase
    .from("showtimes")
    .select("*")
    .eq("movie_id", movieId)
    .eq("is_active", true)
    .order("start_time", { ascending: true });

  if (error) {
    console.error("Failed to load showtimes", error);
    return [];
  }

  return (data ?? []) as Showtime[];
}

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovie(id);
  const showtimes = await getShowtimes(id);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Movie not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      {/* Backdrop with blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 blur-xl"
          style={{ backgroundImage: `url(${movie.poster_url})` }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 md:pt-32">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Poster */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-grow">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-8">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm font-medium">
                {movie.rating}
              </span>
              <span>{movie.genre}</span>
              <span>•</span>
              <span>{movie.duration}</span>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                Synopsis
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
                {movie.description}
              </p>
            </div>

            {/* Showtimes */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-purple-400">
                Select Showtime
              </h3>

              {showtimes.length === 0 ? (
                <p className="text-gray-400">
                  No showtimes available currently.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
                  {showtimes.map((showtime) => {
                    const date = new Date(showtime.start_time);
                    return (
                      <Link
                        key={showtime.id}
                        href={`/movies/book/${showtime.id}`}
                        className="group flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-2 text-purple-300">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">
                            {date.toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-2xl font-bold text-white mb-1">
                          <Clock className="w-5 h-5 text-gray-400" />
                          {date.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-auto pt-2">
                          <MapPin className="w-3 h-3" />
                          <span>College Theatre</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
