import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Sociografía religiosa de Venezuela (enquête)",
  year: 2024,
  ageScope: "Adultes",
  source: "Centro Gumilla",
  sourceUrl: "https://gumilla.org/wp-content/uploads/2025/05/1_-Resumen-ejecutivo-Sociografia-FINAL-JULIO.pdf",
  points: [
    { label: "Catholiques", sharePercent: 63.0 },
    { label: "Évangéliques et protestants", sharePercent: 13.3 },
    { label: "Autres chrétiens", sharePercent: 8.2 },
    { label: "Sans religion", sharePercent: 7.0 },
  ],
  summary:
    "Le catholicisme, apporté par la colonisation espagnole, reste la religion majoritaire, et les fêtes religieuses, comme celle de la Divina Pastora à Barquisimeto, rassemblent des foules immenses. Les Églises évangéliques progressent fortement, surtout dans les quartiers populaires. Le culte syncrétique de María Lionza, qui mêle traditions autochtones, africaines et catholiques, est pratiqué par de nombreux Vénézuéliens, souvent en parallèle du catholicisme. L'Église catholique a été l'une des voix critiques du pouvoir chaviste.",
  methodologyNote:
    "Le Venezuela ne publie pas de statistiques officielles sur la religion, et les estimations varient fortement : l'enquête Latinobarómetro de 2023 comptait 48 % de catholiques et 31 % d'évangéliques.",
};
