import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Constitution serbe de 2006 divise le pays en municipalités et villes, regroupées en districts (okruzi, au nombre de 25 hors Kosovo, dont la ville de Belgrade), et reconnaît deux provinces autonomes : la Voïvodine, au nord, dotée d'une assemblée et d'un gouvernement provincial élus, et le Kosovo-Metohija, au sud. Ce dernier échappe cependant à toute administration effective de Belgrade depuis le retrait des forces serbes en juin 1999 (voir l'historique dans la section Histoire) et le placement du territoire sous administration civile internationale par la résolution 1244 du Conseil de sécurité de l'ONU. Les institutions du Kosovo ont déclaré unilatéralement son indépendance le 17 février 2008 ; cette indépendance est reconnue par une centaine des 193 États membres de l'ONU (dont les États-Unis et la majorité des pays de l'Union européenne), mais pas par la Serbie elle-même, ni par la Russie, la Chine, l'Espagne, ou quatre autres États membres de l'UE, entre autres. La Constitution serbe continue de désigner le Kosovo comme une province autonome faisant partie intégrante du territoire national. Cette présentation se limite à exposer ces faits juridiques et administratifs vérifiables, sans se prononcer sur le statut du Kosovo.",
  divisions: [
    { name: "Districts (okruzi)", count: 25, note: "Y compris la ville de Belgrade, statutairement distincte. Hors Kosovo.", source: "Office statistique de la République de Serbie (RZS)", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_districts_of_Serbia" },
    { name: "Province autonome", count: 1, note: "Voïvodine, dotée d'une assemblée et d'un gouvernement provincial élus.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Vojvodina" },
    { name: "Province autonome revendiquée, sans administration effective", count: 1, note: "Kosovo-Metohija : désigné par la Constitution serbe comme partie intégrante du territoire national, mais sous administration de facto des institutions kosovares depuis 1999 et sans contrôle effectif de Belgrade ; indépendance déclarée unilatéralement en 2008, reconnue par environ 100 des 193 États membres de l'ONU mais pas par la Serbie.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Kosovo" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
