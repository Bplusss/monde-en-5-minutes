import type { Region } from "@/lib/types";

const SRC = "Statistics South Africa (Stats SA), recensement 2022";
const URL = "https://census.statssa.gov.za/";

/**
 * Les 9 provinces sud-africaines, codées selon ISO 3166-2:ZA (confirmées via
 * Natural Earth : la province du KwaZulu-Natal porte le code historique
 * ZA-NL, hérité de l'ancienne colonie du Natal — pas d'anomalie de code,
 * simple héritage historique de la norme ISO). Populations du recensement
 * 2022 (Stats SA) ; superficies Wikipedia (calculées à partir des données
 * officielles Stats SA / Chief Directorate: National Geospatial Information).
 */
export const regions: Region[] = [
  { code: "ZA-GT", name: "Gauteng", population: { value: 15_099_422, year: 2022, source: SRC, sourceUrl: URL, note: "Province la plus peuplée mais la plus petite en superficie ; concentre Johannesburg et Pretoria, cœur économique du pays." }, areaKm2: { value: 18_178, unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Gauteng" } },
  { code: "ZA-NL", name: "KwaZulu-Natal", population: { value: 12_423_907, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 94_361, unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/KwaZulu-Natal" } },
  { code: "ZA-WC", name: "Cap-Occidental", population: { value: 7_433_019, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 129_462, unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Western_Cape" } },
  { code: "ZA-EC", name: "Cap-Oriental", population: { value: 7_230_204, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 168_966, unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Eastern_Cape" } },
  { code: "ZA-LP", name: "Limpopo", population: { value: 6_572_720, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 125_754, unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Limpopo" } },
  { code: "ZA-MP", name: "Mpumalanga", population: { value: 5_143_324, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 76_495, unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Mpumalanga" } },
  { code: "ZA-NW", name: "Nord-Ouest", population: { value: 3_804_548, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 104_882, unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/North_West_(South_African_province)" } },
  { code: "ZA-FS", name: "État-Libre", population: { value: 2_964_412, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 129_825, unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Free_State_(province)" } },
  { code: "ZA-NC", name: "Cap-Nord", population: { value: 1_355_946, year: 2022, source: SRC, sourceUrl: URL, note: "Province la moins peuplée mais de très loin la plus vaste — plus de 30 % du territoire national pour à peine 2 % de la population." }, areaKm2: { value: 372_889, unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Northern_Cape" } },
];
