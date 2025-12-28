import Link from "next/link";

export default function Footer() {
  const coordinators = [
    { name: "Devnarayan V", phone: "+91 94000 39066" },
    { name: "Vishnu AnilKumar", phone: "+91 82818 70842" },
    { name: "Ali Hussain", phone: "+91 85905 72041" },
  ];

  return (
    <section
      id="contact"
      className="bg-black/95 backdrop-blur-sm border-t border-gray-800/50 py-4"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="font-tech text-xl font-bold text-white mb-1">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 text-sm">Student Coordinators</p>
        </div>

        <div className="max-w-md mx-auto mb-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-3">
              Event Coordinators
            </h3>
            <div className="space-y-2">
              {coordinators.map((coord, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-white/75">{coord.name}</span>
                  <a
                    href={`tel:${coord.phone}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {coord.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-2">
          <Link
            href="https://www.instagram.com/https.corex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Follow us on Instagram"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-xs">
            © 2026 COREX - BEACON Association |{" "}
            <Link
              href="https://bvmcollege.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Bishop Vayalil Memorial Holy Cross College
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
