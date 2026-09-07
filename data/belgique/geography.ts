import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un petit pays plat au bord de la mer du Nord, au cœur de l'Europe du Nord-Ouest",
  areaKm2: {
    value: 30_528,
    unit: "km²",
    year: 2024,
    source: "Wikipédia (données géographiques officielles)",
    sourceUrl: "https://fr.wikipedia.org/wiki/Belgique",
    note: "33 990 km² en ajoutant les eaux territoriales.",
  },
  highestPoint: {
    name: "Signal de Botrange",
    elevationM: 694,
    source: "Institut géographique national (NGI/IGN Belgique)",
    sourceUrl: "https://www.ngi.be/",
  },
  borderingCountries: ["France", "Luxembourg", "Allemagne", "Pays-Bas"],
  generalSource: { source: "Wikipédia (données géographiques officielles)", sourceUrl: "https://fr.wikipedia.org/wiki/Belgique" },
  climate: "Climat tempéré océanique, aux hivers doux et étés modérés, avec des précipitations réparties toute l'année.",
  summary:
    "La Belgique s'étend des plaines côtières de la mer du Nord aux collines boisées des Ardennes au sud-est, en passant par les plaines centrales densément peuplées. C'est l'un des pays les plus densément peuplés d'Europe.",
};
