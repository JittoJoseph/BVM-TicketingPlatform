export default function GrandFinale() {
  return (
    <section
      className="relative py-16 md:py-32 bg-black overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Top feather effect - gradient from black to transparent */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>

      {/* Dynamic background with concert vibes */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/50 to-blue-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 mt-12 md:mt-24">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-2 bg-white/[0.1] backdrop-blur-sm rounded-full border border-white/[0.2] text-white/90 text-sm font-medium tracking-wide">
              <div className="w-2 h-2 bg-white/50 rounded-full mr-2 animate-pulse"></div>
              GRAND FINALE • DAY 2 EVENING
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-tight"
            style={{ fontFamily: "Audiowide, sans-serif" }}
          >
            MUSIC NIGHT
            <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-white/80 mt-4">
              FEATURING CHARMINAR
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Get ready to party all night with CHARMINAR&apos;s electrifying
            performance! Experience an epic DJ set, wild foam party, and
            non-stop music that will keep the energy high till dawn.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-white/70">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-medium">5:00 PM Onwards</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-3 text-white/70">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-medium">Outdoor Stage</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>
              </div>
              <span className="text-white/90 text-base font-semibold">
                DJ Set
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg
                  className="w-8 h-8 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="8" cy="8" r="2" />
                  <circle cx="16" cy="8" r="2" />
                  <circle cx="8" cy="16" r="2" />
                  <circle cx="16" cy="16" r="2" />
                </svg>
              </div>
              <span className="text-white/90 text-base font-semibold">
                Foam Party
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>
              </div>
              <span className="text-white/90 text-base font-semibold">
                Music Show
              </span>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xl md:text-2xl font-bold text-white/90 italic">
              "The night that turns memories into legends"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
