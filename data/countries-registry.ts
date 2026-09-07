import type { CountrySummary } from "@/lib/types";
import { FULL_COUNTRIES } from "./countries-full";
import worldCountries from "./world-countries.json";

/**
 * Registry of every country the map can select, generated from the same
 * Natural Earth dataset as `public/geo/world.json` (id/slug/name/flag only,
 * no statistics). A country only gets real data when it has an entry in
 * `FULL_COUNTRIES` (see data/countries-full.ts) — every other one is
 * identity-only so the map and `/pays` can display it as "Bientôt disponible"
 * without fabricating stats.
 */
export const COUNTRIES: CountrySummary[] = worldCountries.map(
  (c) =>
    FULL_COUNTRIES[c.slug] ?? {
      id: c.id,
      slug: c.slug,
      name: c.name,
      flag: c.flag,
      continent: c.continent,
      status: "coming-soon" as const,
    },
);

export function getCountryBySlug(slug: string): CountrySummary | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}

export function getCountryByIso3(iso3: string): CountrySummary | undefined {
  return COUNTRIES.find((c) => c.id === iso3);
}

/** Looks up a country by its French display name — used to turn a plain-text list (e.g. `GeographyData.borderingCountries`) into real links. */
export function getCountryByName(name: string): CountrySummary | undefined {
  return COUNTRIES.find((c) => c.name === name);
}

export function getAvailableCountries(): CountrySummary[] {
  return COUNTRIES.filter((c) => c.status === "available");
}
