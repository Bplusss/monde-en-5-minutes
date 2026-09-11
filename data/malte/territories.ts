import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const SRC = "Office national de la statistique de Malte (NSO)";
const SRC_URL = "https://nso.gov.mt/";

export const territories: TerritoriesData = {
  summary:
    "Malte ne comporte pas d'échelon régional intermédiaire doté d'un gouvernement propre : ses 68 conseils locaux (local councils) — 54 sur l'île de Malte, 14 sur Gozo — forment directement l'échelon de base de l'administration locale, et c'est ce découpage qu'affiche la carte ci-dessous. Ils sont par ailleurs regroupés à des fins statistiques en 6 régions administratives, sans existence gouvernementale propre.",
  divisions: [
    { name: "Conseils locaux (local councils)", count: 68, source: SRC, sourceUrl: SRC_URL },
    { name: "Régions administratives statistiques", count: 6, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Malta" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
