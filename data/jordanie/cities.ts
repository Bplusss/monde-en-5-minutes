import type { City } from "@/lib/types";

export const cities: City[] = [
  { name: "Amman", lat: 31.9539, lon: 35.9106, isCapital: true, population: { value: 4_920_100, year: 2024, source: "Department of Statistics (Jordanie)", sourceUrl: "https://dosweb.dos.gov.jo/", note: "Gouvernorat d'Amman, estimation à la fin de 2024." } },
  { name: "Zarqa", lat: 32.0728, lon: 36.088 },
  { name: "Irbid", lat: 32.5556, lon: 35.85 },
  { name: "Salt", lat: 32.0392, lon: 35.7272 },
  { name: "Madaba", lat: 31.7167, lon: 35.7939 },
  { name: "Aqaba", lat: 29.5267, lon: 35.0078 },
];
