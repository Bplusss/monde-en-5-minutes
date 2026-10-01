import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Sénégal",
    lengthKm: {
      value: 1_750,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/S%C3%A9n%C3%A9gal_(fleuve)",
      note: "Longueur depuis la source du Bafing. Il forme la frontière avec la Mauritanie ; ses eaux sont gérées en commun par l'OMVS (barrages de Diama et de Manantali).",
    },
    source_location: "Fouta-Djalon (Guinée), par le Bafing, qui rejoint le Bakoye à Bafoulabé (Mali)",
    mouth: "Océan Atlantique, au sud de Saint-Louis",
  },
  {
    name: "Gambie",
    lengthKm: {
      value: 1_150,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Gambie_(fleuve)",
      note: "Traverse le parc national du Niokolo-Koba avant d'entrer en Gambie, pays qui s'étend de part et d'autre de son cours aval.",
    },
    source_location: "Fouta-Djalon, près de Sannou (Guinée)",
    mouth: "Océan Atlantique, à Banjul (Gambie)",
  },
  {
    name: "Casamance",
    lengthKm: {
      value: 320,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Casamance_(fleuve)",
      note: "Entièrement sénégalais ; son cours aval est un large estuaire navigable jusqu'à Ziguinchor.",
    },
    source_location: "Environs de Fafacourou, au nord-est de Kolda",
    mouth: "Océan Atlantique, en Basse-Casamance, à une soixantaine de kilomètres en aval de Ziguinchor",
  },
  {
    name: "Falémé",
    lengthKm: {
      value: 430,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Fal%C3%A9m%C3%A9",
      note: "Principal affluent de rive gauche du Sénégal ; il marque la frontière avec le Mali.",
    },
    source_location: "Nord du Fouta-Djalon (Guinée)",
    mouth: "Fleuve Sénégal, en amont de Bakel",
  },
];
