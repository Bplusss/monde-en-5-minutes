import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Save (Sava)",
    lengthKm: { value: 331, unit: "km", source: "Wikipedia (géographie physique)", note: "Marque une grande partie de la frontière nord avec la Croatie." },
    source_location: "Frontière avec la Croatie et la Slovénie (à l'ouest)",
    mouth: "Confluence avec le Danube, à Belgrade (Serbie)",
  },
  {
    name: "Drina",
    lengthKm: { value: 346, unit: "km", source: "Wikipedia (géographie physique)", note: "Marque une grande partie de la frontière est avec la Serbie ; rendue célèbre par le roman d'Ivo Andrić « Un pont sur la Drina »." },
    source_location: "Monténégro, à la confluence de la Tara et de la Piva",
    mouth: "Confluence avec la Save, près de Bosanska Rača",
  },
  {
    name: "Bosna",
    lengthKm: { value: 273, unit: "km", source: "Wikipedia (géographie physique)", note: "Fleuve qui donne son nom au pays ; il traverse Sarajevo, Zenica et Doboj." },
    source_location: "Source de la Bosna, près de Sarajevo (Ilidža)",
    mouth: "Confluence avec la Save, près de Šamac",
  },
];
