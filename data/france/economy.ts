import type { EconomyData } from "@/lib/types";

const COMPTES_URL = "https://www.insee.fr/fr/statistiques/8068582";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 3_160_443_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 45_950,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 7.9,
    unit: "%",
    year: 2025,
    source: "INSEE",
    sourceUrl: "https://www.insee.fr/fr/statistiques/8735266",
    note: "4ᵉ trimestre 2025, au sens du BIT.",
  },
  sectors: [
    { name: "Services", sharePercent: 79 },
    { name: "Industrie", sharePercent: 13 },
    { name: "Construction", sharePercent: 6 },
    { name: "Agriculture", sharePercent: 2 },
  ],
  sectorsSource: { source: "INSEE", sourceUrl: COMPTES_URL, year: 2023 },
  indicators: [],
  summary:
    "L'économie française, l'une des principales économies de la zone euro, repose très largement sur les services (commerce, finance, administration, tourisme), avec une base industrielle significative dans l'aéronautique, l'automobile, le luxe et l'énergie.",
};
