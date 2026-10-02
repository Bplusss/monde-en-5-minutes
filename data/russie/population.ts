import type { PopulationData } from "@/lib/types";

const ROSSTAT = "Rosstat, estimation préliminaire au 1er janvier 2025";
const ROSSTAT_URL = "https://en.wikipedia.org/wiki/Federal_subjects_of_Russia";

export const population: PopulationData = {
  total: {
    value: 143_610_000,
    unit: "habitants",
    year: 2025,
    source: ROSSTAT,
    sourceUrl: ROSSTAT_URL,
    note: "Somme des 83 sujets fédéraux internationalement reconnus (hors Crimée et Sébastopol — voir Territoire). Le total officiel Rosstat, 146,1 millions, inclut ces deux entités.",
  },
  density: {
    value: 8.4,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population Rosstat ÷ superficie CIA World Factbook)",
    sourceUrl: ROSSTAT_URL,
    note: "Plus des trois quarts des Russes vivent en Russie européenne ; d'immenses régions sibériennes comptent moins d'un habitant au km².",
  },
  growthRate: {
    value: -0.19,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=RU",
    note: "Déclin structurel : natalité basse, vieillissement, et depuis 2022 pertes militaires et émigration (plusieurs centaines de milliers de Russes).",
  },
  medianAge: {
    value: 40.3,
    unit: "ans",
    year: 2023,
    source: "Division de la population des Nations unies (ONU), World Population Prospects (révision 2024)",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 75.2,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=RU",
  },
  summary:
    "Avec environ 143,6 millions d'habitants, la Russie est le pays le plus peuplé d'Europe et le neuvième au monde, malgré un déclin amorcé dans les années 1990. Outre les Russes ethniques (~80 %), plus de 190 groupes ethniques sont recensés. La guerre a aggravé la crise démographique, notamment après la mobilisation partielle de septembre 2022.",
};
