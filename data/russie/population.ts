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
    note: "Somme des 83 sujets fédéraux internationalement reconnus (hors République de Crimée et ville de Sébastopol — voir la section Territoire). Le total officiel publié par Rosstat, environ 146,1 millions d'habitants, inclut la Crimée et Sébastopol ; ce site retient la définition excluant ces deux entités, conformément à la position adoptée pour l'Ukraine.",
  },
  density: {
    value: 8.4,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population Rosstat ÷ superficie CIA World Factbook)",
    sourceUrl: ROSSTAT_URL,
    note: "L'une des densités nationales les plus faibles au monde en moyenne, masquant des écarts extrêmes : plus des trois quarts des Russes vivent dans la partie européenne du pays (à l'ouest de l'Oural, moins d'un quart de la superficie totale), tandis que d'immenses régions sibériennes et arctiques comme la République de Sakha (plus de 3 millions de km²) comptent moins d'un habitant au km².",
  },
  growthRate: {
    value: -0.19,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=RU",
    note: "Population en déclin structurel depuis le début des années 2020 : la natalité, historiquement basse, ne compense plus une mortalité alourdie par le vieillissement, et l'invasion de l'Ukraine depuis 2022 a ajouté pertes militaires importantes et vague d'émigration (plusieurs centaines de milliers de Russes, souvent jeunes et qualifiés, ayant quitté le pays depuis février 2022, notamment vers la Géorgie, l'Arménie, la Serbie, le Kazakhstan et Israël).",
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
    "Avec environ 143,6 millions d'habitants sur le territoire internationalement reconnu de la Fédération de Russie (146,1 millions selon les statistiques officielles russes, qui intègrent la Crimée et Sébastopol), la Russie reste le pays le plus peuplé d'Europe et le neuvième au monde, malgré un déclin démographique structurel amorcé dès les années 1990 après l'effondrement de l'URSS. La population est extrêmement concentrée dans la partie européenne du pays, à l'ouest de l'Oural, et fortement urbanisée (plus des trois quarts des Russes vivent en ville), tandis que l'immensité sibérienne et arctique reste très faiblement peuplée. Le pays est aussi l'un des plus multiethniques au monde : outre les Russes ethniques (environ 80 % de la population), plus de 190 groupes ethniques sont officiellement recensés, dont plusieurs peuples turciques, caucasiens, finno-ougriens et sibériens disposant de républiques ou territoires autonomes qui portent leur nom. Depuis 2022, l'invasion de l'Ukraine a aggravé la crise démographique du pays par un double choc : des pertes militaires massives (plusieurs centaines de milliers de soldats tués ou blessés selon les estimations occidentales et ukrainiennes, Moscou ne publiant pas de bilan officiel) et une émigration significative, en particulier après l'annonce de la mobilisation partielle de septembre 2022.",
};
