import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Statistiques des communautés religieuses (fowid)",
  year: 2024,
  ageScope: "Ensemble de la population, fin d'année",
  source: "fowid — Forschungsgruppe Weltanschauungen in Deutschland",
  sourceUrl: "https://fowid.de/meldung/religionszugehoerigkeiten-2024",
  points: [
    { label: "Sans confession", sharePercent: 46.8 },
    { label: "Catholiques", sharePercent: 23.7 },
    { label: "Protestants (EKD)", sharePercent: 21.5 },
    { label: "Musulmans", sharePercent: 3.9 },
    { label: "Autres communautés religieuses", sharePercent: 4.1 },
  ],
  summary:
    "Fin 2024, pour la première fois, les personnes sans confession (46,8 %) dépassent en nombre les membres des Églises catholique (23,7 %) et protestante (21,5 %) réunies, d'après les décomptes des communautés religieuses elles-mêmes.",
  methodologyNote:
    "Ces chiffres proviennent des registres officiels des Églises et communautés religieuses (appartenance légale, notamment via l'impôt cultuel), non d'une enquête déclarative sur la croyance ou la pratique — la pratique religieuse effective est nettement plus faible.",
};
