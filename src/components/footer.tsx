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
          <div className="bg-gray-900 p-6 rounded-lg w-full md:w-80 border border-gray-800 hover:border-green-500 transition-colors">
            <p className="text-gray-500 text-sm uppercase font-bold mb-2">
              Student Coordinator
            </p>
            <p className="text-xl font-bold text-white">Devnarayan V</p>
            <a
              href="tel:+919400039066"
              className="text-green-400 block mt-2 hover:underline"
            >
              +91 94000 39066
            </a>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg w-full md:w-80 border border-gray-800 hover:border-blue-500 transition-colors">
            <p className="text-gray-500 text-sm uppercase font-bold mb-2">
              Student Coordinator
            </p>
            <p className="text-xl font-bold text-white">Vishnu AnilKumar</p>
            <a
              href="tel:+918281870842"
              className="text-blue-400 block mt-2 hover:underline"
            >
              +91 82818 70842
            </a>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg w-full md:w-80 border border-gray-800 hover:border-purple-500 transition-colors">
            <p className="text-gray-500 text-sm uppercase font-bold mb-2">
              Student Coordinator
            </p>
            <p className="text-xl font-bold text-white">Ali Hussain</p>
            <a
              href="tel:+918590572041"
              className="text-purple-400 block mt-2 hover:underline"
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
