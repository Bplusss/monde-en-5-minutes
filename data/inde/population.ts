import type { PopulationData } from "@/lib/types";

const SRC = "Banque mondiale";
const URL = "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=IN";

export const population: PopulationData = {
  total: {
    value: 1_450_935_791,
    unit: "habitants",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Estimation (Banque mondiale/Nations unies) : le recensement décennal de 2011, dernier recensement complet, dénombrait 1 210 854 977 habitants ; le recensement prévu en 2021 a été reporté sine die (pandémie puis retards administratifs) et n'a toujours pas eu lieu.",
  },
  density: {
    value: 483.7,
    unit: "hab./km²",
    year: 2023,
    source: SRC,
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=IN",
  },
  growthRate: {
    value: 0.89,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=IN",
    note: "En ralentissement constant depuis les années 1980 ; l'Inde a dépassé la Chine comme pays le plus peuplé du monde autour de 2023 selon les estimations des Nations unies.",
  },
  urbanShare: {
    value: 35.4,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IN",
    note: "L'un des taux d'urbanisation les plus bas parmi les grandes économies, malgré la taille de ses mégapoles.",
  },
  summary:
    "Pays le plus peuplé du monde depuis le milieu des années 2020, l'Inde reste pourtant majoritairement rurale : plus des deux tiers de sa population vivent en dehors des grandes villes. Sa croissance démographique, longtemps très rapide, ralentit nettement depuis les années 1980, mais des écarts importants subsistent entre États — le Nord et l'Est restant globalement plus féconds que le Sud, déjà proche du seuil de renouvellement des générations.",
};
