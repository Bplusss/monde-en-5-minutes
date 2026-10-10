import { type Locale, DEFAULT_LOCALE } from "./config";
import { COUNTRY_NAMES_EN } from "./country-names-en";

/**
 * Public URLs per locale. Internally every route lives under `app/[lang]` with
 * French (canonical) segment names; `proxy.ts` maps the public URLs onto them.
 * Country and category slugs are resolved by the pages themselves via
 * `canonicalCountrySlug` / `getCategoryBySlug`.
 *
 *   fr: /            /pays       /comparer   /france            /france/economie
 *   en: /en          /en/countries /en/compare /en/france       /en/france/economy
 *
 * Client-safe: no country dataset is imported here.
 */

/** Public name of the two non-country pages, keyed by their internal (French) segment. */
export const STATIC_SEGMENTS: Record<Locale, { pays: string; comparer: string }> = {
  fr: { pays: "pays", comparer: "comparer" },
  en: { pays: "countries", comparer: "compare" },
};

/** Query parameter preselecting a country on the comparison page. */
export const COMPARE_PARAM: Record<Locale, string> = { fr: "pays", en: "country" };

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/['’.]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const EN_SLUGS: Record<string, string> = Object.fromEntries(
  Object.entries(COUNTRY_NAMES_EN).map(([slug, { name }]) => [slug, slugify(name)]),
);
const EN_SLUGS_REVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(EN_SLUGS).map(([canonical, en]) => [en, canonical]),
);

/** Canonical (French) slug → public slug in `locale`. */
export function localizedCountrySlug(slug: string, locale: Locale): string {
  if (locale === "en") return EN_SLUGS[slug] ?? slug;
  return slug;
}

/** Public slug in `locale` → canonical (French) slug, or undefined if it isn't one. */
export function canonicalCountrySlug(localizedSlug: string, locale: Locale): string | undefined {
  if (locale === "en") return EN_SLUGS_REVERSE[localizedSlug];
  return localizedSlug;
}

function prefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

export function homePath(locale: Locale): string {
  return prefix(locale) || "/";
}

export function countriesPath(locale: Locale): string {
  return `${prefix(locale)}/${STATIC_SEGMENTS[locale].pays}`;
}

export function comparePath(locale: Locale, countrySlug?: string): string {
  const base = `${prefix(locale)}/${STATIC_SEGMENTS[locale].comparer}`;
  return countrySlug ? `${base}?${COMPARE_PARAM[locale]}=${localizedCountrySlug(countrySlug, locale)}` : base;
}

/** `categorySlug` is the already-localized category slug; omit it for the country's default page. */
export function countryPath(locale: Locale, countrySlug: string, categorySlug?: string): string {
  const base = `${prefix(locale)}/${localizedCountrySlug(countrySlug, locale)}`;
  return categorySlug ? `${base}/${categorySlug}` : base;
}
