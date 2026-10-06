import type { EconomyData } from "@/lib/types";

const USGS = "U.S. Geological Survey (USGS), Mineral Commodity Summaries 2026";

export const economy: EconomyData = {
  currency: { name: "Peso chilien", code: "CLP", symbol: "$" },
  gdp: {
    value: 357_371_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=CL",
    note: "Dollars courants.",
  },
  gdpPerCapita: {
    value: 17_995,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=CL",
    note: "Dollars courants ; l'un des plus élevés d'Amérique latine.",
  },
  unemploymentRate: {
    value: 9.0,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=CL",
  },
  sectors: [
    { name: "Services", sharePercent: 55.5 },
    { name: "Industrie (dont mines et construction)", sharePercent: 31.4 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 3.5 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [
    {
      label: "Production minière de cuivre",
      value: {
        value: "environ 5,3 millions de tonnes (2025), premier producteur mondial",
        source: USGS,
        sourceUrl: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-copper.pdf",
        note: "Près d'un quart de la production mondiale (23 millions de tonnes), et les plus grandes réserves connues de la planète.",
      },
    },
  ],
  summary:
    "Le Chili est l'une des économies les plus ouvertes et les plus stables d'Amérique latine, membre de l'OCDE depuis 2010. Le cuivre, dont il est de loin le premier producteur mondial, assure environ la moitié de ses exportations ; l'entreprise publique Codelco et de grands groupes privés exploitent des mines géantes comme Escondida, dans le désert d'Atacama. Deuxième producteur de lithium, le pays exporte aussi fruits, vin, saumon d'élevage et produits forestiers, et a signé des accords de libre-échange avec la plupart des grandes économies. Ce modèle libéral, hérité des réformes des années 1980, a fortement réduit la pauvreté mais laisse de profondes inégalités, au cœur de la contestation de 2019.",
};
