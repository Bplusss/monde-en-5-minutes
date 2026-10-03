import type { Region } from "@/lib/types";

const SRC = "Wikipedia";
const URL = "https://en.wikipedia.org/wiki/Governorates_of_Lebanon";

/**
 * Les 9 gouvernorats (mohafazat) libanais, codés selon ISO 3166-2:LB.
 * Keserwan-Jbeil (créé en 2017) n'a pas de code ISO : code local "LB-KJ".
 * Pas de chiffre de population : aucun recensement depuis 1932.
 */
export const regions: Region[] = [
  { code: "LB-JL", name: "Mont-Liban", areaKm2: { value: 1_238, unit: "km²", source: SRC, sourceUrl: URL, note: "Gouvernorat le plus peuplé, qui englobe la banlieue de Beyrouth ; chef-lieu Baabda, siège de la présidence." } },
  { code: "LB-AS", name: "Liban-Nord", areaKm2: { value: 1_205, unit: "km²", source: SRC, sourceUrl: URL, note: "Chef-lieu Tripoli, deuxième ville du pays ; comprend la vallée de la Qadisha." } },
  { code: "LB-JA", name: "Liban-Sud", areaKm2: { value: 943, unit: "km²", source: SRC, sourceUrl: URL, note: "Chef-lieu Saïda ; comprend Tyr." } },
  { code: "LB-BI", name: "Bekaa", areaKm2: { value: 1_271, unit: "km²", source: SRC, sourceUrl: URL, note: "Chef-lieu Zahlé ; cœur agricole du pays." } },
  { code: "LB-AK", name: "Akkar", areaKm2: { value: 776, unit: "km²", source: SRC, sourceUrl: URL, note: "Détaché du Liban-Nord (loi de 2003, gouverneur nommé en 2014) ; chef-lieu Halba." } },
  { code: "LB-BA", name: "Beyrouth", areaKm2: { value: 18, unit: "km²", source: SRC, sourceUrl: URL, note: "La capitale, limitée à ses quartiers centraux ; l'essentiel de l'agglomération s'étend sur le Mont-Liban." } },
  { code: "LB-NA", name: "Nabatieh", areaKm2: { value: 1_058, unit: "km²", source: SRC, sourceUrl: URL, note: "Frontalier d'Israël ; le plus touché par les guerres de 2024 et 2026." } },
  { code: "LB-BH", name: "Baalbek-Hermel", areaKm2: { value: 3_009, unit: "km²", source: SRC, sourceUrl: URL, note: "Plus vaste gouvernorat, détaché de la Bekaa (loi de 2003, gouverneur nommé en 2014) ; chef-lieu Baalbek." } },
  { code: "LB-KJ", name: "Keserwan-Jbeil", areaKm2: { value: 722, unit: "km²", source: SRC, sourceUrl: URL, note: "Détaché du Mont-Liban en 2017, premier gouverneur nommé en 2020 ; chef-lieu Jounieh, comprend Byblos." } },
];
