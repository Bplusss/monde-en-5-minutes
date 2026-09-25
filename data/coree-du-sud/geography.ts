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
    note: "Taille comparable au Portugal ou à la Hongrie.",
  },
  coastlineKm: {
    value: 2_413,
    unit: "km",
    source: WIKI,
    sourceUrl: WIKI_URL,
    note: "Littoral très découpé, bordé de plusieurs milliers d'îles.",
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
    "Climat à quatre saisons marquées : hiver froid et sec, été chaud et humide dominé par la mousson (jangma en juillet). Le sud et Jeju sont plus tempérés. Le pays est exposé chaque été-automne aux typhons.",
  summary:
    "La Corée du Sud occupe la moitié méridionale d'une péninsule montagneuse entre mer Jaune et mer du Japon. Le relief, montagneux sur environ 70 % du territoire, culmine au Hallasan (1 947 m), volcan qui forme l'île de Jeju ; les plaines de l'ouest et du sud concentrent l'essentiel de la population. Depuis 1953, le pays ne partage qu'une frontière terrestre, avec la Corée du Nord, matérialisée par la zone démilitarisée (DMZ), l'une des plus fortifiées au monde.",
};
