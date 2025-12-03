"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-black/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex-shrink-0 flex flex-col items-center gap-0 hover:opacity-80 transition-opacity"
          >
            <span className="font-tech text-lg md:text-xl font-bold text-white tracking-wide">
              COREX<span className="text-white">26</span>
            </span>
            <span className="text-xs text-gray-400 tracking-wide uppercase hidden sm:block">
              BVM Holy Cross College
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors text-gray-400"
              >
                HOME
              </Link>
              <Link
                href="/#contact"
                className="hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors text-gray-400"
              >
                CONTACT
              </Link>
              <Link
                href="/#events"
                className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
              >
                EVENTS
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-white/10">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
              <Link
                href="/#events"
                className="block px-3 py-2 rounded-md text-base font-medium bg-white text-black hover:bg-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                EVENTS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
