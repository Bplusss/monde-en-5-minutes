import type { City } from "@/lib/types";

export const cities: City[] = [
  { name: "Antananarivo", lat: -18.8792, lon: 47.5079, isCapital: true, population: { value: 1_274_225, year: 2018, source: "INSTAT (RGPH-3)", sourceUrl: "https://www.instat.mg/", note: "Commune urbaine d'Antananarivo-Renivohitra ; l'agglomération compte environ 3 millions d'habitants." } },
  { name: "Toamasina", lat: -18.1492, lon: 49.4023 },
  { name: "Antsirabe", lat: -19.8659, lon: 47.0333 },
  { name: "Mahajanga", lat: -15.7167, lon: 46.3167 },
  { name: "Fianarantsoa", lat: -21.4536, lon: 47.0858 },
  { name: "Toliara", lat: -23.35, lon: 43.6667 },
  { name: "Antsiranana", lat: -12.2787, lon: 49.2917 },
];
