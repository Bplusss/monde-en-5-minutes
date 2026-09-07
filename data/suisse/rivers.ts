import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Rhin",
    lengthKm: { value: 376, unit: "km", source: "Dictionnaire historique de la Suisse (HLS)", sourceUrl: "https://hls-dhs-dss.ch/fr/articles/008768/", note: "De la source à Bâle ; 1 230 km jusqu'à son embouchure en mer du Nord." },
    source_location: "Grisons (confluence des Rhin antérieur et postérieur)",
    mouth: "Mer du Nord (hors de Suisse)",
  },
  {
    name: "Aar (Aare)",
    lengthKm: { value: 295, unit: "km", source: "Encyclopédie Larousse", sourceUrl: "https://www.larousse.fr/encyclopedie/riviere-lac/Aar/103687", note: "Cours d'eau le plus long entièrement en Suisse ; affluent du Rhin." },
    source_location: "Glacier de Grimsel",
    mouth: "Rhin, près de Coblence (Suisse)",
  },
  {
    name: "Rhône",
    lengthKm: { value: 290, unit: "km", source: "Encyclopédie Larousse", sourceUrl: "https://www.larousse.fr/encyclopedie/riviere-lac/Rh%C3%B4ne/140848", note: "Portion suisse ; 812 km au total jusqu'à la Méditerranée." },
    source_location: "Glacier du Rhône (massif de l'Aar-Gothard)",
    mouth: "Lac Léman, puis France",
  },
];
