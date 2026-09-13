import type { City } from "@/lib/types";

const ABS = "Australian Bureau of Statistics (ABS)";

export const cities: City[] = [
  { name: "Canberra", lat: -35.2809, lon: 149.13, isCapital: true, population: { value: 484_630, year: 2025, source: ABS, sourceUrl: "https://en.wikipedia.org/wiki/Canberra" } },
  { name: "Sydney", lat: -33.8688, lon: 151.2093, population: { value: 5_638_830, year: 2025, source: ABS, sourceUrl: "https://en.wikipedia.org/wiki/Sydney" } },
  { name: "Melbourne", lat: -37.8136, lon: 144.9631, population: { value: 5_435_590, year: 2025, source: ABS, sourceUrl: "https://en.wikipedia.org/wiki/Melbourne" } },
  { name: "Brisbane", lat: -27.4698, lon: 153.0251, population: { value: 2_833_524, year: 2025, source: ABS, sourceUrl: "https://en.wikipedia.org/wiki/Brisbane" } },
  { name: "Perth", lat: -31.9505, lon: 115.8605, population: { value: 2_452_765, year: 2025, source: ABS, sourceUrl: "https://en.wikipedia.org/wiki/Perth" } },
  { name: "Adelaide", lat: -34.9285, lon: 138.6007, population: { value: 1_491_015, year: 2025, source: ABS, sourceUrl: "https://en.wikipedia.org/wiki/Adelaide" } },
];
