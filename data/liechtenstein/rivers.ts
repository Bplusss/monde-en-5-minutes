import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Rhin",
    lengthKm: {
      value: 1_233,
      unit: "km",
      source: "Wikipedia (géographie du Liechtenstein)",
      sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Liechtenstein",
      note: "Longueur totale du fleuve, de sa source aux Grisons (Suisse) à son embouchure en mer du Nord ; il forme la totalité des 41 km de frontière occidentale du Liechtenstein avec la Suisse.",
    },
    source_location: "Grisons (confluence des Rhin antérieur et postérieur, Suisse)",
    mouth: "Mer du Nord (hors du Liechtenstein)",
  },
  {
    name: "Samina",
    lengthKm: {
      value: 17,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Samina_(river)",
      note: "Dont environ 12 km au Liechtenstein (Saminatal) et 5 km en Autriche ; deuxième cours d'eau du pays par la longueur.",
    },
    source_location: "Massif du Rätikon, au-dessus de Steg (Liechtenstein)",
    mouth: "Ill, à Feldkirch (Autriche) — elle-même affluente du Rhin",
  },
];
