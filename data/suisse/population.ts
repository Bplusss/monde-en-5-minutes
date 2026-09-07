import type { PopulationData } from "@/lib/types";

const OFS = "Office fédéral de la statistique (OFS)";
const OFS_URL = "https://www.bfs.admin.ch/bfs/fr/home/statistiques/population.html";

export const population: PopulationData = {
  total: {
    value: 9_127_100,
    unit: "habitants",
    year: 2025,
    source: OFS,
    sourceUrl: OFS_URL,
    note: "Population résidante permanente, fin 2025.",
  },
  density: {
    value: 221,
    unit: "hab./km²",
    year: 2025,
    source: OFS,
    sourceUrl: OFS_URL,
    note: "Calculé à partir de la population et de la superficie officielles de l'OFS.",
  },
  growthRate: {
    value: 0.8,
    unit: "%",
    year: 2025,
    source: OFS,
    sourceUrl: "https://www.efd.admin.ch/fr/newnsb/eHho7S2A2revQdhyPSYmt",
    note: "Croissance démographique 2025, en ralentissement par rapport à 2024 (+1,0 %) et 2023 (+1,7 %).",
  },
  summary:
    "Fin 2025, la Suisse comptait environ 9,13 millions d'habitants, en hausse de 0,8 % sur un an — une croissance qui ralentit, portée notamment par les migrations. Le vieillissement démographique s'accentue : les personnes de 65 ans et plus dépassent désormais en nombre celles de moins de 20 ans.",
};
