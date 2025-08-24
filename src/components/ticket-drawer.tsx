"use client";

import { useEffect, useState } from "react";
import { loadTicket, clearTicket } from "@/lib/ticket";
// Event images are dynamic; show banner from events in future. Fallback for now.
import domtoimage from "dom-to-image";
// No dynamic events; use static details in UI

export function TicketDrawer() {
  const [open, setOpen] = useState(false);
  const [ticket, setTicket] = useState<ReturnType<typeof loadTicket>>(null);
  const [isClient, setIsClient] = useState(false);
  // Placeholder for static info derived from known event names
  const [event, setEvent] = useState<{
    bannerPath?: string;
    date?: string;
    time?: string;
    venue?: string;
  } | null>(null);

  useEffect(() => {
    // Only run on client side after hydration
    setIsClient(true);
    const refresh = () => {
      const t = loadTicket();
      setTicket(t);
      setOpen(!!t);
    };
    refresh();
    const onUpdate = () => refresh();
    document.addEventListener("ticket:updated", onUpdate as EventListener);
    return () =>
      document.removeEventListener("ticket:updated", onUpdate as EventListener);
  }, []);

  useEffect(() => {
    if (!ticket?.event) {
      setEvent(null);
      return;
    }
    // Map known events to static assets
    const name = ticket.event.toLowerCase();
    if (name.includes("football"))
      setEvent({ bannerPath: "/1.jpg", date: "", time: "10:00 AM", venue: "Main Auditorium" });
    else if (name.includes("coding"))
      setEvent({ bannerPath: "/2.jpg", date: "", time: "10:00 AM", venue: "Main Auditorium" });
    else if (name.includes("pc"))
      setEvent({ bannerPath: "/3.jpg", date: "", time: "10:00 AM", venue: "Main Auditorium" });
    else
      setEvent({
        bannerPath: "/event-bg.jpg",
        date: "",
        time: "10:00 AM",
        venue: "Main Auditorium",
      });
  }, [ticket?.event]);

  // Don't render anything until we're on the client
  if (!isClient || !ticket) return null;

  const qrData = encodeURIComponent(
    `${ticket.id}|${ticket.name}|${ticket.event}|${ticket.college}`
  );

  async function downloadTicket() {
    const node = document.getElementById("ticketCard");
    if (!node || !ticket) return;

    try {
      // Wait a moment for any pending renders
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Simple direct capture with minimal options
      const dataUrl = await domtoimage.toPng(node, {
        quality: 1,
        bgcolor: "#f8fafc",
      });

      const link = document.createElement("a");
      link.download = `${ticket.name.replace(
        /\s+/g,
        "-"
      )}-${ticket.event.replace(/\s+/g, "-")}-ticket.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please take a screenshot of your ticket.");
    }
  }

  return (
    <div
      className={`fixed right-0 top-0 z-[70] h-full w-full max-w-sm sm:max-w-md bg-white shadow-2xl transition-transform duration-500 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b px-4 sm:px-6 py-4">
        <h4 className="font-semibold text-lg">Your Ticket</h4>
        <button
          className="rounded-xl bg-white px-3 py-1 shadow border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>
      <div className="p-4 sm:p-6 overflow-y-auto h-[calc(100%-64px)]">
        <div
          id="ticketCard"
          className="p-4 sm:p-6 bg-gray-50 mx-auto"
          style={{
            backgroundColor: "#f8fafc",
            maxWidth: "400px",
            width: "100%",
            borderRadius: "0px",
          }}
        >
          <div
            className="bg-white shadow-2xl overflow-hidden mx-auto"
            style={{
              backgroundColor: "#ffffff",
              color: "#333333",
              width: "100%",
              maxWidth: "340px",
              borderRadius: "20px",
            }}
          >
            {/* Event Image Header */}
            <div className="relative h-32 sm:h-40 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={event?.bannerPath || "/event-bg.jpg"}
                alt={ticket.event}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-5 right-4 sm:right-5">
                <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {ticket.event}
                </h1>
                <div className="flex items-center gap-2 text-white/90">
                  <span className="text-xs sm:text-sm">
                    BVM Holy Cross College
                  </span>
                  <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                  <span className="text-xs sm:text-sm">Inter-College Fest</span>
                </div>
              </div>
            </div>

            {/* Ticket Body */}
            <div className="p-4 sm:p-5">
              {/* Event Details */}
              <div className="mb-4 sm:mb-5">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Date & Time
                    </div>
                    <div className="font-semibold text-sm sm:text-base text-gray-900">
                      {event?.date || "TBA"}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {event?.time || ""}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Venue
                    </div>
                    <div className="font-semibold text-sm sm:text-base text-gray-900">
                      {event?.venue || "Venue TBA"}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashed Divider */}
              <div className="border-t border-dashed border-gray-300 my-4 sm:my-5"></div>

              {/* Participant & Ticket Info */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Participant
                  </div>
                  <div className="font-bold text-base sm:text-lg text-gray-900">
                    {ticket.name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Ticket ID
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-gray-900 bg-gray-100 px-2 sm:px-3 py-1 rounded-lg">
                    {ticket.id}
                  </div>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="QR Code"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0"
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrData}&color=000000&bgcolor=ffffff`}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                    Entry Pass
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    Show this QR code at the venue entrance for verification and
                    entry.
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-4 sm:mt-5 text-center">
                <div className="text-xs text-gray-500 bg-gray-50 px-3 sm:px-4 py-1 sm:py-2 rounded-full inline-block">
                  Keep this ticket safe • Non-transferable
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <button
            className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 cursor-pointer"
            onClick={downloadTicket}
          >
            Download PNG
          </button>
          <button
            className="rounded-xl bg-white px-4 py-2 shadow border border-gray-300 cursor-pointer"
            onClick={() => {
              clearTicket();
              setOpen(false);
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
