import type { City } from "@/lib/types";

export const cities: City[] = [
  { name: "Lima", lat: -12.0464, lon: -77.0428, isCapital: true, population: { value: 10_142_492, year: 2025, source: "INEI (recensement 2025)", sourceUrl: "https://censos2025.inei.gob.pe/", note: "Province de Lima (Lima Métropolitaine), sans le port voisin de Callao, qui compte 1,1 million d'habitants supplémentaires." } },
  { name: "Arequipa", lat: -16.409, lon: -71.5375 },
  { name: "Trujillo", lat: -8.1116, lon: -79.0288 },
  { name: "Cusco", lat: -13.532, lon: -71.9675 },
  { name: "Iquitos", lat: -3.7491, lon: -73.2538 },
  { name: "Puno", lat: -15.8402, lon: -70.0219 },
];
