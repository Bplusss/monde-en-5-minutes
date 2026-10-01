import type { PopulationData } from "@/lib/types";

const INS = "Institut national de la statistique (INS), recensement général de la population 2024";
const INS_URL = "https://www.citypopulation.de/en/tunisia/admin/";
const WB = "Banque mondiale";

export const population: PopulationData = {
  total: {
    value: 11_972_169,
    unit: "habitants",
    year: 2024,
    source: INS,
    sourceUrl: INS_URL,
    note: "Population recensée au 6 novembre 2024, contre 10,98 millions en 2014.",
  },
  density: {
    value: 73.2,
    unit: "hab./km²",
    year: 2024,
    source: "Calculé (recensement 2024 ÷ superficie)",
    sourceUrl: INS_URL,
    note: "Moyenne trompeuse : plus de 3 700 hab./km² dans le gouvernorat de Tunis, environ 4 dans celui de Tataouine.",
  },
  growthRate: {
    value: 0.63,
    unit: "%",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=TN",
  },
  medianAge: {
    value: 32.1,
    unit: "ans",
    year: 2023,
    source: "Division de la population des Nations unies, World Population Prospects 2024 (via Our World in Data)",
    sourceUrl: "https://ourworldindata.org/grapher/median-age",
  },
  urbanShare: {
    value: 70.4,
    unit: "%",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=TN",
  },
  summary:
    "Près de 12 millions de Tunisiens ont été recensés en 2024. La transition démographique est la plus avancée du Maghreb : la fécondité a reculé dès les années 1960-1970, portée par la scolarisation des filles et une politique de planning familial précoce, et la croissance est désormais faible. Les deux tiers de la population vivent sur la façade orientale ; l'intérieur, plus pauvre, se dépeuple au profit du littoral. L'émigration, vers la France et l'Italie surtout, est ancienne, et la Tunisie est aussi devenue un point de départ majeur des traversées irrégulières vers l'Italie.",
};
