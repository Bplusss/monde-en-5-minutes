import type { CountrySummary } from "@/lib/types";

export type CountrySortMode = "alpha" | "continent";

/** Display order for continent groups — not alphabetical, just a sensible reading order. */
export const CONTINENT_ORDER = ["Europe", "Afrique", "Amérique du Nord", "Amérique du Sud", "Asie", "Océanie"];

export function sortCountriesAlpha<T extends CountrySummary>(countries: T[]): T[] {
  return [...countries].sort((a, b) => a.name.localeCompare(b.name, "fr"));
}

export function groupCountriesByContinent<T extends CountrySummary>(countries: T[]): { continent: string; countries: T[] }[] {
  const byContinent = new Map<string, T[]>();
  countries.forEach((c) => {
    if (!byContinent.has(c.continent)) byContinent.set(c.continent, []);
    byContinent.get(c.continent)!.push(c);
  });
  const continents = [...byContinent.keys()].sort((a, b) => {
    const ia = CONTINENT_ORDER.indexOf(a);
    const ib = CONTINENT_ORDER.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
  return continents.map((continent) => ({ continent, countries: sortCountriesAlpha(byContinent.get(continent)!) }));
}
