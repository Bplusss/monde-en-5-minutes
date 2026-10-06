import type { Region } from "@/lib/types";

const SRC = "INEI (recensement 2025)";
const URL = "https://censos2025.inei.gob.pe/";
const AREA = { unit: "km²", source: "INEI", sourceUrl: "https://www.inei.gob.pe/" };

/**
 * Les 24 départements, la province constitutionnelle de Callao et la province
 * de Lima (Lima Métropolitaine), qui n'appartient à aucune région — codes
 * ISO 3166-2:PE. Population du recensement 2025.
 */
export const regions: Region[] = [
  { code: "PE-AMA", name: "Amazonas", population: { value: 467_688, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 39_249, ...AREA } },
  { code: "PE-ANC", name: "Áncash", population: { value: 1_205_923, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 35_915, ...AREA } },
  { code: "PE-APU", name: "Apurímac", population: { value: 467_513, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 20_896, ...AREA } },
  { code: "PE-ARE", name: "Arequipa", population: { value: 1_814_554, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 63_345, ...AREA } },
  { code: "PE-AYA", name: "Ayacucho", population: { value: 709_026, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 43_815, ...AREA } },
  { code: "PE-CAJ", name: "Cajamarca", population: { value: 1_490_732, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 33_318, ...AREA } },
  { code: "PE-CAL", name: "Callao (province constitutionnelle)", population: { value: 1_093_495, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 147, ...AREA } },
  { code: "PE-CUS", name: "Cusco", population: { value: 1_379_167, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 71_987, ...AREA } },
  { code: "PE-HUV", name: "Huancavelica", population: { value: 372_158, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 22_131, ...AREA } },
  { code: "PE-HUC", name: "Huánuco", population: { value: 807_393, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 36_849, ...AREA } },
  { code: "PE-ICA", name: "Ica", population: { value: 1_033_084, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 21_328, ...AREA } },
  { code: "PE-JUN", name: "Junín", population: { value: 1_422_780, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 44_197, ...AREA } },
  { code: "PE-LAL", name: "La Libertad", population: { value: 2_056_445, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 25_500, ...AREA } },
  { code: "PE-LAM", name: "Lambayeque", population: { value: 1_404_643, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 14_231, ...AREA } },
  { code: "PE-LMA", name: "Lima Métropolitaine (province de Lima)", population: { value: 10_142_492, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_672, ...AREA } },
  { code: "PE-LIM", name: "Lima (région)", population: { value: 1_014_908, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 34_802, ...AREA } },
  { code: "PE-LOR", name: "Loreto", population: { value: 1_032_771, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 368_852, ...AREA } },
  { code: "PE-MDD", name: "Madre de Dios", population: { value: 208_667, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 85_301, ...AREA } },
  { code: "PE-MOQ", name: "Moquegua", population: { value: 194_828, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 15_734, ...AREA } },
  { code: "PE-PAS", name: "Pasco", population: { value: 253_549, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 25_320, ...AREA } },
  { code: "PE-PIU", name: "Piura", population: { value: 2_115_215, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 35_892, ...AREA } },
  { code: "PE-PUN", name: "Puno", population: { value: 1_232_993, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 71_999, ...AREA } },
  { code: "PE-SAM", name: "San Martín", population: { value: 967_923, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 51_253, ...AREA } },
  { code: "PE-TAC", name: "Tacna", population: { value: 389_226, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 16_076, ...AREA } },
  { code: "PE-TUM", name: "Tumbes", population: { value: 256_691, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_669, ...AREA } },
  { code: "PE-UCA", name: "Ucayali", population: { value: 623_868, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 102_411, ...AREA } },
];
