import { getEventsByCategory } from "@/lib/events";
import EventCard from "./event-card";

export default function EventsGrid() {
  const categories = [
    {
      id: "Esports",
      title: "Esports Arena",
      icon: "fa-gamepad",
      color: "text-white",
    },
    {
      id: "Physical Sports",
      title: "Physical Sports",
      icon: "fa-futbol",
      color: "text-white",
    },
    {
      id: "Technical",
      title: "Technical Competitions",
      icon: "fa-code",
      color: "text-white",
    },
    {
      id: "Experience Zone",
      title: "Experience Zone",
      icon: "fa-magic",
      color: "text-white",
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
                <i
                  className={`fas ${category.icon} ${category.color} text-2xl`}
                ></i>{" "}
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-12 p-6 bg-gray-900/30 border border-gray-800 rounded-lg text-sm text-gray-500">
          <i className="fas fa-info-circle mr-2 text-gray-600"></i>
          **Disclaimer:** All prize money amounts are subject to change based on
          final fund availability and sponsor confirmations. The final prize
          pool will be announced at a later date.
        </div>
      </div>
    </section>
  );
}
