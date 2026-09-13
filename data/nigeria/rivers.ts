import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Niger",
    lengthKm: {
      value: 4_184,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Niger_(fleuve)",
      note: "3ᵉ plus long fleuve d'Afrique, qui donne son nom au pays ; une large partie de son cours inférieur, jusqu'à son immense delta sur le golfe de Guinée, se situe en territoire nigérian.",
    },
    source_location: "Monts Loma, en Guinée",
    mouth: "Delta du Niger, golfe de Guinée (océan Atlantique)",
  },
  {
    name: "Bénoué",
    lengthKm: {
      value: 1_400,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Benue_River",
      note: "Principal affluent du Niger, avec lequel il conflue à Lokoja.",
    },
    source_location: "Plateau de l'Adamaoua, au Cameroun",
    mouth: "Confluence avec le Niger, à Lokoja (Nigeria)",
  },
  {
    name: "Kaduna",
    lengthKm: {
      value: 550,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Kaduna_River",
    },
    source_location: "Plateau de Jos (État du Plateau, Nigeria)",
    mouth: "Confluence avec le Niger, au sud de Bida",
  },
  {
    name: "Cross River",
    lengthKm: {
      value: 489,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cross_River_(Nigeria)",
    },
    source_location: "Hautes terres du Cameroun",
    mouth: "Golfe de Guinée (baie du Biafra), entre Oron et Calabar",
  },
];
