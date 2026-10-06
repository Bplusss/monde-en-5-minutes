import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Amazone",
    lengthKm: {
      value: 6_400,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Longueur totale jusqu'à l'Atlantique ; il naît au Pérou de la confluence de l'Ucayali et du Marañón, puis passe à Iquitos avant d'entrer au Brésil.",
    },
    source_location: "Andes péruviennes (source la plus lointaine dans la région d'Arequipa) ; confluence de l'Ucayali et du Marañón près de Nauta",
    mouth: "Océan Atlantique (Brésil)",
  },
  {
    name: "Ucayali",
    lengthKm: {
      value: 1_771,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Principale branche-mère de l'Amazone, navigable depuis Pucallpa ; il prolonge l'Urubamba, qui longe le Machu Picchu.",
    },
    source_location: "Confluence de l'Urubamba et du Tambo (région d'Ucayali)",
    mouth: "Confluence avec le Marañón, où il forme l'Amazone",
  },
  {
    name: "Marañón",
    lengthKm: {
      value: 1_737,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Il traverse les Andes du nord dans un canyon profond avant de rejoindre la plaine amazonienne.",
    },
    source_location: "Cordillère de Huayhuash (région de Huánuco)",
    mouth: "Confluence avec l'Ucayali, où il forme l'Amazone",
  },
  {
    name: "Madre de Dios",
    lengthKm: {
      value: 1_150,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Rivière de la forêt du sud-est, au cœur de zones protégées comme le parc national de Manú, mais aussi de l'orpaillage illégal.",
    },
    source_location: "Contreforts amazoniens de la cordillère de Paucartambo (Cusco)",
    mouth: "Rivière Beni, à Riberalta (Bolivie)",
  },
  {
    name: "Rímac",
    lengthKm: {
      value: 160,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Petit fleuve côtier qui traverse Lima et fournit l'essentiel de l'eau potable de la capitale.",
    },
    source_location: "Cordillère occidentale, près du col de Ticlio (plus de 5 000 m)",
    mouth: "Océan Pacifique, à Callao",
  },
];
