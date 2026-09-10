import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const SRC = "Govern d'Andorra";
const SRC_URL = "https://en.wikipedia.org/wiki/Parishes_of_Andorra";

export const territories: TerritoriesData = {
  summary:
    "L'Andorre est divisée en 7 paroisses (parròquies), échelon administratif unique hérité du Moyen Âge, chacune dotée de son propre conseil communal (comú) doté d'une large autonomie de gestion.",
  divisions: [{ name: "Paroisses (parròquies)", count: 7, source: SRC, sourceUrl: SRC_URL }],
  metropolitanRegions: regions,
  overseas: [],
};
