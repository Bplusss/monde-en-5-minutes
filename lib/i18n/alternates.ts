import type { Metadata } from "next";
import { type Locale, DEFAULT_LOCALE, LOCALES } from "./config";

/**
 * `canonical` + `hreflang` links for a page that exists in `locales`
 * (every locale by default; a country page passes only the ones it's translated into).
 */
export function localeAlternates(
  locale: Locale,
  pathFor: (locale: Locale) => string,
  locales: readonly Locale[] = LOCALES,
): NonNullable<Metadata["alternates"]> {
  if (locales.length < 2) return { canonical: pathFor(locale) };
  return {
    canonical: pathFor(locale),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, pathFor(l)])),
      ...(locales.includes(DEFAULT_LOCALE) ? { "x-default": pathFor(DEFAULT_LOCALE) } : {}),
    },
  };
}
