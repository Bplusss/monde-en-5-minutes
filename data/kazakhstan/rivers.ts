import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Irtych",
    lengthKm: {
      value: 4_248,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Né en Chine, il traverse le nord-est du pays, où il alimente les grandes centrales hydroélectriques de l'Altaï, avant de rejoindre l'Ob en Sibérie.",
    },
    source_location: "Altaï mongol (Chine)",
    mouth: "Ob, à Khanty-Mansiïsk (Russie)",
  },
  {
    name: "Ichim",
    lengthKm: {
      value: 2_450,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Affluent de l'Irtych appelé Essil en kazakh, il traverse Astana avant de couler vers la Sibérie.",
    },
    source_location: "Monts Niaz, dans la région de Karaganda",
    mouth: "Irtych (Russie)",
  },
  {
    name: "Oural",
    lengthKm: {
      value: 2_428,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Considéré comme une partie de la limite entre l'Europe et l'Asie, il traverse Ouralsk et Atyraou.",
    },
    source_location: "Monts Oural (Russie)",
    mouth: "Mer Caspienne, à Atyraou",
  },
  {
    name: "Syr-Daria",
    lengthKm: {
      value: 2_212,
      unit: "km",
      source: "Encyclopædia Britannica",
      note: "Venu du Ferghana, il traverse le sud du pays ; ses eaux, détournées pour l'irrigation, n'atteignent plus qu'en partie la mer d'Aral.",
    },
    source_location: "Vallée de Ferghana (confluence du Naryn et du Kara-Daria, Ouzbékistan)",
    mouth: "Petite mer d'Aral (partie nord)",
  },
  {
    name: "Ili",
    lengthKm: {
      value: 1_439,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Venue du Xinjiang chinois, elle fournit l'essentiel de l'eau du lac Balkhach ; le barrage de Kaptchagaï forme un grand lac de retenue au nord d'Almaty.",
    },
    source_location: "Tian Shan (Xinjiang, Chine)",
    mouth: "Lac Balkhach",
  },
];
