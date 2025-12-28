import { EVENTS } from "@/lib/events";
import Link from "next/link";
import Image from "next/image";

export default function ExperienceZone() {
  const experienceEvents = EVENTS.filter((event) =>
    [
      "sim-racing",
      "gaming-arena",
      "vr-experience",
      "cultural-show",
      "exhibition",
    ].includes(event.id)
  );

  return (
    <section
      id="experience-zone"
      className="py-8 md:py-16 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Audiowide, sans-serif" }}
          >
            EXPERIENCE ZONE
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg px-4">
            Explore immersive experiences and entertainment
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:gap-4 lg:hidden">
          <div className="flex gap-3 md:gap-4">
            {experienceEvents.slice(0, 2).map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] w-40 sm:w-44 md:w-52 lg:w-60 overflow-hidden rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:shadow-lg hover:shadow-white/[0.05] hover:-translate-y-1">
                  <Image
                    src={event.image}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={event.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-white/90 transition-colors leading-tight text-center">
                      {event.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex gap-3 md:gap-4">
            {experienceEvents.slice(2, 4).map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] w-40 sm:w-44 md:w-52 lg:w-60 overflow-hidden rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:shadow-lg hover:shadow-white/[0.05] hover:-translate-y-1">
                  <Image
                    src={event.image}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={event.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-white/90 transition-colors leading-tight text-center">
                      {event.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex gap-3 md:gap-4 justify-center">
            {experienceEvents.slice(4, 5).map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] w-40 sm:w-44 md:w-52 lg:w-60 overflow-hidden rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:shadow-lg hover:shadow-white/[0.05] hover:-translate-y-1">
                  <Image
                    src={event.image}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={event.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-white/90 transition-colors leading-tight text-center">
                      {event.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex gap-4 justify-center">
        {experienceEvents.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.id}`}
            className="group block"
          >
            <div className="relative aspect-[4/3] w-44 overflow-hidden rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:shadow-lg hover:shadow-white/[0.05] hover:-translate-y-1">
              <Image
                src={event.image}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                alt={event.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors leading-tight text-center">
                  {event.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
