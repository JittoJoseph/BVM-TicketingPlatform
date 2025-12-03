export default function Footer() {
  return (
    <section
      id="contact"
      className="bg-[#050505] border-t border-gray-800 py-12"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-tech text-3xl font-bold text-white mb-8">
          GET IN TOUCH
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="border border-gray-700 p-8 rounded-lg w-full md:w-80 bg-gray-900/50 hover:border-white transition-colors">
            <p className="text-gray-500 text-sm uppercase font-medium mb-3 tracking-wide">
              Student Coordinator
            </p>
            <p className="text-xl font-medium text-white">Devnarayan V</p>
            <a
              href="tel:+919400039066"
              className="text-white block mt-3 hover:underline"
            >
              +91 94000 39066
            </a>
          </div>

          <div className="border border-gray-700 p-8 rounded-lg w-full md:w-80 bg-gray-900/50 hover:border-white transition-colors">
            <p className="text-gray-500 text-sm uppercase font-medium mb-3 tracking-wide">
              Student Coordinator
            </p>
            <p className="text-xl font-medium text-white">Vishnu AnilKumar</p>
            <a
              href="tel:+918281870842"
              className="text-white block mt-3 hover:underline"
            >
              +91 82818 70842
            </a>
          </div>

          <div className="border border-gray-700 p-8 rounded-lg w-full md:w-80 bg-gray-900/50 hover:border-white transition-colors">
            <p className="text-gray-500 text-sm uppercase font-medium mb-3 tracking-wide">
              Student Coordinator
            </p>
            <p className="text-xl font-medium text-white">Ali Hussain</p>
            <a
              href="tel:+918590572041"
              className="text-white block mt-3 hover:underline"
            >
              +91 85905 72041
            </a>
          </div>
        </div>

        <p className="text-gray-600 text-sm">
          © 2026 Beacon Association | BVM Holy Cross College, Cherpunkal
        </p>
      </div>
    </section>
  );
}
