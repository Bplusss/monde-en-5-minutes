import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 84_869_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 29_684,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 6.6,
    unit: "%",
    year: 2025,
    source: "Eurostat",
    sourceUrl: "https://tradingeconomics.com/lithuania/unemployment-rate-eurostat-data.html",
    note: "Décembre 2025, en léger recul par rapport à 2024.",
  },
  sectors: [
    { name: "Services", sharePercent: 63.1 },
    { name: "Industrie", sharePercent: 24.2 },
    { name: "Agriculture", sharePercent: 2.7 },
  ],
  sectorsSource: {
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NV.AGR.TOTL.ZS?locations=LT",
    year: 2023,
  },
  indicators: [
    {
      label: "Dette publique",
      value: {
        value: "39,1 % du PIB",
        year: 2025,
        source: "Eurostat",
        sourceUrl: "https://tradingeconomics.com/lithuania/general-gov-gross-debt-eurostat-data.html",
        note: "L'un des ratios dette/PIB les plus bas de l'Union européenne.",
      },
    },
  ],
  summary:
    "Depuis son entrée dans l'Union européenne en 2004 et l'adoption de l'euro en 2015, la Lituanie affiche l'une des croissances les plus soutenues de la zone euro, portée par les services informatiques, la logistique, l'industrie laser (dont elle est un leader mondial de niche) et une intégration énergétique poussée avec l'Europe de l'Ouest depuis sa rupture des réseaux électriques hérités de l'URSS. Elle conserve l'une des dettes publiques les plus faibles de l'Union européenne.",
};
