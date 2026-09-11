import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 32_300_000,
    unit: "habitants",
    year: 2026,
    source: "Estimation (Wikipedia / démographes ukrainiens)",
    sourceUrl: "https://en.wikipedia.org/wiki/Demographics_of_Ukraine",
    note: "Chiffre incertain et débattu : aucun recensement complet n'a eu lieu depuis 2001, et l'invasion russe de 2022 a provoqué le départ de plusieurs millions de réfugiés à l'étranger ainsi que d'importants déplacements internes, en plus de la population des territoires occupés qui échappe à tout dénombrement fiable.",
  },
  density: {
    value: 53.5,
    unit: "hab./km²",
    year: 2026,
    source: "Calculé (population estimée ÷ superficie)",
  },
  growthRate: {
    value: -0.66,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=UA",
    note: "Fortement négatif depuis 2022 sous l'effet conjugué de l'émigration de guerre, d'une natalité en chute et d'une surmortalité liée au conflit.",
  },
  urbanShare: {
    value: 70.3,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=UA",
  },
  summary:
    "La guerre déclenchée par l'invasion russe de février 2022 a bouleversé la démographie du pays : plusieurs millions d'Ukrainiens ont trouvé refuge en Europe (notamment en Pologne et en Allemagne) et au-delà, tandis que des millions d'autres restent déplacés à l'intérieur même du pays. La population résidant sur le territoire sous contrôle du gouvernement est donc aujourd'hui sensiblement inférieure aux quelque 41 millions d'habitants recensés avant le conflit.",
};
