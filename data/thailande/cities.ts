import type { City } from "@/lib/types";

const SRC = "Département de l'administration provinciale (DOPA), population enregistrée des municipalités, décembre 2020";
const URL = "https://en.wikipedia.org/wiki/List_of_municipalities_in_Thailand";

export const cities: City[] = [
  { name: "Bangkok", lat: 13.7563, lon: 100.5018, isCapital: true, population: { value: 5_588_222, year: 2020, source: SRC, sourceUrl: URL, note: "Population enregistrée ; l'agglomération réelle, avec les migrants internes et étrangers, dépasse 10 millions d'habitants." } },
  { name: "Nonthaburi", lat: 13.8621, lon: 100.5144, population: { value: 251_026, year: 2020, source: SRC, sourceUrl: URL, note: "Banlieue nord de Bangkok, siège de nombreux ministères." } },
  { name: "Pak Kret", lat: 13.9130, lon: 100.4983, population: { value: 189_458, year: 2020, source: SRC, sourceUrl: URL } },
  { name: "Hat Yai", lat: 7.0084, lon: 100.4747, population: { value: 149_459, year: 2020, source: SRC, sourceUrl: URL, note: "Principal centre commercial du Sud, proche de la Malaisie." } },
  { name: "Nakhon Ratchasima", lat: 14.9799, lon: 102.0978, population: { value: 122_730, year: 2020, source: SRC, sourceUrl: URL, note: "Aussi appelée Korat, porte d'entrée de l'Isan." } },
  { name: "Chiang Mai", lat: 18.7883, lon: 98.9853, population: { value: 122_627, year: 2020, source: SRC, sourceUrl: URL, note: "Capitale historique du royaume de Lanna et principale ville du Nord." } },
  { name: "Udon Thani", lat: 17.4138, lon: 102.7870, population: { value: 120_202, year: 2020, source: SRC, sourceUrl: URL } },
  { name: "Pattaya", lat: 12.9236, lon: 100.8825, population: { value: 117_606, year: 2020, source: SRC, sourceUrl: URL, note: "Station balnéaire du golfe de Thaïlande, au cœur du Corridor économique de l'Est." } },
  { name: "Khon Kaen", lat: 16.4322, lon: 102.8236, population: { value: 110_615, year: 2020, source: SRC, sourceUrl: URL } },
];
