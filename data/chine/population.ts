import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 1_408_280_000,
    unit: "habitants",
    year: 2024,
    source: "Bureau national de statistique de Chine (NBS)",
    sourceUrl: "https://www.stats.gov.cn/english/",
    note: "Population de Chine continentale ; en recul depuis le pic de 2021, l'Inde ayant dépassé la Chine comme pays le plus peuplé du monde en 2023.",
  },
  density: {
    value: 148,
    unit: "hab./km²",
    year: 2024,
    source: "Calculé (population NBS ÷ superficie hors Taïwan, Hong Kong, Macao)",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=CN",
    note: "Moyenne trompeuse : plus de 90 % de la population vit sur la moitié orientale du territoire, contre un Tibet et un Xinjiang très peu peuplés.",
  },
  growthRate: {
    value: -0.1,
    unit: "%",
    year: 2024,
    source: "Bureau national de statistique de Chine (NBS)",
    sourceUrl: "https://www.stats.gov.cn/english/",
    note: "Croissance négative depuis 2022, sous l'effet de la chute de la natalité et des séquelles de la politique de l'enfant unique (1980-2015).",
  },
  medianAge: {
    value: 39.8,
    unit: "ans",
    year: 2023,
    source: "ONU (Perspectives de la population mondiale)",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 67.0,
    unit: "%",
    year: 2024,
    source: "Bureau national de statistique de Chine (NBS)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=CN",
    note: "En forte hausse depuis les années 1980 (moins de 20 % à l'époque), sous l'effet d'un exode rural massif.",
  },
  summary:
    "Longtemps pays le plus peuplé du monde, la Chine a été dépassée par l'Inde en 2023 et voit sa population reculer depuis 2022. La politique de l'enfant unique (1980-2015) a durablement abaissé la natalité ; son assouplissement n'a pas suffi à enrayer une fécondité parmi les plus basses au monde, face au coût élevé de l'éducation et du logement. Le pays fait désormais face à un vieillissement rapide, aux lourdes implications pour ses retraites et sa croissance future.",
};
