"use client";

import { useEffect, useState } from "react";
import { loadTicket, clearTicket } from "@/lib/ticket";
import { eventImages } from "@/lib/events";

export function TicketDrawer() {
  const [open, setOpen] = useState(false);
  const [ticket, setTicket] = useState(loadTicket());

  useEffect(() => {
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

  if (!ticket) return null;

  const qrData = encodeURIComponent(
    `${ticket.id}|${ticket.name}|${ticket.event}|${ticket.college}`
  );

  async function downloadTicket() {
    const node = document.getElementById("ticketCard");
    if (!node) return;
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(node, {
      backgroundColor: null,
      scale: window.devicePixelRatio,
    });
    const link = document.createElement("a");
    link.download = "bvm-ticket.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <div
      className={`fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b px-6 py-4">
        <h4 className="font-semibold">Your Ticket</h4>
        <button
          className="rounded-xl bg-white px-3 py-1 shadow"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>
      <div className="p-6 overflow-y-auto h-[calc(100%-64px)]">
        <div
          id="ticketCard"
          className="rounded-3xl border border-slate-200 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-content-center">
              🎟️
            </div>
            <div>
              <div className="font-semibold">{ticket.name}</div>
              <div className="text-sm text-slate-600">{ticket.college}</div>
            </div>
          </div>
          <div className="mt-4 rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={eventImages[ticket.event as keyof typeof eventImages] || ""}
              alt={ticket.event}
            />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-slate-500">Event</div>
              <div className="font-medium">{ticket.event}</div>
            </div>
            <div>
              <div className="text-slate-500">Ticket ID</div>
              <div className="font-mono text-sm">{ticket.id}</div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="QR"
              className="rounded-xl border"
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}`}
            />
            <div className="text-xs text-slate-600">
              Show this QR at the venue for verification. Keep a copy saved to
              your phone.
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <button
            className="rounded-xl bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
            onClick={downloadTicket}
          >
            Download PNG
          </button>
          <button
            className="rounded-xl bg-white px-4 py-2 shadow"
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
