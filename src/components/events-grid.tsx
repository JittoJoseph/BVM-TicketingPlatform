import { EVENTS } from "@/lib/events";
import EventCard from "./event-card";

export default function EventsGrid() {
  // Sort events by category, then by name
  const sortedEvents = [...EVENTS].sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <section id="events" className="py-16 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-tech text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            COMPETITION ARENA
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            Battle it out in the digital realm or showcase your coding prowess.
            Huge cash prizes await the champions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
