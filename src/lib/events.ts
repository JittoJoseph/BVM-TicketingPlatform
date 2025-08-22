export const EVENTS = [
  "E‑Football",
  "Coding Challenge",
  "PC Building Competition",
] as const;

export type EventName = (typeof EVENTS)[number];

export const eventImages: Record<EventName, string> = {
  "E‑Football": "https://4kwallpapers.com/images/walls/thumbs_3t/16540.jpg",
  "Coding Challenge":
    "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2340&auto=format&fit=crop",
  "PC Building Competition":
    "https://images.unsplash.com/photo-1660855551550-2696677aaf28?q=80&w=2340&auto=format&fit=crop",
};
