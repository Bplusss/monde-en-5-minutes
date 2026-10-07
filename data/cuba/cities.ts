import type { City } from "@/lib/types";

export const cities: City[] = [
  { name: "La Havane", lat: 23.1136, lon: -82.3666, isCapital: true, population: { value: 1_749_964, year: 2024, source: "ONEI (Anuario Demográfico de Cuba 2024)", sourceUrl: "https://www.onei.gob.cu/", note: "Province de La Havane, entièrement urbaine, au 31 décembre 2024." } },
  { name: "Santiago de Cuba", lat: 20.0247, lon: -75.8219 },
  { name: "Camagüey", lat: 21.3808, lon: -77.9169 },
  { name: "Holguín", lat: 20.8872, lon: -76.2631 },
  { name: "Santa Clara", lat: 22.4069, lon: -79.9649 },
  { name: "Cienfuegos", lat: 22.1461, lon: -80.4356 },
];
