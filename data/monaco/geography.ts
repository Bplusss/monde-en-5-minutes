import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le deuxième plus petit État du monde, serré entre les Alpes et la Méditerranée",
  areaKm2: {
    value: 2.1,
    unit: "km²",
    source: "IMSEE (Institut monégasque de la statistique et des études économiques)",
    sourceUrl: "https://www.imsee.mc/",
    note: "Superficie en légère croissance grâce à plusieurs programmes de gain de terrain sur la mer (Fontvieille dans les années 1970, quartier de Le Portier inauguré fin 2024).",
  },
  highestPoint: {
    name: "Chemin des Révoires (contreforts du mont Agel)",
    elevationM: 161,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Monaco",
  },
  borderingCountries: ["France"],
  generalSource: { source: "IMSEE / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Monaco" },
  climate:
    "Climat méditerranéen aux hivers doux et aux étés chauds et secs, adouci par la proximité immédiate de la mer et abrité des vents du nord par les contreforts alpins qui surplombent la principauté.",
  summary:
    "Enclavée entre les Alpes-Maritimes françaises et la mer Méditerranée, sur un territoire d'à peine deux kilomètres carrés, Monaco est le deuxième plus petit État souverain du monde après le Vatican — mais de très loin le plus densément peuplé. Entièrement urbanisée, la principauté a régulièrement grignoté la mer par des remblais pour compenser l'absence totale de marge d'expansion sur ses frontières terrestres.",
};
