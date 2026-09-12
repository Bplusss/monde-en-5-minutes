import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Yen japonais", code: "JPY", symbol: "¥" },
  gdp: {
    value: 4_379_000_000_000,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/JPN",
    note: "Dollars courants ; quatrième économie mondiale en PIB nominal, après avoir été dépassé par l'Allemagne en 2024 sous l'effet de la faiblesse du yen.",
  },
  gdpPerCapita: {
    value: 35_703,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/JPN",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 2.3,
    unit: "%",
    year: 2025,
    source: "Bureau des statistiques du Japon",
    sourceUrl: "https://www.stat.go.jp/english/",
    note: "Parmi les taux de chômage les plus bas des économies avancées, structurellement contraint par le vieillissement et le recul de la population active.",
  },
  sectors: [
    { name: "Services", sharePercent: 71.4 },
    { name: "Industrie", sharePercent: 26.9 },
    { name: "Agriculture", sharePercent: 1.0 },
  ],
  sectorsSource: { source: "CIA World Factbook", year: 2022 },
  indicators: [
    {
      label: "Dette publique",
      value: { value: 229.6, unit: "% du PIB", year: 2025, source: "Fonds monétaire international (FMI)", sourceUrl: "https://www.imf.org/en/Countries/JPN", note: "L'un des ratios les plus élevés au monde, mais très majoritairement détenu par des créanciers domestiques." },
    },
  ],
  summary:
    "Portée par un redressement industriel spectaculaire après-guerre — le « miracle économique » des années 1955-1990 —, l'économie japonaise reste une puissance manufacturière et technologique de premier plan dans l'automobile, l'électronique et la robotique. Depuis l'éclatement de la bulle spéculative en 1991, elle a cependant traversé plusieurs « décennies perdues » marquées par une croissance atone et une déflation persistante, avant un retour d'une inflation plus classique dans les années 2020 accompagné d'un net affaiblissement du yen. Elle doit composer avec le vieillissement le plus prononcé de toutes les grandes économies et l'une des dettes publiques les plus élevées au monde, en partie financée par une épargne domestique abondante.",
};
