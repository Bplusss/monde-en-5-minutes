import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 1_214_928_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 66_649,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 3.9,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=NL",
    note: "Estimation modélisée OIT.",
  },
  sectors: [
    { name: "Services", sharePercent: 80.2 },
    { name: "Industrie", sharePercent: 17.9 },
    { name: "Agriculture", sharePercent: 1.6 },
  ],
  sectorsSource: { source: "CIA World Factbook", sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_the_Netherlands", year: 2017 },
  indicators: [],
  summary:
    "Économie très ouverte et fortement tournée vers le commerce international, les Pays-Bas s'appuient sur un secteur des services prédominant (logistique portuaire — le port de Rotterdam est le plus grand d'Europe —, finance, haute technologie) aux côtés d'une industrie agroalimentaire et chimique développée.",
};
