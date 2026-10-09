import type { City } from "@/lib/types";

export const cities: City[] = [
  { name: "Dodoma", lat: -6.163, lon: 35.7516, isCapital: true },
  { name: "Dar es Salaam", lat: -6.7924, lon: 39.2083, population: { value: 5_383_728, year: 2022, source: "National Bureau of Statistics (recensement 2022)", sourceUrl: "https://www.nbs.go.tz/", note: "Région de Dar es Salaam, entièrement urbaine. Principale ville et port du pays, elle reste son centre économique malgré le transfert de la capitale à Dodoma." } },
  { name: "Mwanza", lat: -2.5164, lon: 32.9175 },
  { name: "Arusha", lat: -3.3869, lon: 36.683 },
  { name: "Mbeya", lat: -8.9094, lon: 33.4608 },
  { name: "Zanzibar", lat: -6.1659, lon: 39.2026 },
];
