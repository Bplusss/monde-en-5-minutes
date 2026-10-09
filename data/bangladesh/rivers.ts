import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Padma (Gange)",
    lengthKm: {
      value: 356,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Nom du Gange au Bangladesh, depuis la frontière indienne jusqu'à sa confluence avec la Meghna ; le pont de la Padma, long de 6,15 km, l'enjambe depuis 2022.",
    },
    source_location: "Frontière indienne (le Gange naît dans l'Himalaya indien)",
    mouth: "Meghna, à Chandpur",
  },
  {
    name: "Jamuna (Brahmapoutre)",
    lengthKm: {
      value: 205,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Cours principal du Brahmapoutre au Bangladesh, large de plusieurs kilomètres et parsemé d'îles de sable mouvantes, les « chars ».",
    },
    source_location: "Frontière indienne (le Brahmapoutre naît au Tibet)",
    mouth: "Padma, à Goalundo",
  },
  {
    name: "Meghna",
    lengthKm: {
      value: 270,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Haute Meghna (environ 130 km) et basse Meghna (environ 140 km) ; après avoir reçu la Padma, elle forme l'un des plus puissants estuaires du monde.",
    },
    source_location: "Confluence de la Surma et de la Kushiyara (Nord-Est)",
    mouth: "Golfe du Bengale",
  },
  {
    name: "Teesta",
    lengthKm: {
      value: 414,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Venue du Sikkim, elle irrigue le nord du pays ; le partage de ses eaux, retenues en amont par l'Inde, est un contentieux ancien entre les deux pays.",
    },
    source_location: "Himalaya (Sikkim, Inde)",
    mouth: "Jamuna (Brahmapoutre), dans le district de Gaibandha",
  },
];
