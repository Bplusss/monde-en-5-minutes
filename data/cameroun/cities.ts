import type { City } from "@/lib/types";

const SRC_URL = "https://www.citypopulation.de/en/cameroon/cities/";
const PROJ = "Institut national de la statistique (INS), projection au 1er janvier 2025, via citypopulation.de";
const CENSUS = "BUCREP, recensement général de la population de 2005, via citypopulation.de";

export const cities: City[] = [
  { name: "Yaoundé", lat: 3.848, lon: 11.5021, isCapital: true, population: { value: 3_762_900, year: 2025, source: PROJ, sourceUrl: SRC_URL, note: "Capitale politique, siège des institutions, sur les collines du plateau du Centre." } },
  { name: "Douala", lat: 4.0511, lon: 9.7679, population: { value: 3_816_500, year: 2025, source: PROJ, sourceUrl: SRC_URL, note: "Plus grande ville et capitale économique, sur l'estuaire du Wouri ; premier port de l'Afrique centrale." } },
  { name: "Bamenda", lat: 5.9597, lon: 10.1459, population: { value: 269_530, year: 2005, source: CENSUS, sourceUrl: SRC_URL, note: "Chef-lieu du Nord-Ouest anglophone, au cœur de la crise anglophone." } },
  { name: "Bafoussam", lat: 5.4781, lon: 10.4176, population: { value: 239_287, year: 2005, source: CENSUS, sourceUrl: SRC_URL, note: "Principale ville des hauts plateaux bamiléké." } },
  { name: "Garoua", lat: 9.3017, lon: 13.3921, population: { value: 235_996, year: 2005, source: CENSUS, sourceUrl: SRC_URL, note: "Port fluvial sur la Bénoué, capitale du Nord." } },
  { name: "Maroua", lat: 10.591, lon: 14.3159, population: { value: 201_371, year: 2005, source: CENSUS, sourceUrl: SRC_URL, note: "Chef-lieu de l'Extrême-Nord, ancien lamidat peul." } },
  { name: "Ngaoundéré", lat: 7.3277, lon: 13.5847, population: { value: 152_698, year: 2005, source: CENSUS, sourceUrl: SRC_URL, note: "Terminus du chemin de fer Transcamerounais, porte du Nord." } },
  { name: "Buéa", lat: 4.1527, lon: 9.241, population: { value: 90_090, year: 2005, source: CENSUS, sourceUrl: SRC_URL, note: "Chef-lieu du Sud-Ouest, au pied du mont Cameroun ; ancienne capitale du Kamerun allemand." } },
];
