import { db } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

// Firestore-backed events
export type EventDoc = {
  id?: string; // Firestore doc id (assigned on read)
  name: string;
  description?: string;
  date?: string; // ISO date string (e.g. 2025-12-15)
  time?: string; // e.g. "10:00 AM"
  venue?: string; // e.g. "Main Auditorium"
  bannerPath?: string; // e.g. "/1.jpg" from public folder
  active?: boolean;
  sortOrder?: number;
  createdAt?: unknown;
  updatedAt?: unknown;
};

const EVENTS_COLLECTION = "events" as const;

export async function listEvents(): Promise<EventDoc[]> {
  if (!db) return [];
  try {
    const q = query(
      collection(db, EVENTS_COLLECTION),
      orderBy("sortOrder", "asc")
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as EventDoc) }));
  } catch (err) {
    console.warn("Failed to list events:", err);
    return [];
  }
}

export async function createEvent(input: EventDoc): Promise<string | null> {
  if (!db) return null;
  const ref = await addDoc(collection(db, EVENTS_COLLECTION), {
    name: input.name,
    description: input.description ?? "",
    date: input.date ?? "",
    time: input.time ?? "",
    venue: input.venue ?? "",
    bannerPath: input.bannerPath ?? "",
    active: input.active ?? true,
    sortOrder: input.sortOrder ?? Date.now(),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateEvent(id: string, patch: Partial<EventDoc>) {
  if (!db) return;
  await updateDoc(doc(db, EVENTS_COLLECTION, id), {
    ...patch,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteEvent(id: string) {
  if (!db) return;
  await deleteDoc(doc(db, EVENTS_COLLECTION, id));
}

export async function getEventByName(name: string): Promise<EventDoc | null> {
  const all = await listEvents();
  const found = all.find((e) => e.name.toLowerCase() === name.toLowerCase());
  return found || null;
}
