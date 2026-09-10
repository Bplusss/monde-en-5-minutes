import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "L'État de la Cité du Vatican ne comporte aucune division administrative interne : son territoire unique, entièrement urbain, est géré directement par la Commission pontificale et le Gouvernorat, sans échelon régional ou communal. Le Saint-Siège dispose par ailleurs, hors du territoire vaticanais, d'un statut extraterritorial sur certains bâtiments à Rome (dont la basilique Saint-Jean-de-Latran) et sur la résidence d'été de Castel Gandolfo, garanti par le traité du Latran.",
  divisions: [],
  metropolitanRegions: regions,
  overseas: [],
};
