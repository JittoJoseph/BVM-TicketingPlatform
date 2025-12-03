export default function GrandFinale() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Local Image Background - using a placeholder or gradient if image missing */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block px-6 py-2 border border-white text-white font-medium rounded-full mb-8">
          DAY 2 • EVENING
        </span>
        <h2 className="font-tech text-6xl md:text-8xl font-black text-white mb-6">
          G-LIVE
        </h2>
        <p className="text-2xl md:text-3xl text-gray-400 font-light mb-12">
          LIVE IN CONCERT
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="border border-gray-700 p-8 rounded-xl w-64 bg-gray-900/50">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Special Appearance
            </p>
            <p className="text-xl font-medium text-white">EAGLE GAMING</p>
          </div>
          <div className="h-px w-20 bg-gray-700 md:hidden"></div>{" "}
          {/* Separator on mobile */}
          <div className="border border-gray-700 p-8 rounded-xl w-64 bg-gray-900/50">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Venue
            </p>
            <p className="text-xl font-medium text-white">MAIN STAGE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
