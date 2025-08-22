export const EVENTS = [
  "E‑Football",
  "Coding Challenge",
  "PC Building Competition",
] as const;

export type EventName = (typeof EVENTS)[number];

export const eventImages: Record<EventName, string> = {
  "E‑Football": "https://4kwallpapers.com/images/walls/thumbs_3t/16540.jpg",
  "Coding Challenge":
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  "PC Building Competition":
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1600&auto=format&fit=crop",
};
