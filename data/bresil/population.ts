import type { PopulationData } from "@/lib/types";

const SRC = "IBGE (Instituto Brasileiro de Geografia e Estatística)";
const URL = "https://www.ibge.gov.br/";

export const population: PopulationData = {
  total: {
    value: 213_421_037,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Estimation IBGE ; le recensement de 2022 avait dénombré 203 080 756 habitants, le septième pays le plus peuplé du monde.",
  },
  density: {
    value: 25.1,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Densité moyenne trompeuse : la population se concentre très largement sur la frange littorale et le Sud-Est, l'Amazonie restant très peu peuplée.",
  },
  growthRate: {
    value: 0.58,
    unit: "%",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
  },
  urbanShare: {
    value: 87.6,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=BR",
  },
  summary:
    "Septième pays le plus peuplé du monde et le plus peuplé d'Amérique du Sud, le Brésil est aussi très majoritairement urbain, avec près de neuf habitants sur dix vivant en ville. La population reste concentrée sur la façade atlantique et dans le Sud-Est industriel et financier (São Paulo, Rio de Janeiro), tandis que l'immense bassin amazonien, malgré son étendue, n'abrite qu'une faible part des habitants. Le recensement de 2022 a par ailleurs confirmé le net recul démographique de la catégorie « blanche » au profit de la catégorie « pardo » (métisse), dans un pays qui se définit historiquement par un métissage important entre populations autochtones, européennes et africaines.",
};
