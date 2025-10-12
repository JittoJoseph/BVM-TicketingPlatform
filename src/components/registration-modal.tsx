"use client";

import { useEffect, useState } from "react";
import { getEventByName } from "@/lib/events";

type Props = {
  open: boolean;
  onClose: () => void;
  eventName: string | null;
};

export function RegistrationModal({ open, onClose, eventName }: Props) {
  // Registration is currently disabled - this modal is preserved for future use
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const disabled = true; // Always disabled

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      setName("");
      setEmail("");
      setPhone("");
      setCollege("");
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
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-white/20">
        {/* Header with event image */}
        <div className="relative h-32 bg-gradient-to-r from-purple-600 to-blue-600">
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

        {/* Form - Registration disabled */}
        <form
          className="p-6 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            // Registration is currently disabled
          }}
        >
          <div className="text-center mb-6">
            <p className="text-gray-300">
              Registration is currently disabled
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-800 text-white focus:bg-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-800 text-white focus:bg-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-800 text-white focus:bg-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                College/Institution
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-800 text-white focus:bg-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                placeholder="Your college name"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              className="flex-1 px-4 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 transition-colors font-medium cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              disabled={disabled}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer"
              type="submit"
            >
              Registration Disabled
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
