// app/api/site-lock/route.ts
import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCK_COOKIE = "site_lock";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 дней

function matchesPassword(password: string) {
  const expected = process.env.SITE_LOCK_PASSWORD ?? "";
  if (!expected) return false;

  const expectedHash = createHash("sha256").update(expected).digest();
  const actualHash = createHash("sha256").update(password).digest();
  return timingSafeEqual(expectedHash, actualHash);
}

function cookieValue() {
  const password = process.env.SITE_LOCK_PASSWORD ?? "";
  return createHash("sha256").update(password).digest("hex");
}

// Next в route handler строит request.url с хостом localhost, даже когда запрос
// пришёл на реальный хост. Поэтому Origin собираем из заголовков запроса.
function originFor(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost || request.headers.get("host");
  const proto =
    request.headers.get("x-forwarded-proto") ||
    request.nextUrl.protocol.replace(":", "");
  return `${proto}://${host ?? request.nextUrl.host}`;
}

function isHttps(request: NextRequest) {
  return (
    request.nextUrl.protocol === "https:" ||
    request.headers.get("x-forwarded-proto") === "https"
  );
}

export async function POST(request: NextRequest) {
  const formData = await request.formData().catch(() => null);
  const password = String(formData?.get("password") ?? "");

  if (!password || !matchesPassword(password)) {
    return NextResponse.redirect(
      new URL(originFor(request) + "/lock?error=1"),
      303,
    );
  }

  const response = NextResponse.redirect(new URL(originFor(request) + "/"), 303);
  response.cookies.set(LOCK_COOKIE, cookieValue(), {
    httpOnly: true,
    secure: isHttps(request),
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete(LOCK_COOKIE);
  return response;
}