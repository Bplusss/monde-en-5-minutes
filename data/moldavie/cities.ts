import type { City } from "@/lib/types";

const SRC = "Bureau national de statistique de Moldavie (BNS)";

export const cities: City[] = [
  { name: "Chișinău", lat: 47.0105, lon: 28.8638, isCapital: true, population: { value: 532_500, year: 2024, source: SRC } },
  { name: "Tiraspol", lat: 46.8403, lon: 29.6433, population: { value: 129_000, year: 2021, source: "Recensement de Transnistrie", note: "Capitale de facto de la Transnistrie, hors du contrôle de l'administration moldave." } },
  { name: "Bălți", lat: 47.7622, lon: 27.9294, population: { value: 97_000, year: 2024, source: SRC } },
  { name: "Bender (Tighina)", lat: 46.8397, lon: 29.4868, population: { value: 91_000, year: 2021, source: "Recensement de Transnistrie", note: "Administrée de facto par la Transnistrie bien que sur la rive droite du Dniestr." } },
];
