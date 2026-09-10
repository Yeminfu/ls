// proxy.ts (Next.js 16: middleware переименован в proxy)
import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCK_COOKIE = "site_lock";

function isLockEnabled() {
  const value = process.env.SITE_LOCK_ENABLED?.toLowerCase();
  return value === "1" || value === "true" || value === "yes";
}

function lockHash() {
  const password = process.env.SITE_LOCK_PASSWORD ?? "";
  return createHash("sha256").update(password).digest("hex");
}

function hasValidLock(request: NextRequest) {
  const cookie = request.cookies.get(LOCK_COOKIE)?.value;
  if (!cookie) return false;

  const expected = Buffer.from(lockHash(), "utf8");
  const actual = Buffer.from(cookie, "utf8");
  if (expected.length !== actual.length) return false;

  return timingSafeEqual(expected, actual);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isApiPath = pathname.startsWith("/api");
  const isLockPage = pathname === "/lock";

  // Замок сайта: при SITE_LOCK_ENABLED=1 доступ только по паролю.
  if (isLockEnabled()) {
    if (pathname === "/api/site-lock") {
      return NextResponse.next();
    }

    if (hasValidLock(request)) {
      if (isLockPage) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } else {
      if (isApiPath) {
        return NextResponse.json(
          { error: "Сайт закрыт. Вход по паролю." },
          { status: 403 },
        );
      }

      if (!isLockPage) {
        return NextResponse.redirect(new URL("/lock", request.url));
      }
    }
  } else if (isLockPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Проверка авторизации только для админки.
  const accessToken = request.cookies.get("access_token");
  const isPublicPath =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  if (isPublicPath && accessToken) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (pathname.startsWith("/admin") && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo.ico|images/|team/|.*\\.(?:png|jpg|jpeg|svg|webp|avif|ico|gif)$).*)",
  ],
};