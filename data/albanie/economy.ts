import type { EconomyData } from "@/lib/types";

const INSTAT = "INSTAT (Institut albanais de la statistique)";

export const economy: EconomyData = {
  currency: { name: "Lek albanais", code: "ALL", symbol: "L" },
  gdp: {
    value: 27_180_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=AL",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 10_012,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=AL",
    note: "Dollars courants — parmi les plus bas d'Europe, mais en forte progression depuis les années 2010.",
  },
  unemploymentRate: {
    value: 8.4,
    unit: "%",
    year: 2025,
    source: INSTAT,
    sourceUrl: "https://albaniandailynews.com/news/unemployment-dropped-to-8-4-in-2025-instat-tirana---the-unemployment-rate-in-albania-continued-its-downward-trend-in-2025-while-the-average-gross-monthly-salary-increased-according-to-the-latest-data-published-by-instat-according-to-the-report-the-co",
    note: "Taux annuel moyen 2025, en recul continu depuis plusieurs années.",
  },
  sectors: [
    { name: "Services", sharePercent: 47.96 },
    { name: "Industrie", sharePercent: 23.02 },
    { name: "Agriculture", sharePercent: 16.22 },
  ],
  sectorsSource: {
    source: "Banque mondiale (via Statista)",
    sourceUrl: "https://www.statista.com/statistics/444090/albania-gdp-distribution-across-economic-sectors",
    year: 2023,
  },
  indicators: [
    {
      label: "Dette publique",
      value: {
        value: "53 % du PIB",
        year: 2025,
        source: "Ministère albanais des Finances (via SeeNews)",
        sourceUrl: "https://seenews.com/news/albanias-debt-to-gdp-ratio-ticks-down-to-53-percent-at-end-2025-1289986",
        note: "En recul par rapport à 54,2 % fin 2024, porté par la croissance économique plutôt que par un désendettement.",
      },
    },
    {
      label: "Transferts de la diaspora (remesas)",
      value: {
        value: "8,4 % du PIB",
        year: 2024,
        source: "Banque mondiale",
        sourceUrl: "https://data.worldbank.org/indicator/BX.TRF.PWKR.DT.GD.ZS?locations=AL",
        note: "Environ 2,3 milliards de dollars envoyés par la diaspora albanaise en 2024, l'un des ratios les plus élevés d'Europe.",
      },
    },
  ],
  summary:
    "Portée par le tourisme, le bâtiment et les envois de fonds d'une importante diaspora, l'économie albanaise affiche depuis le milieu des années 2010 une croissance régulière parmi les plus soutenues des Balkans occidentaux. Elle reste toutefois l'une des plus pauvres d'Europe en termes de revenu par habitant, avec une économie informelle importante et une dépendance marquée à l'agriculture de subsistance dans les zones rurales.",
};
