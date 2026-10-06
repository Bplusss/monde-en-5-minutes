import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Pérou est un État unitaire décentralisé. Ses 24 départements et la province constitutionnelle de Callao sont dotés de gouvernements régionaux élus ; la province de Lima, qui forme Lima Métropolitaine, a un statut à part et n'appartient à aucune région. Le territoire se subdivise en 196 provinces et plus de 1 800 districts. Les frontières sont aujourd'hui toutes fixées : le dernier différend, maritime, avec le Chili a été tranché par la Cour internationale de justice en 2014.",
  divisions: [
    { name: "Départements (régions)", count: 24, source: "INEI", sourceUrl: "https://www.inei.gob.pe/" },
    { name: "Province constitutionnelle", count: 1, note: "Callao, principal port du pays.", source: "INEI", sourceUrl: "https://www.inei.gob.pe/" },
    { name: "Province de Lima (Lima Métropolitaine)", count: 1, note: "Régime spécial : la municipalité métropolitaine exerce les compétences d'un gouvernement régional.", source: "INEI", sourceUrl: "https://www.inei.gob.pe/" },
    { name: "Provinces", count: 196, source: "INEI", sourceUrl: "https://www.inei.gob.pe/" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
