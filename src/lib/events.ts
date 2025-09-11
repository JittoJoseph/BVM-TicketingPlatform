// Simple event type for the hardcoded events in EventCards component
export type Event = {
  name: string;
  description: string;
  bannerPath: string;
  venue: string;
  time: string;
};

// Hardcoded events list - matches what's in EventCards component
export const EVENTS: Event[] = [
  {
    name: "E-Football",
    description: "Compete in high‑intensity matches on the big screen. Solo entry.",
    bannerPath: "1.jpg",
    venue: "Main Auditorium",
    time: "10:00 AM",
  },
  {
    name: "PC Building",
    description: "Assemble and optimize a PC for performance and aesthetics.",
    bannerPath: "2.png",
    venue: "Main Auditorium",
    time: "10:00 AM",
  },
  {
    name: "Coding Challenge",
    description: "Solve timed problems and climb the leaderboard. One participant per team.",
    bannerPath: "3.jpg",
    venue: "Main Auditorium",
    time: "10:00 AM",
  },
  {
    name: "Speed Typing",
    description: "Test your typing speed and accuracy in this fast-paced competition.",
    bannerPath: "4.png",
    venue: "Main Auditorium",
    time: "10:00 AM",
  },
  {
    name: "Tech Quiz",
    description: "Challenge your technical knowledge across various domains.",
    bannerPath: "5.jpg",
    venue: "Main Auditorium",
    time: "10:00 AM",
  },
];

// Helper function to get event by name
export function getEventByName(name: string): Event | null {
  const found = EVENTS.find((e) => e.name.toLowerCase() === name.toLowerCase());
  return found || null;
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
