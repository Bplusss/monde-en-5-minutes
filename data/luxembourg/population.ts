import type { PopulationData } from "@/lib/types";

const SRC = "STATEC (Institut national de la statistique du Luxembourg)";
const URL = "https://statistiques.public.lu/fr/population-emploi/population.html";

export const population: PopulationData = {
  total: {
    value: 672_050,
    unit: "habitants",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 259.9,
    unit: "hab./km²",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: 1.6,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "L'une des croissances démographiques les plus rapides d'Europe, presque entièrement portée par l'immigration de travail.",
  },
  urbanShare: {
    value: 92.2,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=LU",
  },
  summary:
    "Près de la moitié des résidents luxembourgeois sont de nationalité étrangère, et le pays accueille chaque jour plus de 200 000 travailleurs frontaliers venus de France, de Belgique et d'Allemagne — soit plus de deux fois la population active nationale — pour travailler notamment dans le secteur financier. Cette double dynamique fait du Luxembourg l'un des territoires les plus cosmopolites d'Europe rapporté à sa population.",
};
