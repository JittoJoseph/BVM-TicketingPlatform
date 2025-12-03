export default function SimRacing() {
  return (
    <section
      id="sim-racing"
      className="sim-bg min-h-[80vh] flex items-center relative py-20"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <i className="fas fa-flag-checkered text-white text-xl"></i>
            <span className="text-white font-medium tracking-wide uppercase">
              Premium Experience Zone
            </span>
          </div>

          <h2 className="font-tech text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            SIM RACING <br /> EXPERIENCE
          </h2>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed border-l-4 border-white pl-6">
            Step into the cockpit. Feel every turn, brake, and acceleration with
            our state-of-the-art Simulation Rig. This isn&apos;t just a game;
            it&apos;s the closest you&apos;ll get to F1 without a license.
          </p>

          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                High Fidelity
              </p>
              <p className="text-2xl font-medium text-white">
                Advanced Rig Setup
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gray-900/50 border border-gray-700 rounded-lg text-sm text-gray-400">
            <i className="fas fa-info-circle mr-2 text-gray-500"></i>
            **Note:** The Sim Racing Experience is subject to change based on
            the final availability and deployment of the professional rig setup.
          </div>
        </div>
      </div>
    </section>
  );
}
