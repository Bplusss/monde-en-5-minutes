import type { MetadataRoute } from "next";
import { CATEGORIES, DEFAULT_CATEGORY } from "@/lib/categories";
import { type Locale, LOCALES } from "@/lib/i18n";
import { comparePath, countriesPath, countryPath, homePath } from "@/lib/i18n/routes";
import { FULL_COUNTRIES } from "@/data/countries-full";
import { countryLocales } from "@/data/countries-localized";
import { SITE_URL } from "@/lib/site";
import sitemapDates from "@/data/sitemap-dates.json";

const dates = sitemapDates as Record<string, string>;

/** Real per-country last-modified date (see scripts/generate-sitemap-dates.mjs); falls back to today if a country is missing from the snapshot. */
function lastModifiedFor(slug: string): Date {
  const iso = dates[slug];
  return iso ? new Date(iso) : new Date();
}

/** One entry per language a page exists in, each listing all of them as `hreflang` alternates. */
function localizedEntries(
  locales: readonly Locale[],
  pathFor: (locale: Locale) => string,
  entry: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">,
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${pathFor(l)}`]));
  return locales.map((locale) => ({
    ...entry,
    url: `${SITE_URL}${pathFor(locale)}`,
    ...(locales.length > 1 ? { alternates: { languages } } : {}),
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const mostRecentCountryChange = Object.values(dates).sort().at(-1);
  const siteLastModified = mostRecentCountryChange ? new Date(mostRecentCountryChange) : new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    ...localizedEntries(LOCALES, homePath, { lastModified: siteLastModified, changeFrequency: "weekly", priority: 1 }),
    ...localizedEntries(LOCALES, countriesPath, { lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.8 }),
    ...localizedEntries(LOCALES, (l) => comparePath(l), { lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.5 }),
  ];

  const countryRoutes: MetadataRoute.Sitemap = Object.values(FULL_COUNTRIES).flatMap((country) => {
    const lastModified = lastModifiedFor(country.slug);
    const locales = countryLocales(country.slug);
    return [
      ...localizedEntries(locales, (l) => countryPath(l, country.slug), { lastModified, changeFrequency: "monthly", priority: 0.9 }),
      ...CATEGORIES.filter((c) => c.slug !== DEFAULT_CATEGORY).flatMap((c) =>
        localizedEntries(locales, (l) => countryPath(l, country.slug, c.slugs[l]), {
          lastModified,
          changeFrequency: "monthly",
          priority: 0.7,
        }),
      ),
    ];
  });

  return [...staticRoutes, ...countryRoutes];
}
