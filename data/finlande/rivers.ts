import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Kemijoki",
    lengthKm: { value: 550, unit: "km", source: "Wikipedia (géographie physique)", note: "Le plus long fleuve de Finlande, entièrement en Laponie." },
    source_location: "Monts de Laponie, près de la frontière russe",
    mouth: "Golfe de Botnie, à Kemi",
  },
  {
    name: "Oulujoki",
    lengthKm: { value: 107, unit: "km", source: "Wikipedia (géographie physique)", note: "Très aménagé pour l'hydroélectricité, il draine le lac Oulujärvi." },
    source_location: "Lac Oulujärvi",
    mouth: "Golfe de Botnie, à Oulu",
  },
  {
    name: "Vuoksi",
    lengthKm: { value: 162, unit: "km", source: "Wikipedia (géographie physique)", note: "Draine le lac Saimaa, le plus grand du pays, vers le lac Ladoga en Russie." },
    source_location: "Lac Saimaa",
    mouth: "Lac Ladoga (Russie)",
  },
];
