import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Dirham marocain", code: "MAD", symbol: "DH" },
  gdp: {
    value: 182_370_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=MA",
    note: "Dollars courants ; parmi les cinq ou six premières économies d'Afrique.",
  },
  gdpPerCapita: {
    value: 4_672,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=MA",
  },
  unemploymentRate: {
    value: 9.5,
    unit: "%",
    year: 2026,
    source: "Haut-Commissariat au Plan (HCP), enquête sur la main-d'œuvre, 2ᵉ trimestre 2026 (via Challenge)",
    sourceUrl: "https://www.challenge.ma/maroc-le-taux-de-chomage-setablit-a-95-au-t2-2026-hcp-323182/",
    note: "Chômage « strict » selon la nouvelle méthodologie du HCP introduite en 2026 (l'ancienne enquête donnait environ 13 % en 2024). Il atteint 27,2 % chez les 15-24 ans et 14,8 % chez les femmes.",
  },
  sectors: [
    { name: "Services", sharePercent: 52.3 },
    { name: "Industrie (dont mines, BTP et manufacture)", sharePercent: 25.2 },
    { name: "Agriculture et pêche", sharePercent: 10.5 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=MA", year: 2025 },
  indicators: [
    {
      label: "Réserves mondiales de phosphate",
      value: {
        value: "environ 68 % (50 milliards de tonnes)",
        source: "United States Geological Survey (USGS), Mineral Commodity Summaries",
        sourceUrl: "https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-phosphate.pdf",
        note: "Réserves estimées en incluant le Sahara occidental. Exploitées par le groupe public OCP, l'un des premiers exportateurs mondiaux de phosphates et d'engrais.",
      },
    },
    {
      label: "Industrie automobile",
      value: {
        value: "environ un tiers des exportations de biens (2025)",
        source: "Office des changes (via Le Desk)",
        sourceUrl: "https://ledesk.ma/datadesk/automobile-le-maroc-confirme-son-rang-de-premier-producteur-africain/",
        note: "Premier secteur exportateur et premier producteur automobile d'Afrique, autour des usines Renault de Tanger et Stellantis de Kénitra et de la zone franche de Tanger Med.",
      },
    },
    {
      label: "Tourisme et transferts de la diaspora",
      value: {
        value: "19,8 millions d'arrivées et 122 milliards de dirhams de transferts (2025)",
        source: "Ministère du Tourisme / Office des changes (via TelQuel et Hespress)",
        sourceUrl: "https://telquel.ma/instant-t/2026/01/06/le-maroc-enregistre-un-record-de-20-millions-de-touristes-en-2025_1968900/",
        note: "Les arrivées touristiques incluent les Marocains résidant à l'étranger, qui en représentent près de la moitié.",
      },
    },
  ],
  summary:
    "L'économie marocaine s'est diversifiée depuis les années 2000. Elle repose sur les phosphates, dont le pays détient la majorité des réserves mondiales, sur une industrie exportatrice tournée vers l'Europe (automobile, aéronautique, textile), sur le tourisme et sur les transferts de la diaspora. Le port de Tanger Med, ouvert en 2007, est devenu le premier port à conteneurs de Méditerranée. L'agriculture, qui emploie encore une part importante des actifs, dépend des pluies et a souffert des sécheresses des années 2020. La croissance reste insuffisante pour absorber le chômage des jeunes, et les inégalités territoriales demeurent fortes.",
};
