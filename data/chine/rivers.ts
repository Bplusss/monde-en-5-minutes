import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Yangtsé (Chang Jiang)",
    lengthKm: {
      value: 6_300,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Plus long fleuve d'Asie ; son bassin concentre environ un tiers de la population chinoise. Le barrage des Trois-Gorges, sur son cours moyen, est le plus puissant ouvrage hydroélectrique au monde.",
    },
    source_location: "Plateau tibétain, glacier de Jianggudiru (massif du Tanggula, province du Qinghai)",
    mouth: "Mer de Chine orientale, près de Shanghai",
  },
  {
    name: "Fleuve Jaune (Huang He)",
    lengthKm: {
      value: 5_464,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Berceau historique de la civilisation chinoise, surnommé « le chagrin de la Chine » pour ses crues dévastatrices récurrentes.",
    },
    source_location: "Plateau tibétain, monts Bayan Har (province du Qinghai)",
    mouth: "Mer de Bohai, province du Shandong",
  },
  {
    name: "Rivière des Perles (Xi Jiang)",
    lengthKm: {
      value: 2_400,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Son delta (Guangzhou, Shenzhen, Hong Kong, Macao) forme l'une des plus grandes conurbations du monde.",
    },
    source_location: "Plateau du Yunnan-Guizhou, province du Yunnan",
    mouth: "Mer de Chine méridionale, delta de la rivière des Perles",
  },
  {
    name: "Heilong Jiang (Amour)",
    lengthKm: {
      value: 4_444,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Marque une grande partie de la frontière sino-russe, où il est appelé Amour ; a donné son nom à la province chinoise la plus septentrionale.",
    },
    source_location: "Confluence des rivières Chilka et Argoun, à la frontière sino-russo-mongole",
    mouth: "Détroit de Tartarie (mer d'Okhotsk), en Russie",
  },
  {
    name: "Yarlung Tsangpo (haut Brahmapoutre)",
    lengthKm: {
      value: 2_057,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Cours le plus élevé du monde parmi les grands fleuves ; forme un coude spectaculaire dans les gorges du Yarlung Tsangpo avant d'entrer en Inde, où il devient le Brahmapoutre.",
    },
    source_location: "Glacier de Jima Yangzong, à proximité du mont Kailash (région autonome du Tibet)",
    mouth: "Frontière indienne, près de l'Arunachal Pradesh (le fleuve se poursuit ensuite en Inde puis au Bangladesh)",
  },
];
