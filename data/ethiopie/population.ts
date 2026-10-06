import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 135_472_051,
    unit: "habitants",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=ET",
    note: "Estimation : aucun recensement n'a été organisé depuis 2007 (73,8 millions d'habitants), celui prévu en 2017 ayant été reporté à plusieurs reprises.",
  },
  density: {
    value: 114.0,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=ET",
  },
  growthRate: {
    value: 2.55,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=ET",
  },
  urbanShare: {
    value: 24.1,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=ET",
  },
  summary:
    "Deuxième pays le plus peuplé d'Afrique après le Nigeria, l'Éthiopie est aussi l'un des plus jeunes et des plus ruraux : trois habitants sur quatre vivent à la campagne, surtout sur les hauts plateaux. Le pays compte plus de 80 groupes ethniques ; au recensement de 2007, les Oromo représentaient 34 % de la population, les Amhara 27 %, puis venaient les Somali, les Tigréens et les Sidama. Les conflits récents ont fait plusieurs millions de déplacés internes, et l'Éthiopie accueille aussi plus d'un million de réfugiés venus du Soudan du Sud, de Somalie, d'Érythrée et du Soudan.",
};
