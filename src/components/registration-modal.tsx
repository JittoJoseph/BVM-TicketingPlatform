"use client";

import { useEffect, useState, useTransition } from "react";
import { EVENTS, eventImages, type EventName } from "@/lib/events";
import { generateId, saveTicket } from "@/lib/ticket";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultEvent: string | null;
};

export function RegistrationModal({ open, onClose, defaultEvent }: Props) {
  const [event, setEvent] = useState<EventName>(EVENTS[1]);
  const [pending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [error, setError] = useState<string | null>(null);
  const disabled = pending || !name || !email || !college;

  useEffect(() => {
    if (defaultEvent && EVENTS.includes(defaultEvent as EventName)) {
      setEvent(defaultEvent as EventName);
    }
  }, [defaultEvent]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} />
      <div className="relative mx-auto mt-16 max-w-2xl px-6">
        <div className="backdrop-blur-[14px] bg-white/70 rounded-3xl border border-white/60 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/60">
            <h4 className="text-lg font-semibold">Register — {event}</h4>
            <button
              className="rounded-xl bg-white px-3 py-1 shadow"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-full w-full object-cover rounded-bl-3xl rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none"
              alt={event}
              src={eventImages[event]}
            />
            <form
              className="p-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                startTransition(async () => {
                  setError(null);
                  const id = generateId();
                  const ticket = {
                    id,
                    name: name.trim(),
                    email: email.trim(),
                    college: college.trim(),
                    event,
                    createdAt: Date.now(),
                  };
                  saveTicket(ticket);
                  try {
                    await fetch("/api/registrations", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(ticket),
                    });
                  } catch (err) {
                    console.error(err);
                    setError("Saved locally. Sync will retry later.");
                  }
                  onClose();
                  document.dispatchEvent(new CustomEvent("ticket:updated"));
                });
              }}
            >
              <label className="block text-sm font-medium">Event</label>
              <select
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
                value={event}
                onChange={(e) => setEvent(e.target.value as EventName)}
              >
                {EVENTS.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">College</label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  required
                />
              </div>
              <div className="pt-2 flex items-center gap-3">
                <button
                  disabled={disabled}
                  className="rounded-xl bg-indigo-600 px-5 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                >
                  {pending ? "Generating…" : "Generate ticket"}
                </button>
                <button
                  className="rounded-xl bg-white px-4 py-2 shadow"
                  type="button"
                  onClick={onClose}
                >
                  Cancel
                </button>
                {error && (
                  <span className="text-xs text-amber-600">{error}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
