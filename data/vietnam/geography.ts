import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Vietnam";

export const geography: GeographyData = {
  headline: "Un long ruban en forme de S, entre deux deltas rizicoles reliés par une étroite bande côtière adossée à la cordillère Annamitique",
  areaKm2: {
    value: 331_345,
    unit: "km²",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/AG.SRF.TOTL.K2?locations=VN",
    note: "Hors archipels Paracels et Spratleys, revendiqués par le Vietnam mais disputés (voir Territoire).",
  },
  coastlineKm: {
    value: 3_260,
    unit: "km",
    source: WIKI,
    sourceUrl: WIKI_URL,
    note: "Littoral continental, îles exclues, ouvert sur le golfe du Tonkin, la mer de Chine méridionale (« mer de l'Est » pour Hanoï) et le golfe de Thaïlande.",
  },
  highestPoint: {
    name: "Fansipan (chaîne de Hoàng Liên Sơn, province de Lào Cai)",
    elevationM: 3_143,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Fansipan",
  },
  borderingCountries: ["Chine", "Laos", "Cambodge"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Tropical de mousson au sud (chaud toute l'année, saison des pluies de mai à octobre) et subtropical au nord, avec un hiver frais et humide à Hanoï. Le centre reçoit ses plus fortes pluies de septembre à décembre, saison des typhons.",
  summary:
    "Le Vietnam s'étire sur environ 1 650 km du nord au sud, pour une largeur réduite à 50 km au niveau de la province de Quảng Bình (aujourd'hui fondue dans Quảng Trị). Le pays est souvent décrit comme deux paniers de riz — le delta du fleuve Rouge au nord, celui du Mékong au sud — reliés par une palanche : la plaine côtière du centre, adossée à la cordillère Annamitique (Trường Sơn) qui marque la frontière avec le Laos. Les trois quarts du territoire sont formés de collines et de montagnes, culminant au Fansipan dans le nord-ouest.",
};
