"use client";

import { Event } from "@/lib/events";
import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="group relative overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 hover:shadow-lg hover:shadow-white/[0.05] md:hover:-translate-y-1 block focus:outline-none focus:ring-2 focus:ring-white/20"
    >
      {/* Colored accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Mobile Layout: Horizontal */}
      <div className="block md:hidden">
        <div className="flex">
          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-l-xl">
            <Image
              src={event.image}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              alt={event.name}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          </div>
          <div className="flex-1 p-4 flex flex-col justify-center">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-base font-semibold text-white group-hover:text-white/80 transition-colors line-clamp-2 leading-tight flex-1 mr-2">
                {event.name}
              </h3>
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-white/90 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 flex-shrink-0">
                {event.category}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-white/60 mb-2">
              <span>{event.date}</span>
              <span>•</span>
              <span>Prize Pool: {event.prizePool}</span>
            </div>
            <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">
              {event.details.about}
            </p>
          </div>
        </div>
        <div className="p-4 pt-0 flex items-center justify-between border-t border-white/[0.05]">
          <div className="flex flex-col">
            <span className="text-base font-semibold text-white">
              {event.pricing}
            </span>
            <span className="text-xs text-white/50 uppercase tracking-wide">
              Entry Fee
            </span>
          </div>
          <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white hover:text-black rounded-lg border border-white/20 hover:border-white transition-all duration-200 min-h-[44px]">
            Register
          </div>
        </div>
      </div>

      {/* Desktop Layout: Vertical */}
      <div className="hidden md:block">
        <div className="relative aspect-[3/2] overflow-hidden rounded-t-xl">
          <Image
            src={event.image}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            alt={event.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white/90 bg-black/50 backdrop-blur-sm rounded-full border border-white/20">
              {event.category}
            </span>
          </div>
        </div>

        <div className="p-5 lg:p-6">
          <h3 className="text-xl font-semibold text-white group-hover:text-white/80 transition-colors line-clamp-2 mb-2 leading-tight">
            {event.name}
          </h3>

          <div className="flex flex-col gap-1.5 text-sm text-white/60 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <span>Prize Pool: {event.prizePool}</span>
            </div>
          </div>

          <p className="text-white/70 text-sm line-clamp-3 mb-4 leading-relaxed">
            {event.details.about}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-white">
                {event.pricing}
              </span>
              <span className="text-xs text-white/50 uppercase tracking-wide">
                Entry Fee
              </span>
            </div>
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white hover:text-black rounded-lg border border-white/20 hover:border-white transition-all duration-200 min-h-[44px]">
              Register
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
