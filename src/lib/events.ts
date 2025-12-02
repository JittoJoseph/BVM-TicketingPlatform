export type Event = {
  id: string;
  name: string;
  category: "Esports" | "Technical" | "Physical Sports" | "Experience Zone" | "Workshop";
  date: string;
  startTime: string;
  endTime: string | null;
  pricing: string;
  prizePool: string;
  makemypassUrl: string;
  image: string;
  description: string;
  venue: string;
  tag?: string; // e.g., "PC LAN", "MOBILE", "TEAM"
};

export const EVENTS: Event[] = [
  {
    id: "coding-challenge",
    name: "Coding Challenge",
    category: "Technical",
    date: "2026-01-07",
    startTime: "10:45",
    endTime: "12:00",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
    description: "Solve complex algorithmic problems within the time limit.",
    venue: "MAIN STAGE",
    tag: "SOLO/TEAM"
  },
  {
    id: "mini-militia",
    name: "Mini Militia Classic",
    category: "Esports",
    date: "2026-01-07",
    startTime: "11:30",
    endTime: "13:00",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/minimiltia.jpg",
    description: "Nostalgic 2D Multiplayer Chaos. Battle it out in the classic arena.",
    venue: "MAIN STAGE",
    tag: "MOBILE"
  },
  {
    id: "valorant",
    name: "Valorant Gaming",
    category: "Esports",
    date: "2026-01-07",
    startTime: "14:00",
    endTime: "15:00",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/valo.jpg",
    description: "5v5 Tactical Shooter Competition. Plant the spike or defuse it.",
    venue: "MAIN STAGE",
    tag: "PC LAN"
  },
  {
    id: "free-fire",
    name: "Free Fire Tournament",
    category: "Esports",
    date: "2026-01-07",
    startTime: "14:00",
    endTime: "15:30",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/freefire.jpg",
    description: "Solo/Squad Firefight Tournament. Survive till the end.",
    venue: "MAIN STAGE",
    tag: "MOBILE"
  },
  {
    id: "bgmi",
    name: "BGMI",
    category: "Esports",
    date: "2026-01-07",
    startTime: "14:00",
    endTime: "15:30",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "https://images.financialexpressdigital.com/2022/07/BGMI.jpg",
    description: "Battle Royale Squad Championship. Winner Winner Chicken Dinner.",
    venue: "MAIN STAGE",
    tag: "MOBILE"
  },
  {
    id: "5s-football",
    name: "5's Football",
    category: "Physical Sports",
    date: "2026-01-08",
    startTime: "10:00",
    endTime: null,
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/5s.jpeg",
    description: "High intensity 5-a-side football tournament.",
    venue: "MAIN STAGE",
    tag: "TEAM"
  },
  {
    id: "ui-ux",
    name: "UI/UX Designing",
    category: "Technical",
    date: "2026-01-08",
    startTime: "10:15",
    endTime: "12:30",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=1000&auto=format&fit=crop",
    description: "Design the future. Create intuitive and beautiful user interfaces.",
    venue: "MAIN STAGE",
    tag: "SOLO"
  },
  {
    id: "speed-typing",
    name: "Speed Typing",
    category: "Technical",
    date: "2026-01-08",
    startTime: "11:00",
    endTime: "12:00",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?q=80&w=1000&auto=format&fit=crop",
    description: "Test your typing speed and accuracy in this fast-paced competition.",
    venue: "MAIN STAGE",
    tag: "SOLO"
  },
  {
    id: "efootball",
    name: "eFootball Championship",
    category: "Esports",
    date: "2026-01-08",
    startTime: "14:00",
    endTime: "15:30",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/pess.jpg",
    description: "1v1 Console-Style Football. Show your skills on the virtual pitch.",
    venue: "MAIN STAGE",
    tag: "CONSOLE"
  },
  {
    id: "music-concert",
    name: "Music Concert",
    category: "Experience Zone",
    date: "2026-01-08",
    startTime: "17:30",
    endTime: "19:00",
    pricing: "₹100",
    prizePool: "N/A",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "https://images.unsplash.com/photo-1459749411177-0473ef71607b?q=80&w=1000&auto=format&fit=crop",
    description: "Live music concert to end the fest with a bang.",
    venue: "MAIN STAGE",
    tag: "LIVE"
  }
];

export function getEventsByCategory(category: string) {
  return EVENTS.filter(event => event.category === category);
}

// Helper function to check if an event name is valid
export function isValidEventName(name: string): boolean {
  return EVENTS.some((e) => e.name.toLowerCase() === name.toLowerCase());
}

// Helper function to get formatted event names for display
export function getEventNamesForDisplay(): string {
  const names = EVENTS.map(e => e.name);
  if (names.length <= 2) return names.join(" and ");
  const lastEvent = names.pop();
  return names.join(", ") + ", and " + lastEvent;
}

