import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Han-gang (Han)",
    lengthKm: {
      value: 514,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Han_River_(Korea)",
      note: "Formé par la confluence du Han du Sud (Namhan-gang) et du Han du Nord (Bukhan-gang, dont la source se trouve en Corée du Nord), il traverse Séoul d'est en ouest et donne son nom au « miracle du fleuve Han », symbole de la reconstruction et du développement économique rapide de la Corée du Sud après-guerre ; ses berges aménagées (Hangang Park) sont aujourd'hui l'un des principaux espaces de loisirs de la capitale.",
    },
    source_location: "Monts Taebaek, région du Gangwon (branche du Han du Sud)",
    mouth: "Mer Jaune, estuaire partagé avec la Corée du Nord près de Gimpo",
  },
  {
    name: "Nakdong-gang (Nakdong)",
    lengthKm: {
      value: 525,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Nakdong_River",
      note: "Plus long fleuve entièrement compris dans les frontières de la Corée du Sud ; il traverse Daegu et se jette près de Busan, irriguant l'une des plus importantes plaines agricoles et l'un des principaux couloirs industriels du sud-est du pays.",
    },
    source_location: "Source de Hwangji, mont Taebaek (Gangwon)",
    mouth: "Détroit de Corée, estuaire près de Busan",
  },
  {
    name: "Geum-gang (Geum)",
    lengthKm: {
      value: 401,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Geum_River",
      note: "Traverse Daejeon et Gongju, ancienne capitale du royaume de Baekje, avant de former une vaste zone humide estuarienne près de Gunsan, réaménagée par un barrage-estuaire construit dans les années 1990.",
    },
    source_location: "Mont Jangan, comté de Jinan (province de Jeolla du Nord)",
    mouth: "Mer Jaune, près de Gunsan",
  },
  {
    name: "Yeongsan-gang (Yeongsan)",
    lengthKm: {
      value: 136,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Yeongsan_River",
      note: "Le plus court des quatre grands fleuves sud-coréens, mais celui qui structure l'essentiel de la plaine agricole du Jeolla du Sud ; son estuaire, près de Mokpo, a été transformé en lac d'eau douce par un barrage construit dans les années 1980.",
    },
    source_location: "Mont Yongchu, comté de Damyang (province de Jeolla du Sud)",
    mouth: "Mer Jaune, près de Mokpo",
  },
];
