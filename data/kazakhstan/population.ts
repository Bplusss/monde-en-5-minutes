import type { PopulationData } from "@/lib/types";

const BNS = "Bureau of National Statistics (population au 1er janvier 2026)";
const BNS_URL = "https://stat.gov.kz/en/industries/social-statistics/demography/publications/475783/";

export const population: PopulationData = {
  total: {
    value: 20_495_975,
    unit: "habitants",
    year: 2026,
    source: BNS,
    sourceUrl: BNS_URL,
  },
  density: {
    value: 7.5,
    unit: "hab./km²",
    year: 2026,
    source: BNS,
    sourceUrl: BNS_URL,
  },
  growthRate: {
    value: 1.21,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=KZ",
  },
  urbanShare: {
    value: 63.6,
    unit: "%",
    year: 2026,
    source: BNS,
    sourceUrl: BNS_URL,
  },
  summary:
    "Avec à peine plus de 20 millions d'habitants pour un territoire cinq fois plus grand que la France, le Kazakhstan est l'un des pays les moins densément peuplés du monde. La population se concentre au sud, autour d'Almaty, de Chymkent et du Turkestan, et dans la capitale, Astana, dont la population a été multipliée par plus de cinq depuis la fin des années 1990. À l'indépendance, les Kazakhs ne formaient que 40 % des habitants ; le départ de centaines de milliers de Russes, d'Allemands et d'Ukrainiens dans les années 1990 et une natalité plus élevée en ont fait plus de 70 % de la population au recensement de 2021, contre environ 15 % de Russes. Le pays compte aussi des Ouzbeks, des Ouïghours, des Tatars, des Coréens et des Allemands, souvent descendants de déportés de l'époque stalinienne.",
};
