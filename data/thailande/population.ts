import type { PopulationData } from "@/lib/types";

const DOPA = "Bureau central de l'état civil, Département de l'administration provinciale (DOPA)";
const DOPA_URL = "https://www.khaosodenglish.com/news/2026/03/27/thailands-population-shrinks-down-to-65-8-million/";

export const population: PopulationData = {
  total: {
    value: 65_809_011,
    unit: "habitants",
    year: 2025,
    source: DOPA,
    sourceUrl: DOPA_URL,
    note: "Population enregistrée au 31 décembre 2025, dont 64,8 millions de ressortissants thaïlandais. Les estimations de l'ONU (environ 71,6 millions) incluent en plus les travailleurs migrants non enregistrés.",
  },
  density: {
    value: 128.3,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population DOPA ÷ superficie)",
    sourceUrl: DOPA_URL,
  },
  growthRate: {
    value: -0.22,
    unit: "%",
    year: 2025,
    source: "Calculé à partir des registres DOPA (fin 2024 : 65,95 millions ; fin 2025 : 65,81 millions)",
    sourceUrl: DOPA_URL,
    note: "Cinquième année consécutive de baisse : environ 416 000 naissances en 2025, le plus bas niveau depuis 1950, pour environ 560 000 décès.",
  },
  medianAge: {
    value: 39.7,
    unit: "ans",
    year: 2023,
    source: "Division de la population des Nations unies, World Population Prospects (révision 2024)",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 61.9,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=TH",
  },
  summary:
    "La Thaïlande compte environ 66 millions d'habitants enregistrés, auxquels s'ajoutent plusieurs millions de travailleurs migrants venus surtout de Birmanie, du Cambodge et du Laos. Le pays vieillit plus vite que la plupart de ses voisins : la fécondité est tombée autour d'un enfant par femme et la population diminue depuis 2021. L'agglomération de Bangkok concentre la vie économique, tandis que l'Isan, au Nord-Est, reste la région la plus peuplée et la plus rurale. Les Thaïs sont majoritaires ; les principales minorités sont les Sino-Thaïlandais, largement assimilés, les Malais musulmans du Sud et les peuples montagnards du Nord.",
};
