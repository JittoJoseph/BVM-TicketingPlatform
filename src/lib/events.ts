export type Event = {
  id: string;
  name: string;
  category: "Esports" | "Technical" | "Physical Sports" | "Experience Zone" | "Workshop";
  dates: string[];
  startTime?: string;
  pricing: string;
  prizes?: {
    first?: string;
    second?: string;
    third?: string;
  };
  makemypassUrl: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  type?: "SOLO" | "TEAM" | "SOLO/TEAM" | null;
  bvmAllowed?: boolean; // default true
  requiresRegistration?: boolean; // default true
  duration?: string;
  coordinators?: { name: string; phone: string }[];
};

export const EVENTS: Event[] = [
  {
    id: "valorant",
    name: "Valorant Gaming",
    category: "Esports",
    dates: ["2026-01-07"],
    startTime: "12:00 PM",
    pricing: "₹500",
    prizes: {
      first: "₹4,000",
      second: "₹3,000",
      third: "₹1,500"
    },
    makemypassUrl: "https://makemypass.com/event/valorant-challenge",
    image: "/valo.jpg",
    shortDescription: "5v5 Tactical Shooter Competition. Plant the spike or defuse it.",
    longDescription: "5v5 tactical shooter. Strategy meets skill.\n\nMap pool: Ascent, Bind, Haven. Standard competitive rules.\n\nPeripherals (Mouse, Keyboard, Headset) provided, but you can bring your own.",
    type: "TEAM",
    duration: "HALF DAY",
    coordinators: [
      { name: "Arjun K.S", phone: "+91 94977 38996" },
      { name: "Arun Vijay", phone: "+91 85905 80928" }
    ]
  },
  {
    id: "efootball",
    name: "eFootball Championship",
    category: "Esports",
    dates: ["2026-01-08"],
    startTime: "01:30 PM",
    pricing: "₹100",
    prizes: {
      first: "₹2,000",
      second: "₹1,000",
      third: "₹500"
    },
    makemypassUrl: "https://makemypass.com/event/e-football-tournament",
    image: "/pess.jpg",
    shortDescription: "1v1 Console-Style Football. Show your skills on the virtual pitch.",
    longDescription: "Virtual football on the big screen.\n\n1v1 matches. 10 minutes match duration. Controller settings: Standard.\n\nControllers provided.",
    type: "SOLO",
    duration: "2 HOURS",
    coordinators: [
      { name: "Sandeep Santhosh", phone: "+91 8078 861 848" },
      { name: "Savio Saji", phone: "+91 98477 21549" }
    ]
  },
  {
    id: "ui-ux-competition",
    name: "UI/UX Designing",
    category: "Technical",
    dates: ["2026-01-08"],
    startTime: "10:00 AM",
    pricing: "₹260",
    prizes: {
      first: "₹3,000",
      second: "₹2,000",
      third: "₹1,000"
    },
    makemypassUrl: "https://makemypass.com/event/ui-ux-challenge",
    image: "/ui-ux-design.jpg",
    shortDescription: "Design the future. Create intuitive and beautiful user interfaces.",
    longDescription: "Showcase your creativity and design skills.\n\nTheme will be given on the spot. Tools: Figma, Adobe XD. Time limit: 2 hours.\n\nLaptop with design software installed.",
    type: "TEAM",
    bvmAllowed: false,
    duration: "HALF DAY",
    coordinators: [
      { name: "Ajil Saji", phone: "+91 90728 05856" },
      { name: "Steve Suresh George", phone: "+91 90613 02064" }
    ]
  },
  {
    id: "mini-militia",
    name: "Mini Militia Classic",
    category: "Esports",
    dates: ["2026-01-08"],
    startTime: "03:30 PM",
    pricing: "₹60",
    prizes: {
      first: "₹1,500",
      second: "₹1000",
      third: "₹500"
    },
    makemypassUrl: "https://makemypass.com/event/mini-militia-tournament-1",
    image: "/minimiltia.jpg",
    shortDescription: "Nostalgic 2D Multiplayer Chaos. Battle it out in the classic arena.",
    longDescription: "Relive the nostalgia with the classic 2D multiplayer shooter.\n\nMap: Outpost. Time limit: 10 minutes. No hacked versions allowed.\n\nMobile phone with the game installed.",
    type: "SOLO",
    duration: "1 HOUR",
    coordinators: [
      { name: "Abhith K.R", phone: "+91 79075 59016" },
      { name: "Arun C Vasanthkumar", phone: "+91 90617 91360" }
    ]
  },
  {
    id: "bgmi",
    name: "BGMI",
    category: "Esports",
    dates: ["2026-01-08"],
    startTime: "10:00 AM",
    pricing: "₹240",
    prizes: {
      first: "₹2,500",
      second: "₹1,600",
      third: "₹900"
    },
    makemypassUrl: "https://makemypass.com/event/bgmi-tournament-1",
    image: "/bgmi.jpg",
    shortDescription: "Battle Royale Squad Championship. Winner Winner Chicken Dinner.",
    longDescription: "India's favorite Battle Royale. Squad up and dominate.\n\nMap: Erangel. Standard competitive settings.\n\nMobile phone with internet connection.",
    type: "SOLO",
    duration: "HALF DAY",
    coordinators: [
      { name: "Sakhi Shine", phone: "+91 94475 53774" },
      { name: "Jacob George", phone: "+91 81388 62703" }
    ]
  },
  {
    id: "coding-challenge",
    name: "Coding Challenge",
    category: "Technical",
    dates: ["2026-01-07"],
    startTime: "02:00 PM",
    pricing: "₹120",
    prizes: {
      first: "₹2,000",
      second: "₹1,000",
      third: "₹500"
    },
    makemypassUrl: "https://makemypass.com/event/coding-challenge",
    image: "/coding.jpg",
    shortDescription: "Solve complex algorithmic problems within the time limit.",
    longDescription: "Test your algorithmic thinking and coding skills in this intense competition.\n\nParticipants can compete solo or in teams of 2. Languages allowed: C++, Java, Python. No internet access allowed during the contest.\n\nLaptop with compiler installed.",
    type: "SOLO",
    bvmAllowed: false,
    duration: "1 HOUR",
    coordinators: [
      { name: "Deon Jose", phone: "+91 6282 242 610" },
      { name: "Sneha Saju", phone: "+91 95441 65049" }
    ]
  },
  {
    id: "speed-typing",
    name: "Speed Typing",
    category: "Technical",
    dates: ["2026-01-07"],
    startTime: "11:00 AM",
    pricing: "₹100",
    prizes: {
      first: "₹1,500",
      second: "₹1,000",
      third: "₹500"
    },
    makemypassUrl: "https://makemypass.com/event/speed-typing",
    image: "/speed-typing.jpg",
    shortDescription: "Test your typing speed and accuracy in this fast-paced competition.",
    longDescription: "How fast can you type? Test your WPM.\n\nText will be provided. Accuracy matters as much as speed.\n\nKeyboard provided.",
    type: "SOLO",
    duration: "1 HOUR",
    coordinators: [
      { name: "Nandana Shaiby", phone: "+91 8078 459 413" },
      { name: "Niranjana Babu", phone: "+91 85909 70369" }
    ]
  },
  {
    id: "3s-football",
    name: "3's Football",
    category: "Physical Sports",
    dates: ["2026-01-07"],
    startTime: "07:30 AM",
    pricing: "₹350",
    prizes: {
      first: "₹2,000",
      second: "₹1,500"
    },
    makemypassUrl: "https://makemypass.com/event/3s-football-championship",
    image: "/3s-football.jpg",
    shortDescription: "High intensity 3-a-side football tournament.",
    longDescription: "Fast-paced 5-a-side football action.\n\n5 players + 2 subs. 10 minutes per half. Rolling substitutions.\n\nSports attire and football boots/shoes.",
    type: "TEAM",
    duration: "HALF DAY",
    coordinators: [
      { name: "Adarsh T.R", phone: "+91 95671 97741" },
      { name: "Vishnu Venu", phone: "+91 85939 81725" }
    ]
  },
  {
    id: "neon-football",
    name: "Neon Football",
    category: "Physical Sports",
    dates: ["2026-01-08"],
    startTime: "02:30 PM",
    pricing: "₹350",
    prizes: {
      first: "₹2,500",
      second: "₹1,500"
    },
    makemypassUrl: "https://makemypass.com/event/neon-football-championship",
    image: "/neon-football.jpg",
    shortDescription: "High intensity Neon Football tournament under lights.",
    longDescription: "Fast-paced 5-a-side football action under neon lights.\n\n5 players + 2 subs. 10 minutes per half. Rolling substitutions.\n\nSports attire and football boots/shoes.",
    type: "TEAM",
    duration: "HALF DAY",
    coordinators: [
      { name: "Adhityan MS", phone: "+91 77362 01310" },
      { name: "Abhimanue Umesh", phone: "+91 73568 97351" }
    ]
  },
  {
    id: "exhibition",
    name: "Exhibition",
    category: "Experience Zone",
    dates: ["2026-01-07", "2026-01-08"],
    pricing: "Free",
    makemypassUrl: "",
    image: "/exhibition.jpg",
    shortDescription: "Explore the latest in tech and innovation.",
    longDescription: "Discover innovative projects and technologies from various fields. Interact with cutting-edge demos and exhibits showcasing the future of technology.",
    requiresRegistration: false,
    duration: "FULL DAY",
  },
  {
    id: "cultural-show",
    name: "Cultural Show",
    category: "Experience Zone",
    dates: ["2026-01-07"],
    startTime: "4:00 PM",
    pricing: "Free",
    makemypassUrl: "",
    image: "/cultural.jpg",
    shortDescription: "Enjoy cultural performances and entertainment.",
    longDescription: "Cultural performances showcasing talent from various disciplines. Enjoy music, dance, and other artistic expressions in a vibrant atmosphere.",
    requiresRegistration: false,
    duration: "2 HOURS",
    coordinators: [
      { name: "Arun Kurian", phone: "+91 90720 51790" }
    ]
  },
  {
    id: "vr-experience",
    name: "VR Experience",
    category: "Experience Zone",
    dates: ["2026-01-07", "2026-01-08"],
    pricing: "₹40",
    makemypassUrl: "",
    image: "/vr.jpg",
    shortDescription: "Immerse yourself in virtual reality experiences.",
    longDescription: "Experience VR technology and demos. Step into virtual worlds and explore interactive simulations that push the boundaries of reality.",
    requiresRegistration: false,
    duration: "FULL DAY",
  },
  {
    id: "gaming-arena",
    name: "Gaming Arena",
    category: "Experience Zone",
    dates: ["2026-01-07", "2026-01-08"],
    pricing: "₹40",
    makemypassUrl: "",
    image: "/gaming-arena.jpg",
    shortDescription: "Dive into the ultimate gaming experience.",
    longDescription: "Explore a variety of gaming setups and technologies. Engage in interactive gaming sessions and discover the latest in gaming innovation.",
    requiresRegistration: false,
    duration: "FULL DAY",
  },
];

export function getPrizePool(event: Event): string {
  const prizes = event.prizes;
  if (!prizes) return "₹0";
  let total = 0;
  if (prizes.first) total += parseInt(prizes.first.replace('₹', '').replace(',', ''));
  if (prizes.second) total += parseInt(prizes.second.replace('₹', '').replace(',', ''));
  if (prizes.third) total += parseInt(prizes.third.replace('₹', '').replace(',', ''));
  return `₹${total.toLocaleString()}`;
}

// Returns the total prize pool across all events as a formatted string (e.g. "₹10,000")
export function getTotalPrizePool(): string {
  let total = 0;
  for (const event of EVENTS) {
    if (!event.prizes) continue;
    if (event.prizes.first) total += parseInt(event.prizes.first.replace('₹', '').replace(',', ''));
    if (event.prizes.second) total += parseInt(event.prizes.second.replace('₹', '').replace(',', ''));
    if (event.prizes.third) total += parseInt(event.prizes.third.replace('₹', '').replace(',', ''));
  }
  return `₹${total.toLocaleString()}`;
}

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

