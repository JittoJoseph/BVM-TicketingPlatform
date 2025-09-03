"use client";

import { useCallback, useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { QrScanner } from "@/components/qr-scanner";

export default function CheckinPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<null | {
    uid: string;
    email: string | null;
  }>(null);
  const [role, setRole] = useState<null | "admin" | "coordinator">(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    const unsub = auth
      ? onAuthStateChanged(auth, async (u) => {
          setRoleLoading(true);
          try {
            if (u) {
              setUser({ uid: u.uid, email: u.email });
              if (db) {
                const roleDoc = await getDoc(doc(db, "roles", u.uid));
                setRole(
                  roleDoc.exists()
                    ? (roleDoc.data().role as "admin" | "coordinator")
                    : null
                );
              } else {
                setRole(null);
              }
            } else {
              setUser(null);
              setRole(null);
            }
          } finally {
            setRoleLoading(false);
          }
        })
      : undefined;
    return () => unsub && unsub();
  }, []);

  const mark = useCallback(async (ticketId: string) => {
    if (!db) return "DB not configured";
    const qy = query(
      collection(db, "registrations"),
      where("id", "==", ticketId.trim())
    );
    const snap = await getDocs(qy);
    if (snap.empty) return "Not found";
    const d = snap.docs[0];
    await updateDoc(d.ref, {
      checkedIn: true,
      checkedInAt: new Date().toISOString(),
    });
    return "Checked in ✅";
  }, []);

  // scanner handles submissions; no manual input

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-2xl font-semibold mb-6">
          Coordinator/Admin Sign in
        </h1>
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!auth) return;
            await signInWithEmailAndPassword(auth, email, password);
          }}
        >
          <input
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full rounded-xl bg-indigo-600 text-white px-4 py-3">
            Sign in
          </button>
        </form>
      </div>
    );
  }

  if (roleLoading) {
    return (
      <div className="mx-auto max-w-md px-6 py-16">
        <div className="text-slate-600">Checking permissions…</div>
      </div>
    );
  }

  if (role !== "admin" && role !== "coordinator") {
    return (
      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Restricted</h1>
            <p className="text-slate-600 mt-1">
              You don&apos;t have access to check-in tools.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-600">{user.email}</span>
            <button
              className="rounded-xl border px-3 py-1"
              onClick={async () => auth && (await signOut(auth))}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-cream-100)] text-slate-800 pt-4 relative z-10">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-fuchsia-200/40 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl opacity-60" />
      </div>
      <div className="mx-auto max-w-md px-6 py-12 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-display text-xl md:text-2xl font-semibold">
            Fast Check-in
          </h1>
          {user && (
            <button
              className="rounded-xl border px-3 py-1"
              onClick={async () => auth && (await signOut(auth))}
            >
              Sign out
            </button>
          )}
        </div>
        <div className="mb-4 rounded-3xl bg-white p-3 shadow border border-white/60">
          <QrScanner
            onResult={async (text) => {
              const parts = String(text).split("|");
              const ticketId = parts[0] || text;
              const res = await mark(ticketId);
              setStatus(res);
            }}
          />
        </div>
        {status && <div className="mt-3 text-sm text-slate-700">{status}</div>}
      </div>
    </div>
  );
}
