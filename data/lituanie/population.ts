import type { PopulationData } from "@/lib/types";

const SRC = "Eurostat";
const URL = "https://ec.europa.eu/eurostat/databrowser/view/tps00001/default/table";

export const population: PopulationData = {
  total: {
    value: 2_890_664,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Population résidente au 1ᵉʳ janvier 2026 (Eurostat, données décembre 2025).",
  },
  density: {
    value: 44.3,
    unit: "hab./km²",
    year: 2025,
    source: `${SRC} (calculé à partir de la population et de la superficie)`,
    sourceUrl: URL,
  },
  growthRate: {
    value: -0.64,
    unit: "%",
    year: 2024,
    source: "Office lituanien de statistique",
    sourceUrl: "https://osp.stat.gov.lt/en/",
    note: "Déclin naturel (davantage de décès que de naissances) ; la population totale progresse néanmoins légèrement grâce à un solde migratoire positif, porté notamment par l'accueil de réfugiés ukrainiens.",
  },
  summary:
    "Après avoir perdu près d'un quart de ses habitants depuis l'indépendance (elle comptait environ 3,7 millions d'habitants en 1990), sous l'effet conjugué d'une natalité basse et d'une forte émigration vers l'Europe de l'Ouest dans les années 1990-2010, la population lituanienne s'est stabilisée ces dernières années, grâce notamment au retour d'émigrés et à l'arrivée de réfugiés ukrainiens. Elle reste concentrée autour de Vilnius, Kaunas et Klaipėda.",
};
