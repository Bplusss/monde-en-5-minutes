import type { Region } from "@/lib/types";

const SRC = "Institut national de la statistique (INS), RGPH 2021, via Wikipedia";
const URL = "https://fr.wikipedia.org/wiki/Districts_de_C%C3%B4te_d%27Ivoire";
const AREA_URL = "https://en.wikipedia.org/wiki/Districts_of_Ivory_Coast";

/**
 * Les 14 districts ivoiriens (12 districts + 2 districts autonomes), premier
 * niveau administratif depuis la réforme de 2011, codés selon ISO 3166-2:CI.
 * Les 31 régions constituent le niveau inférieur (cf. territories.ts).
 * Polygones : geoBoundaries ADM1, voir scripts/geo/build-cote-d-ivoire-regions.mjs.
 */
export const regions: Region[] = [
  { code: "CI-AB", name: "Abidjan", population: { value: 6_321_017, year: 2021, source: SRC, sourceUrl: URL, note: "District autonome ; capitale économique et première agglomération du pays." }, areaKm2: { value: 2_119, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-MG", name: "Montagnes", population: { value: 3_027_023, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Man. Régions de Cavally, Guémon et Tonkpi." }, areaKm2: { value: 31_050, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-SM", name: "Sassandra-Marahoué", population: { value: 2_720_877, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Daloa. Régions du Haut-Sassandra et de la Marahoué." }, areaKm2: { value: 23_940, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-BS", name: "Bas-Sassandra", population: { value: 2_687_176, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : San-Pédro, premier port d'exportation de cacao au monde. Régions du Gbôklé, de la Nawa et de San-Pédro." }, areaKm2: { value: 25_800, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-SV", name: "Savanes", population: { value: 2_159_435, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Korhogo. Régions de la Bagoué, du Poro et du Tchologo." }, areaKm2: { value: 40_210, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-GD", name: "Gôh-Djiboua", population: { value: 2_088_440, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Gagnoa. Régions du Gôh et du Lôh-Djiboua." }, areaKm2: { value: 17_580, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-LG", name: "Lagunes", population: { value: 2_042_623, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Dabou. Régions de l'Agnéby-Tiassa, des Grands-Ponts et de La Mé." }, areaKm2: { value: 23_280, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-VB", name: "Vallée du Bandama", population: { value: 1_964_929, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Bouaké, deuxième ville du pays. Régions du Gbêkê et du Hambol." }, areaKm2: { value: 28_518, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-CM", name: "Comoé", population: { value: 1_501_336, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Abengourou. Régions de l'Indénié-Djuablin et du Sud-Comoé (dont Grand-Bassam)." }, areaKm2: { value: 14_173, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-LC", name: "Lacs", population: { value: 1_488_531, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Dimbokro. Régions du Bélier, de l'Iffou, du Moronou et du N'Zi." }, areaKm2: { value: 28_500, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-ZZ", name: "Zanzan", population: { value: 1_344_865, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Bondoukou. Régions du Bounkani et du Gontougo ; abrite le parc national de la Comoé." }, areaKm2: { value: 38_251, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-WR", name: "Woroba", population: { value: 1_184_813, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Séguéla. Régions du Béré, du Bafing et du Worodougou." }, areaKm2: { value: 31_088, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-DN", name: "Denguélé", population: { value: 436_015, year: 2021, source: SRC, sourceUrl: URL, note: "Chef-lieu : Odienné. Régions du Folon et du Kabadougou ; district le moins peuplé." }, areaKm2: { value: 20_997, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
  { code: "CI-YM", name: "Yamoussoukro", population: { value: 422_072, year: 2021, source: SRC, sourceUrl: URL, note: "District autonome ; capitale politique et administrative depuis 1983." }, areaKm2: { value: 3_500, unit: "km²", source: "Wikipedia", sourceUrl: AREA_URL } },
];
