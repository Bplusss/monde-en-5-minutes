import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_the_Democratic_Republic_of_the_Congo";

export const geography: GeographyData = {
  headline: "Un pays-continent centré sur la cuvette du Congo : forêt équatoriale au centre, plateaux miniers au sud-est, montagnes et grands lacs du Rift à l'est, et seulement 37 km de côte",
  areaKm2: {
    value: 2_345_409,
    unit: "km²",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "Deuxième pays d'Afrique par la superficie après l'Algérie, onzième du monde ; plus de quatre fois la France métropolitaine.",
  },
  coastlineKm: {
    value: 37,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "Étroit débouché sur l'Atlantique à l'embouchure du fleuve Congo, entre l'enclave angolaise de Cabinda et l'Angola.",
  },
  highestPoint: {
    name: "Pic Marguerite (mont Stanley, massif du Rwenzori, frontière ougandaise)",
    elevationM: 5_109,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Stanley",
  },
  borderingCountries: ["République du Congo", "République centrafricaine", "Soudan du Sud", "Ouganda", "Rwanda", "Burundi", "Tanzanie", "Zambie", "Angola"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat équatorial chaud et humide dans la cuvette centrale, avec des pluies toute l'année ; climat tropical à saison sèche marquée au nord et au sud, plus frais sur les plateaux du Katanga et dans les montagnes du Kivu. Le pays étant traversé par l'équateur, les saisons des pluies alternent entre le nord et le sud.",
  summary:
    "La RDC couvre plus de 60 % du bassin du fleuve Congo. Le centre du pays est une vaste cuvette de forêt dense humide, deuxième massif forestier tropical du monde après l'Amazonie. Au sud-est, les plateaux du Katanga portent la « ceinture de cuivre » partagée avec la Zambie. À l'est, la branche occidentale du Rift dessine une ligne de grands lacs (Albert, Édouard, Kivu, Tanganyika) et de volcans, dont le Nyiragongo au-dessus de Goma.",
};
