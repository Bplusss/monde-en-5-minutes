import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Kazakhstan est un État unitaire divisé en 17 régions (oblys) et en 3 villes à statut républicain : Astana, Almaty et Chymkent. Les gouverneurs (akims) des régions sont nommés par le président, mais une partie des akims de district et de village est désormais élue. Le découpage a beaucoup changé : Chymkent est devenue ville à statut républicain en 2018, la région du Kazakhstan-Méridional a alors été rebaptisée Turkestan, et trois régions ont été créées en 2022 (Abaï, Jetyssou et Oulytaou) en recréant des provinces supprimées dans les années 1990. La ville de Baïkonour et son cosmodrome, dans la région de Kyzylorda, sont loués à la Russie, qui les administre jusqu'en 2050.",
  divisions: [
    { name: "Régions (oblys)", count: 17, source: "Bureau of National Statistics", sourceUrl: "https://stat.gov.kz/en/" },
    { name: "Villes à statut républicain", count: 3, note: "Astana, Almaty et Chymkent, rattachées directement au gouvernement central.", source: "Bureau of National Statistics", sourceUrl: "https://stat.gov.kz/en/" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
