import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Livre sterling", code: "GBP", symbol: "£" },
  gdp: {
    value: 3_685_881_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 53_313,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 4.9,
    unit: "%",
    year: 2026,
    source: "Office for National Statistics (ONS)",
    sourceUrl: "https://www.ons.gov.uk/employmentandlabourmarket/peoplenotinwork/unemployment/timeseries/mgsx/lms",
    note: "Avril à juin 2026.",
  },
  sectors: [],
  sectorsSource: { source: "Donnée non disponible." },
  indicators: [],
  summary:
    "Le Royaume-Uni est l'une des principales économies mondiales, portée par un secteur des services très développé — finance (la City de Londres), assurance, conseil, création — aux côtés d'une industrie plus réduite qu'au XXᵉ siècle mais toujours présente (aéronautique, pharmacie, automobile).",
};
