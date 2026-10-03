import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Israel";

export const geography: GeographyData = {
  headline: "Un territoire étroit entre Méditerranée et vallée du Jourdain, du Golan aux portes de la mer Rouge, désertique sur plus de la moitié de sa surface",
  areaKm2: {
    value: 20_770,
    unit: "km²",
    source: "CIA World Factbook / Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Israel",
    note: "Superficie dans la ligne d'armistice de 1949 (« ligne verte »), hors plateau du Golan et Jérusalem-Est, comme sur la carte. Le chiffre officiel israélien (Bureau central des statistiques), qui inclut ces deux territoires annexés, est de 22 072 km².",
  },
  coastlineKm: {
    value: 273,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "Essentiellement sur la Méditerranée ; une dizaine de kilomètres seulement sur le golfe d'Aqaba (mer Rouge), autour d'Eilat.",
  },
  highestPoint: {
    name: "Mont Méron (Haute-Galilée) ; le mont Hermon, souvent cité, se trouve sur le plateau du Golan",
    elevationM: 1_204,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Meron",
  },
  borderingCountries: ["Liban", "Syrie", "Jordanie", "Égypte", "Palestine"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Méditerranéen sur la côte et dans les collines du nord et du centre (étés secs, pluies d'hiver), semi-aride puis désertique vers le sud. Le Néguev reçoit moins de 100 mm de pluie par an dans sa partie méridionale.",
  summary:
    "Large de 15 à 135 km, le pays juxtapose une plaine côtière densément peuplée, les collines de Galilée et de Judée et la dépression du Jourdain, qui forme une partie de la frontière avec la Jordanie et aboutit à la mer Morte (environ -430 m, point le plus bas des terres émergées). Le désert du Néguev, au sud, couvre plus de la moitié du territoire jusqu'à Eilat. La Palestine (Cisjordanie et Gaza) figure parmi les voisins (voir Territoire).",
};
