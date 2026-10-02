import type { LanguagesData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Languages_of_Russia";

export const languages: LanguagesData = {
  entries: [
    { name: "Russe", kind: "officielle", sharePercent: { value: 99.4, unit: "% de la population (locuteurs, estimation)", year: 2020, source: WIKI, sourceUrl: WIKI_URL }, note: "Maternelle pour environ 80 % de la population ; l'une des six langues officielles de l'ONU." },
    { name: "Tatar", kind: "régionale", note: "Langue turcique co-officielle en République du Tatarstan ; les Tatars forment la deuxième nationalité du pays." },
    { name: "Tchétchène et autres langues du Caucase du Nord", kind: "régionale", note: "Co-officielles dans leurs républiques (Tchétchénie, Daguestan, Kabardino-Balkarie...)." },
    { name: "Bachkir", kind: "régionale", note: "Co-officiel en République de Bachkirie, langue turcique proche du tatar." },
    { name: "Iakoute (sakha)", kind: "régionale", note: "Co-officiel en République de Sakha (Iakoutie), langue turcique du Grand Nord sibérien." },
    { name: "Tchouvache, oudmourte, mari, komi et autres langues finno-ougriennes", kind: "régionale", note: "Co-officielles dans leurs républiques de la région Volga-Oural." },
    { name: "Bouriate, kalmouk, touvain, altaï, khakasse", kind: "régionale", note: "Langues mongoles ou turciques, co-officielles dans leurs républiques." },
    { name: "Langues des peuples autochtones du Nord et de Sibérie orientale", kind: "parlée", note: "Une quarantaine de langues (nénètse, khanty, tchouktche...), pour beaucoup gravement menacées d'extinction." },
    { name: "Ukrainien", kind: "parlée", note: "Historiquement parlé par une minorité en Russie, en net recul depuis l'invasion de l'Ukraine en 2022." },
  ],
  summary:
    "Seule langue officielle fédérale, le russe sert de langue véhiculaire quasi universelle, y compris dans les républiques dotées d'une langue co-officielle. Une réforme scolaire de 2018, rendant facultatif l'apprentissage des langues régionales, est dénoncée comme une russification accélérée. Le Daguestan compte à lui seul une trentaine de langues officielles.",
};
