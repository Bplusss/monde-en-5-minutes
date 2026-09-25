import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "La Corée du Sud est un État unitaire au découpage administratif mixte : une cité spéciale (Séoul), six villes métropolitaines à statut de province, une cité spéciale autonome (Sejong) et neuf provinces (do), dont trois « provinces spéciales autonomes » à compétences élargies — Jeju, Gangwon et Jeonbuk. Le pays ne possède aucun territoire d'outre-mer, mais administre depuis 1954 les îlots Dokdo, également revendiqués par le Japon sous le nom de Takeshima — un contentieux ancien, source récurrente de tension diplomatique.",
  divisions: [
    { name: "Cité spéciale", count: 1, note: "Séoul.", source: "Statistiques Corée (KOSIS)", sourceUrl: "https://kosis.kr/eng/" },
    { name: "Villes métropolitaines", count: 6, note: "Busan, Daegu, Incheon, Gwangju, Daejeon, Ulsan.", source: "Statistiques Corée (KOSIS)", sourceUrl: "https://kosis.kr/eng/" },
    { name: "Cité spéciale autonome", count: 1, note: "Sejong, créée en 2012.", source: "Statistiques Corée (KOSIS)", sourceUrl: "https://kosis.kr/eng/" },
    { name: "Provinces (do), dont provinces spéciales autonomes", count: 9, note: "Trois provinces spéciales autonomes à compétences élargies : Jeju, Gangwon, Jeonbuk.", source: "Statistiques Corée (KOSIS)", sourceUrl: "https://kosis.kr/eng/" },
    {
      name: "Îlots Dokdo (Takeshima), disputés avec le Japon",
      count: 1,
      note: "Sous administration sud-coréenne depuis 1954, mais aussi revendiqués par le Japon.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Liancourt_Rocks_dispute",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
