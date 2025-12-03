import { Event } from "@/lib/events";
import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-lg md:rounded-xl overflow-hidden hover:border-white transition-all duration-300 flex flex-col h-full">
      <Link
        href={`/events/${event.id}`}
        className="block relative h-32 md:h-40 lg:h-48 overflow-hidden"
      >
        <Image
          src={event.image}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          alt={event.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
        <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white text-black text-xs font-bold px-2 py-1 md:px-4 md:py-2 rounded-full uppercase tracking-wide">
          {event.category}
        </div>
      </Link>

      <div className="p-3 md:p-4 lg:p-6 flex flex-col flex-grow">
        <Link href={`/events/${event.id}`} className="block mb-2">
          <h3 className="text-lg md:text-xl font-bold text-white font-tech group-hover:text-gray-300 transition-colors line-clamp-1">
            {event.name}
          </h3>
        </Link>

        <div className="flex flex-col gap-1 md:gap-2 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
          <div className="flex items-center gap-2">
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{event.prizePool}</span>
          </div>
        </div>

        <p className="text-gray-400 text-xs md:text-sm line-clamp-2 mb-4 md:mb-6 flex-grow">
          {event.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 md:pt-4 border-t border-gray-800">
          <span className="text-base md:text-lg font-medium text-white">
            {event.pricing}
          </span>
          <Link
            href={event.makemypassUrl}
            target="_blank"
            className="px-3 py-1 md:px-6 md:py-2 border border-white text-white hover:bg-white hover:text-black text-xs md:text-sm font-medium rounded md:rounded-lg transition-colors duration-300 uppercase tracking-wide"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
