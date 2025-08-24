"use client";

import { useMemo } from "react";

export function EventCards({
  onRegister,
}: {
  onRegister: (eventName: string) => void;
}) {
  // Hardcoded events for instant display
  const events = useMemo(
    () => [
      {
        name: "E‑Football",
        description:
          "Compete in high‑intensity matches on the big screen. Solo entry.",
        bannerPath: "1.jpg",
        venue: "Main Auditorium",
        time: "10:00 AM",
      },
      {
        name: "Coding Challenge",
        description:
          "Solve timed problems and climb the leaderboard. One participant per team.",
        bannerPath: "2.jpg",
        venue: "Main Auditorium",
        time: "10:00 AM",
      },
      {
        name: "PC Building Competition",
        description:
          "Assemble and optimize a PC for performance and aesthetics.",
        bannerPath: "3.jpg",
        venue: "Main Auditorium",
        time: "10:00 AM",
      },
    ],
    []
  );

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {events.map((ev) => (
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
