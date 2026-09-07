import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Une péninsule montagneuse prolongée par des milliers d'îles égéennes et ioniennes",
  areaKm2: {
    value: 131_957,
    unit: "km²",
    year: 2023,
    source: "ELSTAT (Autorité statistique hellénique)",
    sourceUrl: "https://www.statistics.gr/en/greece-in-figures",
  },
  highestPoint: {
    name: "Mont Olympe",
    elevationM: 2_917,
    source: "Wikipedia (d'après le Service géographique hellénique)",
    sourceUrl: "https://fr.wikipedia.org/wiki/Olympe",
  },
  borderingCountries: ["Albanie", "Macédoine du Nord", "Bulgarie", "Turquie"],
  generalSource: { source: "ELSTAT", sourceUrl: "https://www.statistics.gr/en/greece-in-figures" },
  climate:
    "Climat méditerranéen sur les côtes et les îles (étés secs et chauds, hivers doux et humides), plus continental et montagnard dans l'intérieur du pays et au nord, où les hivers sont plus rigoureux.",
  summary:
    "La Grèce continentale est dominée par la chaîne du Pinde, qui la parcourt du nord au sud, et ne représente qu'une partie du territoire : le pays compte environ 6 000 îles et îlots, dont seuls 227 environ sont habités, répartis en plusieurs archipels (Cyclades, Dodécanèse, îles Ioniennes, îles de la mer Égée du Nord).",
};
