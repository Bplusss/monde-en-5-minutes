import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/finland";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 299_000_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 53_270,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 9.5,
    unit: "%",
    year: 2025,
    source: "Statistics Finland",
    sourceUrl: "https://stat.fi/en/statistics/tyti",
    note: "En nette hausse depuis 2023, sous l'effet d'un ralentissement économique prolongé, notamment dans la construction et l'industrie forestière.",
  },
  sectors: [
    { name: "Services", sharePercent: 63.0 },
    { name: "Industrie", sharePercent: 34.0 },
    { name: "Agriculture", sharePercent: 3.0 },
  ],
  sectorsSource: { source: "Wikipedia (d'après les statistiques nationales)", year: 2023 },
  indicators: [],
  summary:
    "Longtemps portée par l'industrie forestière et papetière puis par l'électronique — la Finlande fut le berceau de Nokia, pionnier mondial de la téléphonie mobile dans les années 1990-2000 — l'économie finlandaise s'est diversifiée vers les technologies, les jeux vidéo (Supercell, Rovio) et les technologies propres, tout en restant très exposée aux exportations vers ses voisins européens.",
};
