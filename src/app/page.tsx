import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ExperienceZone from "@/components/experience-zone";
import EventsGrid from "@/components/events-grid";
import GrandFinale from "@/components/grand-finale";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="antialiased bg-black text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <EventsGrid />
      <GrandFinale />
      <ExperienceZone />
      <Footer />
    </main>
  );
}
