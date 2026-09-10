import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Nemunas (Niémen)",
    lengthKm: {
      value: 937,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Neman_River",
      note: "Le plus long fleuve du pays et le principal cours d'eau lituanien, bien qu'il prenne sa source hors de Lituanie.",
    },
    source_location: "Près d'Ouzda, au sud-ouest de Minsk (Biélorussie)",
    mouth: "Lagune de Courlande (mer Baltique), près de Šilutė",
  },
  {
    name: "Neris (Vilia)",
    lengthKm: { value: 510, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Neris" },
    source_location: "Nord de la Biélorussie",
    mouth: "Confluence avec le Nemunas, à Kaunas",
  },
  {
    name: "Šventoji (affluent de la Neris)",
    lengthKm: {
      value: 246,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/%C5%A0ventoji_(Neris)",
      note: "Le plus long cours d'eau entièrement lituanien.",
    },
    source_location: "Lac Samanis, parc régional de Gražutė",
    mouth: "Confluence avec la Neris, près de Jonava",
  },
];
