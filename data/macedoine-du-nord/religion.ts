import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population",
  year: 2021,
  ageScope: "Population totale",
  source: "Office national de la statistique de Macédoine du Nord",
  sourceUrl: "https://www.stat.gov.mk/",
  points: [
    { label: "Orthodoxes (Église macédonienne)", sharePercent: 46.1 },
    { label: "Musulmans", sharePercent: 32.2 },
    { label: "Autres chrétiens et catholiques", sharePercent: 6.7 },
    { label: "Non déclaré ou autre", sharePercent: 15.0 },
  ],
  summary:
    "L'orthodoxie, portée par l'Église orthodoxe macédonienne autoproclamée autocéphale en 1967 (reconnue par les autres Églises orthodoxes seulement en 2022), reste la religion majoritaire, suivie par l'islam, largement pratiqué au sein de la minorité albanaise et par une partie de la population macédonienne slave de l'ouest du pays.",
  methodologyNote:
    "Ces chiffres proviennent du recensement de 2021, le premier depuis 2002 ; une part significative de la population n'a pas déclaré d'appartenance religieuse.",
};
