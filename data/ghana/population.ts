import type { PopulationData } from "@/lib/types";

const GSS = "Ghana Statistical Service (recensement 2021)";
const GSS_URL = "https://census2021.statsghana.gov.gh/";

export const population: PopulationData = {
  total: {
    value: 30_832_019,
    unit: "habitants",
    year: 2021,
    source: GSS,
    sourceUrl: GSS_URL,
    note: "Population recensée en 2021 ; la Banque mondiale l'estime à 35 millions en 2025.",
  },
  density: {
    value: 129,
    unit: "hab./km²",
    year: 2021,
    source: GSS,
    sourceUrl: GSS_URL,
  },
  growthRate: {
    value: 2.1,
    unit: "%",
    year: 2021,
    source: GSS,
    sourceUrl: GSS_URL,
    note: "Croissance annuelle moyenne entre les recensements de 2010 et 2021.",
  },
  urbanShare: {
    value: 56.7,
    unit: "%",
    year: 2021,
    source: GSS,
    sourceUrl: GSS_URL,
  },
  summary:
    "La population du Ghana a été multipliée par plus de quatre depuis l'indépendance et reste jeune : l'âge médian est d'environ 21 ans. Elle se concentre dans le Sud : les régions du Grand Accra et de l'Ashanti, autour de Kumasi, regroupent à elles seules plus du tiers des habitants, alors que le Nord, plus pauvre, reste peu peuplé. Le pays compte des dizaines de groupes ethniques ; les Akans, dont les Ashantis et les Fantis, en forment près de la moitié, devant les Mole-Dagbanis du Nord, les Éwés de l'Est et les Gas-Adangbes de la région d'Accra.",
};
