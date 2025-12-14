import { EVENTS, getPrizePool } from "@/lib/events";
import Link from "next/link";

export default function EventSummaryPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Event Summary</h1>
          <p className="text-white/60 text-lg">
            Comprehensive overview of all events
          </p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/[0.05]">
              <thead className="bg-gradient-to-r from-white/[0.05] to-white/[0.02]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/6">
                    Event Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/12">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/12">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/12">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/12">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/8">
                    Prize Pool
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/6">
                    Prize Tiers
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/12">
                    Reg Fees
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/6">
                    Coordinators
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black/50 divide-y divide-white/[0.03]">
                {EVENTS.map((event, index) => (
                  <tr
                    key={event.id}
                    className="hover:bg-white/[0.02] transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/events/${event.id}`}
                        className="text-white hover:text-white/80 transition-colors underline decoration-white/20 hover:decoration-white/40"
                      >
                        {event.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">
                      {event.dates.length > 1
                        ? "Both Days"
                        : new Date(event.dates[0]).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">
                      {event.startTime || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">
                      {event.duration || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">
                      {event.type || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {getPrizePool(event)}
                    </td>
                    <td className="px-6 py-4 text-sm text-white/70 max-w-xs truncate">
                      {event.prizes
                        ? [
                            event.prizes.first,
                            event.prizes.second,
                            event.prizes.third,
                          ]
                            .filter(Boolean)
                            .join(", ")
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">
                      {event.pricing}
                    </td>
                    <td className="px-6 py-4 text-sm text-white/70 max-w-xs truncate">
                      {event.coordinators
                        ? event.coordinators.map((c) => c.name).join(", ")
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
