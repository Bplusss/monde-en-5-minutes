import type { City } from "@/lib/types";

const SRC = "DANE (projections de population 2025)";
const URL = "https://www.dane.gov.co/index.php/estadisticas-por-tema/demografia-y-poblacion/proyecciones-de-poblacion";

export const cities: City[] = [
  { name: "Bogota", lat: 4.711, lon: -74.0721, isCapital: true, population: { value: 7_942_867, year: 2025, source: SRC, sourceUrl: URL, note: "District capital, qui forme une entité territoriale distincte du département de Cundinamarca." } },
  { name: "Medellín", lat: 6.2442, lon: -75.5812, population: { value: 2_528_343, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Cali", lat: 3.4516, lon: -76.532, population: { value: 2_277_296, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Barranquilla", lat: 10.9685, lon: -74.7813, population: { value: 1_279_344, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Carthagène des Indes", lat: 10.391, lon: -75.4794, population: { value: 1_011_520, year: 2025, source: SRC, sourceUrl: URL, note: "Ville fortifiée coloniale inscrite au patrimoine mondial de l'UNESCO, premier pôle touristique du pays." } },
  { name: "Leticia", lat: -4.2153, lon: -69.9406 },
];
