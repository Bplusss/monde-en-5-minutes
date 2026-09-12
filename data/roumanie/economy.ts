import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/romania";

export const economy: EconomyData = {
  currency: { name: "Leu roumain", code: "RON", symbol: "lei" },
  gdp: {
    value: 382_768_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 20_072,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 5.5,
    unit: "%",
    year: 2024,
    source: "Eurostat",
    sourceUrl: "https://tradingeconomics.com/romania/unemployment-rate-eurostat-data.html",
  },
  sectors: [
    { name: "Services", sharePercent: 60.7 },
    { name: "Industrie", sharePercent: 26.7 },
    { name: "Agriculture", sharePercent: 3.9 },
  ],
  sectorsSource: { source: "Wikipedia (d'après les statistiques nationales)", year: 2023 },
  indicators: [],
  summary:
    "Membre de l'Union européenne depuis 2007 mais non membre de la zone euro, la Roumanie a longtemps affiché l'une des croissances les plus rapides d'Europe centrale et orientale, portée par les services informatiques, l'industrie automobile (Dacia-Renault, Ford) et les exportations vers l'Allemagne. Le pays fait toutefois face depuis 2024-2025 à un déficit budgétaire parmi les plus élevés de l'Union européenne, qui a conduit le gouvernement à engager un programme d'austérité et contribué à une forte instabilité politique.",
};
