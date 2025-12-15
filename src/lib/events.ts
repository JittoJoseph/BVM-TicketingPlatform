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
    name: "VALORANT",
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
    longDescription: "VALORANT is a competitive 5v5 tactical shooter that rewards teamwork, communication, and smart decision-making. Expect fast-paced rounds where strategy and coordination determine the outcome.\n\n\nRules:\n• Standard 5v5 competitive rules apply.\n• Matches will follow the tournament format announced at registration.\n• Cheating, hacking, or use of unauthorized software is strictly prohibited and will result in disqualification.\n• Map pool: Ascent, Bind, Haven.\n\n\nRequirements:\n• Teams of 5 players.\n• Bring your own laptop (BYOL).\n• Bring all required peripherals: mouse, keyboard, headset, and any adapters.\n• Internet access will be provided at the venue.\n• Ensure your device is charged and bring power adapters.",
    type: "TEAM",
    duration: "HALF DAY",
    coordinators: [
      { name: "Arjun K.S", phone: "+91 94977 38996" },
      { name: "Arun Vijay", phone: "+91 85905 80928" }
    ]
  },
  {
    id: "efootball",
    name: "E-STRIKE",
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
    shortDescription: "1v1 Mobile eFootball —  Show your skills on the virtual pitch.",
      longDescription: "E-STRIKE is a 1v1 eFootball competition played on mobile devices. Expect quick, tactical matches where precision and timing matter.\n\nRules:\n• Match Time: 6 minutes\n• Player Form: Normal\n• Smart Assist: Off\n• Extra Time & Penalty: Off\n• Back-pass spamming is not allowed\n\nConnection loss rules:\n• If the match ends before half-time, replay the match and continue using the same aggregate score.\n• If the match ends between 45–80 minutes, play a 6-minute match until half-time, then add the score to the aggregate.\n• If the match ends after 80 minutes and the leading player is shown “You Won”, no replay is required.\n• If the player who was drawn or losing is shown “You Won”, play one half of a 6-minute match.\n\nRequirements:\n• Ensure eFootball is installed and up-to-date on your mobile device.\n• Participants must have sufficient mobile data for internet access; offline play is not supported for the tournament.\n• Bring your own mobile device and any chargers or adapters.\n• Controller or additional accessories are allowed if supported by the device and game settings.",
    type: "SOLO",
    duration: "2 HOURS",
    coordinators: [
      { name: "Sandeep Santhosh", phone: "+91 8078 861 848" },
      { name: "Savio Saji", phone: "+91 98477 21549" }
    ]
  },
  {
    id: "ui-ux-competition",
    name: "PIXELCRAFT",
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
    longDescription: "PIXELCRAFT is a fast-paced UI/UX design challenge where teams transform ideas into interactive designs under time pressure, balancing creativity and usability.\n\nRules:\n• Team: 1–4 members.\n• Time limit: 3 hours (strict).\n• Bring your own laptops.\n• Technology: any frontend framework and AI tools allowed (e.g., React, Next.js, GitHub Copilot).\n• Theme & details provided at start; submissions must be original and significantly customized.\n• Deliverables: at least 3 designed screens and a live deployed landing page (Vercel/Netlify/GitHub Pages) plus the GitHub repo link.\n• Presentation: 3-minute demo + 2-minute Q&A.\n• Scoring: judged on creativity, usability, implementation, and presentation.\n• Disqualification: plagiarism, offensive content, or rule violations.\n\nNote:\n• Remember to carry your college ID.",
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
    name: "WAR ZONE",
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
    longDescription: "Relive the nostalgia with the classic 2D multiplayer shooter.\n\nRules:\n• Match time: 10 minutes.\n• No hacked versions, mods, cheats, or third-party unfair tools — violation will result in immediate disqualification.\n• Map: Outpost. Standard match settings.\n\nInstallation & requirements:\n• Install Mini Militia Classic from the Google Play Store; installation will be checked before matches.\n• Bring your own mobile phone with the game installed and charged.\n• Bring chargers and any required accessories.",
    type: "SOLO",
    duration: "1 HOUR",
    coordinators: [
      { name: "Abhith K.R", phone: "+91 79075 59016" },
      { name: "Arun C Vasanthkumar", phone: "+91 90617 91360" }
    ]
  },
  {
    id: "bgmi",
    name: "BATTLE ZONE",
    category: "Esports",
    dates: ["2026-01-08"],
    startTime: "10:00 AM",
    pricing: "₹100",
    prizes: {
      first: "₹2,500",
      second: "₹1,600",
      third: "₹900"
    },
    makemypassUrl: "https://makemypass.com/event/bgmi-tournament-1",
    image: "/bgmi.jpg",
    shortDescription: "Battle Royale Squad Championship. Winner Winner Chicken Dinner.",
    longDescription: "BATTLE ZONE is a solo Battle Royale championship where individual skill and survival strategy win the day. Matches are fast-paced and require map knowledge, looting strategy, and smart positioning.\n\nRules:\n• Mode: Solo\n• Map: Erangel\n• Settings: Standard competitive settings\n• Match format: as announced at registration\n• No cheats, hacks, or third-party unfair tools — violation will result in immediate disqualification.\n\nRequirements:\n• Bring your own mobile phone with BGMI installed and updated.\n• Ensure a stable internet connection (mobile data or Wi-Fi).\n• Bring chargers and any required accessories.",
    type: "SOLO",
    duration: "HALF DAY",
    coordinators: [
      { name: "Sakhi Shine", phone: "+91 94475 53774" },
      { name: "Jacob George", phone: "+91 81388 62703" }
    ]
  },
  {
    id: "coding-challenge",
    name: "CODECLASH",
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
    shortDescription: "Solo C++ coding challenge — problem released at start.",
    longDescription: "Test your algorithmic thinking and coding skills in this intense solo competition.\n\nFormat:\n• Language: C++ (only).\n• Problem statement will be released at the start of the event.\n• No internet access allowed during the contest. A PC with the required C++ toolchain and compiler will be provided on-site.\n\nThis is a solo event; participants compete individually.",
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
    name: "FLASHTYPE",
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
    longDescription: "Speed test will be run on monkeytype.com using a 5-minute timer. Participants will type the provided text for 5 minutes; winners are selected by highest WPM with accuracy used as the tiebreaker.\n\nDetails:\n• Platform: monkeytype.com (official test environment).\n• Duration: 5 minutes per participant.\n• Scoring: primary — WPM; secondary — accuracy (used as tiebreaker).\n• Text: provided by organizers at the start of the test.\n• Equipment: a PC with internet access will be provided on-site; keyboards will be available. Personal keyboards are allowed.\n• Rules: no macros, autocorrect tools, external text expansion, or any automated aids. Any unfair tools will result in immediate disqualification.\n\nResults and disputes:\n• Final WPM and accuracy reported by the platform will be used to determine winners.\n• In case of disputes, judges' decisions are final.",
    type: "SOLO",
    duration: "1 HOUR",
    coordinators: [
      { name: "Nandana Shaiby", phone: "+91 8078 459 413" },
      { name: "Niranjana Babu", phone: "+91 85909 70369" }
    ]
  },
  {
    id: "3s-football",
    name: "TRIKICK",
    category: "Physical Sports",
    dates: ["2026-01-07"],
    startTime: "07:30 AM",
    pricing: "₹450",
    prizes: {
      first: "₹3,000",
      second: "₹2,000"
    },
    makemypassUrl: "https://makemypass.com/event/3s-football-championship",
    image: "/3s-football.jpg",
    shortDescription: "High intensity 3-a-side football tournament.",
    longDescription: "TRIKICK is a fast-paced 3-a-side football tournament that rewards quick passing, sharp positioning, and teamwork in short, high-energy matches.\n\nFormat & Rules:\n• Match length: 10 minutes per half; rolling substitutions allowed.\n• Fair play: standard fouls and referee decisions apply.\n• Age restriction: Under 21 only — participants must be under 21 on the event date.\n• Referee's decision is final.\n\nRequirements:\n• Bring original photo ID proof (college ID or government-issued ID) for verification.\n• Sports attire and football boots/shoes are mandatory.\n• Please arrive 30 minutes before kickoff for registration and player check-in.",
    type: "TEAM",
    duration: "HALF DAY",
    coordinators: [
      { name: "Adarsh T.R", phone: "+91 95671 97741" },
      { name: "Vishnu Venu", phone: "+91 85939 81725" }
    ]
  },
  {
    id: "neon-football",
    name: "NEONCLASH",
    category: "Physical Sports",
    dates: ["2026-01-08"],
    startTime: "02:30 PM",
    pricing: "₹350",
    prizes: {
      first: "₹2,500",
      second: "₹1,500"
    },
    makemypassUrl: "https://makemypass.com/event/neon-football-competition",
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
    name: "EXIBIT",
    category: "Experience Zone",
    dates: ["2026-01-07", "2026-01-08"],
    pricing: "Free",
    makemypassUrl: "",
    image: "/exhibition.jpg",
    shortDescription: "Explore the latest in tech and innovation.",
    longDescription: "Explore the future of technology at EXIBIT — a hands-on exhibition focused on Internet of Things (IoT), e-waste and sustainability, maker projects, and early-stage prototypes. Discover practical demos, learn about responsible electronics recycling, and connect with student teams and startups.\n\nHighlights:\n• IoT & Embedded Systems: live demos of sensors, smart-home and low-power prototypes.\n• E-waste & Sustainability: responsible recycling, upcycling projects, and repair/repurpose showcases.\n• Maker & Robotics: interactive builds, drones, and hands-on demos.\n• Workshops & Talks: short sessions on circular electronics, low-power design, and product development.\n• Student Projects & Startups: see prototypes, ask questions, and network with creators.\n\nOpen to all; no registration required. Visit during exhibition hours to explore demos and attend short sessions.",
    requiresRegistration: false,
    duration: "FULL DAY",
  },
  {
    id: "cultural-show",
    name: "RHYTHMIX",
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
    name: "VIRTUAX",
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
    name: "PLAYZONE",
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

