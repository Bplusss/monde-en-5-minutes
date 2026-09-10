import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population 2021",
  year: 2021,
  ageScope: "Population totale résidente",
  source: "Office croate de la statistique (DZS)",
  sourceUrl: "https://dzs.gov.hr/u-fokusu/popis-2021/88",
  points: [
    { label: "Catholiques", sharePercent: 78.97 },
    { label: "Orthodoxes", sharePercent: 3.32 },
    { label: "Musulmans", sharePercent: 1.32 },
    { label: "Sans religion ou athées", sharePercent: 4.71 },
    { label: "Autres religions ou non déclaré", sharePercent: 11.68 },
  ],
  summary:
    "L'Église catholique romaine rassemble près de 79 % de la population, un poids historique lié à l'identité nationale croate, mais en recul sensible par rapport aux 86 % du recensement de 2011. La minorité orthodoxe, en grande partie composée de Serbes de Croatie, représente environ 3 % de la population, tandis que la part des personnes se déclarant sans religion ou athées a progressé, passant d'environ 4 % à près de 5 % entre les deux derniers recensements.",
  methodologyNote:
    "Ces chiffres proviennent des déclarations volontaires recueillies lors du recensement décennal, seule source de données religieuses en Croatie ; la méthodologie de la catégorie « autres croyances » a changé entre 2011 et 2021, ce qui limite la comparabilité directe de certaines sous-catégories.",
};
