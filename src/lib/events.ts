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
  tag?: string; // e.g., "PC LAN", "MOBILE", "TEAM"
  details: {
    about: string;
    rules: string[];
    requirements: string[];
  };
};

export const EVENTS: Event[] = [
  {
    id: "valorant",
    name: "Valorant Gaming",
    category: "Esports",
    date: "2026-01-07",
    startTime: "12:00",
    endTime: "13:00",
    pricing: "₹100",
    prizePool: "₹6,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/valo.jpg",
    description: "5v5 Tactical Shooter Competition. Plant the spike or defuse it.",
    tag: "PC LAN",
    details: {
      about: "5v5 tactical shooter. Strategy meets skill.",
      rules: ["Map pool: Ascent, Bind, Haven.", "Standard competitive rules."],
      requirements: [
        "Peripherals (Mouse, Keyboard, Headset) provided, but you can bring your own.",
      ],
    },
  },
  {
    id: "efootball",
    name: "eFootball Championship",
    category: "Esports",
    date: "2026-01-08",
    startTime: "14:30",
    endTime: "15:30",
    pricing: "₹100",
    prizePool: "₹6,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/pess.jpg",
    description: "1v1 Console-Style Football. Show your skills on the virtual pitch.",
    tag: "CONSOLE",
    details: {
      about: "Virtual football on the big screen.",
      rules: [
        "1v1 matches.",
        "10 minutes match duration.",
        "Controller settings: Standard.",
      ],
      requirements: ["Controllers provided."],
    },
  },
  {
    id: "ui-ux",
    name: "UI/UX Designing",
    category: "Technical",
    date: "2026-01-08",
    startTime: "09:30",
    endTime: "11:30",
    pricing: "₹100",
    prizePool: "₹6,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/ui-ux-design.jpg",
    description: "Design the future. Create intuitive and beautiful user interfaces.",
    tag: "SOLO",
    details: {
      about: "Showcase your creativity and design skills.",
      rules: [
        "Theme will be given on the spot.",
        "Tools: Figma, Adobe XD.",
        "Time limit: 2 hours.",
      ],
      requirements: ["Laptop with design software installed."],
    },
  },
  {
    id: "mini-militia",
    name: "Mini Militia Classic",
    category: "Esports",
    date: "2026-01-08",
    startTime: "12:30",
    endTime: "13:30",
    pricing: "₹100",
    prizePool: "₹6,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/minimiltia.jpg",
    description: "Nostalgic 2D Multiplayer Chaos. Battle it out in the classic arena.",
    tag: "MOBILE",
    details: {
      about: "Relive the nostalgia with the classic 2D multiplayer shooter.",
      rules: [
        "Map: Outpost.",
        "Time limit: 10 minutes.",
        "No hacked versions allowed.",
      ],
      requirements: ["Mobile phone with the game installed."],
    },
  },
  {
    id: "bgmi",
    name: "BGMI",
    category: "Esports",
    date: "2026-01-08",
    startTime: "11:30",
    endTime: "12:30",
    pricing: "₹100",
    prizePool: "₹6,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/bgmi.jpg",
    description: "Battle Royale Squad Championship. Winner Winner Chicken Dinner.",
    tag: "MOBILE",
    details: {
      about: "India's favorite Battle Royale. Squad up and dominate.",
      rules: ["Map: Erangel.", "Standard competitive settings."],
      requirements: ["Mobile phone with internet connection."],
    },
  },
  {
    id: "coding-challenge",
    name: "Coding Challenge",
    category: "Technical",
    date: "2026-01-07",
    startTime: "14:00",
    endTime: "16:00",
    pricing: "₹100",
    prizePool: "₹6,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/coding.jpg",
    description: "Solve complex algorithmic problems within the time limit.",
    tag: "SOLO/TEAM",
    details: {
      about:
        "Test your algorithmic thinking and coding skills in this intense competition.",
      rules: [
        "Participants can compete solo or in teams of 2.",
        "Languages allowed: C++, Java, Python.",
        "No internet access allowed during the contest.",
      ],
      requirements: ["Laptop with compiler installed."],
    },
  },
  {
    id: "speed-typing",
    name: "Speed Typing",
    category: "Technical",
    date: "2026-01-07",
    startTime: "11:00",
    endTime: "12:00",
    pricing: "₹100",
    prizePool: "₹6,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/speed-typing.jpg",
    description: "Test your typing speed and accuracy in this fast-paced competition.",
    tag: "SOLO",
    details: {
      about: "How fast can you type? Test your WPM.",
      rules: ["Text will be provided.", "Accuracy matters as much as speed."],
      requirements: ["Keyboard provided."],
    },
  },
  {
    id: "5s-football",
    name: "5's Football",
    category: "Physical Sports",
    date: "2026-01-07",
    startTime: "14:00",
    endTime: "16:00",
    pricing: "₹100",
    prizePool: "₹6,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/5s-football.jpg",
    description: "High intensity 5-a-side football tournament.",
    tag: "TEAM",
    details: {
      about: "Fast-paced 5-a-side football action.",
      rules: ["5 players + 2 subs.", "10 minutes per half.", "Rolling substitutions."],
      requirements: ["Sports attire and football boots/shoes."],
    },
  },
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

