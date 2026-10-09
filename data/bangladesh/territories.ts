import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Bangladesh est un État unitaire très centralisé, divisé en 8 divisions, 64 districts et près de 500 upazilas (sous-districts). Les divisions, qui portent le nom de leur chef-lieu, sont des échelons administratifs sans assemblée élue ; Mymensingh, la plus récente, a été créée en 2015. Les Chittagong Hill Tracts, au sud-est, peuplés en grande partie de peuples autochtones, disposent d'un statut particulier depuis l'accord de paix de 1997, qui a mis fin à vingt ans d'insurrection. Le pays a réglé en 2015 avec l'Inde l'échange de plus de 160 enclaves enchevêtrées le long de leur frontière.",
  divisions: [
    { name: "Divisions", count: 8, source: "Bangladesh Bureau of Statistics", sourceUrl: "https://bbs.gov.bd/" },
    { name: "Districts", count: 64, source: "Bangladesh Bureau of Statistics", sourceUrl: "https://bbs.gov.bd/" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
