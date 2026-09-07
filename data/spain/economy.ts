import type { EconomyData } from "@/lib/types";

const INE_URL = "https://www.ine.es/";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 1_722_746_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 35_958,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 8.4,
    unit: "%",
    year: 2025,
    source: "INE",
    sourceUrl: INE_URL,
    note: "Moyenne annuelle estimée.",
  },
  sectors: [
    { name: "Services", sharePercent: 68.7 },
    { name: "Industrie", sharePercent: 20.1 },
    { name: "Agriculture", sharePercent: 2.5 },
  ],
  sectorsSource: { source: "Eurostat", sourceUrl: "https://ec.europa.eu/eurostat", year: 2023 },
  indicators: [],
  summary:
    "Quatrième économie de la zone euro, l'Espagne s'appuie sur un secteur des services très développé — tourisme en tête, l'un des premiers au monde — aux côtés d'une industrie automobile et agroalimentaire significative.",
};
