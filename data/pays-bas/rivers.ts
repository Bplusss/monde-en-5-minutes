import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Rhin",
    lengthKm: {
      value: 1_233,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Rhine",
      note: "Longueur totale du fleuve ; seule une partie de son cours traverse les Pays-Bas, où il se divise en plusieurs bras (Waal, Nederrijn, IJssel).",
    },
    source_location: "Alpes suisses",
    mouth: "Mer du Nord, via le delta Rhin-Meuse-Escaut (Pays-Bas)",
  },
  {
    name: "Meuse",
    lengthKm: {
      value: 925,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Meuse",
      note: "Longueur totale du fleuve ; rejoint le delta Rhin-Meuse-Escaut aux Pays-Bas.",
    },
    source_location: "Pouilly-en-Bassigny (France)",
    mouth: "Mer du Nord, via le delta Rhin-Meuse-Escaut",
  },
  {
    name: "Waal",
    lengthKm: { value: 80, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Waal_(river)" },
    source_location: "Millingen aan de Rijn (bras principal du Rhin)",
    mouth: "Rejoint la Meuse (Boven Merwede) près de Woudrichem",
  },
];
