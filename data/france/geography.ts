import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un territoire entre trois façades maritimes et deux grandes chaînes montagneuses",
  areaKm2: {
    value: 549_134,
    unit: "km²",
    year: 2024,
    source: "INSEE",
    sourceUrl: "https://www.insee.fr/fr/statistiques/1372998?sommaire=1373022",
    note: "France métropolitaine, superficie cadastrale.",
  },
  highestPoint: {
    name: "Mont Blanc",
    elevationM: 4805,
    source: "IGN",
    sourceUrl: "https://www.ign.fr/",
  },
  borderingCountries: [
    "Belgique",
    "Luxembourg",
    "Allemagne",
    "Suisse",
    "Italie",
    "Monaco",
    "Espagne",
    "Andorre",
  ],
  generalSource: { source: "IGN", sourceUrl: "https://www.ign.fr/" },
  climate:
    "Climat océanique à l'ouest, semi-continental à l'est, méditerranéen au sud, avec des nuances montagnardes dans les massifs.",
  summary:
    "Située à l'extrémité occidentale de l'Europe, la France métropolitaine est bordée par la Manche, l'Atlantique et la Méditerranée. Son relief associe grandes plaines, massifs anciens (Massif central, Vosges) et hautes montagnes (Alpes, Pyrénées).",
};
