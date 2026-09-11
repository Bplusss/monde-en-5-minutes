import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Couronne islandaise", code: "ISK", symbol: "kr" },
  gdp: {
    value: 35_310_000_000,
    unit: "USD",
    year: 2025,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/ISL",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 90_280,
    unit: "USD",
    year: 2025,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/ISL",
    note: "Dollars courants — l'un des PIB par habitant les plus élevés au monde.",
  },
  unemploymentRate: {
    value: 3.4,
    unit: "%",
    year: 2024,
    source: "Statistics Iceland (Hagstofa Íslands)",
    sourceUrl: "https://www.statice.is/",
  },
  sectors: [
    { name: "Services", sharePercent: 71.0 },
    { name: "Industrie et énergie", sharePercent: 22.0 },
    { name: "Agriculture et pêche", sharePercent: 7.0 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2023 },
  indicators: [],
  summary:
    "Longtemps bâtie sur la pêche, l'économie islandaise s'est profondément diversifiée depuis les années 2010 grâce à l'explosion du tourisme international et à une industrie lourde (fonderies d'aluminium) attirée par une électricité géothermique et hydroélectrique parmi les moins chères au monde. Le secteur bancaire, qui s'était démesurément développé au début des années 2000, s'est effondré lors de la crise financière de 2008 — l'une des faillites systémiques les plus spectaculaires de l'histoire récente rapportée à la taille d'un pays — obligeant l'Islande à un plan de sauvetage du FMI et à une refonte complète de son secteur financier.",
};
