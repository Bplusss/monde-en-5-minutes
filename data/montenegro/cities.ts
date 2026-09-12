import type { City } from "@/lib/types";

const SRC = "Zavod za statistiku Crne Gore (MONSTAT), recensement 2023";

export const cities: City[] = [
  { name: "Podgorica", lat: 42.4304, lon: 19.2594, isCapital: true, population: { value: 179_505, year: 2023, source: SRC } },
  { name: "Nikšić", lat: 42.7731, lon: 18.9445, population: { value: 65_705, year: 2023, source: SRC } },
  { name: "Bar", lat: 42.0937, lon: 19.0904, population: { value: 45_812, year: 2023, source: SRC } },
  { name: "Bijelo Polje", lat: 43.0359, lon: 19.7472, population: { value: 38_662, year: 2023, source: SRC } },
  { name: "Herceg Novi", lat: 42.4531, lon: 18.5375, population: { value: 30_824, year: 2023, source: SRC } },
  { name: "Budva", lat: 42.2911, lon: 18.8400, population: { value: 27_445, year: 2023, source: SRC } },
  { name: "Berane", lat: 42.8458, lon: 19.8681, population: { value: 24_645, year: 2023, source: SRC } },
  { name: "Pljevlja", lat: 43.3564, lon: 19.3592, population: { value: 24_134, year: 2023, source: SRC } },
  { name: "Kotor", lat: 42.4247, lon: 18.7712, population: { value: 22_746, year: 2023, source: SRC } },
  { name: "Ulcinj", lat: 41.9297, lon: 19.2244, population: { value: 20_507, year: 2023, source: SRC } },
  { name: "Tivat", lat: 42.4356, lon: 18.6961, population: { value: 16_338, year: 2023, source: SRC } },
  {
    name: "Cetinje",
    lat: 42.3894,
    lon: 18.9247,
    population: { value: 14_465, year: 2023, source: SRC, note: "Ancienne capitale royale (Prijestonica) ; population de la ville proprement dite : 12 460 habitants." },
  },
];
