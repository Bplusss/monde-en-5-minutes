import type { Country, CountrySummary } from "@/lib/types";
import { type Locale, DEFAULT_LOCALE, LOCALES, getDictionary } from "@/lib/i18n";
import { applyTranslation, type Glossaries } from "@/lib/i18n/translation";
import { SHARED_GLOSSARY_EN } from "@/lib/i18n/glossary-en";
import { COUNTRY_NAMES_EN } from "@/lib/i18n/country-names-en";
import { applyMetricOverrides, fetchMetricOverrides } from "@/lib/metrics-overlay";
import { FULL_COUNTRIES } from "./countries-full";
import { COUNTRIES } from "./countries-registry";
import { TRANSLATIONS } from "./translations";

/**
 * Locale-aware access to country data. French is the source; any other locale
 * overlays `data/<slug>/<locale>.ts` on top of it (see lib/i18n/translation.ts).
 * A country without a translation simply doesn't exist in that locale — it's
 * listed as "coming soon" and its pages 404.
 */

/** English display name + "the" article where needed — used everywhere a country is named in English. */
function englishName(slug: string, fallback: string): { name: string; nameWithArticle: string } {
  const entry = COUNTRY_NAMES_EN[slug];
  if (!entry) return { name: fallback, nameWithArticle: fallback };
  return { name: entry.name, nameWithArticle: entry.article ? `${entry.article} ${entry.name}` : entry.name };
}

export function glossariesFor(slug: string): Glossaries {
  const t = TRANSLATIONS.en[slug];
  return {
    sources: { ...SHARED_GLOSSARY_EN.sources, ...t?.sources },
    units: { ...SHARED_GLOSSARY_EN.units, ...t?.units },
  };
}

export function isCountryAvailable(slug: string, locale: Locale): boolean {
  if (!FULL_COUNTRIES[slug]) return false;
  return locale === DEFAULT_LOCALE || !!TRANSLATIONS[locale][slug];
}

/** Every locale a country can be read in — drives `hreflang` alternates and the language switcher. */
export function countryLocales(slug: string): Locale[] {
  return LOCALES.filter((l) => isCountryAvailable(slug, l));
}

function localize(country: Country, locale: Locale): Country {
  if (locale === DEFAULT_LOCALE) return country;
  const overlay = TRANSLATIONS[locale][country.slug];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { sources, units, sourceHash, ...textOverlay } = overlay;
  const translated = applyTranslation(country, textOverlay, glossariesFor(country.slug));
  const nuclearFr = getDictionary(DEFAULT_LOCALE).metrics.nuclearShare;

  return {
    ...translated,
    ...englishName(country.slug, country.name),
    // Map features are keyed by the French names in the GeoJSON files.
    rivers: translated.rivers.map((r, i) => ({ ...r, geoName: country.rivers[i].name })),
    regions: translated.regions.map((r, i) => ({ ...r, geoName: country.regions[i].name })),
    environment: {
      ...translated.environment,
      indicators: translated.environment.indicators.map((ind, i) =>
        country.environment.indicators[i].label === nuclearFr ? { ...ind, label: getDictionary(locale).metrics.nuclearShare } : ind,
      ),
    },
  };
}

/** Static country record in `locale`, or undefined if it isn't available in that locale. */
export function getLocalizedCountry(slug: string, locale: Locale): Country | undefined {
  if (!isCountryAvailable(slug, locale)) return undefined;
  return localize(FULL_COUNTRIES[slug], locale);
}

/** `getLocalizedCountry` plus any weekly-refreshed metrics stored in Supabase — falls back to static data alone if unavailable. */
export async function getLocalizedCountryWithLiveData(slug: string, locale: Locale): Promise<Country | undefined> {
  const country = getLocalizedCountry(slug, locale);
  if (!country) return undefined;
  const overrides = await fetchMetricOverrides(slug);
  return applyMetricOverrides(country, overrides, locale, locale === DEFAULT_LOCALE ? undefined : glossariesFor(slug));
}

/** The country registry (every country on the map) with names and availability for `locale`. */
export function getCountries(locale: Locale): CountrySummary[] {
  if (locale === DEFAULT_LOCALE) return COUNTRIES;
  return COUNTRIES.map((c) => ({
    ...c,
    name: englishName(c.slug, c.name).name,
    status: isCountryAvailable(c.slug, locale) ? "available" : "coming-soon",
  }));
}

export function getAvailableCountries(locale: Locale): CountrySummary[] {
  return getCountries(locale).filter((c) => c.status === "available");
}
