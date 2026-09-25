import type { LanguagesData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Languages_of_Russia";

export const languages: LanguagesData = {
  entries: [
    { name: "Russe", kind: "officielle", sharePercent: { value: 99.4, unit: "% de la population (locuteurs, estimation)", year: 2020, source: WIKI, sourceUrl: WIKI_URL }, note: "Langue officielle sur tout le territoire, maternelle pour environ 80 % de la population, et l'une des six langues officielles de l'ONU." },
    { name: "Tatar", kind: "régionale", note: "Langue turcique co-officielle en République du Tatarstan ; les Tatars forment la deuxième nationalité du pays." },
    { name: "Tchétchène et autres langues du Caucase du Nord", kind: "régionale", note: "Co-officielles dans leurs républiques (Tchétchénie, Daguestan — à lui seul une trentaine de langues officielles locales, Kabardino-Balkarie...)." },
    { name: "Bachkir", kind: "régionale", note: "Co-officiel en République de Bachkirie, langue turcique proche du tatar." },
    { name: "Iakoute (sakha)", kind: "régionale", note: "Co-officiel en République de Sakha (Iakoutie), langue turcique du Grand Nord sibérien." },
    { name: "Tchouvache, oudmourte, mari, komi et autres langues finno-ougriennes", kind: "régionale", note: "Co-officielles dans leurs républiques de la région Volga-Oural ; apparentées de loin au finnois et au hongrois." },
    { name: "Bouriate, kalmouk, touvain, altaï, khakasse", kind: "régionale", note: "Langues mongoles ou turciques de Sibérie méridionale et du Caucase, co-officielles dans leurs républiques respectives." },
    { name: "Langues des peuples autochtones du Nord et de Sibérie orientale", kind: "parlée", note: "Une quarantaine de langues (nénètse, khanty, tchouktche...), pour beaucoup gravement menacées d'extinction." },
    { name: "Ukrainien", kind: "parlée", note: "Historiquement parlé par une minorité en Russie, en net recul depuis l'invasion de l'Ukraine en 2022." },
  ],
  summary:
    "Le russe, seule langue officielle fédérale, est parlé comme langue maternelle par environ 80 % de la population et sert de langue véhiculaire quasi universelle, y compris dans les républiques où une autre langue a un statut co-officiel local (tatar, tchétchène, iakoute...). Une réforme scolaire de 2018, rendant facultatif l'apprentissage des langues régionales, est dénoncée par des militants culturels comme une russification accélérée. Le Daguestan concentre à lui seul une trentaine de langues officielles, tandis que plusieurs dizaines de langues autochtones de Sibérie sont considérées comme gravement menacées par l'UNESCO.",
};
