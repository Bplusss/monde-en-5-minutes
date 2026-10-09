import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Volta",
    lengthKm: {
      value: 1_500,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Longueur mesurée depuis la source de la Volta noire ; le fleuve est retenu par le barrage d'Akosombo, qui forme le lac Volta.",
    },
    source_location: "Confluence des Voltas noire et blanche, dans le lac Volta",
    mouth: "Golfe de Guinée, à Ada",
  },
  {
    name: "Volta noire",
    lengthKm: {
      value: 1_352,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Appelée Mouhoun au Burkina Faso, elle marque une partie des frontières avec le Burkina et la Côte d'Ivoire ; le barrage de Bui la retient depuis 2013.",
    },
    source_location: "Région de Bobo-Dioulasso (Burkina Faso)",
    mouth: "Lac Volta",
  },
  {
    name: "Volta blanche",
    lengthKm: {
      value: 885,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Appelée Nakanbé au Burkina Faso, elle traverse les savanes du Nord ghanéen.",
    },
    source_location: "Nord du Burkina Faso",
    mouth: "Lac Volta",
  },
  {
    name: "Oti",
    lengthKm: {
      value: 520,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Venue du Bénin et du Togo, elle forme une partie de la frontière togolaise avant de rejoindre le lac Volta.",
    },
    source_location: "Nord-ouest du Bénin (où elle s'appelle Pendjari)",
    mouth: "Lac Volta",
  },
];
