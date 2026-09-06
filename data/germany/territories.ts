import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const DESTATIS = "Destatis";
const DESTATIS_URL = "https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/_inhalt.html";

export const territories: TerritoriesData = {
  summary:
    "L'Allemagne est un État fédéral composé de 16 Länder, chacun disposant de son propre gouvernement, parlement et constitution. Les Länder sont divisés en arrondissements (Landkreise) et villes-arrondissements (kreisfreie Städte), eux-mêmes subdivisés en communes.",
  divisions: [
    { name: "Länder", count: 16, note: "États fédérés, dont 3 villes-États.", source: DESTATIS, sourceUrl: DESTATIS_URL },
    {
      name: "Arrondissements et villes-arrondissements",
      count: 489,
      note: "Landkreise et kreisfreie Städte.",
      source: DESTATIS,
      sourceUrl: DESTATIS_URL,
    },
    { name: "Communes", count: 10_754, note: "Gemeinden, mi-2024.", source: DESTATIS, sourceUrl: DESTATIS_URL },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
