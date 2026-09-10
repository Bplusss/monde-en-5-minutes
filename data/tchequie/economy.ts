import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/czechia";

export const economy: EconomyData = {
  currency: { name: "Couronne tchèque", code: "CZK", symbol: "Kč" },
  gdp: {
    value: 345_000_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 31_650,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 2.8,
    unit: "%",
    year: 2025,
    source: "ČSÚ",
    sourceUrl: "https://www.czso.cz/csu/czso/employment-and-unemployment",
    note: "L'un des taux de chômage les plus bas de l'Union européenne.",
  },
  sectors: [
    { name: "Services", sharePercent: 60.0 },
    { name: "Industrie", sharePercent: 37.0 },
    { name: "Agriculture", sharePercent: 2.0 },
  ],
  sectorsSource: { source: "Wikipedia (d'après les statistiques nationales)", year: 2023 },
  indicators: [],
  summary:
    "Économie la plus industrialisée d'Europe centrale, la Tchéquie s'appuie sur une puissante industrie manufacturière — automobile (Škoda), machines-outils, électronique — héritée de la tradition industrielle tchèque d'avant-guerre. Membre de l'Union européenne depuis 2004 mais hors zone euro, le pays affiche traditionnellement l'un des taux de chômage les plus faibles du continent.",
};
