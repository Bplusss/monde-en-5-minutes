import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimation externe (absence de recensement religieux officiel)",
  year: 2020,
  ageScope: "Population totale résidente (estimation)",
  source: "Association of Religion Data Archives (ARDA) / Wikipedia",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_San_Marino",
  points: [
    { label: "Catholiques", sharePercent: 85.5 },
    { label: "Autres chrétiens", sharePercent: 6.0 },
    { label: "Sans religion", sharePercent: 7.6 },
    { label: "Autres religions", sharePercent: 0.9 },
  ],
  summary:
    "Le catholicisme domine très largement à Saint-Marin, bien qu'il ne soit religion d'État ni consacré comme tel par la Déclaration des droits des citoyens de 1974, qui garantit la liberté de culte. Comme dans les autres micro-États catholiques d'Europe, l'appartenance déclarée dépasse vraisemblablement largement la pratique religieuse effective.",
  methodologyNote:
    "Saint-Marin ne mène pas de recensement religieux officiel ; ces chiffres proviennent d'une estimation externe (ARDA) et doivent être interprétés avec prudence.",
};
