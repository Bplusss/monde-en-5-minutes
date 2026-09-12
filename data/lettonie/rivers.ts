import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Daugava",
    lengthKm: {
      value: 1_020,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Daugava",
      note: "Dont 352 km en territoire letton ; le principal fleuve du pays, bien qu'il prenne sa source hors de Lettonie.",
    },
    source_location: "Collines de Valdaï (Russie)",
    mouth: "Golfe de Riga, à Riga",
  },
  {
    name: "Gauja",
    lengthKm: {
      value: 452,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Gauja",
      note: "Seul grand cours d'eau letton à prendre sa source et se jeter entièrement en Lettonie.",
    },
    source_location: "Hautes terres de Vidzeme",
    mouth: "Golfe de Riga, à Carnikava",
  },
  {
    name: "Venta",
    lengthKm: {
      value: 346,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Venta_(river)",
      note: "Dont 178 km en Lettonie.",
    },
    source_location: "Près de Kuršėnai (Lituanie)",
    mouth: "Mer Baltique, à Ventspils",
  },
  {
    name: "Lielupe",
    lengthKm: {
      value: 119,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Lielupe",
      note: "Longueur du cours principal, entièrement letton ; ses deux affluents formateurs, la Mūsa et la Mēmele, prennent leur source en Lituanie.",
    },
    source_location: "Confluence de la Mūsa et de la Mēmele, près de Bauska",
    mouth: "Golfe de Riga, à Jūrmala",
  },
];
