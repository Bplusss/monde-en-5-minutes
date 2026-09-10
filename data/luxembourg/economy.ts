import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/luxembourg";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 93_200_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 137_780,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — l'un des plus élevés au monde, gonflé par les revenus des très nombreux travailleurs frontaliers comptabilisés dans la production mais pas dans la population résidente.",
  },
  unemploymentRate: {
    value: 5.8,
    unit: "%",
    year: 2025,
    source: "STATEC",
    sourceUrl: "https://statistiques.public.lu/",
  },
  sectors: [
    { name: "Services (dont finance)", sharePercent: 86.0 },
    { name: "Industrie", sharePercent: 13.5 },
    { name: "Agriculture", sharePercent: 0.5 },
  ],
  sectorsSource: { source: "Wikipedia (d'après les statistiques nationales)", year: 2023 },
  indicators: [],
  summary:
    "Le Luxembourg s'est transformé depuis les années 1980 d'un pays sidérurgique en l'une des principales places financières mondiales, portée par les fonds d'investissement — le pays est le deuxième centre mondial de domiciliation de fonds après les États-Unis — et une fiscalité attractive pour les sièges de multinationales. Le PIB par habitant, statistiquement parmi les plus élevés du monde, doit être relativisé par le poids des plus de 200 000 travailleurs frontaliers qui contribuent à la production sans résider dans le pays.",
};
