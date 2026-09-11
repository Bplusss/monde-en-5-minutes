import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Moldavie se divise en 32 raions et 2 municipalités (Chișinău et Bălți), auxquels s'ajoute l'unité territoriale autonome de Găgăuzia, dotée de son propre gouvernement et de sa propre assemblée. À l'est du Dniestr, la région de Transnistrie s'est déclarée unilatéralement indépendante en 1990 et échappe depuis à tout contrôle effectif de Chișinău, sans reconnaissance internationale ; elle est représentée ici selon le découpage administratif que ses autorités de facto y appliquent.",
  divisions: [
    { name: "Raions", count: 32, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_divisions_of_Moldova" },
    { name: "Municipalités", count: 2, note: "Chișinău et Bălți.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_divisions_of_Moldova" },
    { name: "Unité territoriale autonome", count: 1, note: "Găgăuzia.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Gagauzia" },
    { name: "Territoire séparatiste non reconnu", count: 1, note: "Transnistrie, hors du contrôle de l'administration moldave depuis 1992.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Transnistria" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
