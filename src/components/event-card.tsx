import { Event } from "@/lib/events";
import Link from "next/link";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const getBorderColor = (category: string) => {
    switch (category) {
      case "Esports":
        return "hover:border-green-500"; // Or yellow/pink/blue based on specific game, but let's stick to category for now
      case "Technical":
        return "hover:border-blue-500";
      case "Physical Sports":
        return "hover:border-red-500";
      case "Experience Zone":
        return "hover:border-yellow-500";
      default:
        return "hover:border-gray-500";
    }
  };

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "Esports":
        return "bg-green-500 text-black";
      case "Technical":
        return "bg-blue-500 text-white";
      case "Physical Sports":
        return "bg-red-500 text-white";
      case "Experience Zone":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div
      className={`bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all group ${getBorderColor(
        event.category
      )}`}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={event.image}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          alt={event.name}
        />
        {event.tag && (
          <div
            className={`absolute top-2 right-2 font-bold px-2 py-1 text-xs rounded ${getBadgeColor(
              event.category
            )}`}
          >
            {event.tag}
          </div>
        )}
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-white mb-1 uppercase">
          {event.name}
        </h4>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>
        <div className="flex justify-between items-center border-t border-gray-800 pt-4">
          <div>
            <span className="block text-sm text-gray-500">Prize Pool</span>
            <span
              className={`font-bold ${getBadgeColor(event.category)
                .split(" ")[0]
                .replace("bg-", "text-")}`}
            >
              {event.prizePool}
            </span>
          </div>
          <Link
            href={event.makemypassUrl}
            target="_blank"
            className={`text-white hover:${getBadgeColor(event.category)
              .split(" ")[0]
              .replace("bg-", "text-")}`}
          >
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
