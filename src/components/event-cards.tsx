"use client";

import { eventImages, EVENTS, type EventName } from "@/lib/events";

export function EventCards({
  onRegister,
}: {
  onRegister: (eventName: string) => void;
}) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {EVENTS.map((ev: EventName) => (
        <article
          key={ev}
          className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-white/60"
        >
          <figure className="relative h-52 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={eventImages[ev]}
              alt={ev}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              {ev}
            </div>
          </figure>
          <div className="p-6">
            <h4 className="text-xl font-semibold">{ev}</h4>
            <p className="mt-2 text-sm text-slate-600">
              {ev === "E‑Football"
                ? "Compete in an exciting console football tournament."
                : ev === "Coding Challenge"
                ? "Solve problems under time pressure in teams or solo."
                : "Assemble a PC fastest with accuracy and teamwork."}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <button
                className="rounded-xl bg-indigo-600 px-4 py-2 text-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-indigo-700"
                onClick={() => onRegister(ev)}
              >
                Register
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
