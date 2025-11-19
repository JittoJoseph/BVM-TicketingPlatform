import Link from "next/link";
import { CheckCircle, Home } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900 border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-gray-400 mb-8">
          Your tickets have been booked successfully. We have sent the details
          to your email address.
        </p>

        <div className="space-y-4">
          <Link
            href="/movies"
            className="block w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Book Another Movie
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full bg-white/5 text-white font-medium py-3.5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
