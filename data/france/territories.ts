import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const INSEE = "INSEE — Code officiel géographique";
const INSEE_URL = "https://www.insee.fr/fr/information/2114819";

export const territories: TerritoriesData = {
  summary:
    "La France métropolitaine est organisée en régions et départements. Cinq départements et régions d'outre-mer (DROM) ainsi que plusieurs collectivités d'outre-mer complètent le territoire national, chacun avec un statut institutionnel spécifique.",
  divisions: [
    { name: "Régions", count: 18, note: "13 régions métropolitaines et 5 régions d'outre-mer.", source: INSEE, sourceUrl: INSEE_URL },
    { name: "Départements", count: 101, note: "96 départements métropolitains et 5 départements d'outre-mer.", source: INSEE, sourceUrl: INSEE_URL },
    { name: "Communes", count: 34_875, note: "Au 1ᵉʳ janvier 2025.", source: INSEE, sourceUrl: INSEE_URL },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/france-overseas.json",
  overseas: [
    { name: "Guadeloupe", status: "Département et région d'outre-mer (DROM)", mapGroupId: "guadeloupe" },
    { name: "Martinique", status: "Département et région d'outre-mer (DROM)", mapGroupId: "martinique" },
    { name: "Guyane", status: "Département et région d'outre-mer (DROM)", mapGroupId: "guyane" },
    { name: "La Réunion", status: "Département et région d'outre-mer (DROM)", mapGroupId: "la-reunion" },
    { name: "Mayotte", status: "Département et région d'outre-mer (DROM)", mapGroupId: "mayotte" },
    { name: "Polynésie française", status: "Collectivité d'outre-mer (COM)", mapGroupId: "polynesie-francaise" },
    { name: "Nouvelle-Calédonie", status: "Collectivité à statut sui generis", mapGroupId: "nouvelle-caledonie" },
    { name: "Saint-Pierre-et-Miquelon", status: "Collectivité d'outre-mer (COM)", mapGroupId: "saint-pierre-et-miquelon" },
    { name: "Wallis-et-Futuna", status: "Collectivité d'outre-mer (COM)", mapGroupId: "wallis-et-futuna" },
    { name: "Saint-Martin", status: "Collectivité d'outre-mer (COM)", mapGroupId: "saint-martin" },
    { name: "Saint-Barthélemy", status: "Collectivité d'outre-mer (COM)", mapGroupId: "saint-barthelemy" },
    { name: "Terres australes et antarctiques françaises", status: "Territoire d'outre-mer (TAAF)", mapGroupId: "taaf" },
  ],
};
