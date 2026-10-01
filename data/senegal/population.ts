import type { PopulationData } from "@/lib/types";

const ANSD = "Agence nationale de la statistique et de la démographie (ANSD), RGPH-5 2023";
const ANSD_URL = "https://www.ansd.sn/sites/default/files/recensements/rapport/Chapitre%201-%20ETAT-STRUCTURE-POPULATION-Rapport-Provisoire-RGPH5_juillet2024_0.pdf";

export const population: PopulationData = {
  total: {
    value: 18_126_390,
    unit: "habitants",
    year: 2023,
    source: ANSD,
    sourceUrl: ANSD_URL,
    note: "Cinquième recensement général (mai-juin 2023), le premier entièrement numérique. La Banque mondiale estime la population à 18,9 millions en 2025.",
  },
  density: {
    value: 92,
    unit: "hab./km²",
    year: 2023,
    source: ANSD,
    sourceUrl: ANSD_URL,
    note: "Moyenne masquant de très forts écarts : 7 478 hab./km² dans la région de Dakar, 15 dans celle de Kédougou.",
  },
  growthRate: {
    value: 2.3,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=SN",
  },
  medianAge: {
    value: 19.0,
    unit: "ans",
    year: 2023,
    source: ANSD,
    sourceUrl: ANSD_URL,
    note: "39,1 % des habitants ont moins de 15 ans.",
  },
  urbanShare: {
    value: 54.7,
    unit: "%",
    year: 2023,
    source: ANSD,
    sourceUrl: ANSD_URL,
  },
  summary:
    "Le recensement de 2023 a dénombré un peu plus de 18,1 millions d'habitants, soit une croissance annuelle moyenne de 2,9 % depuis 2013. La population est très jeune (âge médian de 19 ans) et désormais majoritairement urbaine. Elle se concentre à l'ouest : l'axe Dakar-Thiès-Diourbel réunit 47 % des habitants, tandis que l'est et le nord restent peu peuplés. Les principaux groupes ethniques sont les Wolofs, les Peuls (Haalpulaar), les Sérères, les Diolas et les Mandingues. L'émigration vers l'Europe, d'autres pays africains et l'Amérique du Nord est ancienne ; elle emprunte aussi, depuis le milieu des années 2000, la route maritime dangereuse des Canaries en pirogue.",
};
