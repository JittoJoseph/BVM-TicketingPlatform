"use client";

type Props = { onRegister?: () => void };

export function Footer({ onRegister }: Props) {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--card-border)] bg-[var(--card-bg)]/70 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-semibold text-[var(--foreground)]">
              BVM Holy Cross College
            </h3>
            <p className="text-sm text-[var(--muted)]">
              Cherpunkal, Kottayam, Kerala
            </p>
          </div>
          <div className="text-sm text-[var(--muted)]">
            <p>
              <span className="font-medium">Email:</span>{" "}
              events@bvmholycross.com
            </p>
          </div>
          <div className="md:text-right">
            <button
              className="rounded-xl bg-gradient-to-r from-[var(--accent)] to-indigo-600 [data-theme=light]_&:from-violet-600 [data-theme=light]_&:to-purple-600 px-5 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] [data-theme=dark]_&:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] [data-theme=dark]_&:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:from-purple-700 hover:to-indigo-700 [data-theme=light]_&:hover:from-violet-700 [data-theme=light]_&:hover:to-purple-700"
              onClick={onRegister}
            >
              Register now
            </button>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-[var(--muted)]">
          © 2025 BVM Holy Cross College. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
