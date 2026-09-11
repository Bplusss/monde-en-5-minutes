import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Héritage direct des accords de paix de Dayton (1995), la Bosnie-Herzégovine se compose de deux entités quasi autonomes — la Fédération de Bosnie-et-Herzégovine, elle-même subdivisée en 10 cantons, et la Republika Srpska, organisée en municipalités regroupées ici en 7 régions statistiques — ainsi que du district de Brčko, sous administration conjointe des deux entités. Chaque entité dispose de son propre gouvernement, parlement et souvent de sa propre police, l'État central ne conservant que des compétences limitées (défense, politique étrangère, monnaie).",
  divisions: [
    { name: "Entités constitutives", count: 2, note: "Fédération de Bosnie-et-Herzégovine et Republika Srpska.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_divisions_of_Bosnia_and_Herzegovina" },
    { name: "Cantons (Fédération de Bosnie-et-Herzégovine)", count: 10, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Cantons_of_the_Federation_of_Bosnia_and_Herzegovina" },
    { name: "District sous administration conjointe", count: 1, note: "District de Brčko.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Br%C4%8Dko_District" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
