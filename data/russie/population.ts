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
    note: "Parmi les plus faibles au monde en moyenne : plus des trois quarts des Russes vivent en Russie européenne, tandis que d'immenses régions sibériennes comptent moins d'un habitant au km².",
  },
  growthRate: {
    value: -0.19,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=RU",
    note: "Déclin structurel depuis les années 2020 : natalité basse, mortalité alourdie par le vieillissement, et depuis 2022 pertes militaires et émigration (plusieurs centaines de milliers de Russes vers la Géorgie, l'Arménie, la Serbie...).",
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
    "Avec environ 143,6 millions d'habitants, la Russie reste le pays le plus peuplé d'Europe et le neuvième au monde, malgré un déclin démographique structurel amorcé dans les années 1990. La population est très concentrée en Russie européenne et fortement urbanisée, tandis que l'immensité sibérienne reste peu peuplée. Le pays est aussi l'un des plus multiethniques au monde : outre les Russes ethniques (~80 %), plus de 190 groupes ethniques sont officiellement recensés. Depuis 2022, l'invasion de l'Ukraine a aggravé la crise démographique par des pertes militaires massives et une émigration significative, notamment après la mobilisation partielle de septembre 2022.",
};
