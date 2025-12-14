"use client";

import { EVENTS, getPrizePool } from "@/lib/events";
import Link from "next/link";
import { useState } from "react";

export default function EventSummaryPage() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof EVENTS)[0] | null>(
    null
  );

  const convertToMinutes = (timeStr: string): number => {
    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const sortedEvents = [...EVENTS].sort((a, b) => {
    const isMultiA = a.dates.length > 1;
    const isMultiB = b.dates.length > 1;
    if (isMultiA && !isMultiB) return 1; // multi-day after single-day
    if (!isMultiA && isMultiB) return -1; // single-day before multi-day
    // Both same type, sort by date and time
    const dateA = new Date(a.dates[0]);
    const dateB = new Date(b.dates[0]);
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    // Same date, compare startTime
    if (!a.startTime) return 1;
    if (!b.startTime) return -1;
    const timeA = convertToMinutes(a.startTime);
    const timeB = convertToMinutes(b.startTime);
    return timeA - timeB;
  });

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
                {sortedEvents.map((event, index) => (
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black border border-white/[0.08] rounded-3xl shadow-2xl w-full max-w-4xl">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                    {selectedEvent.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-white/90 bg-white/10 rounded-full border border-white/20">
                      {selectedEvent.category}
                    </span>
                    {selectedEvent.type && (
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.05] rounded-full border border-white/10">
                        {selectedEvent.type}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-xl ml-4"
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
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                  <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">
                    Date
                  </h3>
                  <p className="text-white text-lg font-medium">
                    {selectedEvent.dates.length > 1
                      ? "Both Days"
                      : new Date(selectedEvent.dates[0]).toLocaleDateString()}
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                  <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">
                    Time
                  </h3>
                  <p className="text-white text-lg font-medium">
                    {selectedEvent.startTime || "N/A"}
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                  <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">
                    Duration
                  </h3>
                  <p className="text-white text-lg font-medium">
                    {selectedEvent.duration || "N/A"}
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                  <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">
                    Prize Pool
                  </h3>
                  <p className="text-white text-lg font-medium">
                    {getPrizePool(selectedEvent)}
                  </p>
                </div>
              </div>

              <div className="mb-6 hidden sm:block">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                  Description
                </h3>
                <p className="text-white/90 text-base leading-relaxed bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
                  {selectedEvent.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                    Registration Fee
                  </h3>
                  <p className="text-white text-xl font-bold bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
                    {selectedEvent.pricing}
                  </p>
                </div>
                {selectedEvent.prizes && (
                  <div>
                    <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                      Prizes
                    </h3>
                    <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 space-y-2">
                      {selectedEvent.prizes.first && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/70 text-sm">
                            1st Place
                          </span>
                          <span className="text-white text-base font-medium">
                            {selectedEvent.prizes.first}
                          </span>
                        </div>
                      )}
                      {selectedEvent.prizes.second && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/70 text-sm">
                            2nd Place
                          </span>
                          <span className="text-white text-base font-medium">
                            {selectedEvent.prizes.second}
                          </span>
                        </div>
                      )}
                      {selectedEvent.prizes.third && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/70 text-sm">
                            3rd Place
                          </span>
                          <span className="text-white text-base font-medium">
                            {selectedEvent.prizes.third}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {selectedEvent.coordinators && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                    Coordinators
                  </h3>
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
                    <div className="space-y-3">
                      {selectedEvent.coordinators.map((coordinator, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <p className="text-white text-base font-medium">
                              {coordinator.name}
                            </p>
                            <p className="text-white/60 text-sm">
                              {coordinator.phone}
                            </p>
                          </div>
                          <div className="text-white/40">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-white/[0.08]">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-xl hover:bg-white/10"
                >
                  Close
                </button>
                <Link
                  href={`/events/${selectedEvent.id}`}
                  className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white hover:text-black rounded-xl border border-white/20 hover:border-white transition-all duration-200"
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
