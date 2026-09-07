import type { PopulationData } from "@/lib/types";

const STATBEL = "Statbel";
const STATBEL_URL = "https://statbel.fgov.be/fr/themes/population/structure-de-la-population";

export const population: PopulationData = {
  total: {
    value: 11_867_634,
    unit: "habitants",
    year: 2026,
    source: STATBEL,
    sourceUrl: STATBEL_URL,
    note: "Au 1ᵉʳ janvier 2026.",
  },
  density: {
    value: 389,
    unit: "hab./km²",
    year: 2026,
    source: STATBEL,
    sourceUrl: STATBEL_URL,
    note: "Calculé à partir de la population et de la superficie (Statbel).",
  },
  summary:
    "Avec près de 11,9 millions d'habitants sur un peu plus de 30 500 km², la Belgique compte parmi les pays les plus densément peuplés d'Europe. La population se concentre surtout dans le triangle Bruxelles-Anvers-Gand et le long du sillon Sambre-et-Meuse.",
};
