import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Rio Bravo",
    lengthKm: {
      value: 3_051,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Rio_Grande",
      note: "Appelé Rio Grande aux États-Unis, qui en partagent le cours et le nom déjà retenu pour ce pays sur ce site ; long de ses sources dans les montagnes du Colorado jusqu'au golfe du Mexique.",
    },
    source_location: "Montagnes San Juan, Colorado (États-Unis)",
    mouth: "Golfe du Mexique",
  },
  {
    name: "Usumacinta",
    lengthKm: { value: 1_000, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Usumacinta_River" },
    source_location: "Confluence des rivières Pasión et Chixoy, Petén (Guatemala)",
    mouth: "Golfe du Mexique, delta partagé avec le Grijalva (Tabasco)",
  },
  {
    name: "Lerma-Santiago",
    lengthKm: {
      value: 965,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/R%C3%ADo_Grande_de_Santiago",
      note: "Système formé par le Lerma (750 km), qui se jette dans le lac de Chapala, puis prolongé par le Río Grande de Santiago (433 km) jusqu'au Pacifique.",
    },
    source_location: "Lagunes de Lerma, près de Toluca (État de Mexico)",
    mouth: "Océan Pacifique, près de San Blas (Nayarit)",
  },
  {
    name: "Balsas",
    lengthKm: { value: 771, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Balsas_River" },
    source_location: "Confluence des rivières San Martín et Zahuapan (État de Puebla)",
    mouth: "Océan Pacifique, près de Lázaro Cárdenas (Michoacán)",
  },
  {
    name: "Grijalva",
    lengthKm: { value: 480, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Grijalva_River" },
    source_location: "Sierra de los Cuchumatanes, Huehuetenango (Guatemala)",
    mouth: "Golfe du Mexique, delta partagé avec l'Usumacinta (Tabasco)",
  },
];
