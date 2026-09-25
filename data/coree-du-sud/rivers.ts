import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Han-gang (Han)",
    lengthKm: {
      value: 514,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Han_River_(Korea)",
      note: "Traverse Séoul et donne son nom au « miracle du fleuve Han ».",
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
      note: "Plus long fleuve entièrement compris en Corée du Sud ; traverse Daegu.",
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
      note: "Traverse Daejeon et Gongju, ancienne capitale du royaume de Baekje.",
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
      note: "Le plus court des quatre grands fleuves du pays.",
    },
    source_location: "Mont Yongchu, comté de Damyang (province de Jeolla du Sud)",
    mouth: "Mer Jaune, près de Mokpo",
  },
];
