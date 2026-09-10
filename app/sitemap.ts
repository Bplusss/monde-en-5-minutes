import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/categories";
import { FULL_COUNTRIES } from "@/data/countries-full";
import { SITE_URL } from "@/lib/site";
import sitemapDates from "@/data/sitemap-dates.json";

const dates = sitemapDates as Record<string, string>;

/** Real per-country last-modified date (see scripts/generate-sitemap-dates.mjs); falls back to today if a country is missing from the snapshot. */
function lastModifiedFor(slug: string): Date {
  const iso = dates[slug];
  return iso ? new Date(iso) : new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const mostRecentCountryChange = Object.values(dates).sort().at(-1);
  const siteLastModified = mostRecentCountryChange ? new Date(mostRecentCountryChange) : new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: siteLastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/pays`, lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/comparer`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.5 },
  ];

  const countryRoutes: MetadataRoute.Sitemap = Object.values(FULL_COUNTRIES).flatMap((country) => {
    const lastModified = lastModifiedFor(country.slug);
    return [
      { url: `${SITE_URL}/${country.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
      ...CATEGORIES.filter((c) => c.slug !== "geographie").map((c) => ({
        url: `${SITE_URL}/${country.slug}/${c.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ];
  });

  return [...staticRoutes, ...countryRoutes];
}
