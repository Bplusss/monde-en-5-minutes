import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_the_Philippines";

export const geography: GeographyData = {
  headline: "Un archipel de plus de 7 600 îles entre mer de Chine méridionale et océan Pacifique, sur la Ceinture de feu",
  areaKm2: {
    value: 300_000,
    unit: "km²",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Philippines",
    note: "Superficie officielle ; terres émergées d'environ 298 000 km² réparties sur 7 641 îles, dont une large majorité inhabitée.",
  },
  coastlineKm: {
    value: 36_289,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "L'un des plus longs littoraux du monde.",
  },
  highestPoint: {
    name: "Mont Apo (volcan endormi, Mindanao)",
    elevationM: 2_954,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Apo",
  },
  borderingCountries: [],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat tropical maritime, chaud et humide (26-28 °C en moyenne en plaine), rythmé par la mousson du sud-ouest (habagat, juin-octobre, pluvieuse) et celle du nord-est (amihan, novembre-février, plus fraîche et sèche). Une vingtaine de typhons pénètrent chaque année dans la zone de surveillance philippine, surtout entre juillet et novembre.",
  summary:
    "Archipel de 7 641 îles sans frontière terrestre, les Philippines s'étendent entre la mer de Chine méridionale, la mer des Philippines (océan Pacifique) et la mer de Célèbes. Trois ensembles structurent le pays : Luzon au nord, île la plus grande et la plus peuplée, les Visayas au centre et Mindanao au sud. Le relief, montagneux et volcanique, relève de la Ceinture de feu du Pacifique, avec une vingtaine de volcans actifs dont le Mayon et le Taal.",
};
