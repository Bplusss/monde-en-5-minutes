import type { EconomyData } from "@/lib/types";

const USGS = "U.S. Geological Survey (USGS), Mineral Commodity Summaries 2026";

export const economy: EconomyData = {
  currency: { name: "Sol", code: "PEN", symbol: "S/" },
  gdp: {
    value: 334_855_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=PE",
    note: "Dollars courants.",
  },
  gdpPerCapita: {
    value: 9_684,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=PE",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 5.1,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=PE",
    note: "Un taux bas qui masque une très forte informalité : environ sept emplois sur dix ne sont pas déclarés.",
  },
  sectors: [
    { name: "Services", sharePercent: 50.9 },
    { name: "Industrie (dont mines et construction)", sharePercent: 34.3 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 7.5 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2024 },
  indicators: [
    {
      label: "Production minière de cuivre",
      value: {
        value: "environ 2,7 millions de tonnes (2025), troisième producteur mondial",
        source: USGS,
        sourceUrl: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-copper.pdf",
        note: "Derrière le Chili et la RDC ; le cuivre représente à lui seul environ un tiers des exportations péruviennes.",
      },
    },
  ],
  summary:
    "Grand pays minier, le Pérou est l'un des premiers producteurs mondiaux de cuivre, d'argent, de zinc et d'or, qui assurent l'essentiel de ses exportations, notamment vers la Chine. Il exporte aussi des produits agricoles de la côte irriguée (avocats, myrtilles, raisins) et de la farine de poisson tirée de l'anchois. Réputée pour la stabilité de sa monnaie et l'indépendance de sa banque centrale, l'économie a résisté aux crises politiques à répétition, mais l'informalité, les inégalités entre la côte et les Andes et l'orpaillage illégal en Amazonie restent des fragilités majeures.",
};
