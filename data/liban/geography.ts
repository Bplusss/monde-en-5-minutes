import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Lebanon";

export const geography: GeographyData = {
  headline: "Une étroite bande méditerranéenne formée de deux chaînes de montagnes parallèles encadrant la plaine de la Bekaa",
  areaKm2: {
    value: 10_452,
    unit: "km²",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "L'un des plus petits États d'Asie, à peine plus grand que la Gironde ; environ 210 km du nord au sud.",
  },
  coastlineKm: {
    value: 225,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
  },
  highestPoint: {
    name: "Qornet es-Saouda (mont Liban, au-dessus de Bcharré)",
    elevationM: 3_088,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Qurnat_as_Sawda%27",
  },
  borderingCountries: ["Syrie", "Israël"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Méditerranéen sur la côte (étés chauds et humides, hivers doux et pluvieux), plus froid en altitude, où la neige couvre les sommets plusieurs mois par an. La Bekaa, abritée par le mont Liban, est plus sèche et devient semi-aride vers le nord (Hermel).",
  summary:
    "Le relief s'organise en quatre bandes nord-sud : une plaine côtière étroite où se concentrent les villes, le mont Liban, la plaine de la Bekaa (vers 900 m d'altitude) et l'Anti-Liban, qui marque la frontière syrienne. Les montagnes, parmi les mieux arrosées du Proche-Orient, alimentent de nombreuses sources et les deux principaux cours d'eau, le Litani et l'Oronte. Le cèdre, emblème du drapeau, ne subsiste plus qu'en quelques bosquets d'altitude.",
};
