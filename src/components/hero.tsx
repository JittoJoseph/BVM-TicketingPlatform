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
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

      <div className="text-center z-10 px-4 max-w-5xl mx-auto pt-20">
        {/* ADDED EVENT DATES */}
        <div className="mb-4">
          <span className="bg-red-600 text-white font-bold px-4 py-1 rounded-full text-lg tracking-widest uppercase">
            JANUARY 7 & 8
          </span>
        </div>

        {/* COMBINED TITLE & CELEBRATION */}
        <div className="inline-block px-4 py-1 rounded-full mb-2">
          <span className="text-gray-300 font-bold tracking-widest uppercase text-sm md:text-lg">
            IT TECH FEST
          </span>
        </div>

        <div className="inline-block border border-green-500/50 bg-green-500/10 px-4 py-1 rounded-full mb-6 backdrop-blur-sm animate-float">
          <span className="text-green-400 font-bold tracking-widest uppercase text-sm">
            Celebrating 30 Years of BCA Dept
          </span>
        </div>

        <h1 className="font-tech text-6xl md:text-9xl font-black text-white mb-2 tracking-tighter leading-none neon-text-green">
          COREX{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            2026
          </span>
        </h1>

        <p className="text-xl md:text-3xl text-gray-300 font-light tracking-[0.3em] mb-8 uppercase">
          Tech • Gaming • Music
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          <div className="text-center bg-black/50 border border-gray-700 p-4 rounded-lg w-20 md:w-24 backdrop-blur-sm">
            <span className="block text-3xl font-bold text-white font-tech">
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 uppercase">Days</span>
          </div>
          <div className="text-center bg-black/50 border border-gray-700 p-4 rounded-lg w-20 md:w-24 backdrop-blur-sm">
            <span className="block text-3xl font-bold text-white font-tech">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 uppercase">Hours</span>
          </div>
          <div className="text-center bg-black/50 border border-gray-700 p-4 rounded-lg w-20 md:w-24 backdrop-blur-sm">
            <span className="block text-3xl font-bold text-white font-tech">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 uppercase">Mins</span>
          </div>
          <div className="text-center bg-black/50 border border-gray-700 p-4 rounded-lg w-20 md:w-24 backdrop-blur-sm">
            <span className="block text-3xl font-bold text-white font-tech">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 uppercase">Secs</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="#events"
            className="bg-green-500 text-black px-8 py-4 rounded-full font-bold font-tech hover:bg-green-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]"
          >
            EXPLORE EVENTS
          </Link>
          <Link
            href="#sim-racing"
            className="border border-white text-white px-8 py-4 rounded-full font-bold font-tech hover:bg-white hover:text-black transition-all"
          >
            SIM RACING
          </Link>
        </div>
      </div>
    </section>
  );
}
