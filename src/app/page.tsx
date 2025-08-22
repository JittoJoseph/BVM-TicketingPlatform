"use client";

import Link from "next/link";
import { EventCards } from "../components/event-cards";
import { RegistrationModal } from "../components/registration-modal";
import { TicketDrawer } from "../components/ticket-drawer";
import { Footer } from "../components/footer";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/logo.png";

export default function Home() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  // Simplified header—no mobile menu or nav links needed

  return (
    <div className="bg-[var(--color-cream-100)] text-slate-800 pt-4">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-fuchsia-200/40 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      {/* Header (simple, single layout for desktop and mobile) */}
      <section aria-label="Site header" className="mb-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 rounded-2xl glass border border-white/60 shadow-soft px-5 py-3">
            <Image
              src={Logo}
              alt="BVM Holy Cross College logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-contain bg-white"
              priority
            />
            <div>
              <p className="text-xs md:text-sm tracking-wide text-slate-500">
                BVM Holy Cross College
              </p>
              <p className="font-semibold">Ticketing Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl shadow-soft border border-white/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1800&auto=format&fit=crop"
              alt="Auditorium crowd"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-900/30 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
              <div className="max-w-3xl text-white">
                <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-white/80">
                  Presents
                </p>
                <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight">
                  The Ultimate Inter‑College Showdown
                </h1>
                <p className="mt-4 text-white/90 md:text-lg">
                  Register for one of our signature events —{" "}
                  <strong>E‑Football</strong>, <strong>Coding Challenge</strong>
                  , or <strong>PC Building Competition</strong>. One
                  participant. One ticket. One epic day.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-soft hover:drop-shadow-[0_10px_30px_rgba(79,70,229,0.35)]"
                    onClick={() => setModalOpen(true)}
                  >
                    Explore Events
                  </button>
                  <Link
                    href="#how"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-white hover:bg-white/20"
                  >
                    How it works
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
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
            <h3 className="font-display text-3xl md:text-4xl">
              Choose your event
            </h3>
            <p className="mt-2 text-slate-600">
              One event per participant • Limited seats • First‑come,
              first‑served
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Live registration</span>
          </div>
        </div>

        <EventCards
          onRegister={(eventName: string) => {
            setActiveEvent(eventName);
            setModalOpen(true);
          }}
        />
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-6 pt-24">
        <div className="rounded-3xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-white/60 p-8 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl">
            How registration works
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-indigo-600 text-white grid place-content-center">
                  {n}
                </div>
                <div>
                  <p className="font-medium">
                    {n === 1
                      ? "Pick an event"
                      : n === 2
                      ? "Fill your details"
                      : "Get your ticket"}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    {n === 1 &&
                      "Choose from E‑Football, Coding Challenge, or PC Building."}
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
            <h3 className="font-display text-3xl md:text-4xl">
              Frequently asked
            </h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mt-8 rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
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
                className="group rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-white/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  {f.q}
                  <span className="text-slate-500">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer onRegister={() => setModalOpen(true)} />

      <RegistrationModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        defaultEvent={activeEvent}
      />
      <TicketDrawer />
    </div>
  );
}
