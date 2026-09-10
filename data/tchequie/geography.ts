import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays enclavé au relief de bassin, cerné de moyennes montagnes qui dessinent presque toutes ses frontières",
  areaKm2: {
    value: 78_871,
    unit: "km²",
    source: "Office tchèque de la statistique (ČSÚ)",
    sourceUrl: "https://www.czso.cz/csu/czso/home",
  },
  highestPoint: {
    name: "Sněžka (massif des Sudètes)",
    elevationM: 1_603,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Sn%C4%9B%C5%BEka",
  },
  borderingCountries: ["Allemagne", "Pologne", "Slovaquie", "Autriche"],
  generalSource: { source: "ČSÚ / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_the_Czech_Republic" },
  climate:
    "Climat continental tempéré, avec des étés chauds et des hivers froids et neigeux dans les massifs ; les précipitations sont plus abondantes dans les montagnes frontalières que dans les bassins intérieurs, notamment autour de Prague.",
  summary:
    "La Tchéquie occupe deux grandes régions historiques : la Bohême à l'ouest, un vaste bassin drainé par la Vltava et l'Elbe et cerné de massifs (Sudètes, Monts Métallifères, Forêt de Bohême) qui en dessinent presque toute la frontière naturelle, et la Moravie à l'est, vallonnée, drainée par la Morava vers le Danube. Sans façade maritime, le pays est l'un des rares au monde dont les cours d'eau se partagent entre trois mers différentes (Baltique, mer du Nord, mer Noire).",
};
