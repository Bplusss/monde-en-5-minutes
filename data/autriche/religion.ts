import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement par registres (Registerzählung)",
  year: 2021,
  ageScope: "Ensemble de la population",
  source: "Statistik Austria",
  sourceUrl: "https://www.statistik.at/",
  points: [
    { label: "Catholiques", sharePercent: 55.2 },
    { label: "Sans confession", sharePercent: 22.4 },
    { label: "Musulmans", sharePercent: 8.3 },
    { label: "Orthodoxes", sharePercent: 4.9 },
    { label: "Protestants", sharePercent: 3.8 },
    { label: "Autres chrétiens", sharePercent: 4.3 },
    { label: "Autres", sharePercent: 1.1 },
  ],
  summary:
    "L'Église catholique reste la première appartenance religieuse déclarée en Autriche (55,2 % en 2021), même si sa part recule au fil des recensements. Les personnes sans confession forment le deuxième groupe (22,4 %).",
  methodologyNote:
    "Ces chiffres proviennent du recensement par registres administratifs de 2021 (Registerzählung), qui croise les données des registres religieux et démographiques du pays, non d'une enquête déclarative sur la pratique.",
};
