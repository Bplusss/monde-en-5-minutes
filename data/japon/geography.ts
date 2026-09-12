import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un archipel montagneux de plus de 14 000 îles, étiré sur près de 3 000 km le long de la ceinture de feu du Pacifique",
  areaKm2: {
    value: 364_546,
    unit: "km²",
    year: 2021,
    source: "Wikipedia (géographie du Japon)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Japan",
  },
  coastlineKm: {
    value: 29_751,
    unit: "km",
    source: "Wikipedia (géographie du Japon)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Japan",
    note: "Sixième plus long littoral du monde, conséquence directe de la fragmentation de l'archipel en plus de 14 000 îles.",
  },
  highestPoint: {
    name: "Mont Fuji",
    elevationM: 3_776,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Fuji",
  },
  borderingCountries: [],
  generalSource: { source: "Wikipedia (géographie du Japon)", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Japan" },
  climate:
    "Très étiré du nord au sud, le pays connaît des climats contrastés : hivers neigeux et étés courts à Hokkaidō, quatre saisons marquées sur l'essentiel de Honshū, Shikoku et Kyūshū avec une saison des pluies (tsuyu) au début de l'été, et climat subtropical humide dans les îles Ryūkyū (Okinawa). L'archipel est en outre très exposé aux typhons entre l'été et l'automne.",
  summary:
    "Le Japon est un archipel de plus de 14 000 îles dont quatre principales — Honshū, Hokkaidō, Kyūshū et Shikoku — concentrent l'essentiel du territoire et de la population ; l'archipel se referme au sud-ouest sur le chapelet des îles Ryūkyū, dont Okinawa. Le relief y est montagneux à plus de 70 %, laissant peu de plaines habitables, sur lesquelles se concentre pourtant l'essentiel de la population. Situé sur la ceinture de feu du Pacifique, à la jonction de plusieurs plaques tectoniques, le pays compte 111 volcans actifs et subit une intense activité sismique, à l'origine de séismes et de tsunamis récurrents. Le Japon revendique par ailleurs plusieurs territoires sans population civile sous administration japonaise et disputés avec ses voisins : les îles Kouriles du Sud (« Territoires du Nord ») avec la Russie, les rochers Liancourt (Takeshima/Dokdo) avec la Corée du Sud, et les îles Senkaku (Diaoyu) avec la Chine et Taïwan.",
};
