import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_South_Korea";

export const geography: GeographyData = {
  headline: "Une péninsule montagneuse à l'extrémité orientale de l'Asie, coupée en deux depuis 1945 par l'une des frontières les plus fermées du monde",
  areaKm2: {
    value: 100_210,
    unit: "km²",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/korea-south/",
    note: "Superficie de la seule partie sud de la péninsule coréenne ; un pays de taille comparable au Portugal ou à la Hongrie, densément peuplé sur un territoire aux trois quarts montagneux.",
  },
  coastlineKm: {
    value: 2_413,
    unit: "km",
    source: WIKI,
    sourceUrl: WIKI_URL,
    note: "Un littoral très découpé, en particulier au sud-ouest et au sud, bordé de plusieurs milliers d'îles et d'îlots.",
  },
  highestPoint: {
    name: "Hallasan (île de Jeju)",
    elevationM: 1_947,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Hallasan",
  },
  borderingCountries: ["Corée du Nord"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat à quatre saisons bien marquées : hiver froid et sec sous l'influence de l'anticyclone sibérien, été chaud et très humide dominé par la mousson d'Asie de l'Est, avec une saison des pluies concentrée en juillet (le jangma), et des intersaisons (printemps, automne) courtes mais douces. Le sud et l'île de Jeju, plus tempérés, sont proches d'un climat subtropical humide. Le pays est en outre exposé chaque année, entre l'été et le début de l'automne, au passage de typhons issus du Pacifique nord-ouest.",
  summary:
    "La Corée du Sud occupe la moitié méridionale d'une péninsule montagneuse qui s'avance entre la mer Jaune à l'ouest et la mer du Japon (mer de l'Est en Corée) à l'est, face à l'archipel japonais. Le relief, montagneux et vallonné sur environ 70 % du territoire, culmine au Hallasan (1 947 m), volcan bouclier qui forme à lui seul l'île volcanique de Jeju au large de la pointe sud du pays ; sur le continent, la chaîne des Taebaek longe la côte est du nord au sud, laissant à l'ouest et au sud des plaines côtières plus propices à l'agriculture et à l'urbanisation, où se concentre l'essentiel de la population. Depuis l'armistice de 1953, la Corée du Sud ne partage qu'une unique frontière terrestre, avec la Corée du Nord, matérialisée par la zone démilitarisée (DMZ) : une bande d'environ 250 km de long et 4 km de large, l'une des plus lourdement fortifiées et des moins franchissables au monde, qui a paradoxalement préservé un couloir naturel resté largement à l'abri de l'activité humaine depuis plus de 70 ans.",
};
