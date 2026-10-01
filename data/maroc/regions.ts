import type { Region } from "@/lib/types";

const SRC = "Haut-Commissariat au Plan (HCP), recensement général de la population et de l'habitat, 1er septembre 2024, via Wikipedia";
const URL = "https://en.wikipedia.org/wiki/Regions_of_Morocco";

/**
 * Les régions marocaines issues du découpage de 2015, codées selon ISO 3166-2:MA.
 * Conformément aux frontières internationalement reconnues (voir territories.ts),
 * seules les 11 régions ayant une partie au nord du 27°40' N figurent ici et sur
 * la carte (public/geo/maroc-regions.json, construit par
 * scripts/geo/build-maroc-maps.mjs) : Dakhla-Oued Ed-Dahab (MA-12), entièrement
 * située au Sahara occidental, est exclue ; Laâyoune-Sakia El Hamra (MA-11) n'est
 * représentée que par sa partie nord, la province de Tarfaya.
 * Les superficies officielles des régions ne sont pas reprises : elles ne
 * correspondent pas aux limites reconnues (Sahara occidental, frontière algérienne).
 */
export const regions: Region[] = [
  { code: "MA-06", name: "Casablanca-Settat", population: { value: 7_688_967, year: 2024, source: SRC, sourceUrl: URL, note: "Région la plus peuplée, autour de la capitale économique." } },
  { code: "MA-04", name: "Rabat-Salé-Kénitra", population: { value: 5_132_639, year: 2024, source: SRC, sourceUrl: URL, note: "Région de la capitale politique." } },
  { code: "MA-07", name: "Marrakech-Safi", population: { value: 4_892_393, year: 2024, source: SRC, sourceUrl: URL } },
  { code: "MA-03", name: "Fès-Meknès", population: { value: 4_467_911, year: 2024, source: SRC, sourceUrl: URL } },
  { code: "MA-01", name: "Tanger-Tétouan-Al Hoceïma", population: { value: 4_030_222, year: 2024, source: SRC, sourceUrl: URL } },
  { code: "MA-09", name: "Souss-Massa", population: { value: 3_020_431, year: 2024, source: SRC, sourceUrl: URL } },
  { code: "MA-05", name: "Béni Mellal-Khénifra", population: { value: 2_525_801, year: 2024, source: SRC, sourceUrl: URL } },
  { code: "MA-02", name: "L'Oriental", population: { value: 2_294_665, year: 2024, source: SRC, sourceUrl: URL } },
  { code: "MA-08", name: "Drâa-Tafilalet", population: { value: 1_655_623, year: 2024, source: SRC, sourceUrl: URL, note: "Plus vaste région du pays, présaharienne et peu peuplée." } },
  { code: "MA-10", name: "Guelmim-Oued Noun", population: { value: 448_685, year: 2024, source: SRC, sourceUrl: URL, note: "Une petite partie du sud de la province d'Assa-Zag se trouve au Sahara occidental." } },
  { code: "MA-11", name: "Laâyoune-Sakia El Hamra (province de Tarfaya)", population: { value: 16_228, year: 2024, source: "Haut-Commissariat au Plan (HCP), RGPH 2024, province de Tarfaya", sourceUrl: "https://www.hcp.ma/region-laayoune/attachment/2865727/", note: "Seule la province de Tarfaya, au nord du 27°40', est hors du Sahara occidental. La région entière compte 451 028 habitants selon le HCP." } },
];
