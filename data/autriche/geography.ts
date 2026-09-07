import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays alpin et enclavé au cœur de l'Europe centrale",
  areaKm2: {
    value: 83_879,
    unit: "km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/AG.SRF.TOTL.K2",
  },
  highestPoint: {
    name: "Großglockner",
    elevationM: 3798,
    source: "Statistik Austria",
    sourceUrl: "https://www.statistik.at/",
  },
  borderingCountries: ["Allemagne", "Tchéquie", "Slovaquie", "Hongrie", "Slovénie", "Italie", "Suisse", "Liechtenstein"],
  generalSource: { source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" },
  climate:
    "Climat tempéré continental, avec des nuances alpines marquées dans l'ouest et le sud du pays (Tyrol, Vorarlberg, Carinthie).",
  summary:
    "L'Autriche est un pays enclavé d'Europe centrale, largement dominé par les Alpes orientales à l'ouest et au sud, tandis que le bassin du Danube et les plaines de l'est (Vienne, Basse-Autriche, Burgenland) offrent un relief plus doux.",
};
