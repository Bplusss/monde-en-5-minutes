import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/categories";
import { FULL_COUNTRIES } from "@/data/countries-full";

const SITE_URL = "https://le-monde-en-5-minutes.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/pays`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/comparer`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const countryRoutes: MetadataRoute.Sitemap = Object.values(FULL_COUNTRIES).flatMap((country) => [
    { url: `${SITE_URL}/${country.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    ...CATEGORIES.filter((c) => c.slug !== "geographie").map((c) => ({
      url: `${SITE_URL}/${country.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]);

  return [...staticRoutes, ...countryRoutes];
}
