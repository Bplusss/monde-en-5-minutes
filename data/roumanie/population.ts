import type { PopulationData } from "@/lib/types";

const INS = "Institutul Național de Statistică (INS)";
const INS_URL = "https://insse.ro/cms/en/content/resident-population-january-1-2025-and-international-migration-2024";

export const population: PopulationData = {
  total: {
    value: 19_043_000,
    unit: "habitants",
    year: 2025,
    source: INS,
    sourceUrl: INS_URL,
    note: "Population résidente habituelle au 1ᵉʳ janvier 2025 (personnes vivant effectivement dans le pays). L'INS publie par ailleurs une population « par domicile », incluant les personnes enregistrées mais installées durablement à l'étranger, sensiblement plus élevée (environ 21,7 millions), en raison d'une importante diaspora roumaine.",
  },
  density: {
    value: 79.9,
    unit: "hab./km²",
    year: 2025,
    source: INS,
    sourceUrl: INS_URL,
    note: "Calculé à partir de la population résidente INS 2025 et de la superficie officielle du pays.",
  },
  growthRate: {
    value: -0.13,
    unit: "%",
    year: 2025,
    source: INS,
    sourceUrl: INS_URL,
    note: "Recul de 24 400 personnes par rapport au 1ᵉʳ janvier 2024, sous l'effet d'un solde naturel négatif partiellement compensé par les migrations.",
  },
  medianAge: {
    value: 42.8,
    unit: "ans",
    year: 2025,
    source: INS,
    sourceUrl: INS_URL,
  },
  urbanShare: {
    value: 51.5,
    unit: "%",
    year: 2025,
    source: INS,
    sourceUrl: INS_URL,
  },
  summary:
    "La population roumaine décline et vieillit depuis les années 1990, sous l'effet conjugué d'une natalité durablement basse et d'une émigration de travail massive vers l'Europe de l'Ouest (Italie, Espagne, Allemagne notamment) depuis l'adhésion à l'Union européenne en 2007. La part des personnes âgées de 65 ans et plus dépasse désormais celle des moins de 15 ans, et la population urbaine, longtemps majoritaire, se rapproche aujourd'hui de la parité avec la population rurale.",
};
