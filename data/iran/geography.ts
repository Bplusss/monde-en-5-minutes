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
    note: "17ᵉ pays du monde par la superficie ; comprend environ 116 600 km² de plans d'eau intérieurs, dont la part iranienne de la mer Caspienne.",
  },
  coastlineKm: {
    value: 2_440,
    unit: "km",
    source: WIKI,
    sourceUrl: WIKI_URL,
    note: "Façades sur le golfe Persique et le golfe d'Oman au sud ; au nord, l'Iran borde sur environ 740 km supplémentaires la mer Caspienne — en réalité le plus grand lac du monde, sans accès à l'océan, ce qui en fait une façade « maritime » au sens géographique mais pas au sens du droit de la mer.",
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
    "Climat dominé par l'aridité : l'essentiel du haut plateau iranien central, ceinturé par les chaînes de l'Alborz au nord et du Zagros à l'ouest et au sud, connaît un climat aride à semi-aride continental, avec deux grands déserts (Dasht-e Kavir et Dasht-e Lut, l'un des endroits les plus chauds de la planète). L'étroite bande côtière caspienne au nord, protégée des vents secs par l'Alborz, bénéficie au contraire d'un climat subtropical humide, verdoyant et l'un des plus arrosés du pays, tandis que les hauts sommets de l'Alborz et du Zagros connaissent un climat de montagne avec des hivers rigoureux et un enneigement important. Le sud, sur les rives du golfe Persique, est chaud et humide toute l'année.",
  summary:
    "Avec 1 648 195 km², l'Iran est le deuxième plus grand pays du Moyen-Orient après l'Arabie saoudite et le 17ᵉ au monde. Son relief est dominé par un vaste plateau intérieur aride, encadré au nord par la chaîne de l'Alborz — qui culmine au volcan Damavand (5 610 m), point culminant du pays et plus haut volcan d'Asie — et à l'ouest et au sud-ouest par la longue chaîne plissée du Zagros, qui sépare le plateau iranien de la plaine mésopotamienne. Le centre du pays abrite deux immenses déserts peu habités, le Dasht-e Kavir (désert salé) et le Dasht-e Lut. L'Iran possède une double façade maritime : au sud, sur le golfe Persique et le golfe d'Oman, par lesquels transite une part majeure du commerce pétrolier mondial via le détroit d'Ormuz ; au nord, sur la mer Caspienne, le plus vaste plan d'eau intérieur du monde. Le pays partage ses frontières terrestres avec sept États : l'Irak et la Turquie à l'ouest, l'Arménie et l'Azerbaïdjan au nord-ouest, le Turkménistan au nord-est, et l'Afghanistan et le Pakistan à l'est.",
};
