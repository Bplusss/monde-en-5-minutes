import type { PopulationData } from "@/lib/types";

const WB = "Banque mondiale";

export const population: PopulationData = {
  total: {
    value: 47_435_312,
    unit: "habitants",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=DZ",
    note: "L'Office national des statistiques (ONS) comptait 46,7 millions d'habitants au 1ᵉʳ janvier 2024 ; le dernier recensement publié date de 2008 (34,1 millions).",
  },
  density: {
    value: 19.9,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population Banque mondiale ÷ superficie)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=DZ",
    note: "Moyenne trompeuse : la grande majorité des habitants vit dans le Tell, sur une faible part du territoire, tandis que le Sahara reste très peu peuplé.",
  },
  growthRate: {
    value: 1.32,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=DZ",
  },
  medianAge: {
    value: 28.9,
    unit: "ans",
    year: 2020,
    source: "Wikipedia (d'après l'ONU)",
    sourceUrl: "https://fr.wikipedia.org/wiki/D%C3%A9mographie_de_l'Alg%C3%A9rie",
  },
  urbanShare: {
    value: 75.8,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=DZ",
  },
  summary:
    "Avec environ 47 millions d'habitants, l'Algérie est le deuxième pays le plus peuplé du monde arabe après l'Égypte. La population a plus que quadruplé depuis l'indépendance ; sa croissance ralentit depuis le milieu des années 2010 avec la baisse des naissances (environ 2,8 enfants par femme en 2022), mais elle reste jeune. Elle est aux trois quarts urbaine et concentrée dans le nord, autour d'Alger, d'Oran et de Constantine. Arabophones et berbérophones forment une population largement métissée, que la statistique officielle ne distingue pas. La diaspora, importante, est d'abord installée en France.",
};
