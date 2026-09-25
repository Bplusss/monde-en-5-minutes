import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Orange (Gariep)",
    lengthKm: {
      value: 2_432,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Orange_River",
      note: "Plus long fleuve d'Afrique du Sud, connu des Khoïkhoï sous le nom de Gariep ; forme sur une partie de son cours la frontière avec la Namibie.",
    },
    source_location: "Monts Drakensberg, dans les hautes terres du Lesotho",
    mouth: "Océan Atlantique, à Alexander Bay (frontière avec la Namibie)",
  },
  {
    name: "Vaal",
    lengthKm: {
      value: 1_120,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Vaal_River",
      note: "Principal affluent de l'Orange ; malgré un débit modeste, c'est le cours d'eau économiquement le plus vital du pays, alimentant en eau le Gauteng.",
    },
    source_location: "Près de Breyten, province du Mpumalanga",
    mouth: "Confluence avec l'Orange, près de Douglas (Cap-Nord)",
  },
  {
    name: "Limpopo",
    lengthKm: {
      value: 1_750,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Limpopo_River",
      note: "Forme sur une grande partie de son cours la frontière entre l'Afrique du Sud et le Botswana puis le Zimbabwe, avant de traverser le Mozambique.",
    },
    source_location: "Confluence des rivières Marico et Crocodile, à la frontière entre l'Afrique du Sud et le Botswana",
    mouth: "Océan Indien, au Mozambique",
  },
  {
    name: "Tugela",
    lengthKm: {
      value: 502,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Tugela_River",
      note: "Fleuve emblématique du KwaZulu-Natal, dont les chutes du Tugela (Tugela Falls), sur son cours supérieur dans le Drakensberg, comptent parmi les plus hautes chutes d'eau du monde (environ 948 m sur plusieurs ressauts).",
    },
    source_location: "Mont-aux-Sources, massif du Drakensberg (KwaZulu-Natal)",
    mouth: "Océan Indien, au nord de Durban",
  },
];
