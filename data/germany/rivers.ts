import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Rhin",
    lengthKm: { value: 865, unit: "km", source: "Umweltbundesamt", note: "Portion allemande ; 1 233 km au total." },
    source_location: "Alpes suisses",
    mouth: "Mer du Nord (aux Pays-Bas)",
  },
  {
    name: "Danube",
    lengthKm: { value: 647, unit: "km", source: "Umweltbundesamt", note: "Portion allemande ; 2 857 km au total." },
    source_location: "Donaueschingen (Forêt-Noire)",
    mouth: "Mer Noire",
  },
  {
    name: "Elbe",
    lengthKm: { value: 727, unit: "km", source: "Umweltbundesamt", note: "Portion allemande ; 1 094 km au total." },
    source_location: "Monts des Géants (République tchèque)",
    mouth: "Mer du Nord, près de Cuxhaven",
  },
];
