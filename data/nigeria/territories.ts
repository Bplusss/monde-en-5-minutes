import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Nigeria est une fédération de 36 États, auxquels s'ajoute le Territoire de la capitale fédérale (Abuja, créée de toutes pièces et devenue capitale en 1991 en remplacement de Lagos, jugée trop congestionnée et périphérique par rapport à l'ensemble du territoire). Chaque État est à son tour subdivisé en zones de gouvernement local (Local Government Areas, LGA), échelon de base de l'administration nigériane, au nombre de 774 pour l'ensemble du pays. Le Nigeria ne possède aucun territoire d'outre-mer.",
  divisions: [
    { name: "États fédérés", count: 36, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/States_of_Nigeria" },
    { name: "Territoire de la capitale fédérale", count: 1, note: "Abuja, capitale du pays depuis 1991.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Federal_Capital_Territory,_Nigeria" },
    { name: "Zones de gouvernement local (LGA)", count: 774, note: "Échelon administratif de base, réparti entre les 36 États et le Territoire de la capitale fédérale.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Local_government_areas_of_Nigeria" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
