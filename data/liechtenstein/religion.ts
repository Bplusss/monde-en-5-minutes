import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Registre de la population",
  year: 2020,
  ageScope: "Population totale résidente",
  source: "Amt für Statistik Liechtenstein",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Liechtenstein",
  points: [
    { label: "Catholiques", sharePercent: 69.6 },
    { label: "Protestants réformés", sharePercent: 8.1 },
    { label: "Autres chrétiens", sharePercent: 1.8 },
    { label: "Musulmans", sharePercent: 6.0 },
    { label: "Sans religion", sharePercent: 9.6 },
    { label: "Non déclaré ou autre", sharePercent: 4.9 },
  ],
  summary:
    "Le catholicisme, religion historique et constitutionnellement reconnue comme celle de l'État, reste très largement majoritaire, même si sa part recule au fil des décennies au profit des personnes sans religion et d'une minorité musulmane liée à l'immigration de travail, notamment originaire des Balkans.",
  methodologyNote:
    "Le Liechtenstein ne réalise pas de recensement classique : l'appartenance religieuse est enregistrée administrativement dans le registre de la population plutôt qu'estimée par sondage.",
};
