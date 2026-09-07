import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 664_564_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 56_613,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 6.3,
    unit: "%",
    year: 2026,
    source: "Statbel",
    sourceUrl: "https://statbel.fgov.be/fr/themes/emploi-formation/marche-du-travail/emploi-et-chomage",
    note: "1ᵉʳ trimestre 2026, au sens du BIT (15-64 ans).",
  },
  sectors: [
    { name: "Services", sharePercent: 78.5 },
    { name: "Industrie", sharePercent: 20.9 },
    { name: "Agriculture", sharePercent: 0.6 },
  ],
  sectorsSource: { source: "Wikipédia (données macroéconomiques)", sourceUrl: "https://fr.wikipedia.org/wiki/%C3%89conomie_de_la_Belgique", year: 2021 },
  indicators: [],
  summary:
    "Petite économie très ouverte au cœur de l'Union européenne, la Belgique s'appuie sur un secteur des services prédominant (logistique, finance, administration européenne et internationale) et une industrie tournée vers l'exportation (chimie, pharmacie, transformation des métaux).",
};
