import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const OFS = "Office fédéral de la statistique (OFS)";
const OFS_URL = "https://www.bfs.admin.ch/bfs/fr/home/bases-statistiques/repertoire-officiel-communes-suisse.html";

export const territories: TerritoriesData = {
  summary:
    "La Suisse est une confédération de 26 cantons, souverains dans tous les domaines que la Constitution fédérale ne réserve pas à la Confédération. Chaque canton est à son tour divisé en communes, dont le nombre diminue régulièrement du fait des fusions.",
  divisions: [
    { name: "Cantons", count: 26, source: OFS, sourceUrl: OFS_URL },
    { name: "Communes", count: 2121, note: "Au 1ᵉʳ janvier 2025 ; en baisse constante du fait des fusions.", source: OFS, sourceUrl: OFS_URL },
  ],
  metropolitanRegions: regions,
  // La Suisse n'a pas de territoire d'outre-mer : l'architecture reste générique et gère
  // simplement l'absence de données ici (voir OverseasTerritoriesGrid / WorldTerritoriesMap).
  overseas: [],
};
