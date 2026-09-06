import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Une péninsule montagneuse, entourée par la Méditerranée sur trois côtés",
  areaKm2: {
    value: 302_110,
    unit: "km²",
    year: 2021,
    source: "ISTAT",
    sourceUrl: "https://www.istat.it/classificazione/principali-statistiche-geografiche-sui-comuni/",
  },
  highestPoint: {
    name: "Mont Blanc (versant italien)",
    elevationM: 4810,
    source: "Istituto Geografico Militare",
    sourceUrl: "https://www.igmi.org/",
  },
  borderingCountries: ["France", "Suisse", "Autriche", "Slovénie", "Saint-Marin", "Vatican"],
  generalSource: { source: "Istituto Geografico Militare", sourceUrl: "https://www.igmi.org/" },
  climate:
    "Climat méditerranéen sur les côtes et dans le sud, plus continental dans la plaine du Pô, alpin dans les massifs du nord.",
  summary:
    "L'Italie forme une longue péninsule s'avançant dans la Méditerranée, bordée par les mers Tyrrhénienne, Ionienne et Adriatique. Son relief est dominé par la chaîne des Alpes au nord et par les Apennins qui parcourent toute la péninsule, avec la vaste plaine du Pô au nord.",
};
