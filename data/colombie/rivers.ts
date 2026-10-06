import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Magdalena",
    lengthKm: {
      value: 1_528,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Principal fleuve du pays, il traverse du sud au nord la vallée entre les cordillères centrale et orientale ; son bassin concentre environ les trois quarts de la population colombienne.",
    },
    source_location: "Lagune de la Magdalena, massif colombien (département du Huila)",
    mouth: "Mer des Caraïbes, à Bocas de Ceniza près de Barranquilla",
  },
  {
    name: "Cauca",
    lengthKm: {
      value: 1_350,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Principal affluent du Magdalena, il arrose la vallée sucrière de Cali puis les régions caféières ; il alimente le barrage d'Hidroituango, le plus grand du pays.",
    },
    source_location: "Lagune del Buey, massif colombien (département du Cauca)",
    mouth: "Fleuve Magdalena, dans la dépression de Momposina",
  },
  {
    name: "Atrato",
    lengthKm: {
      value: 750,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "L'un des fleuves au plus fort débit du monde par rapport à la taille de son bassin, dans le Chocó, l'une des régions les plus pluvieuses de la planète ; il a été reconnu sujet de droits par la Cour constitutionnelle en 2016.",
    },
    source_location: "Cerro del Plateado, cordillère occidentale",
    mouth: "Golfe d'Urabá (mer des Caraïbes)",
  },
  {
    name: "Meta",
    lengthKm: {
      value: 1_110,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Grand fleuve des Llanos, affluent de l'Orénoque ; sur une partie de son cours, il marque la frontière avec le Venezuela.",
    },
    source_location: "Cordillère orientale, au sud-est de Bogota",
    mouth: "Orénoque, à Puerto Carreño (frontière vénézuélienne)",
  },
  {
    name: "Caquetá",
    lengthKm: {
      value: 2_280,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Longueur totale jusqu'à l'Amazone, dont environ la moitié en Colombie ; il prend au Brésil le nom de Japurá.",
    },
    source_location: "Páramo de Peñas Blancas, massif colombien",
    mouth: "Amazone (sous le nom de Japurá), au Brésil",
  },
];
