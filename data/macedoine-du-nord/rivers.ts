import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Vardar",
    lengthKm: { value: 301, unit: "km", source: "Wikipedia (géographie physique)", note: "Principal fleuve du pays, il traverse Skopje puis poursuit sa course en Grèce sous le nom d'Axios jusqu'à la mer Égée (388 km au total)." },
    source_location: "Près de Vrutok, non loin de Gostivar (ouest du pays)",
    mouth: "Mer Égée, près de Thessalonique (Grèce), sous le nom d'Axios",
  },
  {
    name: "Crni Drim (Drin noir)",
    lengthKm: { value: 52, unit: "km", source: "Wikipedia (géographie physique)", note: "Émissaire du lac d'Ohrid ; il rejoint le Drin blanc en Albanie pour former le Drin, qui se jette dans l'Adriatique." },
    source_location: "Lac d'Ohrid, à Struga",
    mouth: "Confluence avec le Drin blanc, en Albanie",
  },
];
