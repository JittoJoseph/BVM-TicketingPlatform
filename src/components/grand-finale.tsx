export default function GrandFinale() {
  return (
    <section
      id="music-night"
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
            <span className="text-white font-medium px-6 py-2 border border-white/20 rounded-full text-lg tracking-wide">
              GRAND FINALE • DAY 2 EVENING
            </span>
          </div>

          <h2
            className="text-8xl md:text-9xl lg:text-10xl font-black text-white mb-6 md:mb-8 leading-none tracking-wider"
            style={{
              fontFamily: "var(--font-bebas-neue)",
            }}
          >
            MUSIC NIGHT
            <span
              className="block text-3xl md:text-5xl lg:text-6xl font-light text-gray-400 mt-6 tracking-wide uppercase"
              style={{
                fontFamily: "var(--font-montserrat)",
              }}
            >
              FEATURING CHARMINAR
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-8 uppercase">
            Experience the ultimate fusion of beats, bubbles, and live energy
            under the stars.
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

          <div className="flex flex-wrap justify-center items-center gap-3 text-white/85 font-semibold tracking-wide">
            <span className="text-base md:text-lg text-white">DJ Beats</span>
            <span className="text-gray-400">•</span>
            <span className="text-base md:text-lg text-white">Foam Party</span>
            <span className="text-gray-400">•</span>
            <span className="text-base md:text-lg text-white">Music Show</span>
          </div>

          <div className="mt-12"></div>
        </div>
      </div>
    </section>
  );
}
