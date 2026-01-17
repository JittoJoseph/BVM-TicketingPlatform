import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ExperienceZone from "@/components/experience-zone";
import EventsGrid from "@/components/events-grid";
import GrandFinale from "@/components/grand-finale";
import Footer from "@/components/footer";
import { EVENTS } from "@/lib/events";

export default function Home() {
  // Generate structured data for the organization and events
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BVM Holy Cross College",
    url: "https://www.bvmtechfest.com",
    logo: "https://www.bvmtechfest.com/logo.png", // Assuming they have a logo
    sameAs: [
      // Add social media links if available
    ],
  };

  const eventListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "COREX 2026 Events",
    description: "List of events for COREX 2026 Tech Fest",
    numberOfItems: EVENTS.length,
    itemListElement: EVENTS.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Event",
        name: event.name,
        description: event.shortDescription,
        url: `https://www.bvmtechfest.com/events/${event.id}`,
        image: `https://www.bvmtechfest.com${event.image}`,
        startDate: event.dates[0],
        location: {
          "@type": "Place",
          name: event.venue,
        },
        offers: {
          "@type": "Offer",
          price: event.pricing.replace("₹", ""),
          priceCurrency: "INR",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventListStructuredData),
        }}
      />
      <main className="antialiased bg-black text-white overflow-x-hidden font-sans">
        <Navbar />
        <Hero />
        <EventsGrid />
        <GrandFinale />
        <ExperienceZone />
        <Footer />
      </main>
    </>
  );
}
