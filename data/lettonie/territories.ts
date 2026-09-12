import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Depuis la réforme territoriale entrée en vigueur le 1ᵉʳ juillet 2021, la Lettonie est divisée en 35 novadi (municipalités, souvent regroupant plusieurs anciennes communes rurales) et 7 valstspilsētas (villes statutaires administrées séparément) : Riga, Daugavpils, Jelgava, Jēkabpils, Jūrmala, Liepāja, Rēzekne et Ventspils. Cette réforme a réduit de plus de moitié le nombre d'unités locales, qui atteignait encore 119 (110 anciens novadi et 9 villes republicaines) entre 2009 et 2021 — c'est cette division antérieure, plus fine, que reflète la carte ci-dessous, faute de mise à jour des données géographiques de référence.",
  divisions: [
    { name: "Novadi (municipalités, depuis 2021)", count: 35, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_divisions_of_Latvia" },
    { name: "Valstspilsētas (villes statutaires, depuis 2021)", count: 7, note: "Riga, Daugavpils, Jelgava, Jēkabpils, Jūrmala, Liepāja, Rēzekne et Ventspils.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_divisions_of_Latvia" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
