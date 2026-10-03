import type { City } from "@/lib/types";

const CBS = "Bureau central des statistiques d'Israël (CBS), estimation 2024, via Wikipedia";
const CBS_URL = "https://en.wikipedia.org/wiki/List_of_cities_in_Israel";

export const cities: City[] = [
  { name: "Jérusalem", lat: 31.7767, lon: 35.205, isCapital: true, population: { value: 1_050_153, year: 2024, source: CBS, sourceUrl: CBS_URL, note: "Capitale proclamée par Israël, siège de la Knesset et du gouvernement, mais non reconnue comme telle par l'ONU : la plupart des États ont leur ambassade à Tel-Aviv, les États-Unis ayant transféré la leur en 2018. Le chiffre du CBS couvre toute la municipalité, Jérusalem-Est incluse ; le point est placé à Jérusalem-Ouest, près de la Knesset." } },
  { name: "Tel-Aviv-Jaffa", lat: 32.0853, lon: 34.7818, population: { value: 494_900, year: 2024, source: CBS, sourceUrl: CBS_URL, note: "Centre économique du pays, au cœur de l'agglomération du Goush Dan ; siège de la plupart des ambassades." } },
  { name: "Haïfa", lat: 32.794, lon: 34.9896, population: { value: 297_082, year: 2024, source: CBS, sourceUrl: CBS_URL, note: "Premier port du pays, sur les pentes du mont Carmel ; siège du Technion et du centre mondial baha'i." } },
  { name: "Petah Tikva", lat: 32.0871, lon: 34.8875, population: { value: 270_403, year: 2024, source: CBS, sourceUrl: CBS_URL } },
  { name: "Rishon LeZion", lat: 31.973, lon: 34.7925, population: { value: 259_275, year: 2024, source: CBS, sourceUrl: CBS_URL } },
  { name: "Netanya", lat: 32.3215, lon: 34.8532, population: { value: 234_813, year: 2024, source: CBS, sourceUrl: CBS_URL } },
  { name: "Beer-Sheva", lat: 31.2518, lon: 34.7913, population: { value: 223_587, year: 2024, source: CBS, sourceUrl: CBS_URL, note: "Principale ville du Néguev." } },
];
