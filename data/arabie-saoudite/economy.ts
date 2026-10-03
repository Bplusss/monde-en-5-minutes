import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Riyal saoudien", code: "SAR", symbol: "SR" },
  gdp: {
    value: 1_276_943_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=SA",
    note: "Dollars courants ; première économie du monde arabe et seul pays arabe membre du G20.",
  },
  gdpPerCapita: {
    value: 34_537,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=SA",
  },
  unemploymentRate: {
    value: 3.0,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=SA",
    note: "Estimation OIT sur l'ensemble des résidents. Chez les seuls Saoudiens, le chômage était de 6,4 % au premier trimestre 2026 selon GASTAT.",
  },
  sectors: [
    { name: "Services", sharePercent: 48.9 },
    { name: "Industrie (dont hydrocarbures)", sharePercent: 43.0 },
    { name: "Agriculture", sharePercent: 2.6 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=SA", year: 2025 },
  indicators: [
    {
      label: "Pétrole",
      value: {
        value: "2ᵉ réserves prouvées et 1er exportateur mondial",
        source: "Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Saudi_Arabia",
        note: "La production est assurée par Saudi Aramco, compagnie nationale depuis 1980, partiellement cotée en Bourse depuis 2019.",
      },
    },
    {
      label: "Effet de la guerre de 2026",
      value: {
        value: "PIB réel en recul de 4,8 % sur un an au 2ᵉ trimestre 2026",
        year: 2026,
        source: "GASTAT (via Enterprise)",
        sourceUrl: "https://enterpriseam.com/ksa/2026/08/02/conflict-dents-saudi-gdp-but-oil-price-shrinks-2q-deficit/",
        note: "Les activités pétrolières ont chuté de 24,7 % après la quasi-fermeture du détroit d'Ormuz ; une partie des exportations a été détournée vers les ports de la mer Rouge, comme Yanbu.",
      },
    },
    {
      label: "Fonds public d'investissement (PIF)",
      value: {
        value: "principal instrument de la Vision 2030",
        source: "Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Saudi_Vision_2030",
        note: "Le fonds souverain finance les mégaprojets, le tourisme, le sport et des participations à l'étranger.",
      },
    },
  ],
  summary:
    "L'économie repose sur le pétrole, qui fournit l'essentiel des recettes de l'État. Lancée en 2016, la Vision 2030 vise à diversifier l'activité (tourisme, divertissement, industrie, logistique) et à faire travailler davantage de Saoudiens, notamment les femmes. Plusieurs mégaprojets ont été revus à la baisse : la construction de The Line, ville linéaire du projet NEOM, est suspendue depuis 2025. La guerre régionale de 2026 a perturbé les exportations pétrolières.",
};
