import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";
const USGS = "U.S. Geological Survey (USGS), Mineral Commodity Summaries 2026";

export const economy: EconomyData = {
  currency: { name: "Franc congolais", code: "CDF", symbol: "FC" },
  gdp: {
    value: 91_030_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=CD",
    note: "Dollars courants ; l'économie est largement dollarisée.",
  },
  gdpPerCapita: {
    value: 807,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=CD",
    note: "Parmi les plus faibles du monde.",
  },
  unemploymentRate: {
    value: 4.4,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=CD",
    note: "Estimation modélisée de l'OIT, peu significative dans une économie très majoritairement informelle.",
  },
  sectors: [
    { name: "Services", sharePercent: 48.0 },
    { name: "Industrie (dont mines)", sharePercent: 39.7 },
    { name: "Agriculture", sharePercent: 8.9 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.IND.TOTL.ZS?locations=CD", year: 2025 },
  indicators: [
    {
      label: "Part mondiale de la production de cobalt",
      value: {
        value: 73,
        unit: "%",
        year: 2025,
        source: USGS,
        sourceUrl: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-cobalt.pdf",
        note: "Environ 230 000 tonnes sur 310 000 dans le monde, essentiellement au Lualaba et au Haut-Katanga ; métal clé des batteries lithium-ion.",
      },
    },
    {
      label: "Production minière de cuivre",
      value: {
        value: "environ 3,2 millions de tonnes (2025), deuxième producteur mondial après le Chili",
        source: USGS,
        sourceUrl: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-copper.pdf",
      },
    },
    {
      label: "Part mondiale de la production de tantale (coltan)",
      value: {
        value: 52,
        unit: "%",
        year: 2025,
        source: USGS,
        sourceUrl: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-tantalum.pdf",
        note: "Environ 1 300 tonnes sur 2 500, extraites du coltan de l'est, dont la mine de Rubaya, contrôlée par l'AFC/M23 depuis 2024.",
      },
    },
    {
      label: "Taux d'extrême pauvreté",
      value: {
        value: 85.3,
        unit: "% de la population",
        year: 2020,
        source: WB,
        sourceUrl: "https://data.worldbank.org/indicator/SI.POV.DDAY?locations=CD",
        note: "Part de la population vivant sous le seuil international d'extrême pauvreté (3 dollars par jour en parité de pouvoir d'achat 2021).",
      },
    },
  ],
  summary:
    "La RDC est l'un des pays les plus riches du monde en ressources minières et l'un des plus pauvres par habitant. Le cobalt et le cuivre du Katanga, exploités surtout par des entreprises chinoises, assurent l'essentiel des exportations ; l'est fournit coltan, étain et or, souvent extraits artisanalement. Le reste de l'économie repose sur l'agriculture de subsistance et l'informel, et la corruption comme le conflit dans l'est limitent les retombées de cette richesse.",
};
