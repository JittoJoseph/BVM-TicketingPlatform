"use client";

type Props = { onRegister?: () => void };

export function Footer({ onRegister }: Props) {
  return (
    <footer
      id="contact"
      className="border-t border-white/20 bg-black/40 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-semibold text-white">BVM Holy Cross College</h3>
            <p className="text-sm text-gray-300">
              Cherpunkal, Kottayam, Kerala
            </p>
          </div>
          <div className="text-sm text-gray-300">
            <p>
              <span className="font-medium">Email:</span>{" "}
              events@bvmholycross.com
            </p>
          </div>
          <div className="md:text-right">
            <button
              className="rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:from-cyan-700 hover:to-blue-700"
              onClick={onRegister}
            >
              Register now
            </button>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-400">
          © 2025 BVM Holy Cross College. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
