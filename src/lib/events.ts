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
  markdownContent: string;
};

export const EVENTS: Event[] = [
  {
    id: "valorant",
    name: "Valorant Gaming",
    category: "Esports",
    date: "2026-01-08",
    startTime: "14:00",
    endTime: "15:00",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/valo.jpg",
    description: "5v5 Tactical Shooter Competition. Plant the spike or defuse it.",
    venue: "MAIN STAGE",
    tag: "PC LAN",
    markdownContent: `
# Valorant Gaming

## About
5v5 tactical shooter. Strategy meets skill.

## Rules
- Map pool: Ascent, Bind, Haven.
- Standard competitive rules.

## Requirements
- Peripherals (Mouse, Keyboard, Headset) provided, but you can bring your own.
`
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
    tag: "CONSOLE",
    markdownContent: `
# eFootball Championship

## About
Virtual football on the big screen.

## Rules
- 1v1 matches.
- 10 minutes match duration.
- Controller settings: Standard.

## Requirements
- Controllers provided.
`
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
    image: "/ui-ux-design.jpg",
    description: "Design the future. Create intuitive and beautiful user interfaces.",
    venue: "MAIN STAGE",
    tag: "SOLO",
    markdownContent: `
# UI/UX Designing

## About
Showcase your creativity and design skills.

## Rules
- Theme will be given on the spot.
- Tools: Figma, Adobe XD.
- Time limit: 2 hours.

## Requirements
- Laptop with design software installed.
`
  },
  {
    id: "mini-militia",
    name: "Mini Militia Classic",
    category: "Esports",
    date: "2026-01-08",
    startTime: "11:30",
    endTime: "13:00",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/minimiltia.jpg",
    description: "Nostalgic 2D Multiplayer Chaos. Battle it out in the classic arena.",
    venue: "MAIN STAGE",
    tag: "MOBILE",
    markdownContent: `
# Mini Militia Classic

## About
Relive the nostalgia with the classic 2D multiplayer shooter.

## Rules
- Map: Outpost.
- Time limit: 10 minutes.
- No hacked versions allowed.

## Requirements
- Mobile phone with the game installed.
`
  },
  {
    id: "bgmi",
    name: "BGMI",
    category: "Esports",
    date: "2026-01-08",
    startTime: "14:00",
    endTime: "15:30",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/bgmi.jpg",
    description: "Battle Royale Squad Championship. Winner Winner Chicken Dinner.",
    venue: "MAIN STAGE",
    tag: "MOBILE",
    markdownContent: `
# BGMI

## About
India's favorite Battle Royale. Squad up and dominate.

## Rules
- Map: Erangel.
- Standard competitive settings.

## Requirements
- Mobile phone with internet connection.
`
  },
  {
    id: "coding-challenge",
    name: "Coding Challenge",
    category: "Technical",
    date: "2026-01-08",
    startTime: "10:45",
    endTime: "12:00",
    pricing: "₹60",
    prizePool: "₹10,000",
    makemypassUrl: "https://app.makemypass.com/org/corex-2026",
    image: "/coding.jpg",
    description: "Solve complex algorithmic problems within the time limit.",
    venue: "MAIN STAGE",
    tag: "SOLO/TEAM",
    markdownContent: `
# Coding Challenge

## About
Test your algorithmic thinking and coding skills in this intense competition.

## Rules
- Participants can compete solo or in teams of 2.
- Languages allowed: C++, Java, Python.
- No internet access allowed during the contest.

## Requirements
- Laptop with compiler installed.
`
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
    image: "/speed-typing.jpg",
    description: "Test your typing speed and accuracy in this fast-paced competition.",
    venue: "MAIN STAGE",
    tag: "SOLO",
    markdownContent: `
# Speed Typing

## About
How fast can you type? Test your WPM.

## Rules
- Text will be provided.
- Accuracy matters as much as speed.

## Requirements
- Keyboard provided.
`
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
    image: "/5s-football.jpg",
    description: "High intensity 5-a-side football tournament.",
    venue: "MAIN STAGE",
    tag: "TEAM",
    markdownContent: `
# 5's Football

## About
Fast-paced 5-a-side football action.

## Rules
- 5 players + 2 subs.
- 10 minutes per half.
- Rolling substitutions.

## Requirements
- Sports attire and football boots/shoes.
`
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

