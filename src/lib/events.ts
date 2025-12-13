export type Event = {
  id: string;
  name: string;
  category: "Esports" | "Technical" | "Physical Sports" | "Experience Zone" | "Workshop";
  dates: string[];
  startTime?: string;
  endTime?: string | null;
  pricing: string;
  prizes?: {
    total: string;
    first?: string;
    second?: string;
    third?: string;
  };
  makemypassUrl: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  tag?: string; // e.g., "PC LAN", "MOBILE", "TEAM"
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
    startTime: "12:00",
    endTime: "13:00",
    pricing: "₹100",
    prizes: {
      total: "₹8,500",
      first: "₹4,000",
      second: "₹3,000",
      third: "₹1,500"
    },
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/valo.jpg",
    shortDescription: "5v5 Tactical Shooter Competition. Plant the spike or defuse it.",
    longDescription: "5v5 tactical shooter. Strategy meets skill.\n\nMap pool: Ascent, Bind, Haven. Standard competitive rules.\n\nPeripherals (Mouse, Keyboard, Headset) provided, but you can bring your own.",
    tag: "PC LAN",
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
    startTime: "14:30",
    endTime: "15:30",
    pricing: "₹100",
    prizes: {
      total: "₹6,000"
    },
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/pess.jpg",
    shortDescription: "1v1 Console-Style Football. Show your skills on the virtual pitch.",
    longDescription: "Virtual football on the big screen.\n\n1v1 matches. 10 minutes match duration. Controller settings: Standard.\n\nControllers provided.",
    tag: "CONSOLE",
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
    startTime: "09:30",
    endTime: "11:30",
    pricing: "₹200",
    prizes: {
      total: "₹8,500",
      first: "₹4,000",
      second: "₹3,000",
      third: "₹1,500"
    },
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/ui-ux-design.jpg",
    shortDescription: "Design the future. Create intuitive and beautiful user interfaces.",
    longDescription: "Showcase your creativity and design skills.\n\nTheme will be given on the spot. Tools: Figma, Adobe XD. Time limit: 2 hours.\n\nLaptop with design software installed.",
    tag: "TEAM",
    bvmAllowed: false,
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
    startTime: "12:30",
    endTime: "13:30",
    pricing: "₹100",
    prizes: {
      total: "₹6,000"
    },
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/minimiltia.jpg",
    shortDescription: "Nostalgic 2D Multiplayer Chaos. Battle it out in the classic arena.",
    longDescription: "Relive the nostalgia with the classic 2D multiplayer shooter.\n\nMap: Outpost. Time limit: 10 minutes. No hacked versions allowed.\n\nMobile phone with the game installed.",
    tag: "MOBILE",
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
    startTime: "11:30",
    endTime: "12:30",
    pricing: "₹100",
    prizes: {
      total: "₹6,000"
    },
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/bgmi.jpg",
    shortDescription: "Battle Royale Squad Championship. Winner Winner Chicken Dinner.",
    longDescription: "India's favorite Battle Royale. Squad up and dominate.\n\nMap: Erangel. Standard competitive settings.\n\nMobile phone with internet connection.",
    tag: "MOBILE",
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
    startTime: "14:00",
    endTime: "16:00",
    pricing: "₹100",
    prizes: {
      total: "₹6,000"
    },
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/coding.jpg",
    shortDescription: "Solve complex algorithmic problems within the time limit.",
    longDescription: "Test your algorithmic thinking and coding skills in this intense competition.\n\nParticipants can compete solo or in teams of 2. Languages allowed: C++, Java, Python. No internet access allowed during the contest.\n\nLaptop with compiler installed.",
    tag: "SOLO",
    bvmAllowed: false,
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
    startTime: "11:00",
    endTime: "12:00",
    pricing: "₹100",
    prizes: {
      total: "₹6,000"
    },
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/speed-typing.jpg",
    shortDescription: "Test your typing speed and accuracy in this fast-paced competition.",
    longDescription: "How fast can you type? Test your WPM.\n\nText will be provided. Accuracy matters as much as speed.\n\nKeyboard provided.",
    tag: "SOLO",
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
    startTime: "14:00",
    endTime: "16:00",
    pricing: "₹550",
    prizes: {
      total: "₹6,000"
    },
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/3s-football.jpg",
    shortDescription: "High intensity 3-a-side football tournament.",
    longDescription: "Fast-paced 5-a-side football action.\n\n5 players + 2 subs. 10 minutes per half. Rolling substitutions.\n\nSports attire and football boots/shoes.",
    tag: "TEAM",
    coordinators: [
      { name: "Adarsh T.R", phone: "+91 95671 97741" },
      { name: "Vishnu Venu", phone: "+91 85939 81725" }
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
    duration: "ALL DAY",
  },
  {
    id: "cultural-show",
    name: "Cultural Show",
    category: "Experience Zone",
    dates: ["2026-01-08"],
    startTime: "18:00",
    endTime: "20:00",
    pricing: "Free",
    makemypassUrl: "",
    image: "/cultural.jpg",
    shortDescription: "Enjoy cultural performances and entertainment.",
    longDescription: "Cultural performances showcasing talent from various disciplines. Enjoy music, dance, and other artistic expressions in a vibrant atmosphere.",
    requiresRegistration: false,
    duration: "2 hours",
  },
  {
    id: "vr-experience",
    name: "VR Experience",
    category: "Experience Zone",
    dates: ["2026-01-07", "2026-01-08"],
    pricing: "Free",
    makemypassUrl: "",
    image: "/vr.jpg",
    shortDescription: "Immerse yourself in virtual reality experiences.",
    longDescription: "Experience VR technology and demos. Step into virtual worlds and explore interactive simulations that push the boundaries of reality.",
    requiresRegistration: false,
    duration: "ALL DAY",
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

