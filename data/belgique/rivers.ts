import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Escaut",
    lengthKm: { value: 355, unit: "km", source: "Wikipédia (données hydrographiques)", note: "Longueur totale ; le bassin belge de l'Escaut couvre près de la moitié du territoire national." },
    source_location: "Gouy (Aisne, France)",
    mouth: "Mer du Nord, entre Breskens et Flessingue (Pays-Bas)",
  },
  {
    name: "Meuse",
    lengthKm: { value: 183, unit: "km", source: "Wikipédia (données hydrographiques)", note: "Portion belge ; 950 km au total depuis la France jusqu'aux Pays-Bas." },
    source_location: "Le Châtelet-sur-Meuse (Haute-Marne, France)",
    mouth: "Mer du Nord, via le Haringvliet (Pays-Bas)",
  },
];
