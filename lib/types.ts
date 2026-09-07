/**
 * Core data model for a country sheet.
 * Kept as separate, narrow interfaces (rather than one giant blob) so the
 * shape maps cleanly onto future Supabase tables: country_stats,
 * country_languages, country_religions, country_politics, country_economy,
 * country_history, country_culture, country_territories, country_environment,
 * country_key_facts, cities, rivers, regions, sources.
 */

export interface Sourced<T> {
  value: T;
  unit?: string;
  year?: number;
  source: string;
  sourceUrl?: string;
  note?: string;
}

export type CountryStatus = "available" | "coming-soon";

export interface CountrySummary {
  id: string; // ISO 3166-1 alpha-3 code, e.g. "FRA" — must match the `iso_a3` property in public/geo/world.json
  slug: string; // e.g. "france"
  name: string;
  flag: string; // emoji flag, display only
  status: CountryStatus;
  /** French continent label (e.g. "Europe", "Afrique") — used to group/sort the country list. */
  continent: string;
  /** Wikidata QID (e.g. "Q142" for France) — used to look up the current head of state/government generically for every country. */
  wikidataId?: string;
}

export interface City {
  name: string;
  lat: number;
  lon: number;
  population?: Sourced<number>;
  isCapital?: boolean;
}

export interface River {
  name: string;
  lengthKm: Sourced<number>;
  source_location: string;
  mouth: string;
}

export interface Region {
  code: string;
  name: string;
  population?: Sourced<number>;
  areaKm2?: Sourced<number>;
}

/** GeoJSON sources + default viewport for the generic `CountryMap` component — every country supplies its own. */
export interface CountryMaps {
  outlineGeojsonUrl: string;
  regionsGeojsonUrl?: string;
  riversGeojsonUrl?: string;
  center: [number, number]; // [lon, lat]
  zoom: number;
}

export interface GeographyData {
  /** Short, factual section headline — kept per-country since it describes real geographic features. */
  headline: string;
  areaKm2: Sourced<number>;
  coastlineKm?: Sourced<number>;
  highestPoint?: { name: string; elevationM: number; source: string; sourceUrl?: string };
  borderingCountries: string[];
  /** Attribution for `borderingCountries` and `climate`, which aren't individually `Sourced`. */
  generalSource: { source: string; sourceUrl?: string };
  climate: string;
  summary: string;
}

export interface PopulationData {
  total: Sourced<number>;
  density: Sourced<number>;
  growthRate?: Sourced<number>;
  medianAge?: Sourced<number>;
  urbanShare?: Sourced<number>;
  summary: string;
}

export interface LanguageEntry {
  name: string;
  kind: "officielle" | "régionale" | "parlée";
  sharePercent?: Sourced<number>;
  note?: string;
}

export interface LanguagesData {
  entries: LanguageEntry[];
  summary: string;
}

export interface ReligionDataPoint {
  label: string;
  sharePercent: number;
}

export interface ReligionData {
  surveyName: string;
  year: number;
  ageScope: string;
  source: string;
  sourceUrl?: string;
  points: ReligionDataPoint[];
  summary: string;
  methodologyNote: string;
}

export interface PoliticsData {
  stateForm: string;
  regime: string;
  headOfState: { title: string; name: string; since: string; source?: string; sourceUrl?: string };
  headOfGovernment: { title: string; name: string; since: string; source?: string; sourceUrl?: string };
  legislature: { name: string; chambers: { name: string; seats: number }[] };
  constitution: { adopted: string; source: string; sourceUrl?: string };
  summary: string;
}

export interface EconomyIndicator {
  label: string;
  value: Sourced<string | number>;
}

export interface EconomyData {
  currency: { name: string; code: string; symbol: string };
  gdp: Sourced<number>;
  gdpPerCapita: Sourced<number>;
  /** Structured (not just the free-text `indicators` entry) so it can be used in numeric comparisons. */
  unemploymentRate: Sourced<number>;
  sectors: { name: string; sharePercent: number }[];
  /** Attribution for `sectors`, a single breakdown rather than individually `Sourced` values. */
  sectorsSource: { source: string; sourceUrl?: string; year?: number };
  indicators: EconomyIndicator[];
  summary: string;
}

export interface HistoricalEvent {
  date: string;
  title: string;
  description: string;
  source: string;
  sourceUrl?: string;
}

export interface HistoricalPeriod {
  id: string;
  title: string;
  startYear: number;
  endYear: number | "present";
  summary: string;
  events: HistoricalEvent[];
  source: string;
  sourceUrl?: string;
}

export interface HistoryData {
  intro: string;
  periods: HistoricalPeriod[];
}

export interface CultureItem {
  category: string;
  title: string;
  description: string;
  /** A few concrete, real named examples (dishes, sites, works…) — kept short, never exhaustive. */
  examples?: string[];
  source?: string;
  sourceUrl?: string;
}

export interface CultureData {
  intro: string;
  items: CultureItem[];
}

export interface TerritorialDivision {
  name: string;
  count: number;
  note?: string;
  source: string;
  sourceUrl?: string;
}

export interface OverseasTerritory {
  name: string;
  status: string;
  population?: Sourced<number>;
  /** Key matching a feature's `group` property in `mapGeojsonUrl`, so the territory can be drawn on a map. Absent when no geometry is available — the UI degrades to a plain badge. */
  mapGroupId?: string;
}

export interface TerritoriesData {
  summary: string;
  divisions: TerritorialDivision[];
  metropolitanRegions: Region[];
  /** Shared GeoJSON source for overseas territory outlines, grouped by `mapGroupId`. */
  overseasMapGeojsonUrl?: string;
  overseas: OverseasTerritory[];
}

export interface EnvironmentIndicator {
  label: string;
  value: Sourced<string | number>;
}

export interface EnvironmentData {
  renewableShare: Sourced<number>;
  co2PerCapita: Sourced<number>;
  /** Extra stats beyond the two headline figures — e.g. forest cover, protected area. */
  indicators: EnvironmentIndicator[];
  /** Main natural hazards the country faces, kept short (labels, not paragraphs). */
  risks: string[];
  /** Attribution for `risks`, a plain label list rather than individually `Sourced` values. */
  risksSource: { source: string; sourceUrl?: string };
  summary: string;
}

export interface KeyFact {
  title: string;
  description: string;
  source?: string;
  sourceUrl?: string;
}

export type CategoryKey =
  | "geographie"
  | "population"
  | "langues"
  | "religion"
  | "politique"
  | "economie"
  | "histoire"
  | "culture"
  | "environnement"
  | "a_retenir";

export interface Country extends CountrySummary {
  capital: string;
  currencyCode: string;
  /** Name with its correct French definite article, e.g. "la France", "l'Italie" — for sentences like "Découvrez {nameWithArticle}". */
  nameWithArticle: string;
  geography: GeographyData;
  population: PopulationData;
  languages: LanguagesData;
  religion: ReligionData;
  politics: PoliticsData;
  economy: EconomyData;
  history: HistoryData;
  culture: CultureData;
  territories: TerritoriesData;
  environment: EnvironmentData;
  keyFacts: KeyFact[];
  cities: City[];
  rivers: River[];
  regions: Region[];
  maps: CountryMaps;
}
