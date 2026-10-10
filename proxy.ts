import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";
import { STATIC_SEGMENTS } from "@/lib/i18n/routes";

/**
 * Maps public URLs onto the `app/[lang]` routes (see lib/i18n/routes.ts):
 * - French, the default locale, has no prefix: `/france` → `/fr/france`.
 * - Other locales keep theirs, with their static page names mapped back to
 *   the internal French ones: `/en/countries` → `/en/pays`.
 * - A visible `/fr/...` URL redirects to its unprefixed form, so French pages
 *   have a single address — except generated metadata images, which Next.js
 *   links to under their internal `/fr/...` path.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first = "", ...rest] = pathname.split("/");

  if (first === DEFAULT_LOCALE) {
    if (/\/(opengraph|twitter)-image/.test(pathname)) return NextResponse.next();
    const url = request.nextUrl.clone();
    url.pathname = `/${rest.join("/")}`;
    return NextResponse.redirect(url, 308);
  }

  const locale = LOCALES.find((l) => l === first);
  if (locale) {
    const internal = Object.entries(STATIC_SEGMENTS[locale]).find(([, publicName]) => publicName === rest[0])?.[0];
    if (internal && internal !== rest[0]) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/${[internal, ...rest.slice(1)].join("/")}`;
      return NextResponse.rewrite(url);
    }
    // The internal name typed directly (`/en/pays`) → its public URL.
    const segments: Record<string, string> = STATIC_SEGMENTS[locale];
    const publicName = Object.hasOwn(segments, rest[0]) ? segments[rest[0]] : undefined;
    if (publicName && publicName !== rest[0]) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/${[publicName, ...rest.slice(1)].join("/")}`;
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except API routes, Next.js internals and files with an extension (public/, sitemap.xml, robots.txt…).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
