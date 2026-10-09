import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Orénoque",
    lengthKm: {
      value: 2_140,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "L'un des plus grands fleuves du monde par son débit ; il décrit un vaste arc autour du massif des Guyanes et draine les quatre cinquièmes du pays.",
    },
    source_location: "Sierra Parima, à la frontière brésilienne (État d'Amazonas)",
    mouth: "Océan Atlantique, par un immense delta (État de Delta Amacuro)",
  },
  {
    name: "Caroní",
    lengthKm: {
      value: 952,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Ses barrages, dont celui de Guri, produisent l'essentiel de l'électricité du pays ; le Salto Ángel se jette dans l'un de ses affluents.",
    },
    source_location: "Tepuis du massif des Guyanes (État de Bolívar)",
    mouth: "Orénoque, à Ciudad Guayana",
  },
  {
    name: "Apure",
    lengthKm: {
      value: 1_038,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Principal fleuve des Llanos, il inonde chaque année de vastes plaines riches en oiseaux, caïmans et capybaras.",
    },
    source_location: "Confluence de l'Uribante et du Sarare, au pied des Andes",
    mouth: "Orénoque, près de Cabruta",
  },
  {
    name: "Meta",
    lengthKm: {
      value: 1_100,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Né en Colombie, il forme sur son cours inférieur une partie de la frontière entre les deux pays.",
    },
    source_location: "Cordillère orientale des Andes (Colombie)",
    mouth: "Orénoque, à Puerto Carreño",
  },
  {
    name: "Casiquiare",
    lengthKm: {
      value: 340,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Bras de l'Orénoque qui rejoint le rio Negro : il relie naturellement les bassins de l'Orénoque et de l'Amazone.",
    },
    source_location: "Orénoque (État d'Amazonas)",
    mouth: "Rio Negro (bassin de l'Amazone)",
  },
];
