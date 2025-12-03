"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("Jan 7, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center justify-center relative"
    >
      {/* College branding removed - now in footer */}

      <div className="text-center z-10 px-4 max-w-4xl mx-auto pt-16 md:pt-20">
        {/* College Name */}
        <div className="mb-6">
          <span className="text-gray-400 font-medium tracking-wide text-sm uppercase">
            BVM Holy Cross College
          </span>
        </div>

        {/* Event Dates */}
        <div className="mb-8">
          <span className="text-white font-medium px-6 py-2 border border-white/20 rounded-full text-lg tracking-wide">
            JANUARY 7 & 8
          </span>
        </div>

        <h1
          className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tight leading-none"
          style={{ fontFamily: "Audiowide, sans-serif" }}
        >
          COREX <span className="text-white">2026</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-12 uppercase">
          Tech • Gaming • Music
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          <div className="text-center border border-gray-700 p-6 rounded-lg w-24 md:w-28">
            <span className="block text-4xl font-bold text-white font-tech">
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              Days
            </span>
          </div>
          <div className="text-center border border-gray-700 p-6 rounded-lg w-24 md:w-28">
            <span className="block text-4xl font-bold text-white font-tech">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              Hours
            </span>
          </div>
          <div className="text-center border border-gray-700 p-6 rounded-lg w-24 md:w-28">
            <span className="block text-4xl font-bold text-white font-tech">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              Mins
            </span>
          </div>
          <div className="text-center border border-gray-700 p-6 rounded-lg w-24 md:w-28">
            <span className="block text-4xl font-bold text-white font-tech">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              Secs
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            href="#events"
            className="border border-white text-white px-10 py-4 rounded-full font-medium font-tech hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide"
          >
            Explore Events
          </Link>
          <Link
            href="#sim-racing"
            className="border border-gray-600 text-gray-400 px-10 py-4 rounded-full font-medium font-tech hover:border-white hover:text-white transition-all duration-300 uppercase tracking-wide"
          >
            Sim Racing
          </Link>
        </div>
      </div>
    </section>
  );
}
