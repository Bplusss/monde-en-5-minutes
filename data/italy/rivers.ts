import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Po",
    lengthKm: { value: 652, unit: "km", source: "Istituto Geografico Militare" },
    source_location: "Monviso (Alpes cottiennes)",
    mouth: "Mer Adriatique (delta du Pô)",
  },
  {
    name: "Adige",
    lengthKm: { value: 410, unit: "km", source: "Istituto Geografico Militare" },
    source_location: "Alpes, col de Resia (province de Bolzano)",
    mouth: "Mer Adriatique",
  },
  {
    name: "Tevere",
    lengthKm: { value: 405, unit: "km", source: "Istituto Geografico Militare" },
    source_location: "Mont Fumaiolo (Apennin toscan-romagnol)",
    mouth: "Mer Tyrrhénienne, près de Rome",
  },
];
