import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "L'Indonésie est un État unitaire archipélagique divisé en 38 provinces, elles-mêmes subdivisées en régences (kabupaten, à dominante rurale) et villes (kota, à dominante urbaine), puis en districts (kecamatan) et villages (desa/kelurahan). Contrairement à des États comme la France, le Royaume-Uni ou l'Afrique du Sud, l'Indonésie ne possède aucun territoire ultramarin non contigu : la totalité de ses îles, aussi isolées soient-elles (îles Natuna près de la mer de Chine méridionale, Rote à l'extrême sud, Miangas à la frontière philippine), font partie intégrante de l'une de ses 38 provinces, sans statut de dépendance distinct. Deux provinces bénéficient en revanche d'un statut d'autonomie spéciale renforcée : Aceh, seule région du pays autorisée à appliquer des éléments de la charia (droit pénal islamique) depuis 2005, et l'ensemble des provinces de Papouasie, qui disposent depuis 2001 (loi sur l'autonomie spéciale, révisée en 2021) de prérogatives fiscales et culturelles élargies dans un contexte de tensions séparatistes persistantes portées par le Mouvement pour une Papouasie libre (OPM). Enfin, le statut de Jakarta est en pleine mutation institutionnelle : la loi de 2024 sur la région spéciale de Jakarta (Undang-Undang DKJ) prévoit sa transformation, à mesure que le statut de capitale se transfère vers Nusantara, d'un statut de région spéciale de la capitale (DKI) vers celui de simple province ordinaire dotée de compétences économiques particulières.",
  divisions: [
    { name: "Provinces", count: 38, note: "34 provinces \"ordinaires\", 2 régions spéciales (Aceh, Yogyakarta), 1 région spéciale de la capitale en transition (Jakarta), et les provinces de Papouasie sous autonomie spéciale.", source: "Badan Pusat Statistik (BPS)", sourceUrl: "https://en.wikipedia.org/wiki/Provinces_of_Indonesia" },
    { name: "Régences et villes (kabupaten/kota)", count: 514, note: "Environ 416 régences (kabupaten), à dominante rurale, et 98 villes (kota), à dominante urbaine — l'échelon administratif intermédiaire entre la province et le district.", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Regencies_and_cities_of_Indonesia" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
