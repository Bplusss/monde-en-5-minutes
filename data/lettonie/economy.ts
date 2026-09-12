import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/latvia";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 45_520_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 23_368,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=LV",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 6.9,
    unit: "%",
    year: 2024,
    source: "CSP (Centrālā statistikas pārvalde)",
    sourceUrl: "https://www.csp.gov.lv/en",
    note: "Taux plus élevé chez les hommes (8,0 %) que chez les femmes (5,8 %).",
  },
  sectors: [
    { name: "Services", sharePercent: 61.6 },
    { name: "Industrie", sharePercent: 22.3 },
    { name: "Agriculture", sharePercent: 3.9 },
  ],
  sectorsSource: { source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/NV.AGR.TOTL.ZS?locations=LV", year: 2023 },
  indicators: [],
  summary:
    "Membre de la zone euro depuis 2014, la Lettonie a bâti, depuis son adhésion à l'Union européenne en 2004, une économie de services tournée vers la logistique portuaire (Riga, Ventspils, Liepāja), le bois et l'agroalimentaire, ainsi qu'un secteur des technologies de l'information en expansion. Petite économie ouverte, elle reste sensible aux chocs régionaux et a connu une inflation particulièrement forte lors de la crise énergétique de 2022-2023, avant un retour à une croissance plus modérée.",
};
