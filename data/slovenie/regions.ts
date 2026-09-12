import type { Region } from "@/lib/types";

const SRC = "Wikipedia (d'après l'Office statistique de la République de Slovénie, SURS)";
const URL = "https://en.wikipedia.org/wiki/Statistical_regions_of_Slovenia";

/**
 * Les 12 régions statistiques slovènes (razvojne regije), créées en 2000 à des
 * fins statistiques et de développement régional — Natural Earth ne fournit
 * pour la Slovénie que les 193 communes (obcine), l'échelon administratif
 * réellement doté de compétences ; voir le rapport de génération des cartes.
 */
export const regions: Region[] = [
  { code: "SI011", name: "Pomurska (région de la Mura)", population: { value: 113_172, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_337, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI012", name: "Podravska (région de la Drave)", population: { value: 331_815, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_170, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI013", name: "Koroška (Carinthie slovène)", population: { value: 70_358, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_041, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI014", name: "Savinjska (région de la Savinja)", population: { value: 262_814, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_301, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI015", name: "Zasavska (Sava centrale)", population: { value: 57_083, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 485, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI016", name: "Posavska (Basse-Save)", population: { value: 75_993, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 968, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI017", name: "Jugovzhodna Slovenija (Slovénie du Sud-Est)", population: { value: 148_670, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_675, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI018", name: "Primorsko-notranjska (Littoral-Carniole intérieure)", population: { value: 53_826, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_456, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI021", name: "Osrednjeslovenska (Slovénie centrale)", population: { value: 569_475, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_334, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI022", name: "Gorenjska (Haute-Carniole)", population: { value: 209_921, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_137, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI023", name: "Goriška (région de Gorizia)", population: { value: 118_096, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_325, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SI024", name: "Obalno-kraška (Littoral-Karst)", population: { value: 119_627, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_044, year: 2025, source: SRC, sourceUrl: URL } },
];
