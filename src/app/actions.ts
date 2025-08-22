"use server";

import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

type CreateRegistrationInput = {
  id: string;
  name: string;
  email: string;
  college: string;
  event: string;
};

export async function createRegistration(input: CreateRegistrationInput) {
  if (!db) return { ok: true, skipped: true } as const;
  await addDoc(collection(db, "registrations"), {
    ...input,
    createdAt: serverTimestamp(),
  });
  return { ok: true } as const;
}
