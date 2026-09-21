import type { LanguagesData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Languages_of_Egypt";

export const languages: LanguagesData = {
  entries: [
    { name: "Arabe standard moderne", kind: "officielle", note: "Langue officielle de l'État, de l'enseignement, de l'administration, de la presse écrite et des discours formels ; forme écrite commune à l'ensemble du monde arabophone, très proche de l'arabe classique coranique mais peu utilisée à l'oral dans la vie quotidienne." },
    { name: "Arabe égyptien", kind: "parlée", sharePercent: { value: 68, unit: "% de la population (langue maternelle, estimation)", year: 2022, source: WIKI, sourceUrl: WIKI_URL }, note: "Dialecte vernaculaire parlé quotidiennement par la quasi-totalité des Égyptiens ; grâce au poids historique du cinéma, de la musique et de la télévision égyptiens dans le monde arabe depuis le milieu du XXe siècle, c'est de loin le dialecte arabe le plus largement compris hors de ses frontières, un rôle de lingua franca médiatique parfois comparé à celui du français parisien ou de l'anglais américain dans leurs aires linguistiques respectives." },
    { name: "Arabe saïdi (Haute-Égypte)", kind: "régionale", note: "Variante dialectale parlée en Haute-Égypte (sud du pays), phonétiquement et lexicalement distincte de l'arabe cairote dominant dans les médias." },
    { name: "Nubien (nobiin et kenzi/dongolawi)", kind: "régionale", note: "Langues du peuple nubien, dans l'extrême sud du pays autour d'Assouan et du lac Nasser ; en net recul intergénérationnel face à l'arabe, en partie du fait des déplacements de population liés à la construction du haut barrage d'Assouan dans les années 1960." },
    { name: "Berbère siwi", kind: "régionale", note: "Langue amazighe (berbère) parlée dans l'oasis isolée de Siwa, près de la frontière libyenne — seule communauté berbérophone significative d'Égypte." },
    { name: "Domari", kind: "parlée", note: "Langue indo-aryenne parlée par les Doms (communautés parfois assimilées aux Roms d'Europe), en forte régression." },
    { name: "Anglais et français", kind: "parlée", note: "Sans statut officiel, mais largement enseignés et couramment utilisés dans l'enseignement supérieur, le tourisme, les affaires et par les classes urbaines éduquées ; héritage en partie de l'occupation britannique et de l'influence culturelle francophone du XIXe siècle." },
  ],
  summary:
    "L'arabe standard moderne est la seule langue officielle de l'Égypte, utilisée à l'écrit, dans l'administration et les médias formels, mais la langue de la vie quotidienne est l'arabe égyptien, un dialecte vernaculaire distinct qui bénéficie d'un statut culturel unique dans le monde arabe : porté depuis les années 1930-1950 par l'industrie cinématographique et musicale égyptienne, alors la plus puissante de la région (le Caire ayant longtemps été surnommé « Hollywood du Nil »), il reste aujourd'hui le dialecte arabe le plus largement compris d'un bout à l'autre du monde arabophone. Les langues minoritaires (nubien dans le sud, berbère siwi à l'oasis de Siwa, domari) ne concernent que de petites communautés et reculent face à l'arabisation, tandis que l'anglais, et dans une moindre mesure le français, jouent un rôle notable dans l'enseignement supérieur, le tourisme et les affaires sans disposer d'aucun statut officiel.",
};
