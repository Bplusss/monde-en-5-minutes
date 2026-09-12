import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Dollar canadien", code: "CAD", symbol: "$" },
  gdp: {
    value: 2_319_899_772_426,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=CA",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 55_698,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=CA",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 6.9,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=CA",
    note: "Estimation modélisée (OIT) ; l'Enquête sur la population active de Statistique Canada publie des taux mensuels proches, généralement entre 6,5 % et 7 %.",
  },
  sectors: [
    { name: "Services", sharePercent: 64.1 },
    { name: "Industrie", sharePercent: 27.4 },
    { name: "Agriculture, forêt et pêche", sharePercent: 1.9 },
    { name: "Autres (taxes nettes sur les produits, etc.)", sharePercent: 6.6 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=CA", year: 2022 },
  indicators: [
    {
      label: "Part des exportations vers les États-Unis",
      value: { value: "environ 75 %", year: 2024, source: "Statistique Canada", sourceUrl: "https://www150.statcan.gc.ca/n1/daily-quotidien/250206/dq250206a-eng.htm", note: "Une intégration commerciale très étroite avec l'économie américaine, encadrée par l'accord Canada–États-Unis–Mexique (ACEUM/CUSMA/T-MEC), source de tensions commerciales récurrentes." },
    },
  ],
  summary:
    "Économie développée et très diversifiée, dominée par les services (finance à Toronto, technologies, tourisme) mais aussi riche en ressources naturelles — hydrocarbures et sables bitumineux de l'Alberta, hydroélectricité du Québec et du Manitoba, mines, potasse, foresterie. Le commerce extérieur canadien reste massivement orienté vers les États-Unis, ce qui rend l'économie du pays particulièrement sensible aux évolutions de la politique commerciale américaine.",
};
