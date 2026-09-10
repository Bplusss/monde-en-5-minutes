import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Vltava",
    lengthKm: { value: 430, unit: "km", source: "Wikipedia (géographie physique)", note: "Le plus long fleuve entièrement tchèque ; traverse Prague." },
    source_location: "Šumava (Forêt de Bohême)",
    mouth: "Elbe, à Mělník",
  },
  {
    name: "Labe (Elbe)",
    lengthKm: { value: 370, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours en territoire tchèque ; longueur totale : 1 094 km." },
    source_location: "Krkonoše (Monts des Géants)",
    mouth: "Mer du Nord, à Cuxhaven (Allemagne)",
  },
  {
    name: "Morava",
    lengthKm: { value: 284, unit: "km", source: "Wikipedia (géographie physique)", note: "Donne son nom à la région historique de Moravie ; longueur totale : 354 km." },
    source_location: "Monts Kralický Sněžník",
    mouth: "Danube, près de Devín (Slovaquie)",
  },
];
