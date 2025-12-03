import { EVENTS } from "@/lib/events";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/navbar";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return EVENTS.map((event) => ({
    id: event.id,
  }));
}

export default async function EventPage({ params }: PageProps) {
  const { id } = await params;
  const event = EVENTS.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white font-sans pb-20 pt-16 md:pt-20">
        {/* Hero Section with Background Image */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-white/[0.1] text-white/90 rounded-full border border-white/[0.2]">
                  {event.category}
                </span>
                <h1
                  className="text-5xl md:text-7xl font-black mb-4 text-white drop-shadow-lg"
                  style={{ fontFamily: "Audiowide, sans-serif" }}
                >
                  {event.name}
                </h1>
                <div className="flex flex-wrap gap-6 text-lg text-white/80 font-medium">
                  <div className="flex items-center gap-3">{event.date}</div>
                  <div className="flex items-center gap-3">{event.venue}</div>
                </div>
              </div>

              <Link
                href={event.makemypassUrl}
                target="_blank"
                className="px-10 py-4 border border-white text-white font-medium text-xl rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-16 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Markdown */}
          <div className="lg:col-span-2">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-tech prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80 prose-strong:text-white">
              <ReactMarkdown>{event.markdownContent}</ReactMarkdown>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white/[0.02] p-8 rounded-xl border border-white/[0.05]">
              <h3
                className="text-2xl font-bold text-white mb-6 border-b border-white/[0.05] pb-3"
                style={{ fontFamily: "Audiowide, sans-serif" }}
              >
                Event Details
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Entry Fee</span>
                  <span className="text-2xl font-bold text-white">
                    {event.pricing}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Prize Pool</span>
                  <span className="text-xl font-bold text-white">
                    {event.prizePool}
                  </span>
                </div>
                {event.tag && (
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Type</span>
                    <span className="text-white font-medium">{event.tag}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white/[0.02] p-8 rounded-xl border border-white/[0.05]">
              <h3
                className="text-2xl font-bold text-white mb-6 border-b border-white/[0.05] pb-3"
                style={{ fontFamily: "Audiowide, sans-serif" }}
              >
                Organizers
              </h3>
              <p className="text-white/60 text-sm">
                Contact details coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
