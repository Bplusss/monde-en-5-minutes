import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le deuxième plus grand pays du monde, d'un océan à l'autre à l'autre, dominé par le Bouclier canadien et l'archipel Arctique",
  areaKm2: {
    value: 9_984_670,
    unit: "km²",
    source: "Ressources naturelles Canada",
    sourceUrl: "https://natural-resources.canada.ca/maps-tools-publications/tools/geography-tools/geography-canada-facts-figures/10981",
    note: "Deuxième plus grand pays du monde par la superficie, derrière la Russie.",
  },
  coastlineKm: {
    value: 243_042,
    unit: "km",
    source: "Wikipedia (géographie du Canada)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Canada",
    note: "Le plus long littoral du monde, bordé par l'océan Pacifique, l'océan Atlantique et l'océan Arctique.",
  },
  highestPoint: {
    name: "Mont Logan (Yukon)",
    elevationM: 5_959,
    source: "Ressources naturelles Canada / Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Logan",
  },
  borderingCountries: ["États-Unis"],
  generalSource: { source: "Ressources naturelles Canada / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Canada" },
  climate:
    "Climat extrêmement variable selon la latitude et l'éloignement des océans : tempéré et humide sur les côtes pacifique et atlantique, continental à étés chauds et hivers rigoureux dans les Prairies et le centre du pays, subarctique puis arctique (toundra et pergélisol) dans le Grand Nord, où certaines stations comptent parmi les plus froides et les plus isolées habitées au monde.",
  summary:
    "S'étendant sur près de 10 millions de km² de l'océan Atlantique à l'océan Pacifique puis à l'océan Arctique, le Canada ne partage qu'une seule frontière terrestre, avec les États-Unis, longue de plus de 8 800 km — la plus longue frontière internationale du monde. Le pays compte plus de lacs que tous les autres pays réunis, un vaste bouclier précambrien (Bouclier canadien) qui couvre près de la moitié de son territoire, ainsi qu'un immense archipel Arctique de plus de 36 000 îles, largement inhabité et recouvert de glace une grande partie de l'année.",
};
