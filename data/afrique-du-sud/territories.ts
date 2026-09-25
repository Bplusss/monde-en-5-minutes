import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "L'Afrique du Sud est un État unitaire divisé en 9 provinces, elles-mêmes subdivisées en 8 municipalités métropolitaines (dont Johannesburg, Le Cap et Tshwane/Pretoria), 44 districts municipaux et 205 municipalités locales. Au large de ses côtes, le pays administre aussi les îles subantarctiques du Prince Édouard, inhabitées hors base scientifique, annexées en 1947-1948 — sa seule possession hors du territoire continental.",
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
      status: "Territoire inhabité (hors base scientifique) sous souveraineté sud-africaine depuis 1947-1948 ; réserve naturelle spéciale depuis 1995, à environ 1 900 km au sud-est du Cap.",
      population: {
        value: 0,
        unit: "habitants permanents",
        source: WIKI,
        sourceUrl: "https://en.wikipedia.org/wiki/Prince_Edward_Islands",
        note: "Seule l'île Marion accueille une station de recherche occupée en continu depuis 1948 par des équipes tournantes d'une quarantaine de personnes.",
      },
      mapGroupId: "prince-edward-islands",
    },
  ],
};
