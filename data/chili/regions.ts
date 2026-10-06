import type { Region } from "@/lib/types";

const SRC = "INE (recensement 2024)";
const URL = "https://censo2024.ine.gob.cl/";
const AREA = { unit: "km²", source: "Wikipedia (régions du Chili)", sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Chile" };

/** Les 16 régions du Chili, du nord au sud — codes ISO 3166-2:CL. Population du recensement 2024. */
export const regions: Region[] = [
  { code: "CL-AP", name: "Arica et Parinacota", population: { value: 224_569, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 16_873, ...AREA } },
  { code: "CL-TA", name: "Tarapacá", population: { value: 369_806, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 42_226, ...AREA } },
  { code: "CL-AN", name: "Antofagasta", population: { value: 635_416, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 126_049, ...AREA } },
  { code: "CL-AT", name: "Atacama", population: { value: 299_180, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 75_176, ...AREA } },
  { code: "CL-CO", name: "Coquimbo", population: { value: 832_864, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 40_580, ...AREA } },
  { code: "CL-VS", name: "Valparaíso", population: { value: 1_896_053, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 16_396, ...AREA } },
  { code: "CL-RM", name: "Région métropolitaine de Santiago", population: { value: 7_400_741, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 15_403, ...AREA } },
  { code: "CL-LI", name: "O'Higgins", population: { value: 987_228, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 16_387, ...AREA } },
  { code: "CL-ML", name: "Maule", population: { value: 1_123_008, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 30_296, ...AREA } },
  { code: "CL-NB", name: "Ñuble", population: { value: 512_289, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 13_179, ...AREA } },
  { code: "CL-BI", name: "Biobío", population: { value: 1_613_059, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 23_890, ...AREA } },
  { code: "CL-AR", name: "Araucanie", population: { value: 1_010_423, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 31_842, ...AREA } },
  { code: "CL-LR", name: "Los Ríos", population: { value: 398_230, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 18_430, ...AREA } },
  { code: "CL-LL", name: "Los Lagos", population: { value: 890_284, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 48_584, ...AREA } },
  { code: "CL-AI", name: "Aysén", population: { value: 100_745, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 108_494, ...AREA } },
  { code: "CL-MA", name: "Magallanes et Antarctique chilienne", population: { value: 166_537, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 132_291, ...AREA } },
];
