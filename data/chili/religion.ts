import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population",
  year: 2024,
  ageScope: "Population de 15 ans et plus",
  source: "INE (recensement 2024)",
  sourceUrl: "https://censo2024.ine.gob.cl/",
  points: [
    { label: "Catholiques", sharePercent: 54.0 },
    { label: "Évangéliques et protestants", sharePercent: 16.3 },
    { label: "Autre religion", sharePercent: 3.9 },
    { label: "Sans religion", sharePercent: 25.8 },
  ],
  summary:
    "Longtemps l'un des pays les plus catholiques d'Amérique latine, le Chili s'est rapidement sécularisé : la part des catholiques est passée de 77 % en 1992 à 54 % en 2024, dans un contexte marqué par les scandales d'abus sexuels dans l'Église. Un adulte sur quatre se déclare désormais sans religion, tandis que les Églises évangéliques, surtout pentecôtistes, progressent régulièrement. L'Église et l'État sont séparés depuis la Constitution de 1925.",
  methodologyNote:
    "La part « Autre religion » est calculée par différence avec les trois catégories publiées par l'INE ; elle regroupe notamment les Témoins de Jéhovah, les mormons et les spiritualités autochtones.",
};
