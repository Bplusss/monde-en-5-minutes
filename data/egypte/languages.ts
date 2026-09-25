import type { LanguagesData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Languages_of_Egypt";

export const languages: LanguagesData = {
  entries: [
    { name: "Arabe standard moderne", kind: "officielle", note: "Langue officielle de l'État, de l'enseignement et de l'administration ; forme écrite commune au monde arabophone, peu utilisée à l'oral." },
    { name: "Arabe égyptien", kind: "parlée", sharePercent: { value: 68, unit: "% de la population (langue maternelle, estimation)", year: 2022, source: WIKI, sourceUrl: WIKI_URL }, note: "Dialecte vernaculaire parlé quotidiennement ; grâce au poids du cinéma et de la musique égyptiens depuis le milieu du XXe siècle, c'est de loin le dialecte arabe le plus largement compris hors de ses frontières." },
    { name: "Arabe saïdi (Haute-Égypte)", kind: "régionale", note: "Variante dialectale parlée en Haute-Égypte, distincte de l'arabe cairote dominant dans les médias." },
    { name: "Nubien (nobiin et kenzi/dongolawi)", kind: "régionale", note: "Langues du peuple nubien, dans l'extrême sud autour d'Assouan ; en net recul face à l'arabe." },
    { name: "Berbère siwi", kind: "régionale", note: "Langue amazighe parlée dans l'oasis isolée de Siwa, près de la frontière libyenne — seule communauté berbérophone du pays." },
    { name: "Domari", kind: "parlée", note: "Langue indo-aryenne parlée par les Doms, en forte régression." },
    { name: "Anglais et français", kind: "parlée", note: "Sans statut officiel, mais largement enseignés et utilisés dans l'enseignement supérieur, le tourisme et les affaires." },
  ],
  summary:
    "L'arabe standard moderne est la seule langue officielle de l'Égypte, utilisée à l'écrit et dans l'administration, mais la vie quotidienne se déroule en arabe égyptien, dialecte au statut culturel unique dans le monde arabe : porté depuis les années 1930-1950 par le cinéma et la musique égyptiens (le Caire surnommé « Hollywood du Nil »), il reste le dialecte arabe le plus largement compris de la région. Les langues minoritaires (nubien, berbère siwi, domari) reculent face à l'arabisation, tandis que l'anglais, et dans une moindre mesure le français, jouent un rôle notable dans l'enseignement supérieur et les affaires sans statut officiel.",
};
