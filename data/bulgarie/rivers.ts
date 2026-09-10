import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Danube (Dounav)",
    lengthKm: {
      value: 2_850,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Danube",
      note: "Longueur totale du fleuve ; environ 470 km forment la frontière entre la Bulgarie et la Roumanie.",
    },
    source_location: "Donaueschingen, Forêt-Noire (Allemagne)",
    mouth: "Mer Noire, via le delta du Danube (Roumanie/Ukraine)",
  },
  {
    name: "Maritsa (Evros)",
    lengthKm: {
      value: 480,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Maritsa",
      note: "Environ 309 km de son cours se trouvent en territoire bulgare ; le fleuve marque ensuite la frontière entre la Grèce et la Turquie sous le nom d'Évros.",
    },
    source_location: "Massif du Rila, lacs de Maritchini (Bulgarie)",
    mouth: "Mer Égée, près d'Enez (Turquie)",
  },
  {
    name: "Iskar",
    lengthKm: {
      value: 368,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Iskar_(river)",
      note: "Le plus long fleuve entièrement bulgare.",
    },
    source_location: "Massif du Rila",
    mouth: "Danube, près des villages de Baïkal et de Guiguen (province de Pleven)",
  },
  {
    name: "Struma",
    lengthKm: {
      value: 415,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Struma_(river)",
      note: "Environ 290 km de son cours se trouvent en territoire bulgare.",
    },
    source_location: "Mont Vitocha, près de Sofia",
    mouth: "Mer Égée (golfe Strymonique, Grèce)",
  },
];
