import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Japon est divisé en 47 préfectures (todōfuken) : la métropole (to) de Tokyo, le territoire (dō) de Hokkaidō, deux préfectures urbaines (fu), Ōsaka et Kyōto, et 43 préfectures ordinaires (ken). Le pays ne compte aucun territoire ultramarin peuplé au sens où d'autres États en administrent : ses îles les plus isolées, comme les Ogasawara ou Minami Torishima, sont rattachées administrativement à des préfectures de l'archipel principal (ici, Tokyo). Le Japon revendique en outre plusieurs territoires disputés, sans population civile sous administration japonaise : les îles Kouriles du Sud avec la Russie, les rochers Liancourt (Takeshima/Dokdo) avec la Corée du Sud, et les îles Senkaku avec la Chine et Taïwan.",
  divisions: [
    { name: "Préfectures (todōfuken)", count: 47, note: "1 métropole (Tokyo), 1 territoire (Hokkaidō), 2 préfectures urbaines (Ōsaka, Kyōto) et 43 préfectures ordinaires.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Prefectures_of_Japan" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
