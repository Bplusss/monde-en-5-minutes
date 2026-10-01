import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Depuis 2015, le Maroc est divisé en 12 régions, elles-mêmes subdivisées en préfectures (urbaines) et provinces. Conformément aux frontières internationalement reconnues retenues sur ce site, la carte et les chiffres principaux s'arrêtent au 27°40' nord : la région de Dakhla-Oued Ed-Dahab, ainsi que la plus grande partie de Laâyoune-Sakia El Hamra et une petite partie de Guelmim-Oued Noun, se trouvent au Sahara occidental, territoire au statut non résolu (voir ci-dessous). Le Maroc ne possède aucun territoire outre-mer. Au nord, les villes de Ceuta et Melilla et plusieurs îlots côtiers sont espagnols ; le Maroc les revendique, sans que cette revendication fasse l'objet de négociations.",
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
      note: "Ancienne colonie espagnole d'environ 266 000 km², inscrite par l'ONU sur la liste des territoires non autonomes. Le Maroc, qui le considère comme partie intégrante de son territoire (« provinces du Sud »), en administre environ 80 % à l'ouest d'un mur de sable long de quelque 2 700 km ; le reste est contrôlé par le Front Polisario, qui a proclamé en 1976 la République arabe sahraouie démocratique (RASD), membre de l'Union africaine, et dont le siège et des camps de réfugiés se trouvent à Tindouf, en Algérie. La MINURSO surveille depuis 1991 un cessez-le-feu, rompu par le Polisario en novembre 2020 ; le référendum d'autodétermination prévu n'a jamais eu lieu. Les États-Unis ont reconnu la souveraineté marocaine en décembre 2020 ; l'Espagne (2022) a qualifié le plan d'autonomie marocain de 2007 de base « la plus sérieuse » et la France a déclaré en juillet 2024 que le présent et l'avenir du territoire s'inscrivent « dans le cadre de la souveraineté marocaine ». Le 31 octobre 2025, la résolution 2797 du Conseil de sécurité (11 voix pour, 3 abstentions, l'Algérie ne participant pas au vote) a prolongé la MINURSO jusqu'au 31 octobre 2026 et appelé à des négociations sur la base du plan d'autonomie marocain, une « autonomie véritable » sous souveraineté marocaine pouvant constituer la solution « la plus réalisable » ; le Maroc y voit une consécration de sa position, l'Algérie et le Polisario mettant en avant les références du texte à l'autodétermination. Des pourparlers directs entre le Maroc, le Polisario, l'Algérie et la Mauritanie ont repris en 2026, sans accord final à l'automne 2026.",
      source: "Conseil de sécurité des Nations unies / Wikipedia",
      sourceUrl: "https://press.un.org/fr/2025/cs16208.doc.htm",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
