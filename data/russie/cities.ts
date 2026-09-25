import type { City } from "@/lib/types";

const ROSSTAT = "Rosstat, estimation au 1er janvier 2025, via citypopulation.de";
const ROSSTAT_URL = "https://www.citypopulation.de/en/russia/cities/";

export const cities: City[] = [
  { name: "Moscou", lat: 55.7558, lon: 37.6173, isCapital: true, population: { value: 13_274_285, year: 2025, source: ROSSTAT, sourceUrl: ROSSTAT_URL, note: "Plus grande ville d'Europe par la population ; siège du Kremlin et du gouvernement fédéral." } },
  { name: "Saint-Pétersbourg", lat: 59.9311, lon: 30.3609, population: { value: 5_652_922, year: 2025, source: ROSSTAT, sourceUrl: ROSSTAT_URL, note: "« Capitale du Nord », fondée par Pierre le Grand en 1703 ; capitale impériale jusqu'en 1918, abrite l'Ermitage." } },
  { name: "Novossibirsk", lat: 55.0084, lon: 82.9357, population: { value: 1_637_266, year: 2025, source: ROSSTAT, sourceUrl: ROSSTAT_URL, note: "Plus grande ville de Sibérie, fondée en 1893 lors de la construction du Transsibérien." } },
  { name: "Iekaterinbourg", lat: 56.8389, lon: 60.6057, population: { value: 1_548_187, year: 2025, source: ROSSTAT, sourceUrl: ROSSTAT_URL, note: "Métropole industrielle de l'Oural ; lieu de l'exécution de la famille impériale des Romanov en 1918." } },
  { name: "Kazan", lat: 55.7963, lon: 49.1088, population: { value: 1_329_825, year: 2025, source: ROSSTAT, sourceUrl: ROSSTAT_URL, note: "Capitale du Tatarstan ; son kremlin, mêlant architecture orthodoxe et islamique, est classé à l'UNESCO." } },
  { name: "Nijni Novgorod", lat: 56.2965, lon: 43.9361, population: { value: 1_198_245, year: 2025, source: ROSSTAT, sourceUrl: ROSSTAT_URL, note: "Ancienne « Gorki » sous l'URSS, au confluent de la Volga et de l'Oka." } },
  { name: "Vladivostok", lat: 43.1198, lon: 131.8869, population: { value: 594_201, year: 2025, source: ROSSTAT, sourceUrl: ROSSTAT_URL, note: "Principal port russe du Pacifique, terminus du Transsibérien, proche des frontières chinoise et nord-coréenne." } },
  { name: "Kaliningrad", lat: 54.7104, lon: 20.4522, population: { value: 488_690, year: 2025, source: ROSSTAT, sourceUrl: ROSSTAT_URL, note: "Capitale de l'exclave du même nom ; ancienne Königsberg prussienne, rattachée à l'URSS en 1945 (voir Territoire)." } },
  { name: "Sotchi", lat: 43.6028, lon: 39.7342, population: { value: 445_149, year: 2025, source: ROSSTAT, sourceUrl: ROSSTAT_URL, note: "Seule ville russe au climat subtropical humide ; a accueilli les JO d'hiver de 2014." } },
];
