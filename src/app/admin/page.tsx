"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
} from "firebase/firestore";
import { QrScanner } from "@/components/qr-scanner";

type Role = "admin" | "coordinator";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<null | {
    uid: string;
    email: string | null;
  }>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [roleLoading, setRoleLoading] = useState(true);
  const [regCount, setRegCount] = useState<number | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const unsub = auth
      ? onAuthStateChanged(auth, async (u) => {
          setRoleLoading(true);
          try {
            if (u) {
              setUser({ uid: u.uid, email: u.email });
              if (db) {
                const roleDoc = await getDoc(doc(db, "roles", u.uid));
                const r = roleDoc.exists()
                  ? (roleDoc.data().role as Role)
                  : null;
                setRole(r);
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

  useEffect(() => {
    (async () => {
      if (!db || role !== "admin") return;
      try {
        const coll = collection(db, "registrations");
        const snap = await getCountFromServer(coll);
        setRegCount(snap.data().count);
      } catch (err) {
        console.warn("Skipping registrations count:", err);
        setRegCount(null);
      }
    })();
  }, [role]);

  const canManage = role === "admin";

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-2xl font-semibold mb-6">Admin Sign in</h1>
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
              You don&apos;t have access to admin tools.
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
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-fuchsia-200/40 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl opacity-60" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-10 relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Admin
            </h1>
            <p className="text-slate-600 mt-1">
              Minimal tools for check-in and registrations.
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

        {canManage && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white p-5 shadow border border-white/60">
              <div className="text-sm text-slate-500">Total Registrations</div>
              <div className="text-3xl font-bold">{regCount ?? "—"}</div>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow border border-white/60">
              <div className="text-sm text-slate-500">Venue</div>
              <div className="text-3xl font-bold">Main Auditorium</div>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow border border-white/60">
              <div className="text-sm text-slate-500">Time</div>
              <div className="text-3xl font-bold">10:00 AM</div>
            </div>
          </div>
        )}

        {/* Check-in */}
        <section className="mt-8">
          <div className="rounded-3xl bg-white p-5 shadow border border-white/60">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Check-in</h2>
              <div className="text-sm text-slate-500">
                All events at Main Auditorium, 10:00 AM
              </div>
            </div>
            <div className="mt-4">
              <div className="rounded-2xl border p-3">
                <QrScanner
                  onResult={async (text) => {
                    const parts = String(text).split("|");
                    const ticketId = parts[0] || text;
                    const res = await checkInByScan(ticketId);
                    setStatus(res);
                  }}
                />
              </div>
            </div>
            {status && (
              <div className="mt-3 text-sm text-slate-600">{status}</div>
            )}
          </div>
        </section>

        {/* Registrations list (admin only) */}
        {canManage && (
          <section className="mt-10">
            <h2 className="font-medium mb-3">Registrations</h2>
            <RegistrationsManager />
          </section>
        )}

        {/* Quick links */}
        <div className="mt-10">
          <h2 className="font-medium">Quick links</h2>
          <ul className="list-disc pl-5 text-slate-700 mt-2">
            <li>
              <Link className="text-indigo-600" href="/">
                Public site
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

async function checkInByScan(ticketId: string) {
  if (!ticketId?.trim()) return "Scan a valid Ticket ID";
  try {
    const res = await fetch(
      `/api/registrations?ticket=${encodeURIComponent(ticketId)}`
    );
    const data = await safeJson(res);
    const item = Array.isArray(data?.items) ? data.items[0] : null;
    if (!item) return "Not found";
    if (item.checkedIn) return "Already checked in";
    await fetch("/api/registrations", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: item.id,
        checkedIn: true,
        checkedInAt: new Date().toISOString(),
      }),
    });
    return "Checked in ✅";
  } catch (error) {
    console.error("Check-in error:", error);
    return "Error";
  }
}

async function safeJson(res: Response) {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function RegistrationsManager() {
  const [rows, setRows] = useState<
    {
      id: string;
      name: string;
      email: string;
      phone: string;
      college: string;
      event: string;
      checkedIn?: boolean;
      ticketId?: string;
    }[]
  >([]);
  const [editing, setEditing] = useState<{
    id: string;
    name: string;
    email: string;
    phone: string;
    college: string;
    event: string;
  } | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    event: "",
  });

  useEffect(() => {
    (async () => {
      await refresh();
    })();
  }, []);

  async function refresh() {
    try {
      const res = await fetch("/api/registrations");
      const data = await safeJson(res);
      setRows(Array.isArray(data?.items) ? data.items : []);
    } catch (error) {
      console.error("Failed to refresh registrations:", error);
      setRows([]);
    }
  }

  if (!rows.length) {
    return (
      <div className="rounded-3xl bg-white p-5 shadow border border-white/60 text-slate-500">
        No registrations yet
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-5 shadow border border-white/60 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="py-2">Name</th>
            <th className="py-2">Event</th>
            <th className="py-2">Email</th>
            <th className="py-2">Phone</th>
            <th className="py-2">Ticket ID</th>
            <th className="py-2">Status</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t">
              <td className="py-2">{r.name}</td>
              <td className="py-2">{r.event}</td>
              <td className="py-2">{r.email}</td>
              <td className="py-2">{r.phone}</td>
              <td className="py-2 font-mono text-xs">{r.ticketId || r.id}</td>
              <td className="py-2 text-xs">
                {r.checkedIn ? "Checked in" : "Pending"}
              </td>
              <td className="py-2">
                <div className="flex gap-2">
                  <button
                    className="text-xs rounded-lg border px-2 py-1"
                    onClick={() => {
                      setEditing(r);
                      setForm({
                        name: r.name,
                        email: r.email,
                        phone: r.phone,
                        college: r.college,
                        event: r.event,
                      });
                    }}
                  >
                    Edit
                  </button>
                  {!r.checkedIn && (
                    <button
                      className="text-xs rounded-lg border px-2 py-1"
                      onClick={async () => {
                        await fetch("/api/registrations", {
                          method: "PUT",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            id: r.id,
                            checkedIn: true,
                            checkedInAt: new Date().toISOString(),
                          }),
                        });
                        await refresh();
                      }}
                    >
                      Check-in
                    </button>
                  )}
                  <button
                    className="text-xs rounded-lg border px-2 py-1 text-red-600"
                    onClick={async () => {
                      if (!confirm("Delete registration?")) return;
                      await fetch(
                        `/api/registrations?id=${encodeURIComponent(r.id)}`,
                        { method: "DELETE" }
                      );
                      await refresh();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editing && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-5 shadow border border-white/60">
            <div className="flex items-center justify-between mb-3">
              <div className="font-medium">Edit registration</div>
              <button
                className="text-slate-500"
                onClick={() => setEditing(null)}
              >
                Close
              </button>
            </div>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={async (e) => {
                e.preventDefault();
                await fetch("/api/registrations", {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ id: editing.id, ...form }),
                });
                setEditing(null);
                await refresh();
              }}
            >
              <div>
                <label className="block text-sm text-slate-600">Name</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600">Email</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600">Phone</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600">College</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  value={form.college}
                  onChange={(e) =>
                    setForm({ ...form, college: e.target.value })
                  }
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-slate-600">Event</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  value={form.event}
                  onChange={(e) => setForm({ ...form, event: e.target.value })}
                />
                <p className="mt-1 text-xs text-slate-500">
                  All events at Main Auditorium, 10:00 AM.
                </p>
              </div>
              <div className="md:col-span-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  className="rounded-xl border px-4 py-2"
                  onClick={() => setEditing(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 text-white px-4 py-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
