import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le plus vaste pays d'Europe du Nord, entre forêts, lacs et montagnes scandinaves",
  areaKm2: {
    value: 450_295,
    unit: "km²",
    year: 2024,
    source: "Wikipedia (d'après les données officielles suédoises)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Sweden",
    note: "Cinquième plus grand pays d'Europe par la superficie.",
  },
  highestPoint: {
    name: "Kebnekaise",
    elevationM: 2_097,
    source: "Lantmäteriet (institut cartographique suédois)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Sweden",
  },
  borderingCountries: ["Norvège", "Finlande"],
  generalSource: { source: "Wikipedia / sources officielles suédoises", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Sweden" },
  climate:
    "Climat tempéré au sud, gagnant en continentalité vers l'intérieur, avec des conditions subarctiques dans le nord (Laponie) ; le Gulf Stream adoucit les températures par rapport à d'autres régions de même latitude.",
  summary:
    "La Suède s'étend sur plus de 1 500 km du nord au sud, de la Laponie subarctique aux plaines agricoles du Sud (Scanie). Le pays compte des dizaines de milliers de lacs et une vaste couverture forestière, et ne partage de frontières terrestres qu'avec la Norvège et la Finlande.",
};
