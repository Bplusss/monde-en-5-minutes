import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Severn",
    lengthKm: { value: 354, unit: "km", source: "Wikipedia (infobox géographique)", note: "Le plus long cours d'eau du Royaume-Uni." },
    source_location: "Plynlimon, Powys (Pays de Galles)",
    mouth: "Estuaire de la Severn, canal de Bristol",
  },
  {
    name: "Tamise",
    lengthKm: { value: 346, unit: "km", source: "Wikipedia (infobox géographique)" },
    source_location: "Thames Head, Gloucestershire",
    mouth: "Estuaire de la Tamise, mer du Nord",
  },
];
