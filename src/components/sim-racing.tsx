export default function SimRacing() {
  return (
    <section
      id="sim-racing"
      className="sim-bg min-h-[80vh] flex items-center relative py-20"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <i className="fas fa-flag-checkered text-red-500 text-2xl"></i>
            <span className="text-red-500 font-bold tracking-widest uppercase">
              Premium Experience Zone
            </span>
          </div>

          <h2 className="font-tech text-5xl md:text-7xl font-black text-white italic mb-6 leading-tight">
            SIM RACING <br /> EXPERIENCE
          </h2>

          <p className="text-gray-200 text-lg mb-8 leading-relaxed border-l-4 border-red-500 pl-4 bg-black/30 backdrop-blur-sm p-4 rounded-r-lg">
            Step into the cockpit. Feel every turn, brake, and acceleration with
            our state-of-the-art Simulation Rig. This isn&apos;t just a game;
            it&apos;s the closest you&apos;ll get to F1 without a license.
          </p>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-400 uppercase">High Fidelity</p>
              <p className="text-3xl font-bold text-white">
                Advanced Rig Setup
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-900/50 border border-yellow-500/50 rounded-lg text-sm text-yellow-300">
            <i className="fas fa-exclamation-triangle mr-2"></i>
            **Note:** The Sim Racing Experience is subject to change based on
            the final availability and deployment of the professional rig setup.
          </div>
        </div>
      </div>
    </section>
  );
}
