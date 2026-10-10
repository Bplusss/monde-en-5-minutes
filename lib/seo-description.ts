import type { CategoryKey, Country } from "@/lib/types";
import { deCountry, formatCurrencyCompact, formatNumber, formatPercent } from "@/lib/format";
import type { Locale } from "@/lib/i18n/config";

/** Google truncates snippets around 155–160 characters. */
const MAX_LENGTH = 158;

/** Meta descriptions are plain text: normalize the non-breaking spaces the display formatters insert. */
function plain(text: string): string {
  return text.replace(/ /g, " ");
}

function truncate(text: string): string {
  if (text.length <= MAX_LENGTH) return text;
  const cut = text.slice(0, MAX_LENGTH - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:—–-]+$/, "")}…`;
}

/** Joins a list as "a, b et c". */
function listFr(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} et ${items.at(-1)}`;
}

/** Lowercases only a leading capital that starts an ordinary word, so proper nouns ("Tour de France", "UNESCO") keep their case. */
function lowerFirst(text: string): string {
  const startsWithArticle = /^(Le|La|Les|Un|Une|Des)\s|^L['’]/.test(text);
  const ordinaryWord = /^\p{Lu}\p{Ll}/u.test(text) && !/^\S+\s+\p{Lu}/u.test(text);
  return startsWithArticle || ordinaryWord ? text.charAt(0).toLowerCase() + text.slice(1) : text;
}

function withoutParenthetical(text: string): string {
  return text.replace(/\s*\(.*\)$/, "");
}

function formatInhabitants(value: number): string {
  if (value >= 1_000_000) return `${formatNumber(value / 1_000_000, 1)} millions d'habitants`;
  return `${formatNumber(value)} habitants`;
}

function firstSentence(text: string): string {
  const match = text.match(/^.+?[.!?](?=\s|$)/);
  return match ? match[0] : text;
}

/** Key figures first (they're what a searcher scans for), then the section summary to fill the snippet. */
function leadFr(country: Country, category: CategoryKey): string {
  const of = deCountry(country.nameWithArticle);
  switch (category) {
    case "geographie": {
      const g = country.geography;
      const parts = [`${formatNumber(g.areaKm2.value, g.areaKm2.value < 10 ? 2 : 0)} km²`, `capitale ${country.capital}`];
      if (g.highestPoint) parts.push(`point culminant ${withoutParenthetical(g.highestPoint.name)} (${formatNumber(g.highestPoint.elevationM)} m)`);
      return `Géographie ${of} : ${parts.join(", ")}.`;
    }
    case "population": {
      const p = country.population;
      return `Population ${of} : ${formatInhabitants(p.total.value)}, ${formatNumber(p.density.value)} hab./km².`;
    }
    case "langues": {
      const official = country.languages.entries.filter((l) => l.kind === "officielle").map((l) => withoutParenthetical(l.name));
      return official.length
        ? `Langue${official.length > 1 ? "s" : ""} officielle${official.length > 1 ? "s" : ""} ${of} : ${listFr(official)}.`
        : `Langues ${of} : aucune langue officielle de jure.`;
    }
    case "religion": {
      const top = [...country.religion.points]
        .sort((a, b) => b.sharePercent - a.sharePercent)
        .slice(0, 3)
        .map((p) => `${p.label} ${formatPercent(p.sharePercent)}`);
      return `Religions ${of} : ${top.join(", ")} (${country.religion.year}).`;
    }
    case "politique": {
      const p = country.politics;
      return `Politique ${of} : ${lowerFirst(p.stateForm)}. ${p.headOfState.title} : ${p.headOfState.name}.`;
    }
    case "economie": {
      const e = country.economy;
      return `Économie ${of} : PIB ${formatCurrencyCompact(e.gdp.value, e.gdp.unit ?? "USD")}, ${formatCurrencyCompact(e.gdpPerCapita.value, e.gdpPerCapita.unit ?? "USD")} par habitant, chômage ${formatPercent(e.unemploymentRate.value, 1)}.`;
    }
    case "histoire": {
      const periods = country.history.periods;
      return `Histoire ${of} en ${periods.length} grandes périodes : ${periods.map((p) => p.title).join(" ; ")}.`;
    }
    case "culture":
      return `Culture ${of} : ${listFr(country.culture.items.map((i) => lowerFirst(i.title)))}.`;
    case "environnement": {
      const env = country.environment;
      return `Environnement ${of} : ${formatPercent(env.renewableShare.value)} d'énergies renouvelables, ${formatNumber(env.co2PerCapita.value, 1)} t de CO₂ par habitant.`;
    }
    case "a_retenir":
      return `L'essentiel à retenir ${of} : ${country.keyFacts.map((f) => f.title).join(" ; ")}.`;
  }
}

/** Joins a list as "a, b and c". */
function listEn(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

function formatInhabitantsEn(value: number): string {
  if (value >= 1_000_000) return `${formatNumber(value / 1_000_000, 1, "en")} million inhabitants`;
  return `${formatNumber(value, 0, "en")} inhabitants`;
}

/** English counterpart of `leadFr` — same figures, English phrasing and number format. */
function leadEn(country: Country, category: CategoryKey): string {
  const of = `of ${country.nameWithArticle}`;
  switch (category) {
    case "geographie": {
      const g = country.geography;
      const parts = [`${formatNumber(g.areaKm2.value, g.areaKm2.value < 10 ? 2 : 0, "en")} km²`, `capital ${country.capital}`];
      if (g.highestPoint) parts.push(`highest point ${withoutParenthetical(g.highestPoint.name)} (${formatNumber(g.highestPoint.elevationM, 0, "en")} m)`);
      return `Geography ${of}: ${parts.join(", ")}.`;
    }
    case "population": {
      const p = country.population;
      return `Population ${of}: ${formatInhabitantsEn(p.total.value)}, ${formatNumber(p.density.value, 0, "en")} people/km².`;
    }
    case "langues": {
      const official = country.languages.entries.filter((l) => l.kind === "officielle").map((l) => withoutParenthetical(l.name));
      return official.length
        ? `Official language${official.length > 1 ? "s" : ""} ${of}: ${listEn(official)}.`
        : `Languages ${of}: no de jure official language.`;
    }
    case "religion": {
      const top = [...country.religion.points]
        .sort((a, b) => b.sharePercent - a.sharePercent)
        .slice(0, 3)
        .map((p) => `${p.label} ${formatPercent(p.sharePercent, 0, "en")}`);
      return `Religions ${of}: ${top.join(", ")} (${country.religion.year}).`;
    }
    case "politique": {
      const p = country.politics;
      return `Politics ${of}: ${p.stateForm}. ${p.headOfState.title}: ${p.headOfState.name}.`;
    }
    case "economie": {
      const e = country.economy;
      return `Economy ${of}: GDP ${formatCurrencyCompact(e.gdp.value, e.gdp.unit ?? "USD", 1, "en")}, ${formatCurrencyCompact(e.gdpPerCapita.value, e.gdpPerCapita.unit ?? "USD", 1, "en")} per capita, unemployment ${formatPercent(e.unemploymentRate.value, 1, "en")}.`;
    }
    case "histoire": {
      const periods = country.history.periods;
      return `History ${of} in ${periods.length} major periods: ${periods.map((p) => p.title).join("; ")}.`;
    }
    case "culture":
      return `Culture ${of}: ${listEn(country.culture.items.map((i) => i.title))}.`;
    case "environnement": {
      const env = country.environment;
      return `Environment ${of}: ${formatPercent(env.renewableShare.value, 0, "en")} renewable energy, ${formatNumber(env.co2PerCapita.value, 1, "en")} t of CO₂ per capita.`;
    }
    case "a_retenir":
      return `Key facts about ${country.nameWithArticle}: ${country.keyFacts.map((f) => f.title).join("; ")}.`;
  }
}

function summaryOf(country: Country, category: CategoryKey): string | undefined {
  switch (category) {
    case "geographie": return country.geography.summary;
    case "population": return country.population.summary;
    case "langues": return country.languages.summary;
    case "religion": return country.religion.summary;
    case "politique": return country.politics.summary;
    case "economie": return country.economy.summary;
    case "environnement": return country.environment.summary;
    default: return undefined;
  }
}

/** Specific, figure-led meta description for a country's category page, built only from its own data. */
export function categoryDescription(country: Country, category: CategoryKey, locale: Locale = "fr"): string {
  const head = plain(locale === "en" ? leadEn(country, category) : leadFr(country, category));
  const summary = summaryOf(country, category);
  if (!summary || head.length > MAX_LENGTH - 40) return truncate(head);
  return truncate(`${head} ${firstSentence(summary)}`);
}
