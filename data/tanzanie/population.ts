import type { PopulationData } from "@/lib/types";

const NBS = "National Bureau of Statistics (recensement 2022)";
const NBS_URL = "https://www.nbs.go.tz/";

export const population: PopulationData = {
  total: {
    value: 61_741_120,
    unit: "habitants",
    year: 2022,
    source: NBS,
    sourceUrl: NBS_URL,
    note: "Dont 59,9 millions sur le continent et 1,9 million à Zanzibar ; la Banque mondiale estime la population à 70,5 millions en 2025.",
  },
  density: {
    value: 65,
    unit: "hab./km²",
    year: 2022,
    source: NBS,
    sourceUrl: NBS_URL,
  },
  growthRate: {
    value: 3.2,
    unit: "%",
    year: 2022,
    source: NBS,
    sourceUrl: NBS_URL,
    note: "Croissance annuelle moyenne entre les recensements de 2012 et 2022, l'une des plus fortes du monde.",
  },
  urbanShare: {
    value: 36.9,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=TZ",
  },
  summary:
    "La population tanzanienne a plus que quintuplé depuis l'indépendance et augmente encore de plus de 3 % par an ; près de la moitié des habitants ont moins de 18 ans. Elle reste majoritairement rurale, mais Dar es Salaam, qui dépasse 5 millions d'habitants, est l'une des villes à la croissance la plus rapide d'Afrique. Le pays compte plus de 120 groupes ethniques, dont aucun n'est dominant : les Sukumas, au sud du lac Victoria, sont les plus nombreux. Cette diversité, combinée à la diffusion du swahili, explique la faiblesse des tensions ethniques.",
};
