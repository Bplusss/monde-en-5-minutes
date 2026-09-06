import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { fetchMetricOverrides } from "@/lib/metrics-overlay";
import { FULL_COUNTRIES } from "@/data/countries-full";

export const maxDuration = 60;

/** Every World Bank indicator this pipeline keeps fresh, generically, for any country with an ISO3 `id`. */
const WORLD_BANK_INDICATORS: { code: string; metricKey: string }[] = [
  { code: "SP.POP.TOTL", metricKey: "population.total" },
  { code: "SP.POP.GROW", metricKey: "population.growthRate" },
  { code: "SP.URB.TOTL.IN.ZS", metricKey: "population.urbanShare" },
  { code: "NY.GDP.MKTP.CD", metricKey: "economy.gdp" },
  { code: "NY.GDP.PCAP.CD", metricKey: "economy.gdpPerCapita" },
  { code: "SL.UEM.TOTL.ZS", metricKey: "economy.unemploymentRate" },
];

interface FetchedMetric {
  metricKey: string;
  value: number;
  unit: string | null;
  year: number | null;
  source: string;
  sourceUrl: string;
}

async function fetchWorldBankIndicator(iso3: string, code: string): Promise<{ value: number; year: number } | null> {
  const url = `https://api.worldbank.org/v2/country/${iso3}/indicator/${code}?format=json&mrnev=1`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return null;
  const json = (await res.json()) as unknown;
  if (!Array.isArray(json) || !Array.isArray(json[1]) || !json[1][0]) return null;
  const point = json[1][0] as { value: number | null; date: string };
  if (typeof point.value !== "number") return null;
  return { value: point.value, year: Number(point.date) };
}

async function fetchWikidataOfficeholder(
  wikidataId: string,
  property: "P35" | "P6",
): Promise<{ name: string; since: string | null } | null> {
  const query = `
    SELECT ?personLabel ?start WHERE {
      wd:${wikidataId} p:${property} ?statement .
      ?statement ps:${property} ?person .
      FILTER NOT EXISTS { ?statement pq:P582 ?end }
      OPTIONAL { ?statement pq:P580 ?start }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en". }
    } LIMIT 1
  `;
  const url = `https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    cache: "no-store",
    headers: { "User-Agent": "monde-en-5-minutes/1.0 (educational country facts site)" },
  });
  if (!res.ok) return null;
  const json = await res.json();
  const binding = json?.results?.bindings?.[0];
  if (!binding?.personLabel?.value) return null;
  const since = binding.start?.value
    ? new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(binding.start.value))
    : null;
  return { name: binding.personLabel.value, since };
}

/** Automated sanity guard: reject a fetched value that swings too far from the last known one — protects against a bad API response given there's no human review before publish. */
function withinTolerance(newValue: number, baseline: number | undefined, pct = 0.25): boolean {
  if (baseline === undefined || baseline === 0) return true;
  return Math.abs(newValue - baseline) / Math.abs(baseline) <= pct;
}

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseClient();
  if (!supabase) return NextResponse.json({ error: "supabase not configured" }, { status: 500 });

  const summary: Record<string, { updated: string[]; skipped: string[]; errors: string[] }> = {};

  for (const country of Object.values(FULL_COUNTRIES)) {
    const result = { updated: [] as string[], skipped: [] as string[], errors: [] as string[] };
    summary[country.slug] = result;

    const existing = await fetchMetricOverrides(country.slug);
    const existingByKey = new Map(existing.map((r) => [r.metric_key, r]));
    const fetched: FetchedMetric[] = [];

    // --- Numeric indicators (World Bank) ---
    for (const { code, metricKey } of WORLD_BANK_INDICATORS) {
      try {
        const point = await fetchWorldBankIndicator(country.id, code);
        if (!point) {
          result.skipped.push(`${metricKey} (pas de donnée)`);
          continue;
        }
        const baseline = existingByKey.get(metricKey)?.value as number | undefined;
        if (!withinTolerance(point.value, baseline)) {
          result.skipped.push(`${metricKey} (écart > 25 % vs ${baseline}, valeur ignorée : ${point.value})`);
          continue;
        }
        fetched.push({
          metricKey,
          value: point.value,
          unit: metricKey.startsWith("economy.gdp") ? "USD" : metricKey.endsWith("Rate") || metricKey.endsWith("Share") || metricKey === "population.growthRate" ? "%" : null,
          year: point.year,
          source: "Banque mondiale",
          sourceUrl: `https://data.worldbank.org/indicator/${code}`,
        });
      } catch (e) {
        result.errors.push(`${metricKey}: ${e instanceof Error ? e.message : "erreur inconnue"}`);
      }
    }

    // --- Computed: population density from the freshly fetched (or existing) total ---
    const total =
      fetched.find((f) => f.metricKey === "population.total")?.value ??
      (existingByKey.get("population.total")?.value as number | undefined) ??
      country.population.total.value;
    if (total && country.geography.areaKm2.value) {
      const density = total / country.geography.areaKm2.value;
      const baseline = existingByKey.get("population.density")?.value as number | undefined;
      if (withinTolerance(density, baseline)) {
        fetched.push({
          metricKey: "population.density",
          value: Math.round(density * 10) / 10,
          unit: "hab./km²",
          year: fetched.find((f) => f.metricKey === "population.total")?.year ?? null,
          source: "Banque mondiale (calculé)",
          sourceUrl: `https://data.worldbank.org/indicator/SP.POP.TOTL`,
        });
      } else {
        result.skipped.push(`population.density (écart > 25 % vs ${baseline})`);
      }
    }

    // --- Political leaders (Wikidata) ---
    if (country.wikidataId) {
      for (const [property, metricKey] of [
        ["P35", "politics.headOfState"],
        ["P6", "politics.headOfGovernment"],
      ] as const) {
        try {
          const officeholder = await fetchWikidataOfficeholder(country.wikidataId, property);
          if (!officeholder?.name) {
            result.skipped.push(`${metricKey} (aucune donnée Wikidata)`);
            continue;
          }
          const { error } = await supabase.from("country_metrics").upsert(
            {
              country_slug: country.slug,
              metric_key: metricKey,
              value: { name: officeholder.name, since: officeholder.since ?? undefined },
              unit: null,
              year: null,
              source: "Wikidata",
              source_url: `https://www.wikidata.org/wiki/${country.wikidataId}`,
              note: null,
              updated_at: new Date().toISOString(),
            },
            { onConflict: "country_slug,metric_key" },
          );
          if (error) result.errors.push(`${metricKey}: ${error.message}`);
          else result.updated.push(metricKey);
        } catch (e) {
          result.errors.push(`${metricKey}: ${e instanceof Error ? e.message : "erreur inconnue"}`);
        }
      }
    }

    // --- Write the numeric metrics ---
    if (fetched.length) {
      const { error } = await supabase.from("country_metrics").upsert(
        fetched.map((f) => ({
          country_slug: country.slug,
          metric_key: f.metricKey,
          value: f.value,
          unit: f.unit,
          year: f.year,
          source: f.source,
          source_url: f.sourceUrl,
          note: null,
          updated_at: new Date().toISOString(),
        })),
        { onConflict: "country_slug,metric_key" },
      );
      if (error) result.errors.push(`upsert: ${error.message}`);
      else result.updated.push(...fetched.map((f) => f.metricKey));
    }
  }

  return NextResponse.json({ ranAt: new Date().toISOString(), summary });
}
