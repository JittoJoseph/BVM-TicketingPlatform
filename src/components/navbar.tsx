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
            <i className="fas fa-microchip text-3xl text-green-400"></i>
            <span className="font-tech text-2xl font-bold text-white tracking-widest">
              COREX<span className="text-green-400">26</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#home"
                className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-bold tracking-widest transition-colors text-white"
              >
                HOME
              </Link>
              <Link
                href="#events"
                className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-bold tracking-widest transition-colors text-white"
              >
                EVENTS
              </Link>
              <Link
                href="#sim-racing"
                className="text-green-400 px-3 py-2 rounded-md text-sm font-bold tracking-widest transition-colors border border-green-500/30 bg-green-500/10"
              >
                SIM RACING
              </Link>
              <Link
                href="#contact"
                className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105"
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
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link
              href="#home"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#events"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="#sim-racing"
              className="text-green-400 block px-3 py-2 rounded-md text-base font-medium"
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
