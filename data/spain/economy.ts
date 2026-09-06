import type { EconomyData } from "@/lib/types";

const INE_URL = "https://www.ine.es/";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 1_591_600_000_000,
    unit: "€",
    year: 2024,
    source: "INE",
    sourceUrl: INE_URL,
    note: "Euros courants.",
  },
  gdpPerCapita: {
    value: 32_590,
    unit: "€",
    year: 2024,
    source: "INE",
    sourceUrl: INE_URL,
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
