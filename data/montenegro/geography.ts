import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline:
    "Un petit pays très montagneux de l'Adriatique, où les sommets plongent presque directement dans la mer autour de la baie de Kotor",
  areaKm2: {
    value: 13_812,
    unit: "km²",
    source: "Wikipedia (géographie du Monténégro)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Montenegro",
  },
  coastlineKm: {
    value: 293.5,
    unit: "km",
    source: "Wikipedia (géographie du Monténégro)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Montenegro",
    note: "Un littoral court mais très découpé, dominé par la baie de Kotor.",
  },
  highestPoint: {
    name: "Zla Kolata",
    elevationM: 2534,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Montenegro",
  },
  borderingCountries: ["Croatie", "Bosnie-Herzégovine", "Serbie", "Kosovo", "Albanie"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Montenegro" },
  climate:
    "Climat méditerranéen sur l'étroite bande côtière (étés chauds et secs, hivers doux), climat continental à influences subtropicales dans les vallées intérieures, et climat montagnard rigoureux, parmi les plus enneigés d'Europe, sur les massifs du nord comme le Durmitor.",
  summary:
    "Pays parmi les plus montagneux d'Europe, le Monténégro doit son nom (« montagne noire ») à ses reliefs sombres de conifères. Son littoral, long d'environ 300 km, est dominé par la baie de Kotor (Boka Kotorska), un profond golfe aux allures de fjord entouré de montagnes tombant presque à pic dans l'Adriatique, inscrit au patrimoine mondial de l'UNESCO. À l'intérieur des terres, le lac de Skadar, partagé avec l'Albanie, est le plus grand lac des Balkans, tandis que le massif du Durmitor, au nord, abrite le canyon de la Tara, le plus profond d'Europe. Podgorica, la capitale, se trouve dans la plaine intérieure ; Cetinje, ancienne capitale du royaume monténégrin nichée au pied du mont Lovćen, conserve un statut constitutionnel particulier d'« ancienne capitale royale » (Prijestonica).",
};
