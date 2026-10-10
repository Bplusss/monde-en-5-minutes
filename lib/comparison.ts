import type { CategoryKey, Country } from "@/lib/types";
import { formatCompact, formatCurrencyCompact, formatNumber, formatPercent, withUnit } from "@/lib/format";
import { type Dictionary, type Locale, LOCALES, getDictionary } from "@/lib/i18n";

export interface ComparisonMetric {
  /** Also the metric's label key in the dictionary (`metrics`). */
  key: keyof Dictionary["metrics"];
  /** Which of the site's categories this metric belongs to — drives the section grouping in the comparison view. */
  category: CategoryKey;
  format: (country: Country, locale: Locale) => string;
  /** Raw numeric value used to size the comparison bars — must be the same unit for both countries. */
  rawValue: (country: Country) => number;
  /** Skip this metric for a country pair when either side has nothing meaningful (e.g. no capital population on record). */
  isAvailable?: (country: Country) => boolean;
}

const capitalPopulation = (c: Country) => c.cities.find((city) => city.isCapital)?.population?.value ?? 0;

/**
 * Reads the optional "nuclear share" environment indicator by label — absent for countries where nuclear
 * power isn't part of the electricity mix. Translated countries carry the dictionary's label for their
 * locale (enforced by data/countries-localized.ts), so any locale's label matches.
 */
const NUCLEAR_SHARE_LABELS = new Set(LOCALES.map((l) => getDictionary(l).metrics.nuclearShare));
const nuclearShare = (c: Country): number | undefined => {
  const value = c.environment.indicators.find((i) => NUCLEAR_SHARE_LABELS.has(i.label))?.value.value;
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
    category: "population",
    format: (c, l) => withUnit(formatCompact(c.population.total.value, 1, l), getDictionary(l).units.inhabitantsShort),
    rawValue: (c) => c.population.total.value,
  },
  {
    key: "density",
    category: "population",
    format: (c, l) => withUnit(formatNumber(c.population.density.value, 0, l), getDictionary(l).units.perKm2),
    rawValue: (c) => c.population.density.value,
  },
  {
    key: "capitalPopulation",
    category: "population",
    format: (c, l) => withUnit(formatCompact(capitalPopulation(c), 1, l), getDictionary(l).units.inhabitantsShort),
    rawValue: capitalPopulation,
    isAvailable: (c) => capitalPopulation(c) > 0,
  },
  {
    key: "area",
    category: "geographie",
    format: (c, l) => withUnit(formatNumber(c.geography.areaKm2.value, 0, l), "km²"),
    rawValue: (c) => c.geography.areaKm2.value,
  },
  {
    key: "borders",
    category: "geographie",
    format: (c) => String(c.geography.borderingCountries.length),
    rawValue: (c) => c.geography.borderingCountries.length,
  },
  {
    key: "highestPoint",
    category: "geographie",
    format: (c, l) => withUnit(formatNumber(c.geography.highestPoint?.elevationM ?? 0, 0, l), "m"),
    rawValue: (c) => c.geography.highestPoint?.elevationM ?? 0,
    isAvailable: (c) => !!c.geography.highestPoint,
  },
  {
    key: "regionsCount",
    category: "geographie",
    format: (c) => String(c.territories.metropolitanRegions.length),
    rawValue: (c) => c.territories.metropolitanRegions.length,
  },
  {
    key: "overseasCount",
    category: "geographie",
    format: (c) => String(c.territories.overseas.length),
    rawValue: (c) => c.territories.overseas.length,
  },
  {
    key: "gdp",
    category: "economie",
    format: (c, l) => formatCurrencyCompact(c.economy.gdp.value, c.economy.gdp.unit ?? "€", 1, l),
    rawValue: (c) => c.economy.gdp.value,
  },
  {
    key: "gdpPerCapita",
    category: "economie",
    format: (c, l) => formatCurrencyCompact(c.economy.gdpPerCapita.value, c.economy.gdpPerCapita.unit ?? "€", 1, l),
    rawValue: (c) => c.economy.gdpPerCapita.value,
  },
  {
    key: "unemploymentRate",
    category: "economie",
    format: (c, l) => formatPercent(c.economy.unemploymentRate.value, 1, l),
    rawValue: (c) => c.economy.unemploymentRate.value,
  },
  {
    key: "legislatureSeats",
    category: "politique",
    format: (c, l) => formatNumber(legislatureSeats(c), 0, l),
    rawValue: legislatureSeats,
  },
  {
    key: "renewableShare",
    category: "environnement",
    format: (c, l) => formatPercent(c.environment.renewableShare.value, 1, l),
    rawValue: (c) => c.environment.renewableShare.value,
  },
  {
    key: "co2PerCapita",
    category: "environnement",
    format: (c, l) => withUnit(formatNumber(c.environment.co2PerCapita.value, 1, l), "t"),
    rawValue: (c) => c.environment.co2PerCapita.value,
  },
  {
    key: "nuclearShare",
    category: "environnement",
    format: (c, l) => formatPercent(nuclearShare(c) ?? 0, 1, l),
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
