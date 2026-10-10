/**
 * Site languages. French is the source language: every country is written in
 * French first, and served at the root (`/france`). Other locales live under
 * a `/{locale}` prefix and only list the countries whose translation exists
 * (see `data/translations.ts`).
 */
export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE = "fr" satisfies Locale;

export function hasLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** BCP 47 tag for `Intl` formatters and `hreflang`. */
export const INTL_LOCALE: Record<Locale, string> = { fr: "fr-FR", en: "en-US" };

/** Open Graph `og:locale` value. */
export const OG_LOCALE: Record<Locale, string> = { fr: "fr_FR", en: "en_US" };
