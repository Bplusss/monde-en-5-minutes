import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 22_737_000_000,
    unit: "USD",
    year: 2024,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/MLT",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 41_738,
    unit: "USD",
    year: 2024,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/MLT",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 3.0,
    unit: "%",
    year: 2023,
    source: "Office national de la statistique de Malte (NSO)",
    sourceUrl: "https://nso.gov.mt/",
  },
  sectors: [
    { name: "Services (tourisme, finance, jeu en ligne)", sharePercent: 80.0 },
    { name: "Industrie", sharePercent: 19.0 },
    { name: "Agriculture", sharePercent: 1.0 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2023 },
  indicators: [],
  summary:
    "Sans ressources naturelles ni grande industrie, Malte a bâti sa prospérité sur le tourisme, une place financière internationale attractive et, plus récemment, sur le jeu en ligne (iGaming) : l'île héberge l'un des plus grands pôles mondiaux d'opérateurs de paris et casinos numériques, régulés par une autorité dédiée. Le pays exploite aussi l'un des plus vastes registres maritimes du monde, sous pavillon maltais.",
};
