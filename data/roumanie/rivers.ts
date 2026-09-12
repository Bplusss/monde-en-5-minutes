import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Danube",
    lengthKm: {
      value: 2_850,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Danube",
      note: "Longueur totale du fleuve ; environ 1 075 km de son cours forment la frontière ou traversent le territoire roumain, avant de former le delta du Danube à l'extrême est du pays.",
    },
    source_location: "Donaueschingen, Forêt-Noire (Allemagne)",
    mouth: "Mer Noire, via le delta du Danube (Roumanie/Ukraine)",
  },
  {
    name: "Mureș",
    lengthKm: {
      value: 768,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Mure%C8%99_(river)",
      note: "Le plus long affluent du Danube entièrement issu de Roumanie ; traverse la Transylvanie d'est en ouest.",
    },
    source_location: "Massif du Hășmaș (Carpates orientales)",
    mouth: "Tisza, près de Szeged (Hongrie)",
  },
  {
    name: "Olt",
    lengthKm: {
      value: 736,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Olt_(river)",
      note: "Seul grand fleuve roumain à traverser les Carpates méridionales de part en part, par les gorges de Turnu Roșu.",
    },
    source_location: "Massif de Harghita (Carpates orientales)",
    mouth: "Danube, près d'Islaz (comté de Teleorman)",
  },
  {
    name: "Siret",
    lengthKm: {
      value: 598,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Siret_(river)",
      note: "Principal fleuve de Moldavie roumaine ; environ 559 km de son cours se trouvent en Roumanie.",
    },
    source_location: "Carpates ukrainiennes (monts Bucovine)",
    mouth: "Danube, près de Galați",
  },
  {
    name: "Prut",
    lengthKm: {
      value: 742,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Prut",
      note: "Marque l'essentiel de la frontière entre la Roumanie et la République de Moldavie.",
    },
    source_location: "Carpates ukrainiennes (monts Gorgany)",
    mouth: "Danube, près de Reni (Ukraine)",
  },
];
