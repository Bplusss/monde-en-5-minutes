import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Ringgit", code: "MYR", symbol: "RM" },
  gdp: {
    value: 472_193_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=MY",
    note: "Dollars courants.",
  },
  gdpPerCapita: {
    value: 13_125,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=MY",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 3.8,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=MY",
  },
  sectors: [
    { name: "Services", sharePercent: 54.8 },
    { name: "Industrie (dont mines et construction)", sharePercent: 35.7 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 8.2 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [
    {
      label: "Production d'huile de palme",
      value: {
        value: "deuxième producteur et exportateur mondial, derrière l'Indonésie",
        source: "USDA Foreign Agricultural Service",
        sourceUrl: "https://ipad.fas.usda.gov/cropexplorer/cropview/commodityView.aspx?cropid=4243000",
        note: "Les deux pays fournissent ensemble environ 85 % de l'huile de palme mondiale.",
      },
    },
  ],
  summary:
    "Ancienne économie du caoutchouc et de l'étain, la Malaisie s'est industrialisée à partir des années 1970 et compte parmi les pays à revenu intermédiaire supérieur. L'électronique est son premier secteur d'exportation : Penang et Kulim accueillent des usines d'assemblage et de test de semi-conducteurs pour les grands groupes mondiaux. Le pétrole et le gaz, exploités par la compagnie publique Petronas, l'huile de palme et le tourisme complètent le tableau, et le Johor connaît depuis 2023 un boom des centres de données. Une politique de discrimination positive en faveur des Bumiputera, lancée en 1971, structure toujours l'accès aux marchés publics et à l'université.",
};
