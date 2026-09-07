import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Aliakmon",
    lengthKm: {
      value: 297,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Haliacmon",
      note: "Le plus long fleuve intégralement grec.",
    },
    source_location: "Mont Grammos, chaîne du Pinde",
    mouth: "Mer Égée (golfe Thermaïque)",
  },
  {
    name: "Achéloos",
    lengthKm: { value: 220, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Acheloos_(river)" },
    source_location: "Chaîne du Pinde",
    mouth: "Mer Ionienne",
  },
  {
    name: "Pinios (Thessalie)",
    lengthKm: { value: 205, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Pineios_(Thessaly)" },
    source_location: "Chaîne du Pinde",
    mouth: "Mer Égée, près de la vallée de Tempé",
  },
  {
    name: "Évros",
    lengthKm: {
      value: 200,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Evros_(river)",
      note: "Longueur sur le tronçon qui marque la frontière gréco-turque ; le fleuve prend sa source en Bulgarie (Maritsa/Evros, environ 480 km au total).",
    },
    source_location: "Massif du Rila (Bulgarie)",
    mouth: "Mer Égée (mer de Thrace)",
  },
];
