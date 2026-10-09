import type { PopulationData } from "@/lib/types";

const BBS = "Bangladesh Bureau of Statistics (recensement 2022)";
const BBS_URL = "https://bbs.gov.bd/";

export const population: PopulationData = {
  total: {
    value: 169_828_911,
    unit: "habitants",
    year: 2022,
    source: BBS,
    sourceUrl: BBS_URL,
    note: "Population ajustée après l'enquête de couverture du recensement ; la Banque mondiale l'estime à 175,7 millions en 2025.",
  },
  density: {
    value: 1_151,
    unit: "hab./km²",
    year: 2022,
    source: BBS,
    sourceUrl: BBS_URL,
    note: "Calculée à partir de la population ajustée et de la superficie officielle.",
  },
  growthRate: {
    value: 1.22,
    unit: "%",
    year: 2022,
    source: BBS,
    sourceUrl: BBS_URL,
    note: "Croissance annuelle moyenne entre les recensements de 2011 et 2022.",
  },
  urbanShare: {
    value: 31.7,
    unit: "%",
    year: 2022,
    source: BBS,
    sourceUrl: BBS_URL,
  },
  summary:
    "Le Bangladesh est le pays le plus densément peuplé du monde si l'on excepte les cités-États et les très petits territoires : près de 170 millions d'habitants sur une superficie quatre fois plus petite que celle de la France. La fécondité a pourtant chuté, d'environ 6 enfants par femme au début des années 1970 à près de 2 aujourd'hui, grâce au planning familial et à l'éducation des filles. Dacca, l'une des plus grandes agglomérations du monde, attire chaque année des centaines de milliers de migrants des campagnes. Plus de 98 % des habitants sont des Bengalis ; une cinquantaine de peuples autochtones vivent surtout dans les collines du Sud-Est et du Nord.",
};
