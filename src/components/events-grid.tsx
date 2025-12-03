import { getEventsByCategory } from "@/lib/events";
import EventCard from "./event-card";

export default function EventsGrid() {
  const categories = [
    {
      id: "Esports",
      title: "Esports Arena",
    },
    {
      id: "Physical Sports",
      title: "Physical Sports",
    },
    {
      id: "Technical",
      title: "Technical Competitions",
    },
    {
      id: "Experience Zone",
      title: "Experience Zone",
    },
  ];

  return (
    <section id="events" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-tech text-5xl md:text-6xl font-bold text-white mb-6">
            COMPETITION ARENA
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Battle it out in the digital realm or showcase your coding prowess.
            Huge cash prizes await the champions.
          </p>
        </div>

        {categories.map((category) => {
          const events = getEventsByCategory(category.id);
          if (events.length === 0) return null;

          return (
            <div key={category.id} className="mb-12">
              <h3 className="flex items-center gap-4 text-3xl font-bold text-white mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
