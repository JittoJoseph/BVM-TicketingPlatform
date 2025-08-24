// TODO: Protect /admin routes by verifying a session/cookie or Firebase ID token.
// For now, this is a placeholder. In production, implement proper auth checks here.
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Example placeholder: allow everything
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
