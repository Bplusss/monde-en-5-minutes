import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un des plus petits États du monde, perché sur le mont Titano et entièrement enclavé en Italie",
  areaKm2: {
    value: 61.19,
    unit: "km²",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/San_Marino",
    note: "Cinquième plus petit État souverain du monde.",
  },
  highestPoint: {
    name: "Mont Titano",
    elevationM: 749,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/San_Marino",
  },
  borderingCountries: ["Italie"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/San_Marino" },
  climate:
    "Climat subtropical humide de type méditerranéen tempéré par l'altitude du mont Titano : étés chauds, hivers doux à frais, précipitations réparties sur l'année (environ 750 mm).",
  summary:
    "Entièrement enclavée au cœur de l'Italie, entre les régions d'Émilie-Romagne et des Marches, à une quinzaine de kilomètres de la côte adriatique et de Rimini, la République de Saint-Marin s'étend sur les pentes et le sommet du mont Titano, dont les trois cimes portent les tours fortifiées emblématiques du pays. Avec le Vatican (également enclavé en Italie) et le Lesotho (enclavé en Afrique du Sud), Saint-Marin fait partie des trois seuls pays au monde entièrement entourés par un unique voisin, sans aucun accès à la mer.",
};
