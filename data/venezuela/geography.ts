import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Des Andes aux tepuis de la Guyane, un pays caribéen traversé par l'Orénoque",
  areaKm2: {
    value: 916_445,
    unit: "km²",
    source: "Instituto Nacional de Estadística (INE)",
    sourceUrl: "http://www.ine.gob.ve/",
    note: "Sans la Guayana Esequiba, territoire administré par le Guyana et revendiqué par le Venezuela.",
  },
  coastlineKm: {
    value: 2_800,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Venezuela",
  },
  highestPoint: {
    name: "Pic Bolívar (sierra Nevada de Mérida)",
    elevationM: 4_978,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Pico_Bol%C3%ADvar",
  },
  borderingCountries: ["Colombie", "Brésil", "Guyana"],
  generalSource: { source: "INE / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Venezuela" },
  climate:
    "Le climat est tropical, avec une saison sèche de décembre à avril et une saison des pluies de mai à novembre. Les températures dépendent surtout de l'altitude : chaleur constante dans les plaines et sur la côte, douceur printanière à Caracas, perchée à 900 m, et froid sur les sommets des Andes. Les Llanos alternent inondations et sécheresse, et la péninsule de la Guajira, au nord-ouest, est presque désertique.",
  summary:
    "Le Venezuela s'organise en quatre grands ensembles. Au nord-ouest, la cordillère de Mérida, prolongement des Andes, et la cordillère de la Côte encadrent le lac de Maracaibo, riche en pétrole, et les vallées où vit la majorité de la population. Au centre, les Llanos, vastes plaines herbeuses vouées à l'élevage, s'étendent jusqu'à l'Orénoque. Au sud du fleuve, le massif des Guyanes, couvert de forêt tropicale, occupe près de la moitié du pays ; il est hérissé de tepuis, plateaux de grès aux parois verticales, d'où tombe le Salto Ángel. Le pays compte aussi plus de 300 îles dans la mer des Caraïbes.",
};
