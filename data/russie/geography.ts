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
    note: "Plus grand pays du monde par la superficie, couvrant environ 11 % des terres émergées. N'inclut pas la Crimée, annexée par la Russie en 2014 mais internationalement reconnue comme territoire ukrainien (voir Territoire).",
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
    "Gamme climatique extrême : subarctique et toundra glaciale au Grand Nord et en Sibérie orientale (Oïmiakon, localité habitée la plus froide de l'hémisphère nord, jusqu'à -68 °C), continental humide sur la majeure partie du territoire, et poches subtropicales sur la côte de la mer Noire (Sotchi). Le pergélisol couvre ~60 % du territoire, et son dégel déstabilise déjà des infrastructures entières en Sibérie.",
  summary:
    "De très loin le plus grand pays du monde (17 millions de km², près du double du Canada), la Russie s'étend sur onze fuseaux horaires, un record mondial. La chaîne de l'Oural sépare la Russie européenne, peu étendue mais très peuplée, de l'immense Sibérie asiatique, jusqu'au détroit de Béring qui la sépare de l'Alaska par 82 km. Le lac Baïkal est le plus profond et le plus grand réservoir d'eau douce liquide du monde ; le mont Elbrouz (5 642 m), dans le Caucase, est considéré comme le plus haut sommet d'Europe. Une grande partie des côtes arctiques restant prise par les glaces, l'accès à des mers chaudes libres de glace a été une constante géostratégique de son histoire.",
};
