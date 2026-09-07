import type { City } from "@/lib/types";

export const cities: City[] = [
  {
    name: "Varsovie",
    lat: 52.23,
    lon: 21.0111,
    isCapital: true,
    population: { value: 1_866_729, year: 2025, source: "Wikipedia (données municipales officielles)" },
  },
  { name: "Cracovie", lat: 50.0614, lon: 19.9372, population: { value: 816_614, year: 2025, source: "Wikipedia (données municipales officielles)" } },
  { name: "Wrocław", lat: 51.11, lon: 17.0325, population: { value: 672_545, year: 2025, source: "Wikipedia (données municipales officielles)" } },
  { name: "Łódź", lat: 51.7769, lon: 19.4547, population: { value: 639_890, year: 2025, source: "Wikipedia (données municipales officielles)" } },
  { name: "Poznań", lat: 52.4083, lon: 16.9336, population: { value: 536_151, year: 2024, source: "Wikipedia (données municipales officielles)" } },
  { name: "Gdańsk", lat: 54.3475, lon: 18.6453, population: { value: 486_492, year: 2023, source: "Wikipedia (données municipales officielles)" } },
];
