import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Iran";

export const geography: GeographyData = {
  headline: "Un vaste plateau montagneux entre mer Caspienne et golfe Persique, à cheval sur le Moyen-Orient et l'Asie centrale",
  areaKm2: {
    value: 1_648_195,
    unit: "km²",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/iran/",
    note: "17ᵉ pays du monde par la superficie ; comprend la part iranienne de la mer Caspienne.",
  },
  coastlineKm: {
    value: 2_440,
    unit: "km",
    source: WIKI,
    sourceUrl: WIKI_URL,
    note: "Façades sur le golfe Persique et le golfe d'Oman au sud ; au nord, environ 740 km supplémentaires sur la mer Caspienne, en réalité le plus grand lac du monde.",
  },
  highestPoint: {
    name: "Damavand (chaîne de l'Alborz)",
    elevationM: 5_610,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Damavand",
  },
  borderingCountries: ["Irak", "Turquie", "Arménie", "Azerbaïdjan", "Turkménistan", "Afghanistan", "Pakistan"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat dominé par l'aridité sur le haut plateau central, ceinturé par l'Alborz et le Zagros, avec deux grands déserts (Dasht-e Kavir et Dasht-e Lut). La bande côtière caspienne bénéficie d'un climat subtropical humide, les sommets d'un climat de montagne, et le sud, sur le golfe Persique, reste chaud et humide toute l'année.",
  summary:
    "Avec 1 648 195 km², l'Iran est le deuxième plus grand pays du Moyen-Orient après l'Arabie saoudite et le 17ᵉ au monde. Son relief est dominé par un vaste plateau intérieur aride, encadré par l'Alborz au nord — qui culmine au volcan Damavand (5 610 m), plus haut volcan d'Asie — et le Zagros au sud-ouest. L'Iran possède une double façade maritime, au sud sur le golfe Persique et le golfe d'Oman (détroit d'Ormuz), au nord sur la mer Caspienne, et partage ses frontières terrestres avec sept États.",
};
