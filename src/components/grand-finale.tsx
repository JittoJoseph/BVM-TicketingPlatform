export default function GrandFinale() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Dynamic background with concert vibes */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

      {/* Subtle stage lights effect */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-purple-400/50 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-blue-400/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-48 bg-gradient-to-b from-pink-400/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-2 bg-white/[0.1] backdrop-blur-sm rounded-full border border-white/[0.2] text-white/90 text-sm font-medium tracking-wide">
              <div className="w-2 h-2 bg-white/50 rounded-full mr-2 animate-pulse"></div>
              GRAND FINALE • DAY 2 EVENING
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight"
            style={{ fontFamily: "Audiowide, sans-serif" }}
          >
            G-LIVE
            <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-white/80 mt-2">
              LIVE CONCERT
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience the electrifying grand finale of COREX26 with an
            unforgettable live music concert by G-Live, featuring special
            appearances by Eagle Gaming. The ultimate celebration wrapping up
            our 2-day tech fest.
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
              <span className="text-sm font-medium">4:30 PM Onwards</span>
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
              <span className="text-sm font-medium">Main Auditorium</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
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
              className="text-xl md:text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              Live Music
            </h3>
            <p className="text-white/70 leading-relaxed">
              Professional musicians delivering high-energy performances across
              multiple genres, from electronic beats to acoustic melodies.
            </p>
          </div>

          <div className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-400"
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
              className="text-xl md:text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              Eagle Gaming
            </h3>
            <p className="text-white/70 leading-relaxed">
              Special guest appearances by Eagle Gaming, bringing their unique
              entertainment and content creation flair to complement the musical
              experience.
            </p>
          </div>

          <div className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              Celebration
            </h3>
            <p className="text-white/70 leading-relaxed">
              The perfect ending to COREX26, celebrating innovation, creativity,
              and the spirit of our tech community.
            </p>
          </div>
        </div>

        <div className="text-center">
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
        </div>
      </div>
    </section>
  );
}
