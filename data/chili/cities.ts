import type { City } from "@/lib/types";

const SRC2024 = "INE (recensement 2024)";
const URL2024 = "https://censo2024.ine.gob.cl/";

export const cities: City[] = [
  { name: "Santiago", lat: -33.4489, lon: -70.6693, isCapital: true, population: { value: 438_856, year: 2024, source: SRC2024, sourceUrl: URL2024, note: "Commune centrale ; la Région métropolitaine, qui englobe l'agglomération du Grand Santiago, compte 7,4 millions d'habitants." } },
  { name: "Antofagasta", lat: -23.6509, lon: -70.3975, population: { value: 401_096, year: 2024, source: SRC2024, sourceUrl: URL2024, note: "Capitale minière du Nord, porte d'entrée du désert d'Atacama." } },
  { name: "Viña del Mar", lat: -33.0245, lon: -71.5518, population: { value: 334_871, year: 2024, source: SRC2024, sourceUrl: URL2024 } },
  { name: "Valparaíso", lat: -33.0472, lon: -71.6127, population: { value: 284_938, year: 2024, source: SRC2024, sourceUrl: URL2024, note: "Siège du Congrès national et principal port du pays avec San Antonio." } },
  { name: "Temuco", lat: -38.7359, lon: -72.5904, population: { value: 292_518, year: 2024, source: SRC2024, sourceUrl: URL2024 } },
  { name: "Punta Arenas", lat: -53.1638, lon: -70.9171 },
];
