import type { Region } from "@/lib/types";

const SRC = "INDEC (Instituto Nacional de Estadística y Censos)";
const URL = "https://www.indec.gob.ar/";

/**
 * Les 23 provinces et la Ville autonome de Buenos Aires (CABA), soit 24
 * unités fédératives — codes ISO 3166-2:AR. Population du recensement 2022.
 */
export const regions: Region[] = [
  { code: "AR-C", name: "Ciudad Autónoma de Buenos Aires", population: { value: 3_121_707, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-B", name: "Buenos Aires", population: { value: 17_523_996, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-K", name: "Catamarca", population: { value: 429_562, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-H", name: "Chaco", population: { value: 1_129_606, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-U", name: "Chubut", population: { value: 592_621, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-X", name: "Córdoba", population: { value: 3_840_905, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-W", name: "Corrientes", population: { value: 1_212_696, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-E", name: "Entre Ríos", population: { value: 1_425_578, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-P", name: "Formosa", population: { value: 607_419, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-Y", name: "Jujuy", population: { value: 811_611, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-L", name: "La Pampa", population: { value: 361_859, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-F", name: "La Rioja", population: { value: 383_865, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-M", name: "Mendoza", population: { value: 2_043_540, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-N", name: "Misiones", population: { value: 1_278_873, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-Q", name: "Neuquén", population: { value: 710_814, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-R", name: "Río Negro", population: { value: 750_768, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-A", name: "Salta", population: { value: 1_441_351, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-J", name: "San Juan", population: { value: 822_853, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-D", name: "San Luis", population: { value: 542_069, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-Z", name: "Santa Cruz", population: { value: 337_226, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-S", name: "Santa Fe", population: { value: 3_544_908, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-G", name: "Santiago del Estero", population: { value: 1_060_906, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-V", name: "Tierra del Fuego, Antártida e Islas del Atlántico Sur", population: { value: 185_651, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "AR-T", name: "Tucumán", population: { value: 1_731_820, year: 2022, source: SRC, sourceUrl: URL } },
];
