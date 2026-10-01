import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Chélif",
    lengthKm: {
      value: 700,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chelif_River",
      note: "Plus long cours d'eau du pays (environ 700 km). Son débit, très irrégulier, est largement prélevé pour l'irrigation de la vallée du Chélif, l'une des principales régions agricoles du nord-ouest.",
    },
    source_location: "Atlas saharien, au sud des Hauts-Plateaux ; il franchit le barrage de Boughezoul puis l'Atlas tellien",
    mouth: "Mer Méditerranée, au nord de Mostaganem",
  },
  {
    name: "Seybouse",
    lengthKm: {
      value: 225,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Seybouse",
      note: "L'un des rares cours d'eau pérennes du pays ; il irrigue la plaine de Guelma et la plaine d'Annaba.",
    },
    source_location: "Confluence d'oueds de la région de Guelma, dont l'oued Cherf",
    mouth: "Mer Méditerranée, près d'Annaba",
  },
  {
    name: "Soummam",
    lengthKm: {
      value: 65,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Soummam_River",
      note: "Courte mais au débit pérenne, elle draine un bassin d'environ 9 000 km² avec ses affluents (oued Sahel, oued Bou Sellam) ; sa vallée a accueilli le congrès du FLN de 1956.",
    },
    source_location: "Confluence de l'oued Sahel et de l'oued Bou Sellam, près d'Akbou (Kabylie)",
    mouth: "Mer Méditerranée, à Béjaïa",
  },
  {
    name: "Medjerda",
    lengthKm: {
      value: 460,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Medjerda",
      note: "Longueur totale, dont environ 350 km en Tunisie : seule la partie amont, autour de Souk Ahras, est algérienne.",
    },
    source_location: "Monts de la région de Souk Ahras (nord-est de l'Algérie)",
    mouth: "Mer Méditerranée, golfe de Tunis (Tunisie)",
  },
];
