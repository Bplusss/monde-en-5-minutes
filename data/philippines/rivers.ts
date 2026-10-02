import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Cagayan",
    lengthKm: {
      value: 505,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cagayan_River",
      note: "Plus long fleuve du pays, il draine la vallée du Cagayan, grenier à riz et à maïs du nord de Luzon.",
    },
    source_location: "Monts Caraballo, à Dupax del Sur (Nueva Vizcaya)",
    mouth: "Canal de Babuyan, à Aparri (Cagayan)",
  },
  {
    name: "Rio Grande de Mindanao",
    lengthKm: {
      value: 373,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Mindanao_River",
      note: "Longueur incluant son cours supérieur, le Pulangi ; deuxième bassin versant du pays.",
    },
    source_location: "Monts Kitanglad, Bukidnon (sous le nom de Pulangi)",
    mouth: "Baie d'Illana (golfe de Moro), à Cotabato",
  },
  {
    name: "Agusan",
    lengthKm: {
      value: 349,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Agusan_River",
      note: "Traverse les marais d'Agusan, zone humide protégée par la convention de Ramsar.",
    },
    source_location: "Mont Tagubud, Davao de Oro (est de Mindanao)",
    mouth: "Baie de Butuan (mer de Bohol)",
  },
  {
    name: "Pampanga",
    lengthKm: {
      value: 246,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Pampanga_River",
      note: "Irrigue la plaine centrale de Luzon, principale région rizicole du pays.",
    },
    source_location: "Sierra Madre (Luzon central)",
    mouth: "Baie de Manille, à Hagonoy (Bulacan)",
  },
  {
    name: "Agno",
    lengthKm: {
      value: 248,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Agno_River",
      note: "Barré par plusieurs grands barrages hydroélectriques (Ambuklao, Binga, San Roque).",
    },
    source_location: "Mont Data, Benguet (Cordillère centrale)",
    mouth: "Golfe de Lingayen (Pangasinan)",
  },
  {
    name: "Pasig",
    lengthKm: {
      value: 25.2,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Pasig_River",
      note: "Court émissaire du lac Laguna de Bay qui traverse Manille ; longtemps l'un des cours d'eau les plus pollués d'Asie.",
    },
    source_location: "Laguna de Bay",
    mouth: "Baie de Manille",
  },
];
