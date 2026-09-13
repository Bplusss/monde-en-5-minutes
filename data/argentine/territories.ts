import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "L'Argentine est une fédération de 23 provinces et d'une ville autonome, Buenos Aires, siège du gouvernement fédéral. Le pays revendique par ailleurs la souveraineté sur trois territoires effectivement administrés par le Royaume-Uni depuis le XIXe siècle : les îles Malouines (Malvinas en espagnol, Falkland en anglais), occupées militairement par l'Argentine en avril 1982 puis reprises par les forces britanniques à l'issue de la guerre des Malouines la même année ; la Géorgie du Sud-et-les îles Sandwich du Sud ; ainsi qu'un secteur de l'Antarctique (Antártida Argentina) que revendiquent également le Royaume-Uni et le Chili, avec des tracés se recoupant partiellement, et dont la souveraineté est gelée par le traité sur l'Antarctique de 1959 tant que celui-ci reste en vigueur. Aucun de ces trois territoires n'étant sous administration effective argentine, ils ne figurent pas parmi les territoires du pays au sens propre et sont traités ici uniquement pour mémoire.",
  divisions: [
    { name: "Provinces", count: 23, source: "INDEC", sourceUrl: "https://www.indec.gob.ar/" },
    { name: "Ville autonome", count: 1, note: "Ciudad Autónoma de Buenos Aires (CABA), capitale fédérale.", source: "INDEC", sourceUrl: "https://www.indec.gob.ar/" },
    {
      name: "Territoires revendiqués, administrés par le Royaume-Uni",
      count: 3,
      note: "Îles Malouines (Falkland), Géorgie du Sud-et-îles Sandwich du Sud, et secteur de l'Antarctique — revendiqués par l'Argentine mais sans administration effective de sa part ; un référendum organisé par les autorités britanniques en 2013 auprès des habitants des Malouines a vu 99,8 % des votants se prononcer pour le maintien du statut de territoire britannique d'outre-mer.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Falkland_Islands_sovereignty_dispute",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
