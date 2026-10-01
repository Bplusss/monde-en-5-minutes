import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Cameroun est un État unitaire décentralisé, divisé en 10 régions, elles-mêmes subdivisées en 58 départements et 360 arrondissements. Huit régions sont francophones ; le Nord-Ouest et le Sud-Ouest, issus de l'ancien Cameroun méridional sous tutelle britannique, sont anglophones et bénéficient depuis 2019 d'un « statut spécial » (assemblées régionales propres, prise en compte de la common law et du système éducatif anglo-saxon), jugé insuffisant par les séparatistes. Les premiers conseils régionaux ont été élus en 2020. La péninsule de Bakassi, riche en ressources halieutiques et pétrolières et longtemps disputée avec le Nigeria, a été attribuée au Cameroun par la Cour internationale de justice en 2002 ; son transfert s'est achevé en 2008 en application de l'accord de Greentree. Le pays ne possède aucun territoire non contigu.",
  divisions: [
    { name: "Régions", count: 10, note: "Dont 2 régions anglophones (Nord-Ouest, Sud-Ouest) dotées d'un statut spécial depuis 2019.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Cameroon" },
    { name: "Départements", count: 58, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Departments_of_Cameroon" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
