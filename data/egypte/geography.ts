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
    note: "30ᵉ pays du monde par la superficie ; les terres émergées (hors plans d'eau intérieurs, dont le lac Nasser) en représentent plus de 99 %.",
  },
  coastlineKm: {
    value: 2_450,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "Façade double sur la Méditerranée au nord et sur la mer Rouge à l'est, de part et d'autre de la péninsule du Sinaï et du canal de Suez.",
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
    "Climat désertique chaud sur la quasi-totalité du territoire (classification de Köppen BWh) : étés longs, très chauds et secs (souvent au-delà de 40 °C dans la vallée du Nil et le Sahara égyptien en été), hivers doux, précipitations quasi nulles hors de l'étroite bande côtière méditerranéenne (Alexandrie reçoit l'essentiel des pluies du pays, l'immense majorité du territoire recevant moins de 25 mm par an). Le khamsin, vent chaud et chargé de sable soufflant du Sahara au printemps, provoque régulièrement tempêtes de sable et fortes hausses de température. L'agriculture dépend presque entièrement de l'irrigation par les eaux du Nil plutôt que des précipitations.",
  summary:
    "L'Égypte est avant tout le pays du Nil : sur un territoire immense, largement saharien, à cheval sur le nord-est de l'Afrique et la péninsule du Sinaï (seule partie du pays en Asie, faisant de l'Égypte un État transcontinental), plus de 95 % de la population vit concentrée le long de l'étroite vallée et du vaste delta du fleuve, qui ne représentent qu'environ 5 à 6 % de la superficie nationale — l'une des densités de peuplement les plus extrêmes au monde rapportées aux terres effectivement habitables. De part et d'autre de cette vallée fertile s'étendent le désert Occidental (partie du Sahara, où se trouve la dépression de Qattara, point le plus bas du pays à -133 m) et le désert Oriental, qui borde la mer Rouge. Le grand barrage d'Assouan, achevé en 1970 avec l'aide soviétique, a créé le lac Nasser, l'un des plus grands réservoirs artificiels du monde, et mis fin aux crues annuelles du Nil qui fertilisaient traditionnellement la vallée par leurs limons ; il alimente aussi une part importante de l'électricité du pays. À l'extrémité nord-est du territoire, l'isthme de Suez est percé depuis 1869 par le canal de Suez, voie maritime artificielle sans écluses reliant directement la Méditerranée à la mer Rouge (et donc à l'océan Indien) sans contourner l'Afrique, ce qui fait de l'Égypte un point de passage géostratégique majeur du commerce mondial. Le pays partage ses frontières terrestres avec la Libye à l'ouest, le Soudan au sud et Israël au nord-est du Sinaï (le territoire égyptien borde aussi la bande de Gaza, sous contrôle palestinien, le long d'une frontière courte mais hautement sensible sur le plan sécuritaire et humanitaire).",
};
