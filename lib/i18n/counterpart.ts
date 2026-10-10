import type { Locale } from "./config";
import { STATIC_SEGMENTS, canonicalCountrySlug, comparePath, countriesPath, countryPath, homePath } from "./routes";
import { CATEGORIES } from "@/lib/categories";

/**
 * The page at `pathname` (in `locale`) in another language. `exists` is false when
 * it's a country not translated into `target` yet — `path` then falls back to that
 * locale's home page. Client-safe.
 */
export function counterpartPage(
  pathname: string,
  locale: Locale,
  target: Locale,
  availability: Record<string, string[]>,
): { path: string; exists: boolean } {
  // Static prerendering sees the internal path (`/fr/france`, `/en/pays`), the browser the public one
  // (`/france`, `/en/countries`) — accept both.
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === locale) segments.shift();
  const [first, second] = segments;
  if (!first) return { path: homePath(target), exists: true };
  if (first === STATIC_SEGMENTS[locale].pays || first === "pays") return { path: countriesPath(target), exists: true };
  if (first === STATIC_SEGMENTS[locale].comparer || first === "comparer") return { path: comparePath(target), exists: true };

  const slug = canonicalCountrySlug(first, locale);
  if (!slug || !availability[target]?.includes(slug)) return { path: homePath(target), exists: false };
  const category = second ? CATEGORIES.find((c) => c.slugs[locale] === second) : undefined;
  return { path: countryPath(target, slug, category?.slugs[target]), exists: true };
}

/** localStorage key holding the language a reader picked (or kept) — once set, no more language suggestions. */
export const LANGUAGE_CHOICE_KEY = "language-choice";

export function rememberLanguageChoice(locale: Locale) {
  try {
    localStorage.setItem(LANGUAGE_CHOICE_KEY, locale);
  } catch {
    // Storage unavailable (private mode, blocked): the suggestion may simply show again.
  }
}
