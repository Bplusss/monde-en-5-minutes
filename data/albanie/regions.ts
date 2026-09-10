import type { Region } from "@/lib/types";

const SRC = "INSTAT (recensement de la population et de l'habitat 2023)";
const URL = "https://www.instat.gov.al/en/themes/censuses/census-of-population-and-housing/publications/2023/main-results-of-the-population-and-housing-census-2023/";

/** Les 12 comtés (qarqe) albanais, niveau administratif de premier rang depuis la réforme du 31 juillet 2014. */
export const regions: Region[] = [
  { code: "AL-01", name: "Berat", population: { value: 115_050, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-02", name: "Durrës", population: { value: 291_325, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-03", name: "Elbasan", population: { value: 232_580, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-04", name: "Fier", population: { value: 240_377, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-05", name: "Gjirokastër", population: { value: 60_013, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-06", name: "Korçë", population: { value: 197_303, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-07", name: "Kukës", population: { value: 72_768, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-08", name: "Lezhë", population: { value: 117_283, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-09", name: "Dibër", population: { value: 109_585, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-10", name: "Shkodër", population: { value: 193_009, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-11", name: "Tiranë", population: { value: 758_513, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "AL-12", name: "Vlorë", population: { value: 146_681, year: 2023, source: SRC, sourceUrl: URL } },
];
