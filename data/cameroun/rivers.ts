import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Sanaga",
    lengthKm: {
      value: 918,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Sanaga",
      note: "Plus long fleuve du pays, entièrement camerounais ; son bassin couvre plus du quart du territoire. Ses barrages d'Edéa, de Song Loulou et de Nachtigal fournissent l'essentiel de l'électricité nationale.",
    },
    source_location: "Plateau de l'Adamaoua (son cours supérieur porte le nom de Djérem)",
    mouth: "Golfe de Guinée (baie du Biafra), au sud de Douala",
  },
  {
    name: "Nyong",
    lengthKm: {
      value: 690,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Nyong_River",
      note: "Fleuve forestier du plateau sud-camerounais, qui passe au sud de Yaoundé.",
    },
    source_location: "Région de l'Est, près d'Abong-Mbang",
    mouth: "Golfe de Guinée, à Petit-Batanga, au nord de Kribi",
  },
  {
    name: "Wouri",
    lengthKm: {
      value: 160,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Wouri_River",
      note: "Fleuve court mais au débit important, dont l'estuaire abrite le port de Douala ; il a donné son nom au pays (Rio dos Camarões).",
    },
    source_location: "Confluence du Nkam et du Makombé, en amont de Yabassi",
    mouth: "Estuaire du Wouri, à Douala (golfe de Guinée)",
  },
  {
    name: "Bénoué",
    lengthKm: {
      value: 1_400,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Benue_River",
      note: "Principal affluent du Niger ; au Cameroun, il traverse Garoua et alimente le barrage de Lagdo avant de passer au Nigeria.",
    },
    source_location: "Plateau de l'Adamaoua, au Cameroun",
    mouth: "Niger, à Lokoja (Nigeria)",
  },
  {
    name: "Logone",
    lengthKm: {
      value: 950,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Logone",
      note: "Rivière du bassin du lac Tchad, qui sert de frontière avec le Tchad sur son cours inférieur, jusqu'à Kousséri.",
    },
    source_location: "Plateau de l'Adamaoua, par la confluence de la Vina et de la Mbéré",
    mouth: "Chari, à N'Djaména (Tchad)",
  },
];
