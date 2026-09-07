import { FULL_COUNTRIES } from "../data/countries-full";
import { COUNTRIES } from "../data/countries-registry";
import type { Country, Sourced } from "../lib/types";

interface Issue {
  level: "error" | "warning";
  message: string;
}

const issues: Issue[] = [];
const err = (message: string) => issues.push({ level: "error", message });
const warn = (message: string) => issues.push({ level: "warning", message });

function isValidUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function checkSourced(path: string, s: Sourced<unknown> | undefined, requireYear = true) {
  if (!s) return;
  if (!s.source || s.source.trim().length === 0) {
    err(`${path} : donnée sans source.`);
  }
  if (s.sourceUrl && !isValidUrl(s.sourceUrl)) {
    err(`${path} : sourceUrl invalide ("${s.sourceUrl}").`);
  }
  if (!s.sourceUrl) {
    warn(`${path} : source sans URL ("${s.source}").`);
  }
  if (requireYear && !s.year) {
    warn(`${path} : statistique sans année ("${s.source}").`);
  }
  if (typeof s.value === "number" && s.value < 0) {
    err(`${path} : valeur négative incohérente.`);
  }
}

// --- Registry-level checks -------------------------------------------------

const seenIds = new Set<string>();
const seenSlugs = new Set<string>();
for (const c of COUNTRIES) {
  if (!c.id) err(`Pays sans identifiant : "${c.name}".`);
  if (!c.slug) err(`Pays sans slug : "${c.name}".`);
  if (c.id && seenIds.has(c.id)) err(`Identifiant dupliqué : "${c.id}".`);
  if (c.slug && seenSlugs.has(c.slug)) err(`Slug dupliqué : "${c.slug}".`);
  seenIds.add(c.id);
  seenSlugs.add(c.slug);
}

// --- Full country checks ----------------------------------------------------

function validateCountry(country: Country) {
  const p = country.slug;

  checkSourced(`${p}.population.total`, country.population.total);
  checkSourced(`${p}.population.density`, country.population.density);
  checkSourced(`${p}.geography.areaKm2`, country.geography.areaKm2);
  checkSourced(`${p}.economy.gdp`, country.economy.gdp);
  checkSourced(`${p}.economy.gdpPerCapita`, country.economy.gdpPerCapita);

  if (!country.religion.points.length) warn(`${p}.religion : aucune donnée.`);
  const religionSum = country.religion.points.reduce((s, pt) => s + pt.sharePercent, 0);
  if (religionSum > 105) err(`${p}.religion : somme des parts > 105 % (${religionSum}%).`);

  const requiredCategories: (keyof Country)[] = [
    "geography",
    "population",
    "languages",
    "religion",
    "politics",
    "economy",
    "history",
    "culture",
    "territories",
    "environment",
    "keyFacts",
  ];
  for (const cat of requiredCategories) {
    if (!country[cat]) err(`${p} : catégorie manquante "${String(cat)}".`);
  }

  if (!country.history.periods.length) err(`${p}.history : aucune période historique.`);
  for (const period of country.history.periods) {
    if (period.endYear !== "present" && period.endYear <= period.startYear) {
      err(`${p}.history.${period.id} : période incohérente (fin <= début).`);
    }
    if (!period.source) err(`${p}.history.${period.id} : période sans source.`);
    for (const ev of period.events) {
      if (!ev.source) err(`${p}.history.${period.id} : événement "${ev.title}" sans source.`);
    }
  }

  for (const f of country.keyFacts) {
    if (!f.source) warn(`${p}.keyFacts : "${f.title}" sans source.`);
  }

  checkSourced(`${p}.environment.renewableShare`, country.environment.renewableShare);
  checkSourced(`${p}.environment.co2PerCapita`, country.environment.co2PerCapita);

  for (const city of country.cities) {
    if (city.population) checkSourced(`${p}.cities.${city.name}.population`, city.population, true);
  }
}

for (const country of Object.values(FULL_COUNTRIES)) {
  validateCountry(country);
}

// --- Report ------------------------------------------------------------------

const errors = issues.filter((i) => i.level === "error");
const warnings = issues.filter((i) => i.level === "warning");

console.log(`\nValidation du dataset — ${Object.keys(FULL_COUNTRIES).length} pays complet(s), ${COUNTRIES.length} pays au total.\n`);

if (warnings.length) {
  console.log(`⚠ ${warnings.length} avertissement(s) :`);
  warnings.forEach((w) => console.log(`  - ${w.message}`));
  console.log("");
}

if (errors.length) {
  console.log(`✗ ${errors.length} erreur(s) :`);
  errors.forEach((e) => console.log(`  - ${e.message}`));
  console.log("");
  process.exit(1);
}

console.log("✓ Dataset valide.\n");
