import type { PopulationData } from "@/lib/types";

const WB = "Banque mondiale";

export const population: PopulationData = {
  total: {
    value: 5_849_421,
    unit: "habitants",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=LB",
    note: "Estimation incluant les réfugiés présents sur le territoire. Aucun recensement n'a eu lieu depuis 1932.",
  },
  density: {
    value: 560,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population Banque mondiale ÷ superficie)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=LB",
    note: "Densité très concentrée sur le littoral, en particulier dans l'agglomération de Beyrouth.",
  },
  growthRate: {
    value: 0.75,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=LB",
    note: "Après une baisse entre 2018 et 2020, liée aux retours de réfugiés syriens et à l'émigration.",
  },
  medianAge: {
    value: 28.3,
    unit: "ans",
    year: 2023,
    source: "Division de la population des Nations unies (ONU), World Population Prospects (révision 2024), via Our World in Data",
    sourceUrl: "https://ourworldindata.org/grapher/median-age?tab=chart&country=LBN",
  },
  urbanShare: {
    value: 90.96,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=LB",
  },
  summary:
    "Faute de recensement depuis 1932, question sensible en raison du partage confessionnel du pouvoir, la population libanaise n'est connue que par des estimations. Le pays accueillait environ 1,4 million de réfugiés syriens début 2026 selon le HCR, dont des centaines de milliers sont rentrés en Syrie depuis, ainsi que des réfugiés palestiniens installés depuis 1948. La diaspora d'origine libanaise (Brésil, Afrique de l'Ouest, France, Golfe) dépasse la population résidente, et l'émigration s'est accélérée depuis la crise de 2019.",
};
