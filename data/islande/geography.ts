import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Une île volcanique et glaciaire posée sur la dorsale médio-atlantique, juste sous le cercle polaire",
  areaKm2: {
    value: 103_000,
    unit: "km²",
    source: "Statistics Iceland (Hagstofa Íslands)",
    sourceUrl: "https://www.statice.is/",
  },
  highestPoint: {
    name: "Hvannadalshnúkur",
    elevationM: 2_110,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Hvannadalshn%C3%BAkur",
  },
  borderingCountries: [],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Iceland" },
  climate:
    "Climat subarctique océanique, nettement adouci par le courant nord-atlantique (prolongement du Gulf Stream) : hivers relativement doux pour la latitude sur le littoral, étés frais, et un temps très changeant toute l'année. L'intérieur des hautes terres, glacé et désertique, reste inhabité.",
  summary:
    "Posée sur la dorsale médio-atlantique, à la jonction des plaques nord-américaine et eurasiatique, l'Islande est l'une des îles volcaniques les plus actives au monde, comptant une trentaine de systèmes volcaniques actifs, des geysers (le mot vient d'ailleurs du nom propre islandais Geysir) et de vastes calottes glaciaires comme le Vatnajökull, la plus grande d'Europe. La population se concentre presque entièrement sur le pourtour côtier, l'intérieur du pays formant un haut plateau de sable, de lave et de glace quasiment inhabité.",
};
