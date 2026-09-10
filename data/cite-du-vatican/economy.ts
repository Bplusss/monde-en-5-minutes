import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 25_000_000,
    unit: "USD",
    year: 2024,
    source: "Estimation (aucune donnée officielle Banque mondiale/FMI)",
    sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Vatican_City",
    note: "Le Vatican n'a pas d'économie de marché ni de PIB au sens usuel : ce chiffre est une estimation approximative du budget de fonctionnement de l'État, sans commune mesure avec celui d'un pays classique. Aucune activité productive, aucun impôt sur le revenu ni TVA n'y existent.",
  },
  gdpPerCapita: {
    value: 32_700,
    unit: "USD",
    year: 2024,
    source: "Calculé (estimation de budget ÷ population résidente)",
    note: "Chiffre sans signification économique réelle, à ne pas comparer à celui des autres pays.",
  },
  unemploymentRate: {
    value: 0,
    unit: "%",
    year: 2024,
    source: "N/A — non applicable",
    note: "Concept sans objet : seules les personnes employées par le Saint-Siège ou les institutions vaticanes résident dans l'État.",
  },
  sectors: [{ name: "Services religieux, culturels et administratifs", sharePercent: 100 }],
  sectorsSource: { source: "Wikipedia", year: 2023 },
  indicators: [],
  summary:
    "L'économie du Vatican n'obéit à aucune des logiques d'un pays ordinaire : sans agriculture, sans industrie et sans fiscalité directe sur les personnes, l'État vit des dons des catholiques du monde entier (le « denier de Saint-Pierre », environ 54 millions d'euros en 2024), des recettes des Musées du Vatican — près de sept millions de visiteurs par an —, de la vente de timbres et souvenirs, ainsi que des revenus de son patrimoine immobilier et financier, géré notamment par l'Administration du patrimoine du Siège apostolique (APSA) et la Banque du Vatican (IOR).",
};
