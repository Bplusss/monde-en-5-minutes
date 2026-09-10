import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un petit pays enclavé entre France, Belgique et Allemagne, partagé entre forêts ardennaises et vallées viticoles",
  areaKm2: {
    value: 2_586,
    unit: "km²",
    source: "STATEC (Institut national de la statistique du Luxembourg)",
    sourceUrl: "https://statistiques.public.lu/",
  },
  highestPoint: {
    name: "Kneiff",
    elevationM: 560,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Kneiff",
  },
  borderingCountries: ["France", "Belgique", "Allemagne"],
  generalSource: { source: "STATEC / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Luxembourg" },
  climate:
    "Climat océanique tempéré, aux hivers doux et aux étés modérément chauds ; les précipitations sont réparties toute l'année, un peu plus abondantes dans le nord vallonné (Ösling) que dans le sud (Gutland).",
  summary:
    "Le Luxembourg se divise en deux ensembles géographiques contrastés : au nord, l'Ösling, prolongement boisé et vallonné des Ardennes belges, où se trouve le point culminant du pays ; au sud, le Gutland, plus bas et plus fertile, où se concentrent la capitale, l'essentiel de la population et les vignobles de la vallée de la Moselle, qui marque la frontière avec l'Allemagne.",
};
