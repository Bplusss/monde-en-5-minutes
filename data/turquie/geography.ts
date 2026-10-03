import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Turkey";

export const geography: GeographyData = {
  headline: "Un pont entre l'Europe et l'Asie, dominé par le haut plateau anatolien et bordé par trois mers",
  areaKm2: {
    value: 783_562,
    unit: "km²",
    source: "Institut turc de la statistique (TÜİK) / Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Turkey",
    note: "Environ 97 % du territoire se trouve en Asie (Anatolie) et 3 % en Europe (Thrace orientale).",
  },
  coastlineKm: {
    value: 7_200,
    unit: "km",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/turkey/",
    note: "Façades sur la mer Noire, la mer de Marmara, la mer Égée et la Méditerranée.",
  },
  highestPoint: {
    name: "Mont Ararat (Ağrı Dağı), près des frontières iranienne et arménienne",
    elevationM: 5_137,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Ararat",
  },
  borderingCountries: ["Grèce", "Bulgarie", "Géorgie", "Arménie", "Azerbaïdjan", "Iran", "Irak", "Syrie"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Méditerranéen sur les côtes égéenne et méditerranéenne, humide et tempéré sur la mer Noire, continental sur le plateau anatolien (étés secs, hivers froids et neigeux), rude dans les montagnes de l'Est.",
  summary:
    "Le Bosphore et les Dardanelles, reliés par la mer de Marmara, séparent la Thrace européenne de l'Anatolie et commandent l'unique accès de la mer Noire à la Méditerranée. L'intérieur est un plateau de 800 à 1 200 m d'altitude, encadré par les chaînes Pontiques au nord et le Taurus au sud, qui s'élève vers les hauts reliefs volcaniques de l'Est. Le Tigre et l'Euphrate y prennent leur source. Traversé par la faille nord-anatolienne et d'autres failles actives, le pays est l'un des plus sismiques au monde.",
};
