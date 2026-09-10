import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et du logement 2011 (dernière enquête incluant la religion)",
  year: 2011,
  ageScope: "Population totale résidente",
  source: "Statistikaamet (Office estonien de la statistique)",
  sourceUrl: "https://www.stat.ee/en/find-statistics/statistics-theme/population/religion",
  points: [
    { label: "Sans religion", sharePercent: 54.1 },
    { label: "Orthodoxes", sharePercent: 16.2 },
    { label: "Luthériens", sharePercent: 9.9 },
    { label: "Autres religions", sharePercent: 3.6 },
    { label: "Non déclaré", sharePercent: 16.2 },
  ],
  summary:
    "L'Estonie est régulièrement citée parmi les pays les moins religieux au monde : plus de la moitié de la population se déclare sans appartenance religieuse. La minorité orthodoxe, en grande partie composée de russophones, dépasse désormais numériquement les luthériens, dont l'Église a historiquement structuré l'identité estonienne mais a fortement décliné depuis la période soviétique.",
  methodologyNote:
    "La religion n'est demandée que lors des recensements traditionnels par entretien ; l'Estonie étant passée à un recensement fondé sur les registres administratifs en 2021, ces données de 2011 restent la source la plus récente et complète sur ce sujet.",
};
