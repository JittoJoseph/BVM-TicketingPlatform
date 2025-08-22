import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const secret = process.env.ADMIN_SECRET;
    const provided = req.headers.get("x-admin-secret") || req.nextUrl.searchParams.get("secret");
    if (!secret || provided !== secret) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
