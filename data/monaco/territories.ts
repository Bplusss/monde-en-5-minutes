import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Monaco ne comporte aucune division administrative interne : c'est une commune unique, gouvernée comme un seul et même territoire. Le pays est usuellement découpé de façon informelle en une dizaine de quartiers historiques ou urbanistiques (Monaco-Ville, Monte-Carlo, La Condamine, Fontvieille, Le Portier...), qui n'ont ni statut juridique ni gouvernement local propres.",
  divisions: [],
  metropolitanRegions: regions,
  overseas: [],
};
