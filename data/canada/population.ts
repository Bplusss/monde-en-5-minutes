import type { PopulationData } from "@/lib/types";

const STATCAN = "Statistique Canada";
const STATCAN_URL = "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710000901";

export const population: PopulationData = {
  total: {
    value: 41_472_081,
    unit: "habitants",
    year: 2026,
    source: STATCAN,
    sourceUrl: STATCAN_URL,
    note: "Estimation trimestrielle (1ᵉʳ trimestre 2026).",
  },
  density: {
    value: 4.2,
    unit: "hab./km²",
    year: 2026,
    source: STATCAN,
    sourceUrl: STATCAN_URL,
    note: "Calculée à partir de la population totale et de la superficie du pays ; l'une des densités les plus faibles au monde, la population étant concentrée dans une bande étroite le long de la frontière avec les États-Unis.",
  },
  growthRate: {
    value: 0.9,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=CA",
    note: "Croissance en net ralentissement depuis 2024, après l'annonce par le gouvernement fédéral, fin 2024, d'une réduction des cibles d'immigration permanente et temporaire pour 2025-2027, à la suite de plusieurs années de croissance record portée quasi exclusivement par l'immigration.",
  },
  medianAge: {
    value: 41.8,
    unit: "ans",
    year: 2020,
    source: "Wikipedia (démographie du Canada)",
    sourceUrl: "https://en.wikipedia.org/wiki/Demographics_of_Canada",
  },
  urbanShare: {
    value: 82.9,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=CA",
  },
  summary:
    "Le Canada est l'un des pays les moins densément peuplés au monde : l'immense majorité de ses habitants vit dans une bande étroite proche de la frontière américaine, en particulier dans le corridor Windsor-Québec, tandis que le Grand Nord reste très largement inhabité. Sa croissance démographique, l'une des plus rapides du monde développé depuis les années 2010, repose presque entièrement sur l'immigration ; elle a nettement ralenti depuis 2025 à la suite d'un resserrement volontaire des cibles d'admission par le gouvernement fédéral.",
};
