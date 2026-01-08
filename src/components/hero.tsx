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
    const targetDate = new Date("Jan 8, 2026 10:00:00").getTime();

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
      className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle colored accent lines */}
      <div
        className="absolute top-20 left-1/6 w-0.5 h-40 bg-gradient-to-b from-transparent to-blue-400/60 animate-slide-in"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-32 right-1/5 w-0.5 h-32 bg-gradient-to-b from-transparent to-purple-400/60 animate-slide-in"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-1/3 w-0.5 h-24 bg-gradient-to-b from-transparent to-pink-400/60 animate-slide-in"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 right-1/4 w-0.5 h-36 bg-gradient-to-b from-transparent to-cyan-400/60 animate-slide-in"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-40 left-1/4 w-0.5 h-28 bg-gradient-to-b from-transparent to-green-400/60 animate-slide-in"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute bottom-20 right-1/3 w-0.5 h-32 bg-gradient-to-b from-transparent to-yellow-400/60 animate-slide-in"
        style={{ animationDelay: "2.5s" }}
      ></div>

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
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          COREX <span className="text-white">2026</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-12 uppercase">
          That&apos;s a Wrap for COREX 2026 - Thank You All!
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          <div className="text-center bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-6 rounded-lg w-24 md:w-28 hover:bg-white/[0.05] transition-colors">
            <span
              className="block text-4xl font-bold text-white"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-white/60 uppercase tracking-wide">
              Days
            </span>
          </div>
          <div className="text-center bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-6 rounded-lg w-24 md:w-28 hover:bg-white/[0.05] transition-colors">
            <span
              className="block text-4xl font-bold text-white"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-white/60 uppercase tracking-wide">
              Hours
            </span>
          </div>
          <div className="text-center bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-6 rounded-lg w-24 md:w-28 hover:bg-white/[0.05] transition-colors">
            <span
              className="block text-4xl font-bold text-white"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-white/60 uppercase tracking-wide">
              Mins
            </span>
          </div>
          <div className="text-center bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-6 rounded-lg w-24 md:w-28 hover:bg-white/[0.05] transition-colors">
            <span
              className="block text-4xl font-bold text-white"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-white/60 uppercase tracking-wide">
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
            href="#music-night"
            className="border border-gray-600 text-gray-400 px-10 py-4 rounded-full font-medium font-tech hover:border-white hover:text-white transition-all duration-300 uppercase tracking-wide"
          >
            Music Night
          </Link>
        </div>
      </div>
    </section>
  );
}
