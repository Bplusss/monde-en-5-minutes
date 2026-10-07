import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Deux terres séparées par la mer de Chine méridionale : la péninsule malaise et le nord de Bornéo",
  areaKm2: {
    value: 330_803,
    unit: "km²",
    source: "Department of Statistics Malaysia (DOSM)",
    sourceUrl: "https://www.dosm.gov.my/",
  },
  coastlineKm: {
    value: 4_675,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Malaysia",
  },
  highestPoint: {
    name: "Mont Kinabalu (Sabah)",
    elevationM: 4_095,
    source: "UNESCO",
    sourceUrl: "https://whc.unesco.org/fr/list/1012",
  },
  borderingCountries: ["Thaïlande", "Indonésie", "Brunei"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Malaysia" },
  climate:
    "Le climat est équatorial : chaud et humide toute l'année, autour de 27 °C, avec des pluies abondantes. La mousson du nord-est, de novembre à mars, provoque de fortes pluies et des inondations sur la côte est de la péninsule, au Sabah et au Sarawak ; la mousson du sud-ouest, de mai à septembre, est plus sèche. Les hauteurs, comme les Cameron Highlands, sont nettement plus fraîches.",
  summary:
    "La Malaisie se compose de deux ensembles séparés par environ 600 km de mer : la Malaisie péninsulaire, au sud de la Thaïlande, où vivent huit habitants sur dix, et la Malaisie orientale (Sabah et Sarawak), qui occupe le nord de l'île de Bornéo, partagée avec l'Indonésie et Brunei. La péninsule est traversée par une chaîne montagneuse, la Titiwangsa, entre une côte ouest densément urbanisée le long du détroit de Malacca et une côte est plus rurale. Bornéo, plus étendue, est couverte de forêts tropicales et culmine au mont Kinabalu.",
};
