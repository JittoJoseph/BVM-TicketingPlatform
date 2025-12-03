"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <i className="fas fa-microchip text-white text-2xl"></i>
            <span className="font-tech text-xl font-bold text-white tracking-wide">
              COREX<span className="text-white">26</span>
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
                href="#events"
                className="hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors text-gray-400"
              >
                EVENTS
              </Link>
              <Link
                href="#sim-racing"
                className="text-white px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors border border-white/20"
              >
                SIM RACING
              </Link>
              <Link
                href="#contact"
                className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
              >
                REGISTER
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link
              href="#home"
              className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#events"
              className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="#sim-racing"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sim Racing
            </Link>
            <Link
              href="#contact"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
