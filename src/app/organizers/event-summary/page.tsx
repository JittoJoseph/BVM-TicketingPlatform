"use client";

import { EVENTS, getPrizePool } from "@/lib/events";
import Link from "next/link";
import { useState } from "react";

export default function EventSummaryPage() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof EVENTS)[0] | null>(
    null
  );

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
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/6 border-r border-white/[0.05]">
                    Event Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/12 border-r border-white/[0.05]">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/12 border-r border-white/[0.05]">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/12 border-r border-white/[0.05]">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/12 border-r border-white/[0.05]">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/8 border-r border-white/[0.05]">
                    Prize Pool
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/6 border-r border-white/[0.05]">
                    Prize Tiers
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider w-1/12 border-r border-white/[0.05]">
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
                    onClick={() => setSelectedEvent(event)}
                    className="hover:bg-white/[0.05] transition-colors duration-200 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r border-white/[0.05]">
                      <span className="text-white hover:text-white/80 transition-colors decoration-white/20 hover:decoration-white/40">
                        {event.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70 border-r border-white/[0.05]">
                      {event.dates.length > 1
                        ? "Both Days"
                        : new Date(event.dates[0]).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70 border-r border-white/[0.05]">
                      {event.startTime || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70 border-r border-white/[0.05]">
                      {event.duration || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70 border-r border-white/[0.05]">
                      {event.type || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white border-r border-white/[0.05]">
                      {getPrizePool(event)}
                    </td>
                    <td className="px-6 py-4 text-sm text-white/70 max-w-xs truncate border-r border-white/[0.05]">
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70 border-r border-white/[0.05]">
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

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
          <div className="bg-black border border-white/[0.1] rounded-2xl shadow-2xl w-full max-w-4xl">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedEvent.name}
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-white/90 bg-white/10 rounded-full border border-white/20">
                    {selectedEvent.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-1">
                    Date
                  </h3>
                  <p className="text-white text-lg">
                    {selectedEvent.dates.length > 1
                      ? "Both Days"
                      : new Date(selectedEvent.dates[0]).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-1">
                    Time
                  </h3>
                  <p className="text-white text-lg">
                    {selectedEvent.startTime || "N/A"}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-1">
                    Duration
                  </h3>
                  <p className="text-white text-lg">
                    {selectedEvent.duration || "N/A"}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-1">
                    Type
                  </h3>
                  <p className="text-white text-lg">
                    {selectedEvent.type || "N/A"}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Description
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  {selectedEvent.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-1">
                    Registration Fee
                  </h3>
                  <p className="text-white text-lg">{selectedEvent.pricing}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-1">
                    Prize Pool
                  </h3>
                  <p className="text-white text-lg font-medium">
                    {getPrizePool(selectedEvent)}
                  </p>
                </div>
              </div>

              {selectedEvent.prizes && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Prizes
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedEvent.prizes.first && (
                      <p className="text-white text-base">
                        1st: {selectedEvent.prizes.first}
                      </p>
                    )}
                    {selectedEvent.prizes.second && (
                      <p className="text-white text-base">
                        2nd: {selectedEvent.prizes.second}
                      </p>
                    )}
                    {selectedEvent.prizes.third && (
                      <p className="text-white text-base">
                        3rd: {selectedEvent.prizes.third}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {selectedEvent.coordinators && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Coordinators
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedEvent.coordinators.map((coordinator, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-white/[0.02] rounded border border-white/[0.05]"
                      >
                        <div>
                          <p className="text-white text-base font-medium">
                            {coordinator.name}
                          </p>
                          <p className="text-white/60 text-sm">
                            {coordinator.phone}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-4 pt-4 border-t border-white/[0.1]">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-3 text-base font-medium text-white/70 hover:text-white transition-colors rounded hover:bg-white/10"
                >
                  Close
                </button>
                <Link
                  href={`/events/${selectedEvent.id}`}
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-white/10 hover:bg-white hover:text-black rounded border border-white/20 hover:border-white transition-all duration-200"
                >
                  View Event Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
