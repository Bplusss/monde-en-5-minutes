import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/estonia";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 43_000_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 31_480,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 7.7,
    unit: "%",
    year: 2025,
    source: "Statistikaamet",
    sourceUrl: "https://www.stat.ee/en/find-statistics/statistics-theme/labour-market",
    note: "En nette hausse depuis 2022-2023, sous l'effet d'un ralentissement industriel prolongé.",
  },
  sectors: [
    { name: "Services", sharePercent: 69.5 },
    { name: "Industrie", sharePercent: 26.9 },
    { name: "Agriculture", sharePercent: 3.6 },
  ],
  sectorsSource: { source: "Wikipedia (d'après les statistiques nationales)", year: 2023 },
  indicators: [],
  summary:
    "Membre de la zone euro depuis 2011, l'Estonie s'est fait connaître pour son administration entièrement numérisée (« e-Estonia ») et son écosystème de start-ups technologiques, à l'origine notamment de Skype. Après une décennie de forte croissance post-adhésion à l'UE, l'économie a traversé un ralentissement marqué en 2023-2025, la petite taille du marché intérieur et la dépendance aux exportations vers les pays nordiques et l'Allemagne la rendant particulièrement sensible aux chocs régionaux.",
};
