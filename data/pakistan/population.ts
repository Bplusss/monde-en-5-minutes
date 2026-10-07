import type { PopulationData } from "@/lib/types";

const CENSUS = "Pakistan Bureau of Statistics (recensement 2023)";
const CENSUS_URL = "https://www.pbs.gov.pk/digital-census/detailed-results";

export const population: PopulationData = {
  total: {
    value: 241_499_431,
    unit: "habitants",
    year: 2023,
    source: CENSUS,
    sourceUrl: CENSUS_URL,
    note: "Quatre provinces et territoire de la capitale ; le Gilgit-Baltistan et l'Azad Cachemire, recensés à part, comptent environ 6 millions d'habitants supplémentaires.",
  },
  density: {
    value: 321.1,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=PK",
  },
  growthRate: {
    value: 2.55,
    unit: "%",
    year: 2023,
    source: CENSUS,
    sourceUrl: CENSUS_URL,
    note: "Croissance annuelle moyenne entre les recensements de 2017 et 2023.",
  },
  urbanShare: {
    value: 38.8,
    unit: "%",
    year: 2023,
    source: CENSUS,
    sourceUrl: CENSUS_URL,
  },
  summary:
    "Cinquième pays le plus peuplé du monde, le Pakistan a vu sa population plus que septupler depuis l'indépendance de 1947. Sa croissance, de 2,55 % par an entre 2017 et 2023, reste l'une des plus rapides d'Asie, et environ deux habitants sur trois ont moins de 30 ans. Le Pendjab rassemble plus de la moitié de la population, et Karachi, ancienne capitale et premier port du pays, dépasse les 20 millions d'habitants. Le pays accueille aussi depuis 1979 l'une des plus grandes populations de réfugiés afghans au monde, dont une partie a été expulsée depuis 2023.",
};
