"use client";

import { EVENTS } from "@/lib/events";

export function EventCards({
  onRegister,
}: {
  onRegister: (eventName: string) => void;
}) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {EVENTS.map((ev) => (
        <article
          key={ev.name}
          className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-white/60"
        >
          <figure className="relative h-52 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                ev.bannerPath
                  ? ev.bannerPath.startsWith("/")
                    ? ev.bannerPath
                    : `/${ev.bannerPath}`
                  : "/globe.svg"
              }
              alt={ev.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              {ev.name}
            </div>
          </figure>
          <div className="p-6">
            <h4 className="text-xl font-semibold">{ev.name}</h4>
            {ev.description && (
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                {ev.description}
              </p>
            )}
            <div className="mt-4 flex items-center justify-between">
              <button
                className="rounded-xl bg-indigo-600 px-4 py-2 text-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-indigo-700 cursor-pointer"
                onClick={() => onRegister(ev.name)}
              >
                Register
              </button>
              <div className="text-xs text-slate-500">
                {ev.venue && <span>{ev.venue}</span>}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
