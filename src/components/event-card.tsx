import { Event } from "@/lib/events";
import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-white transition-all duration-300 flex flex-col h-full">
      <Link
        href={`/events/${event.id}`}
        className="block relative h-48 overflow-hidden"
      >
        <Image
          src={event.image}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          alt={event.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
        <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide">
          {event.category}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/events/${event.id}`} className="block mb-2">
          <h3 className="text-xl font-bold text-white font-tech group-hover:text-gray-300 transition-colors line-clamp-1">
            {event.name}
          </h3>
        </Link>

        <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{event.prizePool}</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2 mb-6 flex-grow">
          {event.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
          <span className="text-lg font-medium text-white">
            {event.pricing}
          </span>
          <Link
            href={event.makemypassUrl}
            target="_blank"
            className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black text-sm font-medium rounded-lg transition-colors duration-300 uppercase tracking-wide"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
