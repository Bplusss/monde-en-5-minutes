import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "L'Afrique du Sud est un État unitaire divisé en 9 provinces, elles-mêmes subdivisées en 8 municipalités métropolitaines (les grandes agglomérations, dont Johannesburg, Le Cap, eThekwini/Durban et Tshwane/Pretoria), 44 districts municipaux et 205 municipalités locales. Au large de ses côtes, le pays administre également les îles subantarctiques du Prince Édouard (Marion et Prince Édouard), un territoire isolé et inhabité en dehors d'une base scientifique permanente, annexé en 1947-1948 — la seule possession du pays en dehors de son territoire continental.",
  divisions: [
    { name: "Provinces", count: 9, source: "Statistics South Africa (Stats SA)", sourceUrl: "https://www.statssa.gov.za/" },
    { name: "Municipalités métropolitaines", count: 8, note: "Johannesburg, Le Cap, eThekwini (Durban), Tshwane (Pretoria), Ekurhuleni, Nelson Mandela Bay, Mangaung (Bloemfontein), Buffalo City.", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Metropolitan_municipality_(South_Africa)" },
    { name: "Districts municipaux et municipalités locales", count: 44, note: "Regroupant au total 205 municipalités locales à l'échelon de base, en dehors des zones métropolitaines.", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Districts_of_South_Africa" },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/afrique-du-sud-overseas.json",
  overseas: [
    {
      name: "Îles du Prince Édouard (Marion et Prince Édouard)",
      status: "Territoire inhabité (hors base scientifique permanente) sous souveraineté sud-africaine directe depuis leur annexion en 1947-1948 ; réserve naturelle spéciale protégée depuis 1995, à environ 1 900 km au sud-est du Cap dans l'océan Indien subantarctique.",
      population: {
        value: 0,
        unit: "habitants permanents",
        source: WIKI,
        sourceUrl: "https://en.wikipedia.org/wiki/Prince_Edward_Islands",
        note: "Aucune population permanente ; seule l'île Marion accueille une station de recherche scientifique sud-africaine occupée en continu depuis 1948 par des équipes tournantes d'une quarantaine de personnes au maximum.",
      },
      mapGroupId: "prince-edward-islands",
    },
  ],
};
