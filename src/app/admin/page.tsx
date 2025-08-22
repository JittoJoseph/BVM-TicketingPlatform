import Link from "next/link";

export default function AdminPage() {
  // Placeholder auth check to be replaced by Firebase Auth/NextAuth
  // This page can be secured behind middleware in production.
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p className="text-slate-600 mt-1">
        Manage registrations and view stats.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border bg-white p-5 shadow">
          <div className="text-sm text-slate-500">Total Registrations</div>
          <div className="text-3xl font-bold">—</div>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow">
          <div className="text-sm text-slate-500">Events</div>
          <div className="text-3xl font-bold">3</div>
        </div>
      </div>
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
  );
}
