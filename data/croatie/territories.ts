import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const DZS = "Office croate de la statistique (DZS)";
const DZS_URL = "https://en.wikipedia.org/wiki/Counties_of_Croatia";

export const territories: TerritoriesData = {
  summary:
    "La Croatie est découpée en 20 comtés (županije) et la Ville de Zagreb, qui a le statut de comté à part entière. Chaque comté regroupe à son tour des villes et des municipalités, échelon de base de l'administration locale.",
  divisions: [
    { name: "Comtés (županije)", count: 20, source: DZS, sourceUrl: DZS_URL },
    { name: "Ville de Zagreb", count: 1, note: "Statut particulier, cumulant les compétences d'un comté et d'une ville.", source: DZS, sourceUrl: DZS_URL },
    { name: "Villes et municipalités", count: 555, note: "128 villes et 427 municipalités (općine).", source: DZS, sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_Croatia" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
