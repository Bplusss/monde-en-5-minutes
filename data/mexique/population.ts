import type { PopulationData } from "@/lib/types";

const SRC = "INEGI (Instituto Nacional de Estadística y Geografía)";
const URL = "https://www.inegi.org.mx/temas/estructura/";

export const population: PopulationData = {
  total: {
    value: 131_946_900,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Estimation ; le recensement de 2020 avait dénombré 126 014 024 habitants. Le Mexique est le pays le plus peuplé d'Amérique latine et le 10ᵉ au monde.",
  },
  density: {
    value: 66.3,
    unit: "hab./km²",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: 0.7,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=MX",
    note: "La fécondité est tombée à environ 1,4 enfant par femme en 2024, contre 5,7 en 1976 : la croissance démographique ralentit rapidement.",
  },
  medianAge: {
    value: 30.6,
    unit: "ans",
    year: 2023,
    source: "Wikipedia (d'après le CIA World Factbook)",
    sourceUrl: "https://en.wikipedia.org/wiki/Demographics_of_Mexico",
  },
  urbanShare: {
    value: 81.3,
    unit: "%",
    year: 2022,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=MX",
  },
  summary:
    "Pays le plus peuplé d'Amérique latine, le Mexique reste marqué par une forte concentration de population sur le haut plateau central, autour de l'immense agglomération de Mexico, l'une des plus vastes du monde. Sa transition démographique a été rapide : la fécondité, encore proche de six enfants par femme dans les années 1970, est aujourd'hui inférieure au seuil de renouvellement des générations. Le pays a par ailleurs longtemps été marqué par une émigration économique de grande ampleur vers les États-Unis, qui a ralenti depuis le milieu des années 2000.",
};
