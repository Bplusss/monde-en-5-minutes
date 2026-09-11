import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Mark convertible", code: "BAM", symbol: "KM" },
  gdp: {
    value: 36_770_000_000,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/BIH",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 10_701,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/BIH",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 13.0,
    unit: "%",
    year: 2023,
    source: "Agence de statistique de Bosnie-Herzégovine (BHAS)",
    sourceUrl: "https://bhas.gov.ba/",
    note: "En net recul depuis des sommets supérieurs à 40 % au lendemain de la guerre, mais toujours parmi les plus élevés d'Europe.",
  },
  sectors: [
    { name: "Services", sharePercent: 60.0 },
    { name: "Industrie", sharePercent: 25.0 },
    { name: "Agriculture", sharePercent: 15.0 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2023 },
  indicators: [],
  summary:
    "Le mark convertible, arrimé à taux fixe à l'euro depuis sa création par les accords de Dayton, a permis de stabiliser une économie durement ravagée par la guerre. La reconstruction industrielle reste toutefois inégale entre les deux entités, et le pays dépend fortement des transferts financiers de sa diaspora, de l'aide internationale et d'une agriculture de subsistance encore très présente en zone rurale.",
};
