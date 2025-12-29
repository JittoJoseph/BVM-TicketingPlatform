"use client";

import { EVENTS, getPrizePool, getTotalPrizePool } from "@/lib/events";
import Link from "next/link";
import { useState } from "react";

export default function EventSummaryPage() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof EVENTS)[0] | null>(
    null
  );

  const convertToMinutes = (timeStr: string): number => {
    const [time, period] = timeStr.split(" ");
    const [hoursStr, minutesStr] = time.split(":");
    let hours = Number(hoursStr);
    const minutes = Number(minutesStr);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const events7th = EVENTS.filter((event) =>
    event.dates.includes("2026-01-07")
  ).sort((a, b) => {
    if (!a.startTime) return 1;
    if (!b.startTime) return -1;
    return convertToMinutes(a.startTime) - convertToMinutes(b.startTime);
  });

  const events8th = EVENTS.filter((event) =>
    event.dates.includes("2026-01-08")
  ).sort((a, b) => {
    if (!a.startTime) return 1;
    if (!b.startTime) return -1;
    return convertToMinutes(a.startTime) - convertToMinutes(b.startTime);
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

        <h2 className="text-2xl font-bold text-white mb-4">
          7th January, 2026
        </h2>
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/[0.05]">
              <thead className="bg-gradient-to-r from-white/[0.05] to-white/[0.02]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider border-r border-white/[0.05]">
                    Event Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider border-r border-white/[0.05]">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider border-r border-white/[0.05]">
                    Venue
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider border-r border-white/[0.05]">
                    Reg Fees
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Coordinators
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black/50 divide-y divide-white/[0.03]">
                {events7th.map((event) => (
                  <tr
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="hover:bg-white/[0.1] transition-colors duration-200 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r border-white/[0.05]">
                      <span className="text-white/90 hover:text-white/80 transition-colors decoration-white/20 hover:decoration-white/40">
                        {event.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70 border-r border-white/[0.05]">
                      {event.startTime || "All Day"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70 border-r border-white/[0.05]">
                      {event.venue}
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

        <h2 className="text-2xl font-bold text-white mb-4">
          8th January, 2026
        </h2>
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/[0.05]">
              <thead className="bg-gradient-to-r from-white/[0.05] to-white/[0.02]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider border-r border-white/[0.05]">
                    Event Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider border-r border-white/[0.05]">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider border-r border-white/[0.05]">
                    Venue
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider border-r border-white/[0.05]">
                    Reg Fees
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Coordinators
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black/50 divide-y divide-white/[0.03]">
                {events8th.map((event) => (
                  <tr
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="hover:bg-white/[0.1] transition-colors duration-200 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r border-white/[0.05]">
                      <span className="text-white/90 hover:text-white/80 transition-colors decoration-white/20 hover:decoration-white/40">
                        {event.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70 border-r border-white/[0.05]">
                      {event.startTime || "All Day"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70 border-r border-white/[0.05]">
                      {event.venue}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <p className="text-white/60 text-sm text-right">
            Total Prize Pool:{" "}
            <span className="text-white font-semibold">
              {getTotalPrizePool()}
            </span>
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-4">
          <div className="bg-black border border-white/[0.08] rounded-none sm:rounded-3xl shadow-2xl w-full max-w-full h-full sm:max-w-4xl sm:max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-1 leading-tight">
                    {selectedEvent.name}
                  </h2>
                  <div className="mb-2">
                    <span className="text-white/60 text-lg">
                      ({selectedEvent.id})
                    </span>
                  </div>
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
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
                    Venue
                  </h3>
                  <p className="text-white text-lg font-medium">
                    {selectedEvent.venue}
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
              </div>

              <div className="mb-4 hidden sm:block">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Description
                </h3>
                <p className="text-white/90 text-base leading-relaxed bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                  {selectedEvent.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Registration Fee
                  </h3>
                  <p className="text-white text-xl font-bold bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                    {selectedEvent.pricing}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Total Prize Pool
                  </h3>
                  <p className="text-white text-xl font-bold bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                    {getPrizePool(selectedEvent)}
                  </p>
                </div>
              </div>

              {selectedEvent.prizes && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Prizes
                  </h3>
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                    <p className="text-white text-base">
                      {selectedEvent.prizes.first &&
                        `1st: ${selectedEvent.prizes.first}`}
                      {selectedEvent.prizes.first &&
                        selectedEvent.prizes.second &&
                        ", "}
                      {selectedEvent.prizes.second &&
                        `2nd: ${selectedEvent.prizes.second}`}
                      {selectedEvent.prizes.second &&
                        selectedEvent.prizes.third &&
                        ", "}
                      {selectedEvent.prizes.third &&
                        `3rd: ${selectedEvent.prizes.third}`}
                    </p>
                  </div>
                </div>
              )}

              {selectedEvent.staffCoordinator && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Staff Coordinator
                  </h3>
                  <p className="text-white text-base font-medium bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                    {selectedEvent.staffCoordinator}
                  </p>
                </div>
              )}

              {selectedEvent.coordinators && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Coordinators
                  </h3>
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                    <div className="space-y-3">
                      {selectedEvent.coordinators.map((coordinator, idx) => {
                        const telFriendly = coordinator.phone.replace(
                          /\s+/g,
                          ""
                        );
                        return (
                          <a
                            key={idx}
                            href={`tel:${telFriendly}`}
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
                          </a>
                        );
                      })}
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
