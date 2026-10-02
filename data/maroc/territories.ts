import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Depuis 2015, le Maroc est divisé en 12 régions, elles-mêmes subdivisées en préfectures (urbaines) et provinces. Conformément aux frontières internationalement reconnues, la carte et les chiffres s'arrêtent au 27°40' nord : Dakhla-Oued Ed-Dahab, l'essentiel de Laâyoune-Sakia El Hamra et une petite partie de Guelmim-Oued Noun se trouvent au Sahara occidental (voir ci-dessous). Au nord, Ceuta, Melilla et plusieurs îlots côtiers sont espagnols ; le Maroc les revendique.",
  divisions: [
    {
      name: "Régions",
      count: 12,
      note: "Découpage de 2015. Onze figurent sur la carte ; Dakhla-Oued Ed-Dahab se trouve entièrement au Sahara occidental, et seule la bande de Tarfaya de Laâyoune-Sakia El Hamra est au nord du 27°40'.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Morocco",
    },
    {
      name: "Préfectures et provinces",
      count: 75,
      note: "13 préfectures et 62 provinces selon le découpage officiel marocain, dont cinq entièrement au Sahara occidental.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Subdivisions_of_Morocco",
    },
    {
      name: "Sahara occidental, administré à environ 80 % par le Maroc, hors carte",
      count: 1,
      note: "Ancienne colonie espagnole d'environ 266 000 km², inscrite par l'ONU sur la liste des territoires non autonomes. Le Maroc (« provinces du Sud ») en administre environ 80 % à l'ouest d'un mur de sable de quelque 2 700 km ; le reste est contrôlé par le Front Polisario, qui a proclamé en 1976 la République arabe sahraouie démocratique (RASD), basé à Tindouf, en Algérie. Le cessez-le-feu de 1991 a été rompu par le Polisario en novembre 2020 ; le référendum d'autodétermination n'a jamais eu lieu. Après les États-Unis (2020), l'Espagne (2022) et la France (2024) ont appuyé le plan d'autonomie marocain de 2007. Le 31 octobre 2025, la résolution 2797 du Conseil de sécurité a appelé à négocier sur la base de ce plan, tout en mentionnant l'autodétermination. Des pourparlers directs ont repris en 2026, sans accord final à l'automne 2026.",
      source: "Conseil de sécurité des Nations unies / Wikipedia",
      sourceUrl: "https://press.un.org/fr/2025/cs16208.doc.htm",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
