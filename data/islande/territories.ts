import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const SRC = "Statistics Iceland (Hagstofa Íslands)";
const SRC_URL = "https://www.statice.is/";

export const territories: TerritoriesData = {
  summary:
    "L'Islande est découpée à des fins statistiques en 8 régions (landsvæði), dont la zone de la capitale concentre à elle seule près des deux tiers de la population. L'échelon administratif réel reste toutefois la municipalité (sveitarfélag) : le pays en comptait environ 60 avant une vague de fusions qui en réduit régulièrement le nombre.",
  divisions: [
    { name: "Régions statistiques (landsvæði)", count: 8, source: SRC, sourceUrl: SRC_URL },
    { name: "Municipalités (sveitarfélög)", count: 64, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_Iceland" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
