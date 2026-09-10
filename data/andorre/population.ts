import type { PopulationData } from "@/lib/types";

const SRC = "Departament d'Estadística d'Andorra";
const URL = "https://www.estadistica.ad/";

export const population: PopulationData = {
  total: {
    value: 85_101,
    unit: "habitants",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 181.8,
    unit: "hab./km²",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Densité rapportée à la superficie totale ; la population réelle se concentre sur le fond des vallées, largement inhabitables en altitude.",
  },
  growthRate: {
    value: 1.8,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Croissance presque entièrement portée par l'immigration économique.",
  },
  urbanShare: {
    value: 88.1,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=AD",
  },
  summary:
    "Un peu moins d'un tiers seulement des résidents andorrans possèdent la nationalité du pays, le reste étant composé de résidents espagnols, portugais et français venus travailler dans le tourisme, le commerce ou la finance — une proportion d'étrangers parmi les plus élevées au monde pour un État souverain.",
};
