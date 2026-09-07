import type { EconomyData } from "@/lib/types";

const ELSTAT = "ELSTAT (Autorité statistique hellénique)";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 257_145_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 25_592,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays — parmi les plus bas de l'Union européenne.",
  },
  unemploymentRate: {
    value: 9.5,
    unit: "%",
    year: 2024,
    source: ELSTAT,
    sourceUrl: "https://www.ertnews.gr/eidiseis/oikonomia/elstat-sto-9-5-i-anergia-to-d-trimino-2024-se-449-123-atoma-oi-anergoi/",
    note: "4ᵉ trimestre 2024, en net recul depuis le pic de la crise de la dette.",
  },
  sectors: [
    { name: "Services", sharePercent: 68.6 },
    { name: "Industrie", sharePercent: 15.3 },
    { name: "Agriculture", sharePercent: 3.3 },
  ],
  sectorsSource: {
    source: "Banque mondiale",
    sourceUrl: "https://www.statista.com/statistics/276399/distribution-of-gross-domestic-product-gdp-across-economic-sectors-in-greece/",
    year: 2023,
  },
  indicators: [
    {
      label: "Dette publique",
      value: {
        value: "146,1 % du PIB",
        year: 2025,
        source: "Eurostat",
        sourceUrl: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-22042026-bp",
        note: "Le plus haut ratio dette/PIB de l'Union européenne, mais en net recul depuis le pic de 2020.",
      },
    },
  ],
  summary:
    "Portée par le tourisme et le transport maritime, l'économie grecque a renoué avec une croissance supérieure à la moyenne de la zone euro depuis 2022, après la profonde crise de la dette souveraine de 2010-2018. Elle reste toutefois marquée par le plus haut niveau d'endettement public de l'Union européenne.",
};
