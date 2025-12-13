import Link from "next/link";

export default function GrandFinale() {
  return (
    <section className="relative py-8 md:py-12 bg-black overflow-hidden">
      {/* Dynamic background with concert vibes */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

      {/* Subtle stage lights effect */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-purple-400/50 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-blue-400/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-48 bg-gradient-to-b from-pink-400/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4 md:mb-6">
          <div className="mb-4">
            <span className="inline-flex items-center px-6 py-2 bg-white/[0.1] backdrop-blur-sm rounded-full border border-white/[0.2] text-white/90 text-sm font-medium tracking-wide">
              <div className="w-2 h-2 bg-white/50 rounded-full mr-2 animate-pulse"></div>
              GRAND FINALE • DAY 2 EVENING
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight"
            style={{ fontFamily: "Audiowide, sans-serif" }}
          >
            G-LIVE
            <span className="block text-xl md:text-3xl lg:text-4xl font-light text-white/80 mt-2">
              LIVE CONCERT
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            Experience the electrifying grand finale of COREX26 with
            G-Live&apos;s live concert, featuring special appearances by Eagle
            Gaming.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-white/60">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">5:00 PM Onwards</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/60">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Outdoor Stage</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-4">
          <div className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            </div>
            <h3
              className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              Live Music
            </h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Professional musicians delivering high-energy performances across
              multiple genres.
            </p>
          </div>

          <div className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-4 md:p-6 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
            <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 md:w-4 md:h-4 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3
              className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              Eagle Gaming
            </h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Special guest appearances bringing unique entertainment to
              complement the musical experience.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="https://makemypass.com/event/music-concert">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105">
              <span>Get Your Tickets</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
