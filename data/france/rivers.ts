import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Loire",
    lengthKm: { value: 1006, unit: "km", source: "Sandre" },
    source_location: "Mont Gerbier-de-Jonc (Ardèche)",
    mouth: "Océan Atlantique",
  },
  {
    name: "Seine",
    lengthKm: { value: 776, unit: "km", source: "Sandre" },
    source_location: "Plateau de Langres (Côte-d'Or)",
    mouth: "La Manche",
  },
  {
    name: "Rhône",
    lengthKm: { value: 812, unit: "km", source: "Sandre" },
    source_location: "Glacier du Rhône (Alpes suisses)",
    mouth: "Mer Méditerranée",
  },
  {
    name: "Garonne",
    lengthKm: { value: 650, unit: "km", source: "Sandre" },
    source_location: "Val d'Aran (Espagne)",
    mouth: "Océan Atlantique (estuaire de la Gironde)",
  },
];
