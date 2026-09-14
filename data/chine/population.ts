import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 1_408_280_000,
    unit: "habitants",
    year: 2024,
    source: "Bureau national de statistique de Chine (NBS)",
    sourceUrl: "https://www.stats.gov.cn/english/",
    note: "Population de Chine continentale (hors Hong Kong, Macao et Taïwan) ; en recul pour la troisième année consécutive depuis le pic de 1,4126 milliard atteint en 2021, l'Inde ayant dépassé la Chine comme pays le plus peuplé du monde en 2023.",
  },
  density: {
    value: 148,
    unit: "hab./km²",
    year: 2024,
    source: "Calculé (population NBS ÷ superficie hors Taïwan, Hong Kong, Macao)",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=CN",
    note: "Moyenne trompeuse : plus de 90 % de la population vit sur la moitié orientale du territoire, tandis que le Tibet et le Xinjiang, qui couvrent à eux deux plus du quart du pays, comptent parmi les régions les moins densément peuplées au monde.",
  },
  growthRate: {
    value: -0.1,
    unit: "%",
    year: 2024,
    source: "Bureau national de statistique de Chine (NBS)",
    sourceUrl: "https://www.stats.gov.cn/english/",
    note: "Croissance négative depuis 2022, sous l'effet conjugué d'une chute de la natalité et des séquelles démographiques de la politique de l'enfant unique (1980-2015).",
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
    note: "En forte hausse depuis les années 1980 (moins de 20 % à l'époque), sous l'effet de l'une des plus vastes vagues d'exode rural de l'histoire.",
  },
  summary:
    "Longtemps pays le plus peuplé du monde, la Chine a été dépassée par l'Inde en 2023 et voit sa population reculer depuis 2022 — un tournant démographique après des décennies de politique de limitation des naissances. La politique de l'enfant unique, imposée de 1980 à 2015 pour freiner une croissance jugée incontrôlable, a durablement abaissé la natalité et déséquilibré le rapport entre les sexes (préférence traditionnelle pour les garçons) ; son assouplissement (deux enfants en 2016, trois en 2021) n'a pas suffi à enrayer la baisse de la fécondité, l'un des taux les plus bas au monde, dans un contexte de coût élevé de l'éducation et du logement. Le pays fait désormais face à un vieillissement rapide de sa population, avec de profondes implications pour son système de retraites et sa croissance économique future.",
};
