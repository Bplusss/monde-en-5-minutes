import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Ukraine";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire ukrainienne, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "rus-de-kiev",
      title: "La Rus' de Kiev, berceau médiéval slave oriental",
      startYear: 882,
      endYear: 1240,
      summary:
        "Fédération de principautés slaves orientales centrée sur Kiev, la Rus' de Kiev atteint son apogée aux XIᵉ et XIIᵉ siècles avant d'être ravagée par l'invasion mongole en 1240. Cet État médiéval constitue l'héritage historique commun revendiqué par l'Ukraine, la Russie et la Biélorussie modernes, un point qui reste un enjeu identitaire et politique majeur dans les relations russo-ukrainiennes contemporaines.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "cosaques-empires",
      title: "L'hetmanat cosaque et le partage entre empires",
      startYear: 1649,
      endYear: 1917,
      summary:
        "Les cosaques zaporogues fondent un hetmanat autonome en 1649 sous Bohdan Khmelnytsky, qui place l'année suivante une large part du territoire ukrainien sous la suzeraineté du tsar de Russie. Les territoires ukrainiens sont ensuite progressivement absorbés par l'Empire russe, à l'exception de la Galicie occidentale qui passe sous domination autrichienne puis austro-hongroise, une division qui façonne durablement les identités régionales du pays.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1654",
          title: "Traité de Pereïaslav",
          description: "L'hetman cosaque Bohdan Khmelnytsky place l'Ukraine cosaque sous la suzeraineté du tsar de Russie, un accord dont l'interprétation reste disputée entre historiens.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Pereyaslav",
        },
      ],
    },
    {
      id: "urss-holodomor",
      title: "L'Ukraine soviétique, la famine et Tchernobyl",
      startYear: 1922,
      endYear: 1991,
      summary:
        "République constitutive de l'URSS à partir de 1922, l'Ukraine subit en 1932-1933 une famine organisée par le régime soviétique, le Holodomor, qui tue plusieurs millions de personnes et qu'un nombre croissant de pays reconnaissent aujourd'hui comme un génocide. Elle est ensuite l'un des principaux théâtres de la Seconde Guerre mondiale, avant de subir en 1986 la catastrophe nucléaire de Tchernobyl, l'accident civil le plus grave de l'histoire.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1932-1933",
          title: "Holodomor",
          description: "Famine provoquée par les politiques de collectivisation forcée et les réquisitions de céréales du régime stalinien, qui cause la mort de plusieurs millions d'Ukrainiens ; reconnue comme un génocide par l'Ukraine et plus d'une trentaine d'autres pays.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Holodomor",
        },
        {
          date: "26 avril 1986",
          title: "Catastrophe de Tchernobyl",
          description: "L'explosion du réacteur n°4 de la centrale nucléaire de Tchernobyl provoque le plus grave accident nucléaire civil de l'histoire, contaminant durablement une vaste zone au nord du pays.",
          source: BRITANNICA,
          sourceUrl: "https://www.britannica.com/event/Chernobyl-disaster",
        },
      ],
    },
    {
      id: "independance-maidan",
      title: "Indépendance, Euromaïdan et annexion de la Crimée",
      startYear: 1991,
      endYear: 2022,
      summary:
        "L'Ukraine proclame son indépendance en 1991, confirmée par référendum en décembre. Après la Révolution orange de 2004, le mouvement de l'Euromaïdan (2013-2014) — déclenché par le refus du pouvoir de signer un accord d'association avec l'Union européenne — provoque la chute du président Viktor Ianoukovytch. La Russie réplique en annexant unilatéralement la Crimée en mars 2014, une annexion non reconnue par la quasi-totalité de la communauté internationale, et soutient des forces séparatistes dans l'est du pays (Donbass), où un conflit armé larvé se poursuit jusqu'à l'invasion de grande ampleur de 2022.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1ᵉʳ décembre 1991",
          title: "Référendum d'indépendance",
          description: "Plus de 90 % des votants approuvent l'indépendance de l'Ukraine, proclamée quelques mois plus tôt par le Parlement.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/1991_Ukrainian_independence_referendum",
        },
        {
          date: "Novembre 2013 – février 2014",
          title: "Euromaïdan (Révolution de la Dignité)",
          description: "Des mois de manifestations à Kiev, réprimées dans le sang en février 2014, aboutissent à la destitution du président Viktor Ianoukovytch et à un tournant pro-européen du pays.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Revolution_of_Dignity",
        },
        {
          date: "Mars 2014",
          title: "Annexion de la Crimée",
          description: "La Russie annexe unilatéralement la péninsule de Crimée à l'issue d'un référendum organisé sous occupation militaire, jugé illégal par l'Assemblée générale de l'ONU et non reconnu par la quasi-totalité des États membres.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Annexation_of_Crimea_by_the_Russian_Federation",
        },
      ],
    },
    {
      id: "invasion-2022",
      title: "L'invasion russe de grande ampleur",
      startYear: 2022,
      endYear: "present",
      summary:
        "Le 24 février 2022, la Russie lance une invasion de grande ampleur de l'Ukraine, déclenchant le plus grand conflit armé en Europe depuis la Seconde Guerre mondiale. Après l'échec de l'offensive initiale sur Kiev, la guerre se stabilise en un conflit de position dans l'est et le sud du pays ; début 2026, la Russie occupe environ un cinquième du territoire ukrainien, et les tentatives successives de cessez-le-feu n'ont jusqu'ici pas abouti à une paix durable. L'Ukraine obtient le statut de candidat à l'Union européenne dès juin 2022 et ouvre les négociations d'adhésion en 2024.",
      source: "Critical Threats / Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine",
      events: [
        {
          date: "24 février 2022",
          title: "Début de l'invasion de grande ampleur",
          description: "Les forces russes envahissent l'Ukraine depuis le nord, l'est et le sud, avec l'objectif initial déclaré de prendre Kiev.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine",
        },
        {
          date: "Juin 2022",
          title: "Statut de candidat à l'Union européenne",
          description: "Le Conseil européen accorde à l'Ukraine le statut de pays candidat à l'adhésion, quelques mois après le début de l'invasion.",
          source: "Commission européenne",
          sourceUrl: "https://neighbourhood-enlargement.ec.europa.eu/ukraine_en",
        },
      ],
    },
  ],
};
