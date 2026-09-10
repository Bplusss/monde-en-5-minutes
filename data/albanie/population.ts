import type { PopulationData } from "@/lib/types";

const SRC = "INSTAT (Institut albanais de la statistique)";
const URL =
  "https://www.instat.gov.al/en/themes/demography-and-social-indicators/population/publication/2025/population-of-albania-on-1st-january-2025/";

export const population: PopulationData = {
  total: {
    value: 2_363_314,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Population résidente estimée au 1ᵉʳ janvier 2025.",
  },
  density: {
    value: 82.2,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Calculée à partir de la population résidente (2 363 314 hab.) et de la superficie officielle du pays (28 748 km²).",
  },
  growthRate: {
    value: -1.2,
    unit: "%",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Recul de la population entre janvier 2024 et janvier 2025, sous l'effet d'une émigration nette qui dépasse largement l'accroissement naturel.",
  },
  summary:
    "La population albanaise décline régulièrement depuis le début des années 1990, sous l'effet d'une émigration massive vers l'Italie, la Grèce et l'Europe de l'Ouest, qui n'est plus compensée par la natalité. Le recensement de 2023 a dénombré environ 2,4 millions de résidents, contre plus de 3,3 millions au recensement de 1989, avant l'ouverture des frontières à la chute du régime communiste.",
};
