import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const CIA = "CIA World Factbook";
const CIA_URL = "https://www.cia.gov/the-world-factbook/countries/russia/";

export const geography: GeographyData = {
  headline: "Le plus grand pays du monde de très loin : onze fuseaux horaires, deux continents et près d'un neuvième des terres émergées du globe",
  areaKm2: {
    value: 17_098_242,
    unit: "km²",
    year: 2024,
    source: CIA,
    sourceUrl: CIA_URL,
    note: "Environ 11 % des terres émergées. N'inclut pas la Crimée, internationalement reconnue comme ukrainienne (voir Territoire).",
  },
  coastlineKm: {
    value: 37_653,
    unit: "km",
    source: CIA,
    sourceUrl: CIA_URL,
    note: "Le plus long littoral national au monde, sur treize mers appartenant à trois océans (Arctique, Pacifique, Atlantique).",
  },
  highestPoint: {
    name: "Mont Elbrouz (Caucase)",
    elevationM: 5_642,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Elbrus",
  },
  borderingCountries: [
    "Norvège", "Finlande", "Estonie", "Lettonie", "Lituanie", "Pologne", "Biélorussie", "Ukraine",
    "Géorgie", "Azerbaïdjan", "Kazakhstan", "Mongolie", "Chine", "Corée du Nord",
  ],
  generalSource: { source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Russia" },
  climate:
    "Subarctique et toundra au Grand Nord et en Sibérie orientale (Oïmiakon, jusqu'à -68 °C), continental humide sur la majeure partie du territoire, poches subtropicales sur la mer Noire (Sotchi). Le pergélisol couvre ~60 % du territoire.",
  summary:
    "La chaîne de l'Oural sépare la Russie européenne, très peuplée, de l'immense Sibérie, qui s'étend jusqu'au détroit de Béring, à 82 km de l'Alaska. Le mont Elbrouz (5 642 m), dans le Caucase, est considéré comme le plus haut sommet d'Europe. Ses côtes arctiques étant largement prises par les glaces, l'accès aux mers chaudes a été une constante géostratégique de son histoire.",
};
