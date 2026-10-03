import type { PopulationData } from "@/lib/types";

const TUIK = "Institut turc de la statistique (TÜİK), système d'enregistrement de la population fondé sur l'adresse (ADNKS)";
const TUIK_URL = "https://veriportali.tuik.gov.tr/tr/press/53899";

export const population: PopulationData = {
  total: {
    value: 86_092_168,
    unit: "habitants",
    year: 2025,
    source: TUIK,
    sourceUrl: TUIK_URL,
    note: "Population au 31 décembre 2025, dont 1,52 million de résidents étrangers.",
  },
  density: {
    value: 109.9,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population TÜİK ÷ superficie)",
    sourceUrl: TUIK_URL,
    note: "De plus de 2 800 hab./km² dans la province d'Istanbul à environ 11 dans celle de Tunceli.",
  },
  growthRate: {
    value: 0.5,
    unit: "%",
    year: 2025,
    source: TUIK,
    sourceUrl: TUIK_URL,
    note: "Après 0,34 % en 2024 ; la fécondité est passée sous le seuil de renouvellement des générations.",
  },
  medianAge: {
    value: 34.9,
    unit: "ans",
    year: 2025,
    source: TUIK,
    sourceUrl: TUIK_URL,
    note: "De 21,8 ans dans la province de Şanlıurfa à 44 ans dans celle de Sinop.",
  },
  urbanShare: {
    value: 89.5,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=TR",
  },
  summary:
    "La Turquie compte environ 86 millions d'habitants, dont près d'un sur cinq vit dans la province d'Istanbul. La croissance démographique ralentit et la population vieillit, avec de forts contrastes entre l'Ouest et le Sud-Est kurde, plus jeune. Le pays a accueilli plus de 3,5 millions de réfugiés syriens au plus fort de la guerre civile ; une partie est rentrée depuis la chute de Bachar el-Assad en décembre 2024.",
};
