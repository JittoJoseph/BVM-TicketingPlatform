"use client";

type Props = { onRegister?: () => void };

export function Footer({ onRegister }: Props) {
  return (
    <footer
      id="contact"
      className="border-t border-white/70 bg-white/70 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-semibold">BVM Holy Cross College</h3>
            <p className="text-sm text-slate-600">
              Cherpunkal, Kottayam, Kerala
            </p>
          </div>
          <div className="text-sm text-slate-600">
            <p>
              <span className="font-medium">Email:</span>{" "}
              events@bvmholycross.com
            </p>
          </div>
          <div className="md:text-right">
            <button
              className="rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-indigo-700"
              onClick={onRegister}
            >
              Register now
            </button>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          © 2025 BVM Holy Cross College. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
