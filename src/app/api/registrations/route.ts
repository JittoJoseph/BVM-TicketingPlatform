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

export async function GET(req: Request) {
  try {
    if (!db) return NextResponse.json({ items: [] });
    const url = new URL(req.url);
    const ticket = url.searchParams.get("ticket");
    if (ticket) {
      const q1 = query(collection(db, "registrations"), where("id", "==", ticket));
      const snap1 = await getDocs(q1);
      const items1 = snap1.docs.map((d) => ({ id: d.id, ...(d.data() as Record<string, unknown>) }));
      return NextResponse.json({ items: items1 });
    }
    const qy = query(collection(db, "registrations"), orderBy("createdAt", "desc"));
    const snap = await getDocs(qy);
    const items = snap.docs.map((d) => ({ id: d.id, ...(d.data() as Record<string, unknown>) }));
    return NextResponse.json({ items });
  } catch (e: any) {
    return NextResponse.json({ items: [], error: e?.message || String(e) }, { status: 200 });
  }
}

export async function POST(req: Request) {
  try {
    if (!db) return NextResponse.json({ ok: false, error: "DB not configured" }, { status: 503 });
    let body: any = null;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
    }
    const { id, name, email, phone, college, event } = body ?? {};
    if (!id || !name || !email || !phone || !college || !event) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    await addDoc(collection(db, "registrations"), {
      id,
      name,
      email,
      phone,
      college,
      event,
      createdAt: serverTimestamp(),
    });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    if (!db) return NextResponse.json({ ok: false, error: "DB not configured" }, { status: 503 });
    let body: any = null;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
    }
    const { id, ...patch } = body || {};
    if (!id) return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 });
    await updateDoc(doc(db, "registrations", id), { ...patch, updatedAt: serverTimestamp() });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    if (!db) return NextResponse.json({ ok: false, error: "DB not configured" }, { status: 503 });
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 });
    await deleteDoc(doc(db, "registrations", id));
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 });
  }
}
