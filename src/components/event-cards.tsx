"use client";

import { EVENTS } from "@/lib/events";

export function EventCards({
  onRegister,
}: {
  onRegister: (eventName: string) => void;
}) {
  return (
    <div className="mt-16">
      {/* Mobile and tablet: responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
        {EVENTS.map((ev) => (
          <article
            key={ev.name}
            className="group relative overflow-hidden rounded-3xl bg-gray-800 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2"
          >
            {/* Event Image */}
            <figure className="relative h-48 sm:h-56 overflow-hidden">
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
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Event badge */}
              <div className="absolute top-4 left-4 rounded-full bg-black/80 backdrop-blur-sm px-3 py-1.5 text-sm font-semibold text-white shadow-lg border border-white/20">
                {ev.name}
              </div>

              {/* Venue and time info overlay */}
              <div className="absolute bottom-4 right-4 text-right">
                <div className="rounded-lg bg-black/60 backdrop-blur-sm px-2.5 py-1.5 text-white border border-white/20">
                  <div className="text-xs font-medium">{ev.venue}</div>
                  <div className="text-xs opacity-90">{ev.time}</div>
                </div>
              </div>
            </figure>

            {/* Event Content */}
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {ev.name}
              </h4>

              {ev.description && (
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {ev.description}
                </p>
              )}

              {/* Action button */}
              <button
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:from-purple-700 hover:to-blue-700 transform transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => onRegister(ev.name)}
              >
                Register Now
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop: 2-row layout with 3 on top, 2 centered on bottom */}
      <div className="hidden lg:block space-y-10">
        {/* First row: 3 events */}
        <div className="grid grid-cols-3 gap-10">
          {EVENTS.slice(0, 3).map((ev) => (
            <article
              key={ev.name}
              className="group relative overflow-hidden rounded-3xl bg-gray-800 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Event Image */}
              <figure className="relative h-56 overflow-hidden">
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
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Event badge */}
                <div className="absolute top-4 left-4 rounded-full bg-black/80 backdrop-blur-sm px-3 py-1.5 text-sm font-semibold text-white shadow-lg border border-white/20">
                  {ev.name}
                </div>

                {/* Venue and time info overlay */}
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="rounded-lg bg-black/60 backdrop-blur-sm px-2.5 py-1.5 text-white border border-white/20">
                    <div className="text-xs font-medium">{ev.venue}</div>
                    <div className="text-xs opacity-90">{ev.time}</div>
                  </div>
                </div>
              </figure>

              {/* Event Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {ev.name}
                </h4>

                {ev.description && (
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {ev.description}
                  </p>
                )}

                {/* Action button */}
                <button
                  className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:from-purple-700 hover:to-blue-700 transform transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  onClick={() => onRegister(ev.name)}
                >
                  Register Now
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Second row: 2 events centered */}
        {EVENTS.length > 3 && (
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-10 max-w-4xl">
              {EVENTS.slice(3).map((ev) => (
                <article
                  key={ev.name}
                  className="group relative overflow-hidden rounded-3xl bg-gray-800 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Event Image */}
                  <figure className="relative h-56 overflow-hidden">
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
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Event badge */}
                    <div className="absolute top-4 left-4 rounded-full bg-black/80 backdrop-blur-sm px-3 py-1.5 text-sm font-semibold text-white shadow-lg border border-white/20">
                      {ev.name}
                    </div>

                    {/* Venue and time info overlay */}
                    <div className="absolute bottom-4 right-4 text-right">
                      <div className="rounded-lg bg-black/60 backdrop-blur-sm px-2.5 py-1.5 text-white border border-white/20">
                        <div className="text-xs font-medium">{ev.venue}</div>
                        <div className="text-xs opacity-90">{ev.time}</div>
                      </div>
                    </div>
                  </figure>

                  {/* Event Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {ev.name}
                    </h4>

                    {ev.description && (
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                        {ev.description}
                      </p>
                    )}

                    {/* Action button */}
                    <button
                      className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:from-purple-700 hover:to-blue-700 transform transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                      onClick={() => onRegister(ev.name)}
                    >
                      Register Now
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Visual indicator for event count */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/20">
          <div className="h-2 w-2 rounded-full bg-purple-400"></div>
          <span>{EVENTS.length} exciting events to choose from</span>
        </div>
      </div>
    </div>
  );
}
