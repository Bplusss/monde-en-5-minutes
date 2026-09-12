import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Tara",
    lengthKm: { value: 143, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Tara_(Drina)", note: "Creuse le canyon le plus profond d'Europe (environ 1 300 m) au cœur du massif du Durmitor." },
    source_location: "Monts Komovi (nord-est du Monténégro), au confluent des rivières Opasnica et Veruša",
    mouth: "Confluence avec la Piva, à la frontière avec la Bosnie-Herzégovine, pour former la Drina",
  },
  {
    name: "Morača",
    lengthKm: { value: 99.5, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Mora%C4%8Da" },
    source_location: "Région montagneuse du nord, près d'Andrijevica",
    mouth: "Lac de Skadar, près de Podgorica",
  },
  {
    name: "Lim",
    lengthKm: { value: 219, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Lim_(river)", note: "Traverse aussi l'Albanie, la Serbie et la Bosnie-Herzégovine ; sa source est proche de celle de la Tara." },
    source_location: "Sous le mont Maglić, région de Kuči (est du Monténégro, près de la frontière albanaise)",
    mouth: "Confluence avec la Drina, en Serbie",
  },
];
