import type { EconomyData } from "@/lib/types";

const SCB_URL = "https://www.scb.se/hitta-statistik/sverige-i-siffror/samhallets-ekonomi/bnp-i-sverige/";

export const economy: EconomyData = {
  currency: { name: "Couronne suédoise", code: "SEK", symbol: "kr" },
  gdp: {
    value: 604_899_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 57_028,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 8.8,
    unit: "%",
    year: 2025,
    source: "SCB — Enquêtes sur les forces de travail (AKU)",
    sourceUrl: "https://www.scb.se/hitta-statistik/sverige-i-siffror/samhallets-ekonomi/arbetsloshet-i-sverige/",
    note: "L'un des niveaux les plus élevés depuis 20 ans.",
  },
  sectors: [
    { name: "Services", sharePercent: 70 },
    { name: "Industrie", sharePercent: 22 },
    { name: "Construction", sharePercent: 6 },
    { name: "Agriculture", sharePercent: 2 },
  ],
  sectorsSource: { source: "SCB (Statistiska centralbyrån)", sourceUrl: SCB_URL, year: 2024 },
  indicators: [],
  summary:
    "L'économie suédoise, l'une des plus compétitives d'Europe, s'est largement transformée d'une base industrielle et agricole vers les services, qui en représentent aujourd'hui l'essentiel. L'industrie manufacturière (véhicules, sidérurgie, télécommunications) reste néanmoins un pilier des exportations.",
};
