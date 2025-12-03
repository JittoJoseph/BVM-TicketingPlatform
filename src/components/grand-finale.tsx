export default function GrandFinale() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Concert atmosphere background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

      {/* College branding removed - now in footer */}

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-6">
          <span className="inline-block px-8 py-3 border border-white/30 text-white/80 font-medium rounded-full mb-4 backdrop-blur-sm">
            GRAND FINALE • DAY 2 EVENING
          </span>
        </div>

        <h2 className="font-tech text-7xl md:text-9xl font-black text-white mb-6 leading-none">
          G-LIVE
        </h2>

        <p className="text-3xl md:text-4xl text-gray-300 font-light mb-8 tracking-wide">
          LIVE MUSIC CONCERT
        </p>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
          Experience the ultimate culmination of COREX 2026 with an electrifying
          live performance. Let the beats drop and the memories last forever as
          we wrap up an unforgettable tech fest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="border border-gray-700 p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm hover:border-white/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">
              Live Performance
            </h3>
            <p className="text-gray-400">
              Professional artists bringing the energy
            </p>
          </div>

          <div className="border border-gray-700 p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm hover:border-white/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">
              Multiple Genres
            </h3>
            <p className="text-gray-400">From electronic to acoustic vibes</p>
          </div>

          <div className="border border-gray-700 p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm hover:border-white/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Celebration</h3>
            <p className="text-gray-400">
              Wrapping up 30 years of BCA excellence
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="border border-gray-600 p-6 rounded-xl bg-gray-900/50">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
              Special Guest
            </p>
            <p className="text-2xl font-bold text-white">EAGLE GAMING</p>
          </div>

          <div className="border border-gray-600 p-6 rounded-xl bg-gray-900/50">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
              Venue
            </p>
            <p className="text-2xl font-bold text-white">MAIN AUDITORIUM</p>
          </div>

          <div className="border border-gray-600 p-6 rounded-xl bg-gray-900/50">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
              Time
            </p>
            <p className="text-2xl font-bold text-white">4:30 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
