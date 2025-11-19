"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface BookingFormProps {
  onSubmit: (details: { name: string; email: string; phone: string }) => void;
  isProcessing: boolean;
  amount: number;
  seatCount: number;
}

export function BookingForm({
  onSubmit,
  isProcessing,
  amount,
  seatCount,
}: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
          placeholder="+91 98765 43210"
        />
      </div>

      <div className="pt-4 border-t border-white/10 mt-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-400">
            Total Amount ({seatCount} seats)
          </span>
          <span className="text-2xl font-bold text-white">₹{amount}</span>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3.5 text-base font-bold text-white shadow-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            `Pay ₹${amount}`
          )}
        </button>
        <p className="text-center text-xs text-gray-500 mt-3">
          By proceeding, you agree to our terms. Tickets are non-refundable.
        </p>
      </div>
    </form>
  );
}
