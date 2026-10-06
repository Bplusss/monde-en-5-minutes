import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Peso colombien", code: "COP", symbol: "$" },
  gdp: {
    value: 457_410_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=CO",
    note: "Dollars courants.",
  },
  gdpPerCapita: {
    value: 8_562,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=CO",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 8.3,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=CO",
  },
  sectors: [
    { name: "Services", sharePercent: 58.5 },
    { name: "Industrie (dont mines et construction)", sharePercent: 21.8 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 10.0 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [],
  summary:
    "Quatrième économie d'Amérique latine, la Colombie dépend fortement de ses exportations de pétrole et de charbon, qui représentent près de la moitié des ventes à l'étranger, aux côtés de l'or, du café — dont elle est l'un des premiers producteurs mondiaux d'arabica — et des fleurs coupées, dont elle est le deuxième exportateur mondial. Le pays a connu une croissance régulière depuis les années 2000, portée par l'amélioration de la sécurité, mais reste marqué par un fort taux d'informalité, près de la moitié des emplois, et par des inégalités parmi les plus élevées du continent. L'économie de la cocaïne, dont la Colombie demeure le premier producteur mondial, continue d'alimenter les groupes armés.",
};
