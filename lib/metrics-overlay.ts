import type { Country } from "@/lib/types";
import { getSupabaseClient } from "@/lib/supabase";
import type { Locale } from "@/lib/i18n/config";
import type { Glossaries } from "@/lib/i18n/translation";

const FR_MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

/** The refresh cron stores office-holder start dates as French text ("9 septembre 2025"); re-render them for other locales. */
function localizeFrenchDate(date: string, locale: Locale): string {
  if (locale === "fr") return date;
  const m = date.match(/^(\d{1,2})(?:er)? (\p{L}+) (\d{4})$/u);
  const month = m ? FR_MONTHS.indexOf(m[2].toLowerCase()) : -1;
  if (!m || month === -1) return date;
  return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(Number(m[3]), month, Number(m[1]))),
  );
}

export interface MetricRow {
  country_slug: string;
  metric_key: string;
  value: unknown;
  unit: string | null;
  year: number | null;
  source: string;
  source_url: string | null;
  note: string | null;
}

/** Reads every stored metric override for one country. Fails soft — Supabase being down never breaks a page. */
export async function fetchMetricOverrides(slug: string): Promise<MetricRow[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return [];
  try {
    const { data, error } = await supabase.from("country_metrics").select("*").eq("country_slug", slug);
    if (error || !data) return [];
    return data as MetricRow[];
  } catch {
    return [];
  }
}

/**
 * Merges metric rows into a fresh copy of a static Country. Each metric_key maps to a
 * `Sourced<T>`-shaped field (e.g. "economy.gdp") or a partial object field (e.g.
 * "politics.headOfState", which only overrides name/since/source, never the static `title`).
 * For a translated country, pass its `locale` and `glossaries` so the stored
 * (French) units, source names and dates are rendered in that language.
 */
export function applyMetricOverrides(country: Country, rows: MetricRow[], locale: Locale = "fr", glossaries?: Glossaries): Country {
  if (!rows.length) return country;
  const unit = (u: string) => glossaries?.units[u] ?? u;
  const source = (s: string) => glossaries?.sources[s] ?? s;
  const next: Country = structuredClone(country);

  for (const row of rows) {
    switch (row.metric_key) {
      case "population.total":
      case "population.growthRate":
      case "population.urbanShare":
      case "population.density":
      case "economy.gdp":
      case "economy.gdpPerCapita":
      case "economy.unemploymentRate": {
        const [category, field] = row.metric_key.split(".") as ["population" | "economy", string];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const target = next[category] as any;
        if (typeof row.value === "number") {
          target[field] = {
            value: row.value,
            unit: row.unit ? unit(row.unit) : target[field]?.unit,
            year: row.year ?? undefined,
            source: source(row.source),
            sourceUrl: row.source_url ?? undefined,
            note: row.note ?? undefined,
          };
        }
        break;
      }
      case "politics.headOfState":
      case "politics.headOfGovernment": {
        const field = row.metric_key.split(".")[1] as "headOfState" | "headOfGovernment";
        const override = row.value as { name?: string; since?: string } | null;
        if (override?.name && override?.since) {
          next.politics[field] = {
            ...next.politics[field],
            name: override.name,
            since: localizeFrenchDate(override.since, locale),
            source: source(row.source),
            sourceUrl: row.source_url ?? undefined,
          };
        }
        break;
      }
      default:
        break;
    }
  }

  return next;
}
