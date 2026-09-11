import type { PopulationData } from "@/lib/types";

const SRC = "Office national de la statistique de Malte (NSO)";
const URL = "https://nso.gov.mt/";

export const population: PopulationData = {
  total: {
    value: 588_254,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Recensement 2025 ; la population a fortement augmenté depuis les années 2010 sous l'effet de l'immigration de travail.",
  },
  density: {
    value: 1_649,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "L'un des pays les plus densément peuplés du monde, juste derrière quelques cités-États et micro-États.",
  },
  urbanShare: {
    value: 95.0,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=MT",
  },
  summary:
    "La croissance démographique maltaise des quinze dernières années est presque entièrement portée par l'immigration de travail, attirée par les secteurs du jeu en ligne, de la finance et du tourisme ; les ressortissants étrangers représentent aujourd'hui une part importante et croissante de la population résidente.",
};
