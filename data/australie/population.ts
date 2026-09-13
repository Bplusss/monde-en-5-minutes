import type { PopulationData } from "@/lib/types";

const ABS = "Australian Bureau of Statistics (ABS)";
const ABS_URL = "https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/latest-release";

export const population: PopulationData = {
  total: {
    value: 27_801_023,
    unit: "habitants",
    year: 2025,
    source: ABS,
    sourceUrl: ABS_URL,
    note: "Estimation au 31 décembre 2025.",
  },
  density: {
    value: 3.6,
    unit: "hab./km²",
    year: 2025,
    source: ABS,
    sourceUrl: ABS_URL,
    note: "L'une des plus faibles densités au monde à l'échelle nationale, très trompeuse : l'essentiel du territoire, désertique, est quasiment inhabité.",
  },
  growthRate: {
    value: 1.5,
    unit: "%",
    year: 2025,
    source: ABS,
    sourceUrl: ABS_URL,
    note: "La migration nette représente environ les trois quarts de la croissance démographique annuelle, très supérieure à la moyenne des pays développés.",
  },
  medianAge: {
    value: 38.7,
    unit: "ans",
    year: 2017,
    source: ABS,
    sourceUrl: "https://en.wikipedia.org/wiki/Demographics_of_Australia",
  },
  urbanShare: {
    value: 89,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=AU",
    note: "Population très concentrée dans une poignée de grandes agglomérations côtières (Sydney, Melbourne, Brisbane, Perth, Adelaide), alors que l'intérieur du pays reste presque vide.",
  },
  summary:
    "L'Australie est l'un des pays développés dont la population croît le plus vite, portée par une immigration nette très élevée. Un habitant sur quatre environ est né à l'étranger, l'un des taux les plus forts au monde parmi les grandes économies. Les Aborigènes et les insulaires du détroit de Torrès, premiers habitants du continent, représentent environ 3,2 % de la population totale (2,9 % d'Aborigènes et 0,3 % d'insulaires du détroit de Torrès selon le recensement de 2021).",
};
