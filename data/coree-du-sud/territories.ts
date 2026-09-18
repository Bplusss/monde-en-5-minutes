import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "La Corée du Sud est un État unitaire dont le découpage administratif de premier niveau, contrairement à un simple maillage de provinces uniformes, mêle plusieurs statuts hérités de son histoire administrative récente : une cité spéciale (Séoul), six villes métropolitaines à statut équivalent à celui d'une province (Busan, Daegu, Incheon, Gwangju, Daejeon, Ulsan), une cité spéciale autonome (Sejong, créée en 2012 pour accueillir une partie de l'administration centrale délocalisée de la capitale) et neuf provinces (do), dont trois disposent désormais d'un statut renforcé de « province spéciale autonome » — Jeju depuis 2006, Gangwon depuis 2023 et Jeollabuk-do (Jeonbuk) depuis 2024 — leur conférant des compétences élargies en matière de développement économique, de tourisme ou de coopération transfrontalière. La Corée du Sud ne possède aucun territoire d'outre-mer. Elle administre en revanche depuis 1954 les îlots Dokdo (Liancourt) en mer de l'Est/mer du Japon, également revendiqués par le Japon sous le nom de Takeshima — un contentieux territorial ancien et non résolu qui reste une source récurrente de tension diplomatique entre Séoul et Tokyo, bien qu'il n'ait jamais dégénéré en conflit ouvert.",
  divisions: [
    { name: "Cité spéciale", count: 1, note: "Séoul, capitale du pays.", source: "Statistiques Corée (KOSIS)", sourceUrl: "https://kosis.kr/eng/" },
    { name: "Villes métropolitaines", count: 6, note: "Busan, Daegu, Incheon, Gwangju, Daejeon, Ulsan.", source: "Statistiques Corée (KOSIS)", sourceUrl: "https://kosis.kr/eng/" },
    { name: "Cité spéciale autonome", count: 1, note: "Sejong, créée en 2012.", source: "Statistiques Corée (KOSIS)", sourceUrl: "https://kosis.kr/eng/" },
    { name: "Provinces (do), dont provinces spéciales autonomes", count: 9, note: "Six provinces ordinaires (Gyeonggi, Chungcheong du Nord, Chungcheong du Sud, Jeolla du Sud, Gyeongsang du Nord, Gyeongsang du Sud) et trois provinces spéciales autonomes à compétences élargies (Jeju depuis 2006, Gangwon depuis 2023, Jeonbuk depuis 2024).", source: "Statistiques Corée (KOSIS)", sourceUrl: "https://kosis.kr/eng/" },
    {
      name: "Îlots Dokdo (Takeshima), disputés avec le Japon",
      count: 1,
      note: "Sous administration sud-coréenne effective depuis 1954, mais également revendiqués par le Japon ; contentieux territorial non résolu.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Liancourt_Rocks_dispute",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
