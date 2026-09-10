import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/ireland";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 577_000_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants. Le PIB irlandais est fortement gonflé par les profits comptablement rapatriés par les multinationales (pharmacie, technologie) implantées pour raisons fiscales ; l'office statistique irlandais publie un indicateur alternatif, le RNB*, jugé plus représentatif de l'économie réelle.",
  },
  gdpPerCapita: {
    value: 106_260,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — l'un des plus élevés au monde en apparence, mais à interpréter avec la même prudence que le PIB total.",
  },
  unemploymentRate: {
    value: 4.2,
    unit: "%",
    year: 2025,
    source: "CSO",
    sourceUrl: "https://www.cso.ie/en/statistics/labourmarket/",
  },
  sectors: [
    { name: "Services", sharePercent: 66.0 },
    { name: "Industrie", sharePercent: 32.0 },
    { name: "Agriculture", sharePercent: 2.0 },
  ],
  sectorsSource: { source: "Wikipedia (d'après les statistiques nationales)", year: 2023 },
  indicators: [],
  summary:
    "Grâce à un taux d'imposition sur les sociétés historiquement bas et à son ancrage dans l'Union européenne, l'Irlande a attiré les sièges européens de nombreuses multinationales américaines de la technologie et de la pharmacie (Google, Meta, Apple, Pfizer), ce qui explique des statistiques de PIB parmi les plus élevées au monde par habitant, largement déconnectées du niveau de vie réel de la population. L'agriculture, notamment laitière et bovine, reste par ailleurs un pilier économique et social important, en particulier dans les zones rurales.",
};
