import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement national de la population et des logements 2021",
  year: 2021,
  ageScope: "Ensemble de la population",
  source: "GUS — Główny Urząd Statystyczny",
  sourceUrl: "https://stat.gov.pl/en/",
  points: [
    { label: "Catholiques", sharePercent: 71.3 },
    { label: "Non déclaré", sharePercent: 20.6 },
    { label: "Sans religion", sharePercent: 6.9 },
    { label: "Autres chrétiens", sharePercent: 1.0 },
    { label: "Autres religions", sharePercent: 0.2 },
  ],
  summary:
    "Le catholicisme reste la confession très largement majoritaire en Pologne (71,3 % en 2021), en recul net par rapport à 2011 (87,6 %). La part de personnes n'ayant pas déclaré d'appartenance religieuse (20,6 %) a fortement progressé sur la même période.",
  methodologyNote:
    "Recensement national de 2021 (question facultative sur l'appartenance religieuse) : la forte proportion de non-déclarations invite à la prudence dans l'interprétation des évolutions d'une décennie à l'autre.",
};
