import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Glomma",
    lengthKm: { value: 623, unit: "km", source: "Store norske leksikon", sourceUrl: "https://snl.no/" },
    source_location: "Aursunden, région de Røros",
    mouth: "Oslofjord, à Fredrikstad",
  },
  {
    name: "Tana",
    lengthKm: { value: 361, unit: "km", source: "Store norske leksikon", sourceUrl: "https://snl.no/", note: "Fleuve frontalier avec la Finlande sur une partie de son cours." },
    source_location: "Plateau de Finnmark",
    mouth: "Tanafjorden (mer de Barents)",
  },
  {
    name: "Numedalslågen",
    lengthKm: { value: 356, unit: "km", source: "Store norske leksikon", sourceUrl: "https://snl.no/" },
    source_location: "Massif de Hardangervidda",
    mouth: "Skagerrak, à Larvik",
  },
];
