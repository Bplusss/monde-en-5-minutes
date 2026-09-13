import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Paraná",
    lengthKm: {
      value: 2_546,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Deuxième plus long fleuve d'Amérique du Sud après l'Amazone ; partagé avec le Brésil (où il prend sa source) et le Paraguay avant de traverser l'Argentine jusqu'au Río de la Plata.",
    },
    source_location: "Confluence des rivières Paranaíba et Grande, entre les États brésiliens de São Paulo et du Minas Gerais",
    mouth: "Río de la Plata, près de Diamante et Rosario (Argentine)",
  },
  {
    name: "Uruguay",
    lengthKm: {
      value: 1_770,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Marque une grande partie de la frontière orientale de l'Argentine avec le Brésil puis avec l'Uruguay, avant de former le Río de la Plata avec le Paraná.",
    },
    source_location: "Serra do Mar, État de Santa Catarina (Brésil)",
    mouth: "Río de la Plata, entre Gualeguaychú (Argentine) et Fray Bentos (Uruguay)",
  },
  {
    name: "Río de la Plata",
    lengthKm: {
      value: 290,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Formellement un estuaire — le plus large du monde, jusqu'à environ 220 km à son embouchure — plutôt qu'un fleuve à proprement parler, mais couramment traité comme un système fluvial majeur sur la rive duquel se trouve Buenos Aires.",
    },
    source_location: "Confluence du Paraná et de l'Uruguay, au niveau de Punta Gorda",
    mouth: "Océan Atlantique, entre Buenos Aires (Argentine) et Montevideo (Uruguay)",
  },
  {
    name: "Colorado",
    lengthKm: {
      value: 1_114,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Fleuve entièrement argentin, traditionnellement considéré comme la limite septentrionale de la Patagonie.",
    },
    source_location: "Versant oriental des Andes, confluence des rivières Grande et Barrancas (province de Mendoza)",
    mouth: "Océan Atlantique, baie de Unión, au sud de Bahía Blanca",
  },
  {
    name: "Río Negro",
    lengthKm: {
      value: 635,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Principal fleuve de Patagonie argentine, à ne pas confondre avec le Rio Negro amazonien, affluent brésilien de l'Amazone.",
    },
    source_location: "Confluence des rivières Limay et Neuquén, à la frontière des provinces de Neuquén et Río Negro",
    mouth: "Océan Atlantique, près de Viedma (province de Río Negro)",
  },
];
