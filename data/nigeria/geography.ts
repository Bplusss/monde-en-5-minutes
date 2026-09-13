import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Nigeria";

export const geography: GeographyData = {
  headline: "Le pays le plus peuplé d'Afrique, entre côte atlantique tropicale et savanes sahéliennes",
  areaKm2: {
    value: 923_769,
    unit: "km²",
    source: "Bureau national de statistique du Nigeria (NBS)",
    sourceUrl: "https://nigerianstat.gov.ng/",
  },
  coastlineKm: {
    value: 853,
    unit: "km",
    source: WIKI,
    sourceUrl: WIKI_URL,
  },
  highestPoint: {
    name: "Chappal Waddi",
    elevationM: 2_419,
    source: WIKI,
    sourceUrl: WIKI_URL,
  },
  borderingCountries: ["Bénin", "Niger", "Tchad", "Cameroun"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat qui se réchauffe et s'assèche du sud vers le nord : climat de mousson tropicale et forêt équatoriale sur la côte et le delta du Niger, savane tropicale à saisons contrastées sur les plateaux du centre, puis climat semi-aride sahélien dans l'extrême nord, où la saison sèche peut durer huit mois. Le harmattan, vent chaud et chargé de poussière venu du Sahara, souffle sur tout le pays de novembre à mars.",
  summary:
    "Avec 923 769 km², le Nigeria est l'un des grands pays d'Afrique de l'Ouest, bordé par le golfe de Guinée sur environ 853 km de côtes et traversé du nord au sud par le fleuve Niger, qui rejoint son principal affluent, la Bénoué, à Lokoja avant de former l'immense delta du Niger sur la côte atlantique. Le relief, globalement modeste, s'élève vers l'est jusqu'au point culminant du pays, le Chappal Waddi (2 419 m), dans les hautes terres frontalières du Cameroun. Le pays partage ses frontières terrestres avec le Bénin à l'ouest, le Niger au nord, le Tchad au nord-est (sur les rives du lac Tchad, très réduit) et le Cameroun à l'est.",
};
