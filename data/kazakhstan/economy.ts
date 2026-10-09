import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Tenge", code: "KZT", symbol: "₸" },
  gdp: {
    value: 306_239_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=KZ",
  },
  gdpPerCapita: {
    value: 14_692,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=KZ",
  },
  unemploymentRate: {
    value: 4.8,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=KZ",
  },
  sectors: [
    { name: "Services", sharePercent: 57.7 },
    { name: "Industrie (dont hydrocarbures et mines)", sharePercent: 32.4 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 3.7 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [
    {
      label: "Part mondiale de la production d'uranium",
      value: { value: "environ 40 %", year: 2025, source: "World Nuclear Association", sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-g-n/kazakhstan", note: "Premier producteur mondial depuis 2009, avec près de 25 840 tonnes en 2025." },
    },
  ],
  summary:
    "Le Kazakhstan est la première économie d'Asie centrale. Son essor repose sur le pétrole, qui représente plus de la moitié de ses exportations : les gisements géants de Tengiz, de Karachaganak et de Kachagan, en mer Caspienne, sont exploités avec des compagnies étrangères, et l'essentiel du brut est exporté par un oléoduc traversant la Russie jusqu'à la mer Noire. Le pays est aussi le premier producteur mondial d'uranium et un grand producteur de cuivre, de zinc, de charbon et de blé. Le fonds souverain alimenté par la rente pétrolière amortit les chocs, mais l'économie reste dépendante des cours des matières premières et dominée par de grandes entreprises publiques.",
};
