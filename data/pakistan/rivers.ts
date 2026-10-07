import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Indus",
    lengthKm: {
      value: 3_180,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Il traverse tout le pays du nord au sud ; un traité de 1960 avec l'Inde en partage les eaux et celles de ses affluents, mais l'Inde l'a suspendu en avril 2025.",
    },
    source_location: "Plateau tibétain, près du mont Kailash (Chine)",
    mouth: "Mer d'Arabie, par un vaste delta au sud-est de Karachi",
  },
  {
    name: "Jhelum",
    lengthKm: {
      value: 725,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Il arrose la vallée du Cachemire avant d'alimenter le barrage de Mangla, l'un des plus grands du pays.",
    },
    source_location: "Source de Verinag, vallée du Cachemire (Inde)",
    mouth: "Chenab, à Trimmu (Pendjab)",
  },
  {
    name: "Chenab",
    lengthKm: {
      value: 974,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Il recueille successivement le Jhelum, le Ravi et le Sutlej, formant le Panjnad qui rejoint l'Indus.",
    },
    source_location: "Himalaya, dans l'Himachal Pradesh (Inde)",
    mouth: "Indus, par le Panjnad, près d'Uch Sharif",
  },
  {
    name: "Ravi",
    lengthKm: {
      value: 720,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "La rivière de Lahore ; ses eaux étant attribuées à l'Inde par le traité de 1960, son lit est souvent presque à sec côté pakistanais.",
    },
    source_location: "Himalaya, dans l'Himachal Pradesh (Inde)",
    mouth: "Chenab, en amont de Multan",
  },
  {
    name: "Sutlej",
    lengthKm: {
      value: 1_450,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Le plus long des cinq fleuves du Pendjab ; il forme une partie de la frontière avec l'Inde.",
    },
    source_location: "Lac Rakshastal, au Tibet (Chine)",
    mouth: "Chenab, où il forme le Panjnad",
  },
];
