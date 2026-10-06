import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Tana",
    lengthKm: {
      value: 1_000,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Plus long fleuve du Kenya ; une série de barrages sur son cours supérieur, les « Sept Fourches », fournit une grande partie de l'hydroélectricité du pays et de l'eau de Nairobi.",
    },
    source_location: "Monts Aberdare, à l'ouest du mont Kenya",
    mouth: "Océan Indien, baie de Formosa, près de Kipini",
  },
  {
    name: "Athi-Galana-Sabaki",
    lengthKm: {
      value: 390,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Deuxième fleuve du pays, il change trois fois de nom ; il traverse l'agglomération de Nairobi, dont il reçoit les eaux usées, puis le parc national de Tsavo.",
    },
    source_location: "Hautes terres au sud-ouest de Nairobi (monts Ngong)",
    mouth: "Océan Indien, au nord de Malindi",
  },
  {
    name: "Ewaso Ng'iro",
    lengthKm: {
      value: 700,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Rivière vitale pour les éleveurs et la faune des réserves de Samburu et de Buffalo Springs ; elle se perd dans les marais de Lorian, souvent à sec, sans atteindre la mer.",
    },
    source_location: "Versant occidental du mont Kenya et monts Aberdare",
    mouth: "Marais de Lorian (bassin endoréique), dans le nord-est",
  },
  {
    name: "Mara",
    lengthKm: {
      value: 395,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Rivière partagée avec la Tanzanie, célèbre pour les traversées spectaculaires des gnous et zèbres lors de la grande migration dans la réserve du Masai Mara.",
    },
    source_location: "Escarpement de Mau, dans la vallée du Rift",
    mouth: "Lac Victoria, à Musoma (Tanzanie)",
  },
  {
    name: "Nzoia",
    lengthKm: {
      value: 257,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "L'un des principaux affluents kényans du lac Victoria, souvent à l'origine d'inondations dans la région de Budalangi.",
    },
    source_location: "Mont Elgon et monts Cherangani",
    mouth: "Lac Victoria, près de Port Victoria",
  },
];
