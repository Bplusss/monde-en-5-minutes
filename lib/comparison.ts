import type { CategoryKey, Country } from "@/lib/types";
import { formatCompact, formatCurrencyCompact, formatNumber, formatPercent, withUnit } from "@/lib/format";

export interface ComparisonMetric {
  key: string;
  label: string;
  /** Which of the site's categories this metric belongs to — drives the section grouping in the comparison view. */
  category: CategoryKey;
  format: (country: Country) => string;
  /** Raw numeric value used to size the comparison bars — must be the same unit for both countries. */
  rawValue: (country: Country) => number;
  /** Skip this metric for a country pair when either side has nothing meaningful (e.g. no capital population on record). */
  isAvailable?: (country: Country) => boolean;
}

const capitalPopulation = (c: Country) => c.cities.find((city) => city.isCapital)?.population?.value ?? 0;

/** Reads the optional "nuclear share" environment indicator by label — absent for countries where nuclear power isn't part of the electricity mix. */
const NUCLEAR_SHARE_LABEL = "Part du nucléaire dans l'électricité";
const nuclearShare = (c: Country): number | undefined => {
  const value = c.environment.indicators.find((i) => i.label === NUCLEAR_SHARE_LABEL)?.value.value;
  return typeof value === "number" ? value : undefined;
};

/**
 * Generic metric list: works for any pair of `Country` records, never a
 * hardcoded pair of nations. New metrics only need to read from the shared
 * `Country` shape. Grouped by `category` so the comparison view can mirror
 * the site's own category navigation instead of one flat list.
 */
export const COMPARISON_METRICS: ComparisonMetric[] = [
  {
    key: "population",
    label: "Population",
    category: "population",
    format: (c) => withUnit(formatCompact(c.population.total.value), "hab."),
    rawValue: (c) => c.population.total.value,
  },
  {
    key: "density",
    label: "Densité",
    category: "population",
    format: (c) => withUnit(formatNumber(c.population.density.value), "hab./km²"),
    rawValue: (c) => c.population.density.value,
  },
  {
    key: "capitalPopulation",
    label: "Population de la capitale",
    category: "population",
    format: (c) => withUnit(formatCompact(capitalPopulation(c)), "hab."),
    rawValue: capitalPopulation,
    isAvailable: (c) => capitalPopulation(c) > 0,
  },
  {
    key: "area",
    label: "Superficie",
    category: "geographie",
    format: (c) => withUnit(formatNumber(c.geography.areaKm2.value), "km²"),
    rawValue: (c) => c.geography.areaKm2.value,
  },
  {
    key: "borders",
    label: "Frontières terrestres",
    category: "geographie",
    format: (c) => String(c.geography.borderingCountries.length),
    rawValue: (c) => c.geography.borderingCountries.length,
  },
  {
    key: "highestPoint",
    label: "Point culminant",
    category: "geographie",
    format: (c) => withUnit(formatNumber(c.geography.highestPoint?.elevationM ?? 0), "m"),
    rawValue: (c) => c.geography.highestPoint?.elevationM ?? 0,
    isAvailable: (c) => !!c.geography.highestPoint,
  },
  {
    key: "regionsCount",
    label: "Régions",
    category: "geographie",
    format: (c) => String(c.territories.metropolitanRegions.length),
    rawValue: (c) => c.territories.metropolitanRegions.length,
  },
  {
    key: "overseasCount",
    label: "Territoires d'outre-mer",
    category: "geographie",
    format: (c) => String(c.territories.overseas.length),
    rawValue: (c) => c.territories.overseas.length,
  },
  {
    key: "gdp",
    label: "PIB",
    category: "economie",
    format: (c) => formatCurrencyCompact(c.economy.gdp.value, c.economy.gdp.unit ?? "€"),
    rawValue: (c) => c.economy.gdp.value,
  },
  {
    key: "gdpPerCapita",
    label: "PIB par habitant",
    category: "economie",
    format: (c) => formatCurrencyCompact(c.economy.gdpPerCapita.value, c.economy.gdpPerCapita.unit ?? "€"),
    rawValue: (c) => c.economy.gdpPerCapita.value,
  },
  {
    key: "unemploymentRate",
    label: "Taux de chômage",
    category: "economie",
    format: (c) => formatPercent(c.economy.unemploymentRate.value, 1),
    rawValue: (c) => c.economy.unemploymentRate.value,
  },
  {
    key: "legislatureSeats",
    label: "Sièges au Parlement",
    category: "politique",
    format: (c) => formatNumber(legislatureSeats(c)),
    rawValue: legislatureSeats,
  },
  {
    key: "renewableShare",
    label: "Part des renouvelables",
    category: "environnement",
    format: (c) => formatPercent(c.environment.renewableShare.value, 1),
    rawValue: (c) => c.environment.renewableShare.value,
  },
  {
    key: "co2PerCapita",
    label: "Émissions de CO₂ par habitant",
    category: "environnement",
    format: (c) => withUnit(formatNumber(c.environment.co2PerCapita.value, 1), "t"),
    rawValue: (c) => c.environment.co2PerCapita.value,
  },
  {
    key: "nuclearShare",
    label: "Part du nucléaire dans l'électricité",
    category: "environnement",
    format: (c) => formatPercent(nuclearShare(c) ?? 0, 1),
    rawValue: (c) => nuclearShare(c) ?? 0,
    isAvailable: (c) => nuclearShare(c) !== undefined,
  },
];

function legislatureSeats(c: Country): number {
  return c.politics.legislature.chambers.reduce((sum, ch) => sum + ch.seats, 0);
}

/** Metrics for one category, filtered to those meaningful for this specific pair. */
export function getMetricsForCategory(category: CategoryKey, a: Country, b: Country): ComparisonMetric[] {
  return COMPARISON_METRICS.filter(
    (m) => m.category === category && (!m.isAvailable || (m.isAvailable(a) && m.isAvailable(b))),
  );
}

/** True when the two countries' key stats share the same source year — flags the UI to disclose otherwise. */
export function sameReferenceYear(a: Country, b: Country): boolean {
  return a.population.total.year === b.population.total.year && a.economy.gdp.year === b.economy.gdp.year;
}
