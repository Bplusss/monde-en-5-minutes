import type { City } from "@/lib/types";

export const cities: City[] = [
  { name: "Islamabad", lat: 33.6844, lon: 73.0479, isCapital: true, population: { value: 2_363_863, year: 2023, source: "Pakistan Bureau of Statistics (recensement 2023)", sourceUrl: "https://www.pbs.gov.pk/digital-census/detailed-results", note: "Territoire de la capitale, qui forme une seule agglomération avec la ville voisine de Rawalpindi." } },
  { name: "Karachi", lat: 24.8607, lon: 67.0011 },
  { name: "Lahore", lat: 31.5204, lon: 74.3587 },
  { name: "Faisalabad", lat: 31.4504, lon: 73.135 },
  { name: "Peshawar", lat: 34.0151, lon: 71.5249 },
  { name: "Quetta", lat: 30.1798, lon: 66.975 },
  { name: "Gilgit", lat: 35.9208, lon: 74.3144 },
];
