import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Egypt";

export const geography: GeographyData = {
  headline: "Un désert traversé par un fleuve unique, le Nil, le long duquel vit la quasi-totalité de la population",
  areaKm2: {
    value: 1_010_408,
    unit: "km²",
    year: 2024,
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "30ᵉ pays du monde par la superficie.",
  },
  coastlineKm: {
    value: 2_450,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "Façade double sur la Méditerranée au nord et la mer Rouge à l'est, de part et d'autre du Sinaï et du canal de Suez.",
  },
  highestPoint: {
    name: "Mont Sainte-Catherine (Jabal Katherina, sud du Sinaï)",
    elevationM: 2_629,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Catherine",
  },
  borderingCountries: ["Libye", "Soudan", "Israël"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Désertique chaud presque partout : étés très chauds (souvent au-delà de 40 °C), hivers doux, pluies quasi nulles hors de la côte méditerranéenne. Au printemps, le khamsin, vent chaud du Sahara, provoque des tempêtes de sable.",
  summary:
    "Sur un territoire largement saharien, à cheval sur l'Afrique et le Sinaï (seule partie du pays en Asie), la vie se concentre dans l'étroite vallée du Nil et son delta. De part et d'autre s'étendent le désert Occidental (dépression de Qattara, -133 m) et le désert Oriental, qui borde la mer Rouge. Le haut barrage d'Assouan, achevé en 1970, a créé le lac Nasser et mis fin aux crues annuelles du Nil. Au nord-est, le canal de Suez fait du pays un point de passage géostratégique majeur.",
};
