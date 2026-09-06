import type { EconomyData } from "@/lib/types";

const DESTATIS_URL = "https://www.destatis.de/DE/Themen/Wirtschaft/Volkswirtschaftliche-Gesamtrechnungen-Inlandsprodukt/_inhalt.html";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 4_306_000_000_000,
    unit: "€",
    year: 2024,
    source: "Destatis",
    sourceUrl: DESTATIS_URL,
    note: "Euros courants.",
  },
  gdpPerCapita: {
    value: 50_819,
    unit: "€",
    year: 2024,
    source: "Destatis",
    sourceUrl: DESTATIS_URL,
  },
  unemploymentRate: {
    value: 4.1,
    unit: "%",
    year: 2025,
    source: "Bundesagentur für Arbeit",
    sourceUrl: "https://www.arbeitsagentur.de/",
  },
  sectors: [
    { name: "Services", sharePercent: 71 },
    { name: "Industrie", sharePercent: 23 },
    { name: "Construction", sharePercent: 5 },
    { name: "Agriculture", sharePercent: 1 },
  ],
  sectorsSource: { source: "Destatis", sourceUrl: DESTATIS_URL, year: 2025 },
  indicators: [],
  summary:
    "Première économie d'Europe, l'Allemagne s'appuie sur une industrie exportatrice puissante — automobile, machines-outils, chimie — organisée autour d'un vaste tissu de moyennes entreprises (Mittelstand), aux côtés d'un secteur des services prédominant.",
};
