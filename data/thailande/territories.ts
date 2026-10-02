import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "La Thaïlande est un État unitaire très centralisé : 76 provinces (changwat), dont les gouverneurs sont nommés par le ministère de l'Intérieur, et Bangkok, zone administrative spéciale dotée d'un gouverneur élu. Le pays n'a aucun territoire ultramarin. La carte suit les frontières internationalement reconnues ; plusieurs secteurs de la frontière avec le Cambodge, tracée par des traités franco-siamois de 1904-1907, restent pourtant contestés. La Cour internationale de justice a attribué le temple de Preah Vihear au Cambodge en 1962 (arrêt précisé en 2013), mais les abords de ce temple et d'autres sites comme Ta Muen Thom ont donné lieu à des affrontements armés en juillet puis en décembre 2025 — plusieurs dizaines de morts et des centaines de milliers de déplacés. Un cessez-le-feu est en vigueur depuis le 27 décembre 2025, sans règlement du tracé.",
  divisions: [
    { name: "Provinces (changwat)", count: 76, note: "La dernière créée est Bueng Kan (2011), détachée de Nong Khai.", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Provinces_of_Thailand" },
    { name: "Zone administrative spéciale", count: 1, note: "Bangkok (Krung Thep Maha Nakhon), qui cumule les compétences d'une province et d'une municipalité. Pattaya a aussi un statut municipal spécial mais reste rattachée à la province de Chon Buri.", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Bangkok_Metropolitan_Administration" },
    { name: "Districts", count: 928, note: "878 districts (amphoe) dans les provinces et 50 districts (khet) à Bangkok, eux-mêmes subdivisés en sous-districts (tambon).", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Districts_of_Thailand" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
