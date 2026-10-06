import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Nil Bleu (Abay)",
    lengthKm: {
      value: 1_450,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Longueur jusqu'à sa confluence avec le Nil Blanc ; il fournit l'essentiel des eaux du Nil en saison des pluies et alimente le Grand barrage de la Renaissance, près de la frontière soudanaise.",
    },
    source_location: "Lac Tana (région Amhara)",
    mouth: "Confluence avec le Nil Blanc à Khartoum (Soudan)",
  },
  {
    name: "Awash",
    lengthKm: {
      value: 1_200,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Fleuve entièrement éthiopien qui n'atteint jamais la mer : il se perd dans les lacs salés de la dépression de l'Afar ; sa vallée a livré de nombreux fossiles d'hominidés, dont Lucy.",
    },
    source_location: "Hauts plateaux à l'ouest d'Addis-Abeba",
    mouth: "Lac Abbé, à la frontière de Djibouti (bassin endoréique)",
  },
  {
    name: "Omo",
    lengthKm: {
      value: 760,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Principal affluent du lac Turkana ; sa basse vallée, berceau de peuples pastoraux, est inscrite au patrimoine mondial pour ses fossiles, et le barrage Gibe III régule son cours.",
    },
    source_location: "Hauts plateaux du centre (Oromia)",
    mouth: "Lac Turkana, à la frontière du Kenya",
  },
  {
    name: "Tekezé",
    lengthKm: {
      value: 608,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Il creuse l'un des canyons les plus profonds d'Afrique et marque une partie de la frontière avec l'Érythrée ; il porte au Soudan le nom de Setit.",
    },
    source_location: "Hauts plateaux de Lasta, près de Lalibela",
    mouth: "Rivière Atbara, au Soudan",
  },
  {
    name: "Shebele",
    lengthKm: {
      value: 1_000,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Il traverse la région Somali avant d'entrer en Somalie, où il se perd le plus souvent dans les marais avant d'atteindre le Djouba.",
    },
    source_location: "Monts Bale (Oromia)",
    mouth: "Marais près du fleuve Djouba (Somalie)",
  },
];
