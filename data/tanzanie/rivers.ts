import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Rufiji",
    lengthKm: {
      value: 600,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Le plus grand fleuve entièrement tanzanien ; le barrage Julius-Nyerere, la plus grande centrale du pays, le retient dans le parc Nyerere.",
    },
    source_location: "Confluence de la Kilombero et de la Luwegu (sud du pays)",
    mouth: "Océan Indien, face à l'île de Mafia, par un vaste delta de mangroves",
  },
  {
    name: "Grand Ruaha",
    lengthKm: {
      value: 475,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Principal affluent du Rufiji, il traverse le parc national de Ruaha ; les prélèvements pour l'irrigation l'assèchent parfois en saison sèche.",
    },
    source_location: "Monts Kipengere (région de Njombe)",
    mouth: "Rufiji",
  },
  {
    name: "Pangani",
    lengthKm: {
      value: 500,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Alimenté par les eaux du Kilimandjaro et du mont Meru, il fait tourner plusieurs centrales hydroélectriques.",
    },
    source_location: "Région d'Arusha, au pied du Kilimandjaro et du mont Meru",
    mouth: "Océan Indien, à Pangani (région de Tanga)",
  },
  {
    name: "Malagarasi",
    lengthKm: {
      value: 475,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Principal fleuve de l'ouest du pays ; ses vastes marais sont protégés par la convention de Ramsar.",
    },
    source_location: "Collines du Burundi, près de la frontière",
    mouth: "Lac Tanganyika, au sud de Kigoma",
  },
  {
    name: "Kagera",
    lengthKm: {
      value: 400,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Considérée comme la branche la plus lointaine du Nil, elle forme la frontière avec le Rwanda puis une partie de celle avec l'Ouganda.",
    },
    source_location: "Confluence de la Nyabarongo et de la Ruvubu (Rwanda-Burundi)",
    mouth: "Lac Victoria",
  },
];
