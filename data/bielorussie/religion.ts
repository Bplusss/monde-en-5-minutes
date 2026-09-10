import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Enquête sociologique nationale (Institut d'analyse sociale, économique et politique)",
  year: 2020,
  ageScope: "Population adulte",
  source: "IASEPI / Wikipedia",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Belarus",
  points: [
    { label: "Orthodoxes", sharePercent: 48.3 },
    { label: "Sans religion ou athées", sharePercent: 41.1 },
    { label: "Catholiques", sharePercent: 7.1 },
    { label: "Autres religions", sharePercent: 3.5 },
  ],
  summary:
    "L'Église orthodoxe biélorusse, rattachée au patriarcat de Moscou, rassemble la plus grande part des croyants, tandis qu'une minorité catholique significative, historiquement liée à la Pologne voisine, se concentre dans l'ouest du pays. La part de personnes sans religion reste élevée, héritage direct de plusieurs décennies de politique antireligieuse soviétique.",
  methodologyNote:
    "Aucun recensement officiel ne porte sur la religion en Biélorussie ; ces chiffres reposent sur une enquête sociologique nationale et doivent être interprétés comme des ordres de grandeur.",
};
