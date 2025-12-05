import { EVENTS } from "@/lib/events";
import EventCard from "./event-card";

export default function EventsGrid() {
  return (
    <section
      id="events"
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Subtle colored accent lines */}
      <div className="absolute top-16 left-1/5 w-px h-32 bg-gradient-to-b from-green-400/20 to-transparent"></div>
      <div className="absolute top-24 right-1/6 w-px h-24 bg-gradient-to-b from-orange-400/20 to-transparent"></div>
      <div className="absolute bottom-32 left-1/4 w-px h-28 bg-gradient-to-b from-yellow-400/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Audiowide, sans-serif" }}
          >
            COMPETITION ARENA
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg px-4">
            Battle it out in the digital realm or showcase your coding prowess.
            Huge cash prizes await the champions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
