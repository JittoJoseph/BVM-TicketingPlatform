"use client";

import { EventCards } from "../components/event-cards";
import { RegistrationModal } from "../components/registration-modal";
import { TicketDrawer } from "../components/ticket-drawer";
import { Footer } from "../components/footer";
import { getEventNamesForDisplay } from "@/lib/events";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/logo.png";

export default function Home() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  // Registration is currently disabled - modal will not open
  const [isModalOpen] = useState(false);
  const eventNames = getEventNamesForDisplay();

  const scrollTo = (sel: string) => {
    if (typeof document === "undefined") return;
    document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
  };
  // Simplified header—no mobile menu or nav links needed

  return (
    <div className="bg-[var(--color-dark-100)] text-white pt-4 relative z-10 min-h-screen">
      {/* Decorative blobs - dark theme */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl opacity-60" />
      </div>

      {/* Header (simple, single layout for desktop and mobile) */}
      <section aria-label="Site header" className="mb-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between gap-3 rounded-2xl backdrop-blur-[14px] bg-black/80 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] px-5 py-3">
            <div className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="BVM Holy Cross College logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-contain bg-white/10 p-1"
                priority
              />
              <div>
                <p className="text-xs md:text-sm tracking-wide text-gray-400">
                  BVM Holy Cross College
                </p>
                <p className="font-semibold text-white">Ticketing Platform</p>
              </div>
            </div>

            <button
              onClick={() => scrollTo("#events")}
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:from-purple-700 hover:to-blue-700 transition-all cursor-pointer"
            >
              <span>Get Tickets</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1800&auto=format&fit=crop"
              alt=""
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
              <div className="max-w-3xl text-white">
                <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-white/80">
                  Presents
                </p>
                <h1 className="font-[var(--font-playfair)] font-bold text-4xl md:text-6xl leading-tight">
                  The Ultimate Inter‑College Showdown
                </h1>
                <p className="mt-4 text-white/90 md:text-lg">
                  Register for one of our signature events — {eventNames}. One
                  participant. One ticket. One epic day.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-3 font-medium shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer"
                    onClick={() => scrollTo("#events")}
                  >
                    Explore Events
                  </button>
                  <button
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    onClick={() => scrollTo("#how")}
                  >
                    How it works
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto max-w-7xl px-6 pt-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl">
              Choose your event
            </h3>
            <p className="mt-2 text-gray-400">
              One event per participant • Limited seats • First‑come,
              first‑served
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>Live registration</span>
          </div>
        </div>

        <EventCards
          onRegister={(eventName: string) => {
            // Registration is currently disabled
            setActiveEvent(eventName);
          }}
        />
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-6 pt-24">
        <div className="rounded-3xl bg-gray-800 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] p-8 md:p-12">
          <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl text-white">
            How registration works
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white grid place-content-center">
                  {n}
                </div>
                <div>
                  <p className="font-medium text-white">
                    {n === 1
                      ? "Pick an event"
                      : n === 2
                      ? "Fill your details"
                      : "Get your ticket"}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {n === 1 && `Choose from ${eventNames}.`}
                    {n === 2 &&
                      "We use your info only to generate a unique QR ticket."}
                    {n === 3 &&
                      "Save a PNG ticket and receive a confirmation email (optional)."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-6 pt-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-white">
              Frequently asked
            </h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mt-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/10"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
              alt="Campus"
            />
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Do I need an account?",
                a: "No, participants can register without an account. Admins have a secured dashboard.",
              },
              {
                q: "Can I join multiple events?",
                a: "No, one event per participant.",
              },
              {
                q: "How do I get my ticket?",
                a: "We show a downloadable ticket with a QR code on completion.",
              },
              {
                q: "Can I edit my registration?",
                a: "Contact organizers via the phone in the footer.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-gray-800 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-white">
                  {f.q}
                  <span className="text-gray-400">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-400">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer onRegister={() => {
        // Registration is currently disabled
      }} />

      <RegistrationModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        eventName={activeEvent}
      />
      <TicketDrawer />
    </div>
  );
}
