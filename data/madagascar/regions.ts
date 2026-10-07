import type { Region } from "@/lib/types";

const SRC = "INSTAT (RGPH-3, 2018)";
const URL = "https://www.instat.mg/";
const DISTRICTS = "Somme des districts qui composent la région, créée après le recensement.";

/**
 * Les 24 régions (faritra). Vatovavy et Fitovinany sont issues de la
 * scission de Vatovavy-Fitovinany en 2021, et Ambatosoa a été détachée du
 * nord de l'Analanjirofo (loi de 2023, installée en 2025). La norme ISO
 * 3166-2:MG ne codant que les six anciennes provinces, les codes sont
 * propres au site. Population du recensement de 2018 (RGPH-3).
 */
export const regions: Region[] = [
  { code: "MG-ALA", name: "Alaotra-Mangoro", population: { value: 1_255_514, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-AMB", name: "Ambatosoa", population: { value: 492_230, year: 2018, source: SRC, sourceUrl: URL, note: DISTRICTS } },
  { code: "MG-AMM", name: "Amoron'i Mania", population: { value: 833_919, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-ANA", name: "Analamanga", population: { value: 3_618_128, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-ANJ", name: "Analanjirofo", population: { value: 660_115, year: 2018, source: SRC, sourceUrl: URL, note: "Sans les districts devenus la région d'Ambatosoa." } },
  { code: "MG-AND", name: "Androy", population: { value: 903_376, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-ANO", name: "Anosy", population: { value: 809_313, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-AAN", name: "Atsimo-Andrefana", population: { value: 1_799_088, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-AAT", name: "Atsimo-Atsinanana", population: { value: 1_026_674, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-ATS", name: "Atsinanana", population: { value: 1_484_403, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-BET", name: "Betsiboka", population: { value: 394_561, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-BOE", name: "Boeny", population: { value: 931_171, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-BON", name: "Bongolava", population: { value: 674_474, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-DIA", name: "Diana", population: { value: 889_736, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-FIT", name: "Fitovinany", population: { value: 727_300, year: 2018, source: SRC, sourceUrl: URL, note: DISTRICTS } },
  { code: "MG-IHO", name: "Ihorombe", population: { value: 418_520, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-ITA", name: "Itasy", population: { value: 897_962, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-MAT", name: "Matsiatra Ambony", population: { value: 1_447_296, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-MEL", name: "Melaky", population: { value: 309_805, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-MEN", name: "Menabe", population: { value: 700_577, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-SAV", name: "Sava", population: { value: 1_123_013, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-SOF", name: "Sofia", population: { value: 1_500_227, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-VAK", name: "Vakinankaratra", population: { value: 2_074_358, year: 2018, source: SRC, sourceUrl: URL } },
  { code: "MG-VAT", name: "Vatovavy", population: { value: 708_582, year: 2018, source: SRC, sourceUrl: URL, note: DISTRICTS } },
];
