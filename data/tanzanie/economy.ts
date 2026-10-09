import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Shilling tanzanien", code: "TZS", symbol: "TSh" },
  gdp: {
    value: 90_143_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=TZ",
  },
  gdpPerCapita: {
    value: 1_319,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=TZ",
  },
  unemploymentRate: {
    value: 1.6,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=TZ",
    note: "Un taux très bas, car la plupart des actifs travaillent dans l'agriculture familiale ou le secteur informel.",
  },
  sectors: [
    { name: "Industrie (dont mines et construction)", sharePercent: 29.8 },
    { name: "Services", sharePercent: 28.8 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 22.9 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [],
  summary:
    "L'économie tanzanienne croît d'environ 5 à 6 % par an depuis le début des années 2000. L'agriculture emploie encore la majorité des actifs, avec des cultures d'exportation comme la noix de cajou, le café, le thé et les clous de girofle de Zanzibar. L'or est la première exportation du pays, et le tourisme, porté par le Serengeti, le Kilimandjaro et Zanzibar, est une source majeure de devises. L'État a lancé de grands chantiers : chemin de fer à écartement standard entre Dar es Salaam et Dodoma, barrage Julius-Nyerere et projet d'exportation de gaz naturel liquéfié.",
};
