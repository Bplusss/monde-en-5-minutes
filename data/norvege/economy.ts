import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Couronne norvégienne", code: "NOK", symbol: "kr" },
  gdp: {
    value: 483_593_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 86_717,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 4.5,
    unit: "%",
    year: 2026,
    source: "SSB (Statistisk sentralbyrå)",
    sourceUrl: "https://www.ssb.no/en/arbeid-og-lonn/sysselsetting/statistikk/arbeidskraftundersokelsen",
    note: "Juillet 2026, enquête sur les forces de travail (AKU).",
  },
  sectors: [
    { name: "Services", sharePercent: 63.5 },
    { name: "Industrie (dont pétrole et gaz)", sharePercent: 34.7 },
    { name: "Agriculture", sharePercent: 1.6 },
  ],
  sectorsSource: { source: "CIA World Factbook", sourceUrl: "https://www.cia.gov/the-world-factbook/countries/norway/", year: 2016 },
  indicators: [],
  summary:
    "L'économie norvégienne repose sur des secteurs de services très développés et une industrie dominée par le pétrole et le gaz de la mer du Nord, exploités depuis 1969. Les revenus pétroliers alimentent le Fonds pétrolier public (Government Pension Fund Global), le plus grand fonds souverain au monde.",
};
