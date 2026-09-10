import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays plat et boisé, façonné par la Baltique et parsemé de plus de 2 000 îles",
  areaKm2: {
    value: 45_339,
    unit: "km²",
    source: "Statistikaamet (Office estonien de la statistique)",
    sourceUrl: "https://www.stat.ee/en",
  },
  coastlineKm: {
    value: 3_794,
    unit: "km",
    source: "Wikipedia (géographie physique)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Estonia",
    note: "Littoral très découpé sur la mer Baltique et le golfe de Finlande, îles comprises.",
  },
  highestPoint: {
    name: "Suur Munamägi",
    elevationM: 318,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Suur_Munam%C3%A4gi",
  },
  borderingCountries: ["Lettonie", "Russie"],
  generalSource: { source: "Statistikaamet / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Estonia" },
  climate:
    "Climat continental humide tempéré par la proximité de la Baltique, aux hivers relativement doux pour la latitude (autour de -5 °C en janvier) et aux étés frais (autour de 17 °C en juillet) ; les précipitations sont réparties toute l'année.",
  summary:
    "Pays le plus plat et le plus septentrional des trois États baltes, l'Estonie est couverte à plus de la moitié par la forêt et compte environ 1 500 lacs, dont le lac Peïpous, à la frontière russe, l'un des plus grands d'Europe. Le littoral, très découpé, comprend plus de 2 000 îles et îlots, dont les plus grandes, Saaremaa et Hiiumaa, à l'ouest.",
};
