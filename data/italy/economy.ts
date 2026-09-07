import type { EconomyData } from "@/lib/types";

const ISTAT_PIL_URL = "https://www.istat.it/wp-content/uploads/2025/09/Conti-economici-nazionali-Anni-2023-2024.pdf";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 2_380_825_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 40_112,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 6.1,
    unit: "%",
    year: 2025,
    source: "ISTAT",
    sourceUrl: "https://www.istat.it/comunicato-stampa/occupati-e-disoccupati-dati-provvisori-dicembre-2025/",
    note: "Moyenne annuelle 2025.",
  },
  sectors: [
    { name: "Services", sharePercent: 72.3 },
    { name: "Industrie et agriculture", sharePercent: 22 },
    { name: "Construction", sharePercent: 5.7 },
  ],
  sectorsSource: { source: "ISTAT", sourceUrl: ISTAT_PIL_URL, year: 2024 },
  indicators: [],
  summary:
    "Huitième économie mondiale, l'Italie repose sur une économie de services développée et une industrie manufacturière puissante — mécanique, automobile, mode et agroalimentaire — organisée autour de nombreuses petites et moyennes entreprises, en particulier dans le nord du pays.",
};
