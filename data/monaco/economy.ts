import type { EconomyData } from "@/lib/types";

const IMSEE_URL = "https://www.imsee.mc/";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 10_434_000_000,
    unit: "USD",
    year: 2024,
    source: "IMSEE",
    sourceUrl: IMSEE_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 315_800,
    unit: "USD",
    year: 2024,
    source: "IMSEE",
    sourceUrl: IMSEE_URL,
    note: "Le PIB par habitant le plus élevé du monde, porté par la finance, l'immobilier de luxe et un très grand nombre de travailleurs transfrontaliers non comptés dans la population résidente.",
  },
  unemploymentRate: {
    value: 2.0,
    unit: "%",
    year: 2023,
    source: "IMSEE",
    sourceUrl: IMSEE_URL,
  },
  sectors: [
    { name: "Services (banque, immobilier, tourisme)", sharePercent: 85.0 },
    { name: "Industrie", sharePercent: 14.0 },
    { name: "Agriculture", sharePercent: 0.1 },
  ],
  sectorsSource: { source: "IMSEE", year: 2023 },
  indicators: [],
  summary:
    "Depuis l'abolition de l'impôt direct sur le revenu des particuliers en 1869 — rendue possible par les recettes du casino de Monte-Carlo — Monaco est devenue une place financière et un pôle immobilier de très grand luxe, aujourd'hui alimentés par la gestion de fortune, l'assurance et un tourisme haut de gamme porté par le Grand Prix automobile et le casino. Les ressortissants français, seuls, restent soumis à l'impôt sur le revenu français malgré leur résidence monégasque, en application d'une convention fiscale bilatérale.",
};
