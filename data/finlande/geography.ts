import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le pays des mille lacs, en grande partie couvert de forêts boréales et s'étirant jusqu'au cercle polaire",
  areaKm2: {
    value: 338_455,
    unit: "km²",
    source: "Statistics Finland",
    sourceUrl: "https://stat.fi/en/",
  },
  coastlineKm: {
    value: 1_250,
    unit: "km",
    source: "Wikipedia (géographie physique)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Finland",
    note: "Sans compter le très grand nombre d'îles côtières ; environ 46 000 km en tenant compte de tout le linéaire insulaire.",
  },
  highestPoint: {
    name: "Halti",
    elevationM: 1_324,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Halti",
  },
  borderingCountries: ["Suède", "Norvège", "Russie"],
  generalSource: { source: "Statistics Finland / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Finland" },
  climate:
    "Climat continental à subarctique : hivers longs et rigoureux, plus rudes en Laponie où la nuit polaire succède au soleil de minuit estival, étés courts mais doux dans le sud, autour d'Helsinki.",
  summary:
    "La Finlande est l'un des pays les plus boisés et les plus lacustres du monde, avec environ 188 000 lacs et près de 75 % du territoire couvert de forêt. Le relief est globalement bas et façonné par les glaciations, à l'exception de la Laponie au nord, plus montagneuse, où se trouve le point culminant du pays à la frontière norvégienne. Environ un quart du territoire se situe au nord du cercle polaire arctique.",
};
