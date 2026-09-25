import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Kapuas",
    lengthKm: {
      value: 1_143,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Kapuas_River",
      note: "Plus long fleuve d'Indonésie, axe de transport essentiel pour l'intérieur du Kalimantan-Ouest.",
    },
    source_location: "Monts Müller, dans les hautes terres du centre de Bornéo (Kalimantan-Ouest)",
    mouth: "Mer de Chine méridionale, près de Pontianak",
  },
  {
    name: "Barito",
    lengthKm: {
      value: 1_090,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Barito_River",
      note: "Deuxième plus long fleuve de Bornéo ; son estuaire abrite les marchés flottants de Banjarmasin.",
    },
    source_location: "Monts Muller-Schwaner, Kalimantan central",
    mouth: "Mer de Java, près de Banjarmasin (Kalimantan-Sud)",
  },
  {
    name: "Mahakam",
    lengthKm: {
      value: 980,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Mahakam_River",
      note: "Principal fleuve du Kalimantan-Est, dont le delta abrite une rare population de dauphins d'eau douce d'Irrawaddy.",
    },
    source_location: "District de Long Apari, hautes terres du centre de Bornéo (Kalimantan-Est)",
    mouth: "Détroit de Makassar, près de Samarinda",
  },
  {
    name: "Musi",
    lengthKm: {
      value: 750,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Musi_River",
      note: "Fleuve sur lequel s'est développée dès le VIIe siècle la puissance maritime de Srivijaya.",
    },
    source_location: "Monts Bukit Barisan, Sumatra du Sud",
    mouth: "Détroit de Bangka, près de Palembang",
  },
  {
    name: "Bengawan Solo",
    lengthKm: {
      value: 600,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Solo_River",
      note: "Plus long fleuve de Java ; son bassin a livré d'importants fossiles d'Homo erectus (l'« Homme de Java »).",
    },
    source_location: "Mont Lawu, Java central",
    mouth: "Mer de Java, près de Gresik (Java de l'Est)",
  },
];
