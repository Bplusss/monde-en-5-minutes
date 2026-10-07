import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 32_447_385,
    unit: "habitants",
    year: 2020,
    source: "Department of Statistics Malaysia (recensement 2020)",
    sourceUrl: "https://www.dosm.gov.my/portal-main/release-content/key-findings-population-and-housing-census-of-malaysia-2020",
    note: "Y compris environ 2,7 millions de résidents étrangers ; les estimations de 2025 dépassent 34 millions d'habitants.",
  },
  density: {
    value: 106.9,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=MY",
  },
  growthRate: {
    value: 1.17,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=MY",
  },
  urbanShare: {
    value: 77.4,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=MY",
  },
  summary:
    "La société malaisienne est multiethnique. Au recensement de 2020, près de 70 % des citoyens étaient des Bumiputera (« fils du sol ») — Malais et peuples autochtones, majoritaires au Sabah et au Sarawak —, environ 23 % d'origine chinoise et moins de 7 % d'origine indienne, ces deux communautés descendant en grande partie des travailleurs venus à l'époque coloniale. La part des Chinois recule du fait d'une natalité plus faible. Les travailleurs étrangers, venus surtout d'Indonésie, du Bangladesh et du Népal, sont nombreux dans les plantations, le bâtiment et l'industrie.",
};
