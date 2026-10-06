import type { Region } from "@/lib/types";

const SRC = "DANE (projections de population 2025)";
const URL = "https://www.dane.gov.co/index.php/estadisticas-por-tema/demografia-y-poblacion/proyecciones-de-poblacion";
const AREA = { unit: "km²", source: "Wikipedia (départements de Colombie)", sourceUrl: "https://en.wikipedia.org/wiki/Departments_of_Colombia" };

/** Les 32 départements et le district capital de Bogota — codes ISO 3166-2:CO. */
export const regions: Region[] = [
  { code: "CO-DC", name: "Bogota (district capital)", population: { value: 7_942_867, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_587, ...AREA } },
  { code: "CO-AMA", name: "Amazonas", population: { value: 85_057, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 109_665, ...AREA } },
  { code: "CO-ANT", name: "Antioquia", population: { value: 6_928_372, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 63_612, ...AREA } },
  { code: "CO-ARA", name: "Arauca", population: { value: 279_191, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 23_818, ...AREA } },
  { code: "CO-ATL", name: "Atlántico", population: { value: 2_865_034, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_388, ...AREA } },
  { code: "CO-BOL", name: "Bolívar", population: { value: 2_241_282, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 25_978, ...AREA } },
  { code: "CO-BOY", name: "Boyacá", population: { value: 1_290_393, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 23_189, ...AREA } },
  { code: "CO-CAL", name: "Caldas", population: { value: 1_054_450, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 7_888, ...AREA } },
  { code: "CO-CAQ", name: "Caquetá", population: { value: 429_041, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 88_965, ...AREA } },
  { code: "CO-CAS", name: "Casanare", population: { value: 473_165, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 44_640, ...AREA } },
  { code: "CO-CAU", name: "Cauca", population: { value: 1_599_148, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 29_308, ...AREA } },
  { code: "CO-CES", name: "Cesar", population: { value: 1_469_159, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 22_905, ...AREA } },
  { code: "CO-CHO", name: "Chocó", population: { value: 593_106, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 46_530, ...AREA } },
  { code: "CO-COR", name: "Córdoba", population: { value: 1_992_907, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 25_020, ...AREA } },
  { code: "CO-CUN", name: "Cundinamarca", population: { value: 3_535_067, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 24_210, ...AREA } },
  { code: "CO-GUA", name: "Guainía", population: { value: 59_706, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 72_238, ...AREA } },
  { code: "CO-GUV", name: "Guaviare", population: { value: 84_696, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 53_460, ...AREA } },
  { code: "CO-HUI", name: "Huila", population: { value: 1_208_728, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 19_890, ...AREA } },
  { code: "CO-LAG", name: "La Guajira", population: { value: 1_066_679, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 20_848, ...AREA } },
  { code: "CO-MAG", name: "Magdalena", population: { value: 1_544_507, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 23_188, ...AREA } },
  { code: "CO-MET", name: "Meta", population: { value: 1_156_405, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 82_805, ...AREA } },
  { code: "CO-NAR", name: "Nariño", population: { value: 1_713_586, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 33_268, ...AREA } },
  { code: "CO-NSA", name: "Norte de Santander", population: { value: 1_709_289, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 21_658, ...AREA } },
  { code: "CO-PUT", name: "Putumayo", population: { value: 390_742, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 24_885, ...AREA } },
  { code: "CO-QUI", name: "Quindío", population: { value: 557_884, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_845, ...AREA } },
  { code: "CO-RIS", name: "Risaralda", population: { value: 1_003_225, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_140, ...AREA } },
  { code: "CO-SAP", name: "San Andrés et Providencia", population: { value: 63_438, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 52, ...AREA } },
  { code: "CO-SAN", name: "Santander", population: { value: 2_398_303, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 30_537, ...AREA } },
  { code: "CO-SUC", name: "Sucre", population: { value: 1_034_102, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 10_917, ...AREA } },
  { code: "CO-TOL", name: "Tolima", population: { value: 1_386_410, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 23_562, ...AREA } },
  { code: "CO-VAC", name: "Valle del Cauca", population: { value: 4_708_393, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 22_140, ...AREA } },
  { code: "CO-VAU", name: "Vaupés", population: { value: 44_142, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 54_135, ...AREA } },
  { code: "CO-VID", name: "Vichada", population: { value: 148_738, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 100_242, ...AREA } },
];
