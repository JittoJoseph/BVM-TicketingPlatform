"use client";

import { useEffect, useState, useTransition } from "react";
import { generateId, saveTicket } from "@/lib/ticket";
import { getEventByName } from "@/lib/events";

type Props = {
  open: boolean;
  onClose: () => void;
  eventName: string | null;
};

export function RegistrationModal({ open, onClose, eventName }: Props) {
  const [pending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [error, setError] = useState<string | null>(null);
  const disabled = pending || !name || !email || !phone || !college;

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      setName("");
      setEmail("");
      setPhone("");
      setCollege("");
      setError(null);
    }
  }, [open]);

  if (!open || !eventName) return null;

  // Get the event data and use its banner path
  const eventData = getEventByName(eventName);
  const bannerSrc = eventData?.bannerPath
    ? eventData.bannerPath.startsWith("/")
      ? eventData.bannerPath
      : `/${eventData.bannerPath}`
    : "/globe.svg";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 [data-theme=light]_&:bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[var(--card-bg)] rounded-2xl shadow-2xl overflow-hidden border border-[var(--card-border)]">
        {/* Header with event image */}
        <div className="relative h-32 bg-gradient-to-r from-[var(--accent)] to-indigo-600 [data-theme=light]_&:from-violet-600 [data-theme=light]_&:to-purple-600">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            alt={eventName || "Event"}
            src={bannerSrc}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
            onClick={onClose}
          >
            <svg
              className="w-4 h-4"
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

          {/* Event title */}
          <div className="absolute bottom-4 left-6">
            <h2 className="text-xl font-bold text-white mb-1">Register for</h2>
            <h3 className="text-2xl font-[var(--font-playfair)] font-bold text-white">
              {eventName}
            </h3>
          </div>
        </div>

        {/* Form */}
        <form
          className="p-6 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            startTransition(async () => {
              setError(null);
              const id = generateId();
              const ticket = {
                id,
                name: name.trim(),
                email: email.trim(),
                phone: phone.trim(),
                college: college.trim(),
                event: eventName,
                createdAt: Date.now(),
              };
              saveTicket(ticket);
              try {
                const response = await fetch("/api/registrations", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(ticket),
                });
                if (!response.ok) {
                  const errorData = await response.json();
                  throw new Error(errorData.error || "Registration failed");
                }
              } catch (err) {
                console.error(err);
                setError("Saved locally. Sync will retry later.");
              }
              onClose();
              document.dispatchEvent(new CustomEvent("ticket:updated"));
            });
          }}
        >
          <div className="text-center mb-6">
            <p className="text-[var(--muted)]">
              Fill in your details to secure your spot
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[var(--card-border)] rounded-xl bg-[var(--card-bg)] text-[var(--foreground)] focus:bg-[var(--background)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all outline-none"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-[var(--card-border)] rounded-xl bg-[var(--card-bg)] text-[var(--foreground)] focus:bg-[var(--background)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all outline-none"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-[var(--card-border)] rounded-xl bg-[var(--card-bg)] text-[var(--foreground)] focus:bg-[var(--background)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all outline-none"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                College/Institution
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[var(--card-border)] rounded-xl bg-[var(--card-bg)] text-[var(--foreground)] focus:bg-[var(--background)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all outline-none"
                placeholder="Your college name"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
              <p className="text-sm text-amber-700">{error}</p>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              className="flex-1 px-4 py-3 border border-[var(--card-border)] text-[var(--muted)] rounded-xl hover:bg-[var(--card-bg)] transition-colors font-medium cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              disabled={disabled}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-[var(--accent)] to-indigo-600 [data-theme=light]_&:from-violet-600 [data-theme=light]_&:to-purple-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 [data-theme=light]_&:hover:from-violet-700 [data-theme=light]_&:hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer"
              type="submit"
            >
              {pending ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Registering...
                </span>
              ) : (
                "Register Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
