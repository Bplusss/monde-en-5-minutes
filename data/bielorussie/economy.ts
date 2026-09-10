import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/belarus";

export const economy: EconomyData = {
  currency: { name: "Rouble biélorusse", code: "BYN", symbol: "Br" },
  gdp: {
    value: 75_960_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 8_300,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 3.4,
    unit: "%",
    year: 2024,
    source: "Banque mondiale (estimation OIT)",
    sourceUrl: WB_URL,
  },
  sectors: [
    { name: "Services", sharePercent: 48.0 },
    { name: "Industrie", sharePercent: 43.0 },
    { name: "Agriculture", sharePercent: 9.0 },
  ],
  sectorsSource: { source: "Wikipedia (d'après les statistiques nationales)", year: 2022 },
  indicators: [],
  summary:
    "Restée l'une des économies les plus étatisées d'Europe, avec une part de secteur public encore proche des deux tiers du PIB, la Biélorussie s'appuie sur une industrie lourde héritée de l'ère soviétique (potasse, tracteurs et camions MAZ, pétrochimie) et sur une agriculture développée. Le pays est soumis depuis 2020-2022 à d'importantes sanctions occidentales, en réaction à la répression politique interne puis à son rôle de base arrière pour l'invasion russe de l'Ukraine, ce qui a fortement réorienté ses échanges commerciaux vers la Russie et la Chine.",
};
