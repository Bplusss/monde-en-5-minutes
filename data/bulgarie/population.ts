import type { PopulationData } from "@/lib/types";

const NSI = "Institut national de statistique de Bulgarie (NSI)";
const NSI_URL = "https://www.nsi.bg/en/press-release/population-and-demographic-processes-9002";

export const population: PopulationData = {
  total: {
    value: 6_423_207,
    unit: "habitants",
    year: 2025,
    source: NSI,
    sourceUrl: NSI_URL,
    note: "Population au 31 décembre 2025, données définitives.",
  },
  density: {
    value: 57.9,
    unit: "hab./km²",
    year: 2025,
    source: NSI,
    sourceUrl: NSI_URL,
    note: "Calculé à partir de la population NSI 2025 et de la superficie officielle du pays.",
  },
  growthRate: {
    value: -0.22,
    unit: "%",
    year: 2025,
    source: NSI,
    sourceUrl: NSI_URL,
    note: "Recul de 14 153 personnes par rapport à 2024, sous l'effet conjugué d'un solde naturel très négatif et de l'émigration.",
  },
  medianAge: {
    value: 47.1,
    unit: "ans",
    year: 2024,
    source: "Eurostat",
    sourceUrl: "https://sofiaglobe.com/2025/02/21/median-age-in-bulgaria-rose-by-more-than-three-years-in-a-decade/",
    note: "Âge médian au 1ᵉʳ janvier 2024 — l'un des plus élevés de l'Union européenne.",
  },
  urbanShare: {
    value: 77.0,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=BG",
  },
  summary:
    "La Bulgarie connaît l'un des déclins démographiques les plus marqués d'Europe depuis les années 1990, sous l'effet conjugué d'une natalité basse, d'une mortalité élevée et d'une émigration importante après la chute du communisme et l'entrée dans l'Union européenne. La population est de plus en plus concentrée autour de Sofia, tandis que de nombreuses zones rurales et petites villes se dépeuplent.",
};
