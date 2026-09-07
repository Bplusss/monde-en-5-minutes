import type { EconomyData } from "@/lib/types";

const INE_URL = "https://www.ine.pt/";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 313_271_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 30_049,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 5.8,
    unit: "%",
    year: 2025,
    source: "INE",
    sourceUrl: INE_URL,
    note: "4ᵉ trimestre 2025.",
  },
  sectors: [
    { name: "Services", sharePercent: 76.5 },
    { name: "Industrie et construction", sharePercent: 21.2 },
    { name: "Agriculture", sharePercent: 2.9 },
  ],
  sectorsSource: { source: "INE", sourceUrl: INE_URL, year: 2024 },
  indicators: [],
  summary:
    "L'économie portugaise repose très largement sur les services — tourisme, commerce, technologies de l'information — avec une industrie manufacturière tournée vers l'exportation (textile, automobile, agroalimentaire) et un secteur agricole désormais marginal dans le PIB.",
};
