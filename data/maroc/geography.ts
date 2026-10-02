import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Morocco";

export const geography: GeographyData = {
  headline: "Un pays de montagnes entre deux mers : l'Atlas et le Rif séparent les plaines atlantiques peuplées des steppes et du désert présaharien",
  areaKm2: {
    value: 446_550,
    unit: "km²",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "Superficie dans les frontières internationalement reconnues, hors Sahara occidental (environ 266 000 km²). Le chiffre officiel marocain, qui inclut ce territoire, est d'environ 710 850 km² (voir Territoire).",
  },
  coastlineKm: {
    value: 1_835,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "Hors Sahara occidental. Seul pays d'Afrique avec une façade à la fois sur l'Atlantique et sur la Méditerranée, de part et d'autre du détroit de Gibraltar (14 km de l'Espagne).",
  },
  highestPoint: {
    name: "Jbel Toubkal (Haut Atlas, au sud de Marrakech)",
    elevationM: 4_167,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Toubkal",
  },
  borderingCountries: ["Algérie", "Espagne (Ceuta et Melilla)", "Sahara occidental (territoire non autonome)"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat méditerranéen au nord et sur la côte atlantique, tempéré par le courant froid des Canaries ; montagnard dans l'Atlas, enneigé l'hiver ; aride puis désertique au sud et à l'est. Les pluies, concentrées au nord-ouest, varient fortement d'une année à l'autre.",
  summary:
    "Le Maroc occupe l'angle nord-ouest de l'Afrique. Le Rif borde la Méditerranée ; le Moyen Atlas, le Haut Atlas — qui culmine au Toubkal, point le plus haut d'Afrique du Nord — et l'Anti-Atlas traversent le pays du nord-est au sud-ouest. À l'ouest s'étendent les plaines atlantiques (Gharb, Chaouia, Doukkala, Haouz), cœur urbain et agricole ; au sud et à l'est, l'Oriental et les vallées présahariennes (Drâa, Ziz, Tafilalet) annoncent le Sahara.",
};
