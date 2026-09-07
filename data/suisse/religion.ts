import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Statistique de la population et des ménages / relevés sur les langues et religions",
  year: 2023,
  ageScope: "Ensemble de la population résidante",
  source: "Office fédéral de la statistique (OFS)",
  sourceUrl: "https://www.bfs.admin.ch/bfs/fr/home/statistiques/population/langues-religions/religions.html",
  points: [
    { label: "Sans confession", sharePercent: 36 },
    { label: "Catholiques romains", sharePercent: 31 },
    { label: "Évangéliques réformés", sharePercent: 19 },
    { label: "Musulmans", sharePercent: 6 },
    { label: "Autres communautés chrétiennes", sharePercent: 6 },
  ],
  summary:
    "En 2023, les personnes sans appartenance religieuse (36 %) forment le groupe le plus important, devant les catholiques romains (31 %) et les évangéliques réformés (19 %). La part des personnes sans confession n'a cessé de croître, partant de 1 % en 1970.",
  methodologyNote:
    "Les parts restantes (environ 8 %) correspondent à d'autres confessions ou à des réponses non précisées, non détaillées dans les chiffres disponibles. Ces données déclaratives mesurent l'appartenance religieuse, pas la pratique effective.",
};
