import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un arc littoral adriatique en forme de croissant, bordé de plus d'un millier d'îles, prolongé par des plaines pannoniennes à l'intérieur des terres",
  areaKm2: {
    value: 56_594,
    unit: "km²",
    source: "Office croate de la statistique (DZS)",
    sourceUrl: "https://podaci.dzs.hr/en/",
    note: "Superficie totale (terre et eaux intérieures).",
  },
  highestPoint: {
    name: "Dinara",
    elevationM: 1_831,
    source: "Wikipedia (d'après les relevés géodésiques croates)",
    sourceUrl: "https://en.wikipedia.org/wiki/Dinara",
  },
  borderingCountries: ["Slovénie", "Hongrie", "Serbie", "Bosnie-Herzégovine", "Monténégro"],
  generalSource: { source: "Office croate de la statistique (DZS)", sourceUrl: "https://podaci.dzs.hr/en/" },
  climate:
    "Climat méditerranéen sur la côte adriatique et les îles (étés chauds et secs, hivers doux), climat continental dans les plaines de Slavonie et du bassin pannonien (étés chauds, hivers froids), climat de montagne dans le massif dinarique qui sépare les deux zones.",
  summary:
    "La Croatie a une forme caractéristique en fer à cheval, tendue entre les plaines agricoles de Slavonie à l'est, le massif karstique dinarique au centre et une façade adriatique très découpée à l'ouest et au sud, comptant environ 1 244 îles, îlots et récifs, dont une soixantaine seulement sont habités en permanence.",
  coastlineKm: {
    value: 5_835,
    unit: "km",
    source: "Annuaire statistique de la République de Croatie, DZS",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Croatia",
    note: "Dont environ 1 777 km de côte continentale et 4 058 km de côte insulaire.",
  },
};
