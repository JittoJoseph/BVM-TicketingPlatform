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
} from "firebase/firestore";

export async function GET() {
  if (!db) return NextResponse.json({ items: [] });
  const q = query(collection(db, "events"), orderBy("sortOrder", "asc"));
  const snap = await getDocs(q);
  const items = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
  return NextResponse.json({ items });
}

export async function POST(req: Request) {
  if (!db) return NextResponse.json({ ok: false }, { status: 503 });
  const body = await req.json();
  const { name, description = "", date = "", time = "", venue = "", bannerPath = "", active = true, sortOrder = Date.now() } = body || {};
  if (!name) return NextResponse.json({ ok: false, error: "Missing name" }, { status: 400 });
  await addDoc(collection(db, "events"), {
    name,
    description,
    date,
    time,
    venue,
    bannerPath,
    active,
    sortOrder,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return NextResponse.json({ ok: true });
}

export async function PUT(req: Request) {
  if (!db) return NextResponse.json({ ok: false }, { status: 503 });
  const body = await req.json();
  const { id, ...patch } = body || {};
  if (!id) return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 });
  await updateDoc(doc(db, "events", id), { ...patch, updatedAt: serverTimestamp() });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!db) return NextResponse.json({ ok: false }, { status: 503 });
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 });
  await deleteDoc(doc(db, "events", id));
  return NextResponse.json({ ok: true });
}
