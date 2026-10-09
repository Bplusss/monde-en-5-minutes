import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Taka", code: "BDT", symbol: "৳" },
  gdp: {
    value: 456_319_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=BD",
  },
  gdpPerCapita: {
    value: 2_597,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=BD",
  },
  unemploymentRate: {
    value: 3.8,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=BD",
    note: "Le chômage touche surtout les jeunes diplômés ; la grande majorité des actifs travaille dans le secteur informel.",
  },
  sectors: [
    { name: "Services", sharePercent: 52.1 },
    { name: "Industrie (dont textile et construction)", sharePercent: 34.0 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 11.4 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [],
  summary:
    "Pays parmi les plus pauvres du monde à l'indépendance, le Bangladesh a connu l'une des croissances les plus régulières d'Asie, autour de 6 % par an pendant deux décennies. Il la doit d'abord à la confection : deuxième exportateur mondial de vêtements après la Chine, il tire de ce secteur plus de 80 % de ses recettes d'exportation, grâce à quatre millions d'ouvriers, en majorité des femmes. Les envois d'argent des millions de Bangladais travaillant dans le Golfe et en Malaisie sont l'autre pilier. Le pays devait quitter la catégorie des pays les moins avancés en novembre 2026, mais a obtenu de l'ONU un report de trois ans.",
};
