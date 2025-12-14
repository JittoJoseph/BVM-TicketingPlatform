import { EVENTS } from "@/lib/events";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import FAQAccordion from "@/components/faq-accordion";
import EventInfoCard from "@/components/event-info-card";

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
        {title}
      </h2>
      <div className="mt-4 text-white/75 leading-relaxed">{children}</div>
    </section>
  );
}

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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      <Navbar />

      <main className="px-4 sm:px-6 pt-24 pb-20">
        <div className="mx-auto max-w-5xl">
          {/* Back Link */}
          <Link
            href="/#events"
            className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Events
          </Link>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            {/* Main */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 bg-white/10 rounded-full border border-white/10">
                  {event.category}
                </span>
                {event?.type && (
                  <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/60 border border-white/10 rounded-full">
                    {event?.type}
                  </span>
                )}
              </div>

              <h1
                className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05]"
                style={{ fontFamily: "Audiowide, sans-serif" }}
              >
                {event.name}
              </h1>

              {/* Mobile media */}
              <div className="mt-8 lg:hidden">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Mobile: key details card should be above description/content */}
              <div className="mt-6 lg:hidden">
                <EventInfoCard event={event} variant="mobile" />
              </div>

              <p className="mt-6 text-base sm:text-lg text-white/65 leading-relaxed max-w-2xl">
                {event.shortDescription}
              </p>

              <div className="mt-10 space-y-6">
                <DetailSection title="Description">
                  {event.longDescription.split("\n").map((para, i) => (
                    <p key={i} className={i > 0 ? "mt-4" : ""}>
                      {para}
                    </p>
                  ))}
                </DetailSection>

                {event.coordinators && event.coordinators.length > 0 && (
                  <DetailSection title="Event Coordinators">
                    <div className="space-y-2">
                      {event.coordinators.map((coord, i) => (
                        <div key={i} className="flex justify-between">
                          <span>{coord.name}</span>
                          <a
                            href={`tel:${coord.phone}`}
                            className="text-white/80 hover:text-white"
                          >
                            {coord.phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </DetailSection>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:pt-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="hidden lg:block relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="hidden lg:block">
                  <EventInfoCard event={event} variant="desktop" />
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </main>
    </div>
  );
}
