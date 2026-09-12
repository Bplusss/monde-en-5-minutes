import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un arc carpatique au centre du pays, entre plaines danubiennes, plateaux et façade sur la mer Noire",
  areaKm2: {
    value: 238_397,
    unit: "km²",
    source: "Wikipedia (Geography of Romania, d'après les autorités roumaines)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Romania",
    note: "Douzième pays d'Europe par la superficie.",
  },
  coastlineKm: {
    value: 245,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Romania",
    note: "Façade sur la mer Noire, du delta du Danube au nord jusqu'à la frontière bulgare au sud.",
  },
  highestPoint: {
    name: "Moldoveanu (massif de Făgăraș, Carpates méridionales)",
    elevationM: 2_544,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Moldoveanu_Peak",
  },
  borderingCountries: ["Hongrie", "Serbie", "Bulgarie", "Ukraine", "Moldavie"],
  generalSource: { source: "Wikipedia / Britannica", sourceUrl: "https://www.britannica.com/place/Romania/Relief" },
  climate:
    "Climat continental tempéré, avec des étés chauds et des hivers froids et neigeux, plus rigoureux en Transylvanie et en Moldavie qu'en Valachie et sur le littoral ; le relief carpatique introduit d'importants contrastes locaux d'altitude et de précipitations, tandis que le littoral de la mer Noire connaît des influences plus douces.",
  summary:
    "Le territoire roumain est structuré par l'arc des Carpates, qui le traverse en U du nord-ouest au centre-sud et culmine au Moldoveanu (2 544 m) dans le massif de Făgăraș. Il sépare le plateau de Transylvanie, au centre-ouest, des grandes plaines du Bărăgan et de la Valachie au sud et du plateau moldave à l'est. Le Danube longe la frontière sud avant de former, à l'extrême est, le delta du Danube, la plus vaste zone humide encore préservée d'Europe, avant de se jeter dans la mer Noire.",
};
