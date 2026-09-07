import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/poland";

export const economy: EconomyData = {
  currency: { name: "Złoty polonais", code: "PLN", symbol: "zł" },
  gdp: {
    value: 914_696_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 23_734,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 3.0,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
  },
  sectors: [
    { name: "Services", sharePercent: 58.8 },
    { name: "Industrie", sharePercent: 28.7 },
    { name: "Agriculture", sharePercent: 2.9 },
  ],
  sectorsSource: { source: "Wikipedia (d'après les statistiques nationales)", year: 2023 },
  indicators: [],
  summary:
    "Sixième économie de l'Union européenne par le PIB nominal, la Pologne s'est industrialisée rapidement depuis son adhésion à l'UE en 2004, portée par le secteur manufacturier, l'automobile et une base de services en forte croissance.",
};
