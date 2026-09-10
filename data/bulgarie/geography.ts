import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Entre Danube, Balkans et mer Noire : un relief très contrasté sur un territoire relativement compact",
  areaKm2: {
    value: 110_993.6,
    unit: "km²",
    source: "Institut national de statistique de Bulgarie (NSI)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Bulgaria",
  },
  coastlineKm: {
    value: 378,
    unit: "km",
    source: "Wikipedia (d'après les autorités bulgares)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Bulgaria",
    note: "Façade sur la mer Noire, à l'est du pays.",
  },
  highestPoint: {
    name: "Musala (massif du Rila)",
    elevationM: 2_925,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Musala",
  },
  borderingCountries: ["Roumanie", "Serbie", "Macédoine du Nord", "Grèce", "Turquie"],
  generalSource: { source: "Wikipedia / NSI", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Bulgaria" },
  climate:
    "Climat continental modéré sur la majeure partie du pays (étés chauds, hivers froids), avec des nuances méditerranéennes dans les vallées du sud proches de la Grèce, et un climat plus doux sur le littoral de la mer Noire.",
  summary:
    "Le territoire est structuré par trois grands ensembles est-ouest : la plaine du Danube au nord, la chaîne des Balkans (Stara Planina) au centre, puis les plaines de Thrace et les massifs du Rila, du Pirin et des Rhodopes au sud, où se trouve le point culminant des Balkans, le Musala (2 925 m). Le Danube marque l'essentiel de la frontière nord avec la Roumanie.",
};
