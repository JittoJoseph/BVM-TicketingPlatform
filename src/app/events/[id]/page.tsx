import { EVENTS } from "@/lib/events";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { ArrowLeft, Calendar, Trophy, Wallet } from "lucide-react";
import type { ReactNode } from "react";

function formatEventDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatTimeToAmPm(time24: string): string {
  const [hh, mm] = time24.split(":");
  const hours = Number(hh);
  const minutes = Number(mm);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return time24;

  const period = hours >= 12 ? "PM" : "AM";
  const hour12 = ((hours + 11) % 12) + 1;
  return `${hour12}:${minutes.toString().padStart(2, "0")} ${period}`;
}

function formatEventTimeRange(
  startTime: string,
  endTime: string | null
): string {
  const start = formatTimeToAmPm(startTime);
  if (!endTime) return start;
  const end = formatTimeToAmPm(endTime);
  return `${start} – ${end}`;
}

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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
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

  const formattedDate = formatEventDate(event.date);
  const formattedTime = formatEventTimeRange(event.startTime, event.endTime);

  function InfoCard({ variant }: { variant: "mobile" | "desktop" }) {
    return (
      <div
        className={
          variant === "mobile"
            ? "rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            : "rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
        }
      >
        <div className="space-y-5">
          <div className="rounded-xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <Calendar className="h-4 w-4 text-white/80" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider font-medium">
                  Date & Time
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-white/75 mb-1">{formattedDate}</p>
              <p
                className={
                  variant === "mobile"
                    ? "text-xl font-semibold text-white tracking-tight"
                    : "text-2xl font-semibold text-white tracking-tight"
                }
                style={{ fontFamily: "Audiowide, sans-serif" }}
              >
                {formattedTime}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-lg border border-white/10 bg-white/5 p-2">
                <Trophy className="h-4 w-4 text-white/80" />
              </div>
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] font-medium">
                  Prize Pool
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  {event?.prizePool}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-lg border border-white/10 bg-white/5 p-2">
                <Wallet className="h-4 w-4 text-white/80" />
              </div>
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] font-medium">
                  Entry Fee
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  {event?.pricing}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/10">
          <Link
            href={event!.makemypassUrl}
            target="_blank"
            className="block w-full py-3.5 bg-white text-black font-semibold text-center rounded-xl hover:bg-white/90 transition-colors"
          >
            Register
          </Link>
          <p className="text-center text-xs text-white/30 mt-3">
            Registration via MakeMyPass
          </p>
        </div>
      </div>
    );
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
                {event.tag && (
                  <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/60 border border-white/10 rounded-full">
                    {event.tag}
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
                <InfoCard variant="mobile" />
              </div>

              <p className="mt-6 text-base sm:text-lg text-white/65 leading-relaxed max-w-2xl">
                {event.description}
              </p>

              <div className="mt-10 space-y-6">
                <DetailSection title="About">
                  {event.details.about}
                </DetailSection>

                <DetailSection title="Rules">
                  <BulletList items={event.details.rules} />
                </DetailSection>

                <DetailSection title="Requirements">
                  <BulletList items={event.details.requirements} />
                </DetailSection>
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
                  <InfoCard variant="desktop" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
