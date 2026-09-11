import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Dniepr (Dnipro)",
    lengthKm: { value: 2_201, unit: "km", source: "Wikipedia (géographie physique)", note: "Le plus long fleuve du pays, qui traverse Kyiv et coupe l'Ukraine du nord au sud ; l'un des plus grands fleuves d'Europe." },
    source_location: "Collines de Valdaï (Russie)",
    mouth: "Mer Noire, près de Kherson",
  },
  {
    name: "Dniestr",
    lengthKm: { value: 1_362, unit: "km", source: "Wikipedia (géographie physique)", note: "Prend sa source dans les Carpates ukrainiennes avant de traverser la Moldavie." },
    source_location: "Carpates ukrainiennes",
    mouth: "Mer Noire, près d'Odessa (Ukraine)",
  },
  {
    name: "Boug méridional (Pivdennyi Bouh)",
    lengthKm: { value: 806, unit: "km", source: "Wikipedia (géographie physique)", note: "Entièrement ukrainien, il traverse Vinnytsia avant de rejoindre l'estuaire commun avec le Dniepr près de Mykolaïv." },
    source_location: "Plateau de Podolie, région de Khmelnytskyi",
    mouth: "Estuaire du Dniepr-Bouh, près de Mykolaïv",
  },
  {
    name: "Desna",
    lengthKm: { value: 1_130, unit: "km", source: "Wikipedia (géographie physique)", note: "Principal affluent gauche du Dniepr, qu'il rejoint juste en amont de Kyiv." },
    source_location: "Région de Smolensk (Russie)",
    mouth: "Confluence avec le Dniepr, près de Kyiv",
  },
];
