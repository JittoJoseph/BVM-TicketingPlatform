export type Ticket = {
  id: string;
  name: string;
  email: string;
  college: string;
  event: string;
  createdAt: number;
};

export const TICKET_KEY = "bvm-ticket";

export function saveTicket(t: Ticket) {
  if (typeof window === "undefined") return;
  localStorage.setItem(TICKET_KEY, JSON.stringify(t));
}

export function loadTicket(): Ticket | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(TICKET_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Ticket;
  } catch {
    return null;
  }
}

export function clearTicket() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TICKET_KEY);
}

export function generateId() {
  const part = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BVM-${part()}-${part()}`;
}
