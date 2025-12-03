"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-black/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 flex flex-col items-center gap-0">
            <span className="font-tech text-lg md:text-xl font-bold text-white tracking-wide">
              COREX<span className="text-white">26</span>
            </span>
            <span className="text-xs text-gray-400 tracking-wide uppercase hidden sm:block">
              BVM Holy Cross College
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#home"
                className="hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors text-gray-400"
              >
                HOME
              </Link>
              <Link
                href="#contact"
                className="hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors text-gray-400"
              >
                CONTACT
              </Link>
              <Link
                href="#events"
                className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
              >
                EVENTS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
