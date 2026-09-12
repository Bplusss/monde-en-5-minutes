import type { River } from "@/lib/types";

const SRC = "Wikipedia (liste des cours d'eau du Japon)";
const URL = "https://en.wikipedia.org/wiki/List_of_rivers_of_Japan";

export const rivers: River[] = [
  {
    name: "Shinano",
    lengthKm: { value: 367, unit: "km", source: SRC, sourceUrl: URL, note: "Le plus long fleuve du Japon." },
    source_location: "Mont Kobushi, massif frontalier des préfectures de Nagano, Yamanashi et Saitama",
    mouth: "Mer du Japon, à Niigata",
  },
  {
    name: "Tone",
    lengthKm: { value: 322, unit: "km", source: SRC, sourceUrl: URL, note: "Bassin versant le plus étendu du Japon, alimentant en eau une large partie de l'agglomération de Tokyo." },
    source_location: "Mont Ōminakami, préfecture de Gunma",
    mouth: "Océan Pacifique, à Chōshi (préfecture de Chiba)",
  },
  {
    name: "Ishikari",
    lengthKm: { value: 268, unit: "km", source: SRC, sourceUrl: URL, note: "Principal fleuve de Hokkaidō." },
    source_location: "Mont Ishikari, chaîne du Daisetsuzan (Hokkaidō)",
    mouth: "Mer du Japon, près de la ville d'Ishikari",
  },
  {
    name: "Kitakami",
    lengthKm: { value: 249, unit: "km", source: SRC, sourceUrl: URL },
    source_location: "Monts Nanashigure, préfecture d'Iwate",
    mouth: "Océan Pacifique, près d'Ishinomaki (préfecture de Miyagi)",
  },
];
