import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 53_057_212,
    unit: "habitants",
    year: 2025,
    source: "DANE (projections de population)",
    sourceUrl: "https://www.dane.gov.co/index.php/estadisticas-por-tema/demografia-y-poblacion/proyecciones-de-poblacion",
    note: "Projection officielle établie à partir du recensement de 2018.",
  },
  density: {
    value: 47.2,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=CO",
  },
  growthRate: {
    value: 1.01,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=CO",
  },
  urbanShare: {
    value: 78.8,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=CO",
  },
  summary:
    "Deuxième pays le plus peuplé d'Amérique du Sud après le Brésil, la Colombie concentre sa population dans les Andes et sur la côte caraïbe : Bogota, Medellín, Cali et Barranquilla rassemblent à elles seules plus d'un quart des habitants, tandis que l'Amazonie et les Llanos restent presque vides. La population est majoritairement métisse ; au recensement de 2018, 6,7 % des habitants se déclaraient afro-colombiens, raizales ou palenqueros et 4,4 % autochtones. Le pays a accueilli depuis 2015 près de trois millions de migrants vénézuéliens, et des millions de Colombiens ont été déplacés à l'intérieur du pays par le conflit armé.",
};
