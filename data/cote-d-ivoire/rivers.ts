import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Comoé",
    lengthKm: {
      value: 813,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Como%C3%A9_(fleuve)",
      note: "Les longueurs publiées varient selon les sources (de 760 à 1 160 km). Elle traverse le parc national de la Comoé, inscrit au patrimoine mondial de l'UNESCO.",
    },
    source_location: "Plateau de Banfora, au Burkina Faso",
    mouth: "Golfe de Guinée, via la lagune Ébrié, à Grand-Bassam",
  },
  {
    name: "Bandama",
    lengthKm: {
      value: 1_050,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Bandama",
      note: "Plus long fleuve entièrement ivoirien ; son barrage de Kossou (1972) a créé le plus grand lac artificiel du pays.",
    },
    source_location: "Nord du pays, entre Korhogo et Boundiali (Bandama blanc)",
    mouth: "Golfe de Guinée, via la lagune de Grand-Lahou",
  },
  {
    name: "Sassandra",
    lengthKm: {
      value: 650,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Sassandra_(fleuve)",
      note: "Équipé des barrages hydroélectriques de Buyo et de Soubré, ce dernier le plus puissant du pays (275 MW).",
    },
    source_location: "Région d'Odienné, au nord-ouest",
    mouth: "Golfe de Guinée, à Sassandra",
  },
  {
    name: "Cavally",
    lengthKm: {
      value: 515,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Cavally",
      note: "Sur la majeure partie de son cours inférieur, il marque la frontière avec le Liberia.",
    },
    source_location: "Monts Nimba, en Guinée",
    mouth: "Golfe de Guinée, près de Harper (Liberia)",
  },
];
