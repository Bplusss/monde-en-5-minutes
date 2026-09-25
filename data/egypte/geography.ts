import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Egypt";

export const geography: GeographyData = {
  headline: "Un désert traversé par un fleuve unique : plus de 95 % du territoire est un désert quasi inhabité, la quasi-totalité de la population vivant sur environ 5 à 6 % des terres, le long du Nil et de son delta",
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
    "Climat désertique chaud sur la quasi-totalité du territoire : étés longs et très chauds (souvent au-delà de 40 °C), hivers doux, précipitations quasi nulles hors de l'étroite bande côtière méditerranéenne. Le khamsin, vent chaud et chargé de sable soufflant du Sahara au printemps, provoque régulièrement tempêtes de sable et fortes hausses de température. L'agriculture dépend presque entièrement de l'irrigation par le Nil.",
  summary:
    "L'Égypte est avant tout le pays du Nil : sur un territoire largement saharien, à cheval sur l'Afrique et le Sinaï (seule partie du pays en Asie), plus de 95 % de la population vit concentrée le long de l'étroite vallée et du delta du fleuve, qui ne représentent qu'environ 5 à 6 % de la superficie nationale. De part et d'autre s'étendent le désert Occidental (avec la dépression de Qattara, point le plus bas à -133 m) et le désert Oriental, qui borde la mer Rouge. Le grand barrage d'Assouan, achevé en 1970, a créé le lac Nasser et mis fin aux crues annuelles du Nil qui fertilisaient la vallée. À l'extrémité nord-est, le canal de Suez, percé en 1869, relie directement la Méditerranée à la mer Rouge, faisant de l'Égypte un point de passage géostratégique majeur. Le pays est frontalier de la Libye à l'ouest, du Soudan au sud et d'Israël au nord-est du Sinaï.",
};
