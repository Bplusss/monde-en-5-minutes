import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const NSI = "NSI (Institut national de statistique de Bulgarie)";
const NSI_URL = "https://en.wikipedia.org/wiki/Provinces_of_Bulgaria";

export const territories: TerritoriesData = {
  summary:
    "La Bulgarie est organisée en 28 provinces (oblasti), elles-mêmes subdivisées en 265 municipalités (obshtini) — l'échelon de base de l'administration locale, doté d'un maire et d'un conseil municipal élus.",
  divisions: [
    { name: "Provinces (oblasti)", count: 28, source: NSI, sourceUrl: NSI_URL },
    { name: "Municipalités (obshtini)", count: 265, source: NSI, sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_Bulgaria" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
