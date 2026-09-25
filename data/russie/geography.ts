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
    note: "Plus grand pays du monde par la superficie — près de deux fois la taille du Canada, deuxième pays le plus vaste — et couvrant à lui seul environ 11 % des terres émergées de la planète. Cette superficie n'inclut pas la péninsule de Crimée, annexée unilatéralement par la Russie en 2014 mais internationalement reconnue comme territoire ukrainien (voir la section Territoire).",
  },
  coastlineKm: {
    value: 37_653,
    unit: "km",
    source: CIA,
    sourceUrl: CIA_URL,
    note: "Le plus long littoral national au monde, sur pas moins de treize mers différentes appartenant à trois océans (Arctique, Pacifique, et Atlantique via la mer Baltique, la mer Noire et la mer d'Azov).",
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
    "L'immense étendue du territoire, de la Baltique au Pacifique et du cercle polaire arctique aux confins du Caucase et de l'Asie centrale, produit une gamme climatique extrême : climat subarctique et toundra glaciale dans le Grand Nord et en Sibérie orientale (Oïmiakon, dans la République de Sakha, détient le record de la localité habitée en permanence la plus froide de l'hémisphère nord, avec des minima historiques proches de -68 °C), climat continental humide sur la majeure partie de la Russie européenne et de la Sibérie occidentale (hivers longs et rigoureux, étés courts mais souvent chauds), et poches climatiques subtropicales humides sur l'étroite côte de la mer Noire (région de Sotchi). Le pergélisol couvre environ 60 % du territoire russe, notamment en Sibérie, où son dégel progressif sous l'effet du réchauffement climatique déstabilise déjà des infrastructures entières (routes, pipelines, immeubles) et libère du méthane auparavant piégé.",
  summary:
    "Par sa superficie, la Russie est de très loin le plus grand pays du monde : avec plus de 17 millions de km², elle est presque deux fois plus vaste que le Canada, deuxième pays le plus étendu, et s'étend sur onze fuseaux horaires (de UTC+2 à Kaliningrad jusqu'à UTC+12 dans l'extrême est), un record mondial. Son immense territoire, transcontinental, couvre l'essentiel du nord de l'Eurasie : la chaîne de l'Oural, orientée nord-sud, sépare conventionnellement la Russie européenne (environ un quart de la superficie totale, mais où vit l'écrasante majorité de la population) de la Sibérie asiatique, elle-même subdivisée en plaine de Sibérie occidentale, plateau de Sibérie centrale et vastes chaînes montagneuses de Sibérie orientale jusqu'au détroit de Béring, qui sépare la Russie des États-Unis (Alaska) par à peine 82 km au point le plus étroit. Le lac Baïkal, en Sibérie méridionale, est à la fois le lac le plus profond (1 642 m) et le plus grand réservoir d'eau douce liquide non gelée du monde en volume, abritant une biodiversité endémique unique classée au patrimoine mondial de l'UNESCO. Le point culminant du pays, le mont Elbrouz dans le Caucase (5 642 m), est aussi considéré par convention comme le plus haut sommet d'Europe. La Russie possède le plus long littoral national au monde, mais une grande partie de ses côtes arctiques reste prise par les glaces une bonne partie de l'année, ce qui a fait de l'accès à des mers chaudes libres de glace toute l'année (mer Noire, Baltique) une constante géostratégique de son histoire.",
};
