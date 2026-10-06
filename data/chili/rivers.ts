import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Loa",
    lengthKm: {
      value: 440,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Plus long fleuve du Chili, il décrit une grande boucle à travers le désert d'Atacama ; sa vallée a permis l'implantation de l'oasis de Calama et de la mine géante de Chuquicamata.",
    },
    source_location: "Pied du volcan Miño, Andes de la région d'Antofagasta",
    mouth: "Océan Pacifique, au nord de Tocopilla",
  },
  {
    name: "Maipo",
    lengthKm: {
      value: 250,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Fournit l'essentiel de l'eau potable et d'irrigation de la Région métropolitaine de Santiago ; sa vallée est le berceau du vignoble chilien.",
    },
    source_location: "Flanc du volcan Maipo, dans les Andes, à la frontière argentine",
    mouth: "Océan Pacifique, près de Llolleo (San Antonio)",
  },
  {
    name: "Maule",
    lengthKm: {
      value: 240,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Principal fleuve de la vallée centrale agricole, équipé de plusieurs barrages hydroélectriques.",
    },
    source_location: "Lagune del Maule, dans les Andes",
    mouth: "Océan Pacifique, à Constitución",
  },
  {
    name: "Biobío",
    lengthKm: {
      value: 380,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Frontière historique entre la colonie espagnole et le territoire mapuche pendant près de trois siècles ; deuxième fleuve du pays par la longueur.",
    },
    source_location: "Lacs Icalma et Galletué, dans les Andes de l'Araucanie",
    mouth: "Océan Pacifique, à Concepción",
  },
  {
    name: "Baker",
    lengthKm: {
      value: 170,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Fleuve au plus fort débit du Chili, alimenté par les champs de glace de Patagonie ; un projet de grands barrages y a été abandonné en 2014 après une forte mobilisation.",
    },
    source_location: "Lac Bertrand, alimenté par le lac General Carrera (région d'Aysén)",
    mouth: "Océan Pacifique (fjord), près de Caleta Tortel",
  },
];
