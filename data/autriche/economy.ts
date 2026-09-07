import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 534_791_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 58_634,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 5.6,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS",
    note: "Estimation modélisée BIT.",
  },
  sectors: [
    { name: "Services", sharePercent: 70.3 },
    { name: "Industrie", sharePercent: 28.4 },
    { name: "Agriculture", sharePercent: 1.3 },
  ],
  sectorsSource: { source: "Statistik Austria", sourceUrl: "https://www.statistik.at/", year: 2017 },
  indicators: [],
  summary:
    "L'économie autrichienne repose très largement sur les services (tourisme, finance, administration) et sur une industrie exportatrice diversifiée (mécanique, chimie, bois), avec une agriculture de montagne marginale dans la valeur ajoutée totale.",
};
