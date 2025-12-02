import { EVENTS, getEventsByCategory } from "@/lib/events";
import EventCard from "./event-card";

export default function EventsGrid() {
  const categories = [
    {
      id: "Esports",
      title: "Esports Arena",
      icon: "fa-gamepad",
      color: "text-purple-500",
    },
    {
      id: "Physical Sports",
      title: "Physical Sports",
      icon: "fa-futbol",
      color: "text-red-500",
    },
    {
      id: "Technical",
      title: "Technical Competitions",
      icon: "fa-code",
      color: "text-blue-500",
    },
    {
      id: "Experience Zone",
      title: "Experience Zone",
      icon: "fa-magic",
      color: "text-yellow-500",
    },
  ];

  return (
    <section id="events" className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-white mb-4">
            COMPETITION <span className="text-blue-500">ARENA</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Battle it out in the digital realm or showcase your coding prowess.
            Huge cash prizes await the champions.
          </p>
        </div>

        {categories.map((category) => {
          const events = getEventsByCategory(category.id);
          if (events.length === 0) return null;

          return (
            <div key={category.id} className="mb-12">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                <i className={`fas ${category.icon} ${category.color}`}></i>{" "}
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

        <div className="mt-8 p-4 bg-gray-900/50 border border-gray-700 rounded-lg text-sm text-gray-400">
          <i className="fas fa-info-circle mr-2 text-red-500"></i>
          **Disclaimer:** All prize money amounts are subject to change based on
          final fund availability and sponsor confirmations. The final prize
          pool will be announced at a later date.
        </div>
      </div>
    </section>
  );
}
