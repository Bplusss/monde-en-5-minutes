import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "L'Indonésie est un État unitaire archipélagique divisé en 38 provinces, subdivisées en régences (kabupaten, rurales) et villes (kota, urbaines), puis en districts et villages. Contrairement à la France ou au Royaume-Uni, elle ne possède aucun territoire ultramarin non contigu : toutes ses îles, aussi isolées soient-elles, font partie intégrante de l'une de ses provinces. Aceh (charia depuis 2005) et les provinces de Papouasie bénéficient d'un statut d'autonomie spéciale renforcée ; le statut de Jakarta évolue vers celui de province ordinaire à mesure que la capitale se transfère vers Nusantara.",
  divisions: [
    { name: "Provinces", count: 38, note: "34 provinces \"ordinaires\", 2 régions spéciales (Aceh, Yogyakarta), 1 région spéciale de la capitale en transition (Jakarta), et les provinces de Papouasie sous autonomie spéciale.", source: "Badan Pusat Statistik (BPS)", sourceUrl: "https://en.wikipedia.org/wiki/Provinces_of_Indonesia" },
    { name: "Régences et villes (kabupaten/kota)", count: 514, note: "Environ 416 régences (kabupaten), à dominante rurale, et 98 villes (kota), à dominante urbaine — l'échelon administratif intermédiaire entre la province et le district.", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Regencies_and_cities_of_Indonesia" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
