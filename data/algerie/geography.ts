import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Algeria";

export const geography: GeographyData = {
  headline: "Le plus vaste pays d'Afrique, saharien à plus de 80 %, dont la population se concentre sur une étroite frange méditerranéenne",
  areaKm2: {
    value: 2_381_741,
    unit: "km²",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "Plus grand pays d'Afrique depuis la partition du Soudan en 2011, 10ᵉ du monde ; plus de quatre fois la France métropolitaine.",
  },
  coastlineKm: {
    value: 998,
    unit: "km",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/algeria/",
    note: "Façade unique sur la Méditerranée, de la frontière marocaine à la frontière tunisienne.",
  },
  highestPoint: {
    name: "Mont Tahat (massif du Hoggar)",
    elevationM: 2_908,
    source: "Encyclopædia Britannica",
    sourceUrl: "https://www.britannica.com/place/Mount-Tahat",
  },
  borderingCountries: ["Maroc", "Sahara occidental", "Mauritanie", "Mali", "Niger", "Libye", "Tunisie"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat méditerranéen sur le littoral et le Tell (hivers doux et pluvieux, étés chauds et secs), semi-aride sur les Hauts-Plateaux (hivers froids, fortes amplitudes), désertique chaud sur le Sahara, où les précipitations sont presque nulles et les écarts de température entre le jour et la nuit très marqués. Le sirocco, vent chaud et sec venu du sud, peut porter les températures au-delà de 45 °C dans le nord en été.",
  summary:
    "L'Algérie s'organise en bandes parallèles. Au nord, le Tell, entre la Méditerranée et l'Atlas tellien, réunit plaines littorales, massifs (Kabylie, Aurès) et l'essentiel des terres cultivables et de la population. Plus au sud s'étendent les Hauts-Plateaux steppiques, ponctués de chotts (lacs salés temporaires), puis l'Atlas saharien, qui marque l'entrée dans le Sahara. Celui-ci couvre plus de 80 % du territoire : grands ergs, plateaux rocheux et massifs volcaniques du Hoggar et du Tassili n'Ajjer à l'extrême sud. Les cours d'eau permanents sont rares et cantonnés au nord ; le sous-sol saharien recèle en revanche d'importantes nappes fossiles, partagées avec la Tunisie et la Libye. Parmi les sept voisins du pays figure le Sahara occidental, territoire au statut non réglé selon l'ONU.",
};
