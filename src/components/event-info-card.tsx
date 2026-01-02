"use client";

import { useState } from "react";
import Link from "next/link";
import { Trophy } from "lucide-react";
import type { Event } from "@/lib/events";
import { getPrizePool } from "@/lib/events";

interface EventInfoCardProps {
  event: Event;
  variant: "mobile" | "desktop";
}

function EventInfoCard({ event, variant }: EventInfoCardProps) {
  const [showModal, setShowModal] = useState(false);

  const formatDate = (dateString: string): string => {
    const date = new Date(`${dateString}T00:00:00`);
    if (Number.isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat("en-GB", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(date);
  };

  const formatDates = (dates: string[]): string => {
    if (dates.length === 1) {
      return formatDate(dates[0]);
    }
    const formatted = dates.map((d) => formatDate(d));
    return formatted.join(" & ");
  };

  const formattedDates = formatDates(event.dates);

  const formattedTime = event.startTime ? event.startTime : null;

  const infoItems = [
    { label: "Date", value: formattedDates },
    ...(formattedTime ? [{ label: "Time", value: formattedTime }] : []),
    ...(event.duration ? [{ label: "Duration", value: event.duration }] : []),
    ...(event.type ? [{ label: "Type", value: event.type }] : []),
    {
      label: "Reg Fees",
      value: event.type === "TEAM" ? `${event.pricing}/Team` : event.pricing,
    },
  ];

  return (
    <>
      <div
        className={
          variant === "mobile"
            ? "rounded-2xl border border-white/10 bg-black p-5"
            : "rounded-2xl border border-white/10 bg-black p-5 sm:p-6"
        }
      >
        <div className="flex flex-wrap gap-2">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-black text-white/80 border border-white/50 px-4 py-2 rounded-full text-sm font-medium"
            >
              {item.label}: {item.value}
            </div>
          ))}
        </div>

        {event.prizes && (
          <div className="mt-6 pt-5 border-t border-white/10">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <Trophy className="h-4 w-4 text-white/80" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider font-medium">
                    Prize Pool
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {getPrizePool(event)}
                  </p>
                </div>
              </div>
              {(event.prizes.first ||
                event.prizes.second ||
                event.prizes.third) && (
                <div className="grid grid-cols-3 gap-4 text-center">
                  {event.prizes.first && (
                    <div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">
                        1st
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {event.prizes.first}
                      </div>
                    </div>
                  )}
                  {event.prizes.second && (
                    <div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">
                        2nd
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {event.prizes.second}
                      </div>
                    </div>
                  )}
                  {event.prizes.third && (
                    <div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">
                        3rd
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {event.prizes.third}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-6 pt-5 border-t border-white/10">
          {event.requiresRegistration !== false ? (
            event.bvmAllowed === false ? (
              <button
                onClick={() => setShowModal(true)}
                className="block w-full py-3.5 bg-white cursor-pointer text-black font-semibold text-center rounded-xl hover:bg-white/90 transition-colors"
              >
                Register
              </button>
            ) : (
              <Link
                href={event.makemypassUrl}
                target="_blank"
                className="block w-full py-3.5 bg-white text-black font-semibold text-center rounded-xl hover:bg-white/90 transition-colors cursor-pointer"
              >
                Register
              </Link>
            )
          ) : (
            <button
              disabled
              className="block w-full py-3.5 bg-white/50 text-black/50 font-semibold text-center rounded-xl cursor-pointer"
            >
              No Registration Required
            </button>
          )}
          {event.requiresRegistration !== false && (
            <p className="text-center text-xs text-white/30 mt-3">
              Registration via MakeMyPass
            </p>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black/90 border border-white/10 rounded-2xl p-6 max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Registration Notice
            </h3>
            <p className="mb-6 text-white/75">
              If you are a BVM College student, you are not allowed to register
              for this event.
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  window.location.href = event.makemypassUrl;
                }}
                className="flex-1 lg:flex-[1.5] py-2 bg-white text-black rounded-xl hover:bg-white/90 transition-colors cursor-pointer"
              >
                Continue to register
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventInfoCard;
