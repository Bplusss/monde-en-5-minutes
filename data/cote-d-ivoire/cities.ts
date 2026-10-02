import type { City } from "@/lib/types";

const INS = "Institut national de la statistique (INS), RGPH 2021 (chiffres arrondis), via Connectionivoirienne";
const INS_URL = "https://connectionivoirienne.net/2022/08/03/la-repartition-de-la-population-urbaine-reste-desequilibree-en-cote-divoire-ou-tout-reste-concentre-sur-abidjan-recensement-rgph2021/";

export const cities: City[] = [
  { name: "Yamoussoukro", lat: 6.8276, lon: -5.2893, isCapital: true, population: { value: 340_000, year: 2021, source: INS, sourceUrl: INS_URL, note: "Capitale politique et administrative depuis 1983 ; siège de la basilique Notre-Dame-de-la-Paix." } },
  { name: "Abidjan", lat: 5.36, lon: -4.0083, population: { value: 6_321_017, year: 2021, source: "Institut national de la statistique (INS), RGPH 2021, via Wikipedia", sourceUrl: "https://fr.wikipedia.org/wiki/Districts_de_C%C3%B4te_d%27Ivoire", note: "District autonome. Capitale économique, premier port et première ville du pays, siège de fait du pouvoir exécutif et des ambassades." } },
  { name: "Bouaké", lat: 7.6906, lon: -5.0391, population: { value: 812_000, year: 2021, source: INS, sourceUrl: INS_URL, note: "Deuxième ville du pays, au centre ; quartier général de la rébellion des Forces nouvelles de 2002 à 2011." } },
  { name: "Korhogo", lat: 9.4580, lon: -5.6296, population: { value: 440_000, year: 2021, source: INS, sourceUrl: INS_URL, note: "Principale ville du nord, en pays sénoufo." } },
  { name: "Daloa", lat: 6.8774, lon: -6.4502, population: { value: 421_000, year: 2021, source: INS, sourceUrl: INS_URL, note: "Centre de la boucle du cacao du centre-ouest." } },
  { name: "San-Pédro", lat: 4.7485, lon: -6.6363, population: { value: 390_000, year: 2021, source: INS, sourceUrl: INS_URL, note: "Deuxième port du pays, l'un des premiers ports mondiaux d'exportation de cacao." } },
  { name: "Gagnoa", lat: 6.1319, lon: -5.9506, population: { value: 277_000, year: 2021, source: INS, sourceUrl: INS_URL } },
  { name: "Man", lat: 7.4125, lon: -7.5538, population: { value: 241_000, year: 2021, source: INS, sourceUrl: INS_URL, note: "Principale ville de la région montagneuse de l'ouest." } },
];
