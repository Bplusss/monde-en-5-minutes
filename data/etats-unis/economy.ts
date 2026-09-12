import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Dollar des États-Unis", code: "USD", symbol: "$" },
  gdp: {
    value: 29_298_000_000_000,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)",
    note: "Dollars courants — pour une comparaison homogène entre pays. Première économie mondiale en PIB nominal.",
  },
  gdpPerCapita: {
    value: 84_817,
    unit: "USD",
    year: 2024,
    source: "Nations unies",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 4.1,
    unit: "%",
    year: 2026,
    source: "Bureau of Labor Statistics (BLS)",
    sourceUrl: "https://www.bls.gov/news.release/empsit.nr0.htm",
    note: "Août 2026.",
  },
  sectors: [
    { name: "Services", sharePercent: 76 },
    { name: "Industrie", sharePercent: 18 },
    { name: "Agriculture", sharePercent: 1 },
  ],
  sectorsSource: { source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=US", year: 2021 },
  indicators: [
    {
      label: "Part du dollar dans les réserves de change mondiales",
      value: {
        value: 56.8,
        unit: "%",
        year: 2025,
        source: "FMI — COFER",
        sourceUrl: "https://en.wikipedia.org/wiki/Reserve_currency",
        note: "Le dollar reste, de loin, la première monnaie de réserve mondiale, devant l'euro.",
      },
    },
  ],
  summary:
    "Première économie mondiale en PIB nominal, les États-Unis reposent sur un secteur des services très développé (finance, technologies, santé, commerce) aux côtés d'une industrie puissante mais minoritaire (aéronautique, automobile, énergie, high-tech) et d'une agriculture hautement productive malgré son faible poids dans le PIB. Le dollar joue un rôle central dans le système financier international en tant que principale monnaie de réserve et d'échange mondiale.",
};
