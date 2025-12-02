export default function GrandFinale() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Local Image Background - using a placeholder or gradient if image missing */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block px-4 py-1 bg-green-500 text-black font-bold rounded-full mb-6 animate-pulse">
          DAY 2 • EVENING
        </span>
        <h2 className="font-tech text-6xl md:text-8xl font-black text-white mb-4">
          G-LIVE
        </h2>
        <p className="text-2xl md:text-3xl text-gray-300 font-light mb-8">
          LIVE IN CONCERT
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl w-64">
            <p className="text-sm text-gray-400 uppercase">
              Special Appearance
            </p>
            <p className="text-xl font-bold text-white">EAGLE GAMING</p>
          </div>
          <div className="h-px w-20 bg-gray-600 md:hidden"></div>{" "}
          {/* Separator on mobile */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl w-64">
            <p className="text-sm text-gray-400 uppercase">Venue</p>
            <p className="text-xl font-bold text-white">MAIN STAGE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
