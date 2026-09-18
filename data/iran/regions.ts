import type { Region } from "@/lib/types";

const SRC = "Centre statistique d'Iran (SCI), estimation 2023";
const URL = "https://www.amar.org.ir/english";

/**
 * Les 31 provinces (ostan) d'Iran. Codes ISO 3166-2:IR tels qu'utilisés par le
 * jeu de données Natural Earth sous-jacent (ancien schéma de numérotation
 * antérieur à la réorganisation ISO de novembre 2020, qui a depuis réassigné
 * des codes alphabétiques différents — non repris ici pour rester cohérent
 * avec public/geo/iran-regions.json).
 *
 * Anomalie corrigée : les données Natural Earth attribuaient par erreur le
 * même code (IR-07) à Téhéran et à la province d'Alborz (détachée de Téhéran
 * en 2010). Alborz a été recodée IR-32 — son ancien code ISO historique,
 * antérieur à la réorganisation de 2020 — à la fois ici et dans
 * public/geo/iran-regions.json, pour lever la collision.
 */
export const regions: Region[] = [
  { code: "IR-07", name: "Téhéran", population: { value: 13_323_000, year: 2023, source: SRC, sourceUrl: URL, note: "Province la plus peuplée du pays, qui inclut la capitale et une large partie de sa banlieue." } },
  { code: "IR-32", name: "Alborz", population: { value: 2_730_000, year: 2023, source: SRC, sourceUrl: URL, note: "Détachée de la province de Téhéran en 2010 ; capitale Karaj." } },
  { code: "IR-04", name: "Ispahan", population: { value: 5_136_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-14", name: "Fars", population: { value: 4_904_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-10", name: "Khouzestan", population: { value: 4_725_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-01", name: "Azerbaïdjan de l'Est", population: { value: 3_925_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-02", name: "Azerbaïdjan de l'Ouest", population: { value: 3_278_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-15", name: "Kerman", population: { value: 3_184_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-21", name: "Mazandaran", population: { value: 3_302_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-13", name: "Sistan-et-Baloutchistan", population: { value: 2_777_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-19", name: "Gilan", population: { value: 2_546_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-17", name: "Kermanshah", population: { value: 2_003_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-23", name: "Hormozgan", population: { value: 1_806_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-20", name: "Lorestan", population: { value: 1_784_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-24", name: "Hamadan", population: { value: 1_756_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-27", name: "Golestan", population: { value: 1_893_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-16", name: "Kurdistan", population: { value: 1_614_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-22", name: "Markazi", population: { value: 1_436_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-26", name: "Qom", population: { value: 1_300_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-03", name: "Ardabil", population: { value: 1_284_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-28", name: "Qazvin", population: { value: 1_284_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-25", name: "Yazd", population: { value: 1_156_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-11", name: "Zanjan", population: { value: 1_103_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-08", name: "Tchaharmahal-et-Bakhtiari", population: { value: 973_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-31", name: "Khorasan du Nord", population: { value: 868_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-29", name: "Khorasan du Sud", population: { value: 786_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-18", name: "Kohguilouyeh-et-Boyer-Ahmad", population: { value: 728_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-12", name: "Semnan", population: { value: 715_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-05", name: "Ilam", population: { value: 591_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-06", name: "Bouchehr", population: { value: 1_174_000, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "IR-30", name: "Khorasan Razavi", population: { value: 6_444_000, year: 2023, source: SRC, sourceUrl: URL, note: "Comprend la ville sainte de Mashhad, deuxième ville du pays." } },
];
