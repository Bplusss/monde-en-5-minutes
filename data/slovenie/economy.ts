import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 72_400_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=SI",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 34_089,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=SI",
    note: "Dollars courants — l'un des PIB par habitant les plus élevés d'Europe centrale et orientale.",
  },
  unemploymentRate: {
    value: 3.7,
    unit: "%",
    year: 2024,
    source: "Eurostat",
    sourceUrl: "https://tradingeconomics.com/slovenia/harmonised-unemployment-rate-eurostat-data.html",
    note: "Taux harmonisé, l'un des plus bas de l'Union européenne.",
  },
  sectors: [
    { name: "Services", sharePercent: 65.9 },
    { name: "Industrie", sharePercent: 32.2 },
    { name: "Agriculture", sharePercent: 1.8 },
  ],
  sectorsSource: {
    source: "Wikipedia (d'après CIA World Factbook)",
    sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Slovenia",
  },
  indicators: [
    {
      label: "Dette publique",
      value: {
        value: "65,7 % du PIB",
        year: 2025,
        source: "Ministère slovène des Finances",
        sourceUrl: "https://tradingeconomics.com/slovenia/government-debt-to-gdp",
        note: "En repli par rapport au pic de 2020-2021 lié à la pandémie, mais toujours au-dessus du seuil de Maastricht de 60 %.",
      },
    },
  ],
  summary:
    "Économie ouverte et industrialisée, la Slovénie est le pays le plus prospère par habitant issu de l'ex-Yougoslavie, porté par une base manufacturière diversifiée (automobile et équipementiers, pharmacie avec le groupe Krka, électroménager avec Gorenje) fortement intégrée aux chaînes de valeur allemandes et autrichiennes. Premier pays à la fois ex-yougoslave et ex-communiste à avoir adopté l'euro, le 1ᵉʳ janvier 2007, elle combine un secteur exportateur robuste avec un tourisme en forte croissance, porté par des destinations comme le lac de Bled et Ljubljana.",
};
