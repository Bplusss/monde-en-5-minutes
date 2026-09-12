import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const SU = "Štatistický úrad SR (Office statistique slovaque)";
const SU_URL = "https://en.wikipedia.org/wiki/Regions_of_Slovakia";

export const territories: TerritoriesData = {
  summary:
    "La Slovaquie est découpée en 8 régions (kraje), elles-mêmes subdivisées en districts (okresy) puis en communes, échelon de base de l'administration locale. Sans littoral ni île, le pays ne compte aucun territoire d'outre-mer ni collectivité non contiguë.",
  divisions: [
    { name: "Régions (kraje)", count: 8, source: SU, sourceUrl: SU_URL },
    { name: "Districts (okresy)", count: 79, source: SU, sourceUrl: "https://en.wikipedia.org/wiki/Districts_of_Slovakia" },
    { name: "Communes (obce)", count: 2_891, source: SU, sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_Slovakia" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
