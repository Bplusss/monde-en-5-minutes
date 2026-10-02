import type { PopulationData } from "@/lib/types";

const WB = "Banque mondiale";

export const population: PopulationData = {
  total: {
    value: 29_879_337,
    unit: "habitants",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CM",
    note: "Estimation : le dernier recensement publié date de 2005 (17,5 millions d'habitants) ; le quatrième recensement général de la population n'a pas encore livré de résultats.",
  },
  density: {
    value: 62.8,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population Banque mondiale ÷ superficie)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CM",
    note: "Forts contrastes : environ 160 hab./km² dans les régions de l'Ouest et de l'Extrême-Nord, à peine plus de 10 dans l'Est forestier.",
  },
  growthRate: {
    value: 2.56,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=CM",
  },
  medianAge: {
    value: 17.8,
    unit: "ans",
    year: 2023,
    source: "Division de la population des Nations unies, World Population Prospects 2024 (via Our World in Data)",
    sourceUrl: "https://ourworldindata.org/grapher/median-age?tab=chart&country=CMR",
  },
  urbanShare: {
    value: 55.7,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=CM",
  },
  summary:
    "Le Cameroun compte près de 30 millions d'habitants, une population très jeune qui croît d'environ 2,5 % par an, avec un peu plus de quatre enfants par femme. Plus de la moitié des habitants vivent en ville ; Douala et Yaoundé dépassent chacune 3,5 millions d'habitants. Le pays rassemble environ 250 groupes ethniques, dont les Bamiléké et les Bamoun de l'Ouest, les Beti-Fang du Centre et du Sud, les Sawa du littoral, les Peuls (Foulbé) et de nombreux peuples du Nord. Les violences dans les régions anglophones et l'Extrême-Nord ont déplacé plusieurs centaines de milliers de personnes ; le pays accueille aussi des réfugiés centrafricains et nigérians.",
};
