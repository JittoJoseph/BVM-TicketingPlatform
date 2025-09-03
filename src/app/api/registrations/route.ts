import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
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
  where,
} from "firebase/firestore";

interface RegistrationData {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  event: string;
  checkedIn?: boolean;
  checkedInAt?: string;
  ticketId?: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export async function GET(req: Request) {
  if (!db) return NextResponse.json({ items: [] });
  const { searchParams } = new URL(req.url);
  const ticket = searchParams.get("ticket");

  let q;
  if (ticket) {
    q = query(collection(db, "registrations"), where("id", "==", ticket));
  } else {
    q = query(collection(db, "registrations"), orderBy("createdAt", "desc"));
  }

  const snap = await getDocs(q);
  const items: RegistrationData[] = snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<RegistrationData, "id">),
  }));
  return NextResponse.json({ items });
}

export async function POST(req: Request) {
  if (!db) return NextResponse.json({ ok: false }, { status: 503 });
  try {
    const body: Omit<RegistrationData, "id" | "createdAt" | "updatedAt"> = await req.json();
    const docRef = await addDoc(collection(db, "registrations"), {
      ...body,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return NextResponse.json({ ok: true, id: docRef.id });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ ok: false, error: "Failed to create registration" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  if (!db) return NextResponse.json({ ok: false }, { status: 503 });
  try {
    const body: Partial<RegistrationData> & { id: string } = await req.json();
    const { id, ...patch } = body;
    await updateDoc(doc(db, "registrations", id), {
      ...patch,
      updatedAt: serverTimestamp(),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ ok: false, error: "Failed to update registration" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!db) return NextResponse.json({ ok: false }, { status: 503 });
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 });
  try {
    await deleteDoc(doc(db, "registrations", id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ ok: false, error: "Failed to delete registration" }, { status: 500 });
  }
}
