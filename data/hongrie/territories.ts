import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const KSH = "KSH (Office central hongrois de la statistique)";
const KSH_URL = "https://en.wikipedia.org/wiki/Counties_of_Hungary";

export const territories: TerritoriesData = {
  summary:
    "La Hongrie est découpée en 19 comitats (megyék) et la capitale Budapest, qui a le statut d'un comitat à part entière. Vingt-trois autres villes, dites « à droits de comitat » (megyei jogú város), exercent certaines compétences comitales tout en restant rattachées géographiquement à leur comitat, avant l'échelon de base que sont les districts (járás) et les communes.",
  divisions: [
    { name: "Comitats (megyék)", count: 19, source: KSH, sourceUrl: KSH_URL },
    { name: "Budapest (capitale, statut de comitat)", count: 1, source: KSH, sourceUrl: KSH_URL },
    { name: "Villes à droits de comitat", count: 23, note: "Statut administratif particulier, sans détachement territorial du comitat environnant.", source: KSH, sourceUrl: "https://en.wikipedia.org/wiki/Urban_counties_of_Hungary" },
    { name: "Districts (járások)", count: 197, source: KSH, sourceUrl: "https://en.wikipedia.org/wiki/Districts_of_Hungary" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
