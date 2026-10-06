import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le « toit de l'Afrique », hauts plateaux coupés en deux par la vallée du Rift",
  areaKm2: {
    value: 1_104_300,
    unit: "km²",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/ethiopia/",
  },
  highestPoint: {
    name: "Ras Dashen (monts Simien)",
    elevationM: 4_550,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Ras_Dashen",
  },
  borderingCountries: ["Érythrée", "Djibouti", "Somalie", "Kenya", "Soudan du Sud", "Soudan"],
  generalSource: { source: "CIA World Factbook / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Ethiopia" },
  climate:
    "Le climat dépend avant tout de l'altitude : tempéré et frais sur les hauts plateaux, où Addis-Abeba, à 2 355 m, connaît des températures printanières toute l'année ; torride et aride dans les basses terres de l'est et du sud et dans la dépression du Danakil. La grande saison des pluies (kiremt) s'étend de juin à septembre.",
  summary:
    "Pays enclavé depuis l'indépendance de l'Érythrée en 1993, l'Éthiopie est dominée par de hauts plateaux volcaniques, souvent à plus de 2 000 m, qui lui valent le surnom de « toit de l'Afrique ». La vallée du Rift la traverse du nord-est au sud-ouest, jalonnée de lacs. Les hauts plateaux, où naît le Nil Bleu au lac Tana, concentrent la population et l'agriculture, tandis que les basses terres de l'est, peuplées d'éleveurs, et la dépression du Danakil, à plus de 100 m sous le niveau de la mer, comptent parmi les régions les plus chaudes du globe.",
};
