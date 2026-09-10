import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 92_662_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 23_911,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 5.0,
    unit: "%",
    year: 2024,
    source: "Office croate de la statistique (DZS), enquête sur les forces de travail",
    sourceUrl: "https://podaci.dzs.hr/media/tayhf0ll/rad-2025-3-2-labour-force-in-the-republic-of-croatia-2024-annual-average-and-revised-data-for-2021-2023-period.pdf",
    note: "Taux moyen annuel selon la méthodologie internationale (BIT).",
  },
  sectors: [
    { name: "Services", sharePercent: 59.1 },
    { name: "Industrie", sharePercent: 21.0 },
    { name: "Agriculture", sharePercent: 3.4 },
  ],
  sectorsSource: {
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NV.AGR.TOTL.ZS?locations=HR",
  },
  indicators: [
    {
      label: "Dette publique",
      value: {
        value: "56,3 % du PIB",
        year: 2025,
        source: "Eurostat",
        sourceUrl: "https://tradingeconomics.com/croatia/government-debt-to-gdp",
        note: "En baisse continue depuis le pic de la crise du Covid-19 (~87 % en 2020), sous le seuil de Maastricht de 60 %.",
      },
    },
  ],
  summary:
    "Portée par un tourisme qui pèse directement plus de 11 % du PIB — la part la plus élevée de l'Union européenne une fois les activités connexes incluses — et par les fonds européens de cohésion et de relance, l'économie croate a connu une croissance solide depuis son entrée dans la zone euro et l'espace Schengen le 1ᵉʳ janvier 2023, tout en restant structurellement dépendante des recettes saisonnières estivales et confrontée à une pénurie croissante de main-d'œuvre.",
};
