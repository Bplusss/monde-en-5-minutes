import type { EconomyData } from "@/lib/types";

const SECO = "SECO";
const SECO_URL = "https://www.seco.admin.ch/seco/fr/home/wirtschaftslage---wirtschaftspolitik/Wirtschaftslage/arbeitsmarkt.html";

export const economy: EconomyData = {
  currency: { name: "Franc suisse", code: "CHF", symbol: "CHF" },
  gdp: {
    value: 936_564_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 104_973,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 2.8,
    unit: "%",
    year: 2025,
    source: SECO,
    sourceUrl: SECO_URL,
    note: "Moyenne annuelle 2025, au sens du chômage inscrit.",
  },
  sectors: [
    { name: "Services", sharePercent: 74.5 },
    { name: "Industrie", sharePercent: 24.9 },
    { name: "Agriculture", sharePercent: 0.6 },
  ],
  sectorsSource: { source: "DFAE — About Switzerland", sourceUrl: "https://www.eda.admin.ch/aboutswitzerland/fr/home/wirtschaft/uebersicht/wirtschaft---fakten-und-zahlen.html", year: 2023 },
  indicators: [],
  summary:
    "L'économie suisse, l'une des plus riches au monde par habitant, repose très majoritairement sur les services (banque, assurance, commerce), avec une industrie de haute valeur ajoutée (pharmacie, chimie, horlogerie, machines) et un taux de chômage historiquement parmi les plus bas d'Europe.",
};
