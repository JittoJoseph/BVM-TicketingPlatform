export default function SimRacing() {
  return (
    <section
      id="sim-racing"
      className="sim-bg flex items-center relative py-8 md:py-12 overflow-hidden"
    >
      {/* Subtle colored accent lines */}
      <div className="absolute top-20 left-1/4 w-px h-36 bg-gradient-to-b from-red-400/30 to-transparent"></div>
      <div className="absolute top-32 right-1/3 w-px h-28 bg-gradient-to-b from-indigo-400/30 to-transparent"></div>
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-teal-400/30 to-transparent"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-white/80 font-medium tracking-wider uppercase text-lg">
              Experience Zone
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 leading-tight"
            style={{ fontFamily: "Audiowide, sans-serif" }}
          >
            IMMERSIVE <br /> EXPERIENCES
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
            Step beyond traditional boundaries with cutting-edge technologies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-red-500/30 group-hover:border-red-400/50 transition-colors">
              <svg
                className="w-8 h-8 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
              Sim Racing
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              Professional F1 simulation
            </p>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
              <svg
                className="w-8 h-8 text-blue-400"
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
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
              VR Reality
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              Virtual worlds & experiences
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Experience availability may vary based on equipment setup.
          </p>
        </div>
      </div>
    </section>
  );
}
