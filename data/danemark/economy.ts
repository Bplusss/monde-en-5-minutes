import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Couronne danoise", code: "DKK", symbol: "kr" },
  gdp: {
    value: 424_525_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 71_021,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 5.5,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=DK",
  },
  sectors: [
    { name: "Services", sharePercent: 64.4 },
    { name: "Industrie", sharePercent: 23.5 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 0.8 },
  ],
  sectorsSource: { source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/NV.IND.TOTL.ZS?locations=DK", year: 2023 },
  indicators: [],
  summary:
    "Économie de services très développée, le Danemark s'appuie aussi sur une industrie pharmaceutique de rang mondial (Novo Nordisk) et un secteur agroalimentaire exportateur malgré le faible poids de l'agriculture dans le PIB. La couronne danoise est arrimée à l'euro via le mécanisme de change européen (ERM II), le pays n'ayant pas adopté la monnaie unique.",
};
