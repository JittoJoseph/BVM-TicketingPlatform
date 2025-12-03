export default function SimRacing() {
  return (
    <section
      id="sim-racing"
      className="sim-bg min-h-[70vh] flex items-center relative py-20"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-white font-medium tracking-wider uppercase text-lg">
              Experience Zone
            </span>
          </div>

          <h2 className="font-tech text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            IMMERSIVE <br /> EXPERIENCES
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Step beyond traditional boundaries with cutting-edge technologies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Sim Racing</h3>
            <p className="text-gray-400">Professional F1 simulation</p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">VR Reality</h3>
            <p className="text-gray-400">Virtual worlds & experiences</p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">AI Workshop</h3>
            <p className="text-gray-400">Hands-on AI & ML sessions</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Experience availability may vary based on equipment setup.
          </p>
        </div>
      </div>
    </section>
  );
}
