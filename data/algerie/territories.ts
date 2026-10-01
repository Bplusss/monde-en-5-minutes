import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const LAW_URL = "https://www.horizons.dz/2026/04/organisation-territoriale-lalgerie-passe-officiellement-a-69-wilayas/";

export const territories: TerritoriesData = {
  summary:
    "L'Algérie est un État unitaire découpé en wilayas, elles-mêmes divisées en daïras et en communes. Le découpage de 1984 (48 wilayas) a été étendu à 58 wilayas en 2019 par la promotion de dix circonscriptions du Grand Sud, puis à 69 par la loi n° 26-06 d'avril 2026, qui érige en wilayas onze anciennes wilayas déléguées des Hauts-Plateaux et du Sud (Aflou, Barika, Bou Saâda, Messaad…) ; les wilayas d'origine en assurent la gestion jusqu'au 31 décembre 2026. Le pays ne possède aucun territoire non contigu, et ses frontières ne font l'objet d'aucun litige territorial ouvert.",
  divisions: [
    { name: "Wilayas", count: 69, note: "48 wilayas de 1984, 10 créées en 2019 et 11 en 2026 (loi n° 26-06).", source: "Journal officiel / Horizons", sourceUrl: LAW_URL },
    { name: "Communes", count: 1_541, note: "Communes (baladiyat), après la réforme de 2026.", source: "Journal officiel / Horizons", sourceUrl: LAW_URL },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
