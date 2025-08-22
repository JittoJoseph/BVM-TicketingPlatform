import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";

export async function GET() {
  if (!db) return NextResponse.json({ items: [] });
  const q = query(collection(db, "registrations"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  const items = snap.docs.map((d) => ({ id: d.id, ...(d.data() as Record<string, unknown>) }));
  return NextResponse.json({ items });
}

export async function POST(req: Request) {
  if (!db) return NextResponse.json({ ok: false, error: "DB not configured" }, { status: 503 });
  const body = await req.json();
  const { id, name, email, college, event } = body ?? {};
  if (!id || !name || !email || !college || !event) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  await addDoc(collection(db, "registrations"), {
    id,
    name,
    email,
    college,
    event,
    createdAt: serverTimestamp(),
  });
  return NextResponse.json({ ok: true });
}
