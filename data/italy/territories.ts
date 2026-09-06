import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const ISTAT = "ISTAT";
const ISTAT_URL = "https://www.istat.it/classificazione/principali-statistiche-geografiche-sui-comuni/";

export const territories: TerritoriesData = {
  summary:
    "L'Italie est organisée en régions, elles-mêmes divisées en provinces et villes métropolitaines, puis en communes. Cinq régions (Vallée d'Aoste, Trentin-Haut-Adige, Frioul-Vénétie julienne, Sicile, Sardaigne) disposent d'un statut spécial leur accordant une autonomie renforcée.",
  divisions: [
    { name: "Régions", count: 20, note: "Dont 5 à statut spécial.", source: ISTAT, sourceUrl: ISTAT_URL },
    {
      name: "Provinces et villes métropolitaines",
      count: 107,
      note: "Unités administratives de second niveau, dont 14 villes métropolitaines.",
      source: ISTAT,
      sourceUrl: ISTAT_URL,
    },
    { name: "Communes", count: 7904, note: "Comuni.", source: ISTAT, sourceUrl: ISTAT_URL },
  ],
  metropolitanRegions: regions,
  // L'Italie n'a pas de territoire d'outre-mer : l'architecture reste générique et gère
  // simplement l'absence de données ici (voir OverseasTerritoriesGrid / WorldTerritoriesMap).
  overseas: [],
};
