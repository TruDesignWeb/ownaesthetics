import { NextResponse } from "next/server";

// All site routes are lowercase. The old SPA (react-router) matched paths
// case-insensitively, so links like /About and /Socials exist in the wild.
// Permanently redirect any uppercase route path to its lowercase form.
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();
  if (pathname !== lower) {
    const url = request.nextUrl.clone();
    url.pathname = lower;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Skip static assets (which may legitimately contain uppercase file names),
  // Next internals, and metadata files.
  matcher: ["/((?!_next/|assets/|fonts/|.*\\..*).*)"],
};
