import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Cameroon";

export const geography: GeographyData = {
  headline: "Une « Afrique en miniature » : forêt équatoriale au sud, hauts plateaux volcaniques à l'ouest, savanes et Sahel au nord jusqu'au lac Tchad",
  areaKm2: {
    value: 475_440,
    unit: "km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/AG.SRF.TOTL.K2?locations=CM",
    note: "Superficie totale, péninsule de Bakassi comprise.",
  },
  coastlineKm: {
    value: 402,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "Littoral sur le golfe de Guinée (baie du Biafra), de la frontière nigériane à celle de la Guinée équatoriale.",
  },
  highestPoint: {
    name: "Mont Cameroun (Fako), volcan actif de la région du Sud-Ouest",
    elevationM: 4_040,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Cameroon",
  },
  borderingCountries: ["Nigeria", "Tchad", "République centrafricaine", "République du Congo", "Gabon", "Guinée équatoriale"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat équatorial chaud et humide au sud, avec deux saisons des pluies ; au pied du mont Cameroun, Debundscha reçoit environ 10 m de pluie par an, l'un des records mondiaux. Vers le nord, le climat devient tropical à une saison des pluies sur l'Adamaoua, puis sahélien dans l'Extrême-Nord, où la saison sèche dure plus de six mois. Les hauts plateaux de l'Ouest sont plus frais.",
  summary:
    "Étiré sur plus de 1 200 km du golfe de Guinée au lac Tchad, le Cameroun réunit la plupart des milieux du continent. Le sud est couvert de forêt dense humide, prolongement du bassin du Congo. À l'ouest, la ligne du Cameroun, chaîne volcanique prolongée en mer jusqu'à Bioko, porte le mont Cameroun et les hauts plateaux bamiléké et du Nord-Ouest. Au centre, le plateau de l'Adamaoua sépare le bassin de la Sanaga, tourné vers l'Atlantique, de celui de la Bénoué, affluent du Niger. Le nord s'abaisse en savanes puis en plaines sahéliennes jusqu'au lac Tchad.",
};
