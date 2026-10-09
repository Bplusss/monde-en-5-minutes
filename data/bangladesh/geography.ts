import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le plus grand delta du monde, façonné par le Gange, le Brahmapoutre et la Meghna",
  areaKm2: {
    value: 147_570,
    unit: "km²",
    source: "Bangladesh Bureau of Statistics",
    sourceUrl: "https://bbs.gov.bd/",
  },
  coastlineKm: {
    value: 580,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Bangladesh",
  },
  highestPoint: {
    name: "Saka Haphong (Chittagong Hill Tracts)",
    elevationM: 1_052,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Saka_Haphong",
  },
  borderingCountries: ["Inde", "Birmanie"],
  generalSource: { source: "BBS / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Bangladesh" },
  climate:
    "Le climat est tropical de mousson. Un hiver doux et sec, de novembre à février, précède une saison chaude, de mars à mai, marquée par de violents orages. La mousson, de juin à octobre, apporte l'essentiel des pluies, plus de 2 000 mm par an en moyenne et bien davantage dans le Nord-Est, autour de Sylhet. Les cyclones du golfe du Bengale frappent surtout en avril-mai et en octobre-novembre.",
  summary:
    "Le Bangladesh occupe l'essentiel du delta formé par le Gange (appelé Padma), le Brahmapoutre (Jamuna) et la Meghna, qui charrient chaque année plus d'un milliard de tonnes de sédiments arrachés à l'Himalaya. Plus des trois quarts du pays sont des plaines alluviales de moins de 10 m d'altitude, découpées par quelque 700 cours d'eau et régulièrement inondées. Seules les collines de Sylhet au nord-est et les Chittagong Hill Tracts au sud-est rompent cette platitude. Au sud-ouest, les Sundarbans forment la plus grande forêt de mangroves du monde, partagée avec l'Inde.",
};
