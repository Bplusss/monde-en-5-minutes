import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Patrimoine",
      title: "Les monastères peints de Bucovine",
      description:
        "Dans le nord-est du pays, une dizaine d'églises et monastères moldaves des XVe et XVIe siècles sont ornés de fresques extérieures exceptionnellement bien conservées, représentant des scènes bibliques ; huit d'entre eux sont inscrits au patrimoine mondial de l'UNESCO.",
      examples: ["Monastère de Voroneț", "Monastère de Moldovița", "Monastère de Sucevița"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/598",
    },
    {
      category: "Patrimoine",
      title: "Les églises de bois de Maramureș",
      description:
        "Dans la région de Maramureș, au nord-ouest, des églises entièrement construites en bois, hautes et surmontées de flèches effilées, illustrent un savoir-faire architectural local perpétué du XVIIIe au XIXe siècle ; huit d'entre elles sont inscrites au patrimoine mondial de l'UNESCO.",
      examples: ["Église de Șurdești", "Église de Bârsana"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/904",
    },
    {
      category: "Nature",
      title: "Le delta du Danube",
      description:
        "Plus vaste zone humide encore préservée d'Europe et plus grand massif de roselières du continent, le delta du Danube s'étend sur environ 4 340 km² en territoire roumain ; classé réserve de biosphère par l'UNESCO en 1990, il abrite plus de 300 espèces d'oiseaux.",
      examples: ["Réserve de biosphère du delta du Danube", "Ville de Tulcea, porte d'entrée du delta"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/588",
    },
    {
      category: "Légendes et tourisme",
      title: "Le château de Bran et la légende de Dracula",
      description:
        "Le château de Bran, en Transylvanie, est présenté par le tourisme roumain comme le « château de Dracula », en référence au roman de Bram Stoker (1897), lui-même partiellement inspiré de la figure historique du prince valaque Vlad III l'Empaleur (Vlad Țepeș, XVe siècle), sans lien architectural ou historique direct avec ce dernier.",
      examples: ["Château de Bran", "Citadelle de Sighișoara, ville natale de Vlad III"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Bran_Castle",
    },
    {
      category: "Traditions",
      title: "Le mărțișor, porte-bonheur du printemps",
      description:
        "Chaque 1er mars, il est de tradition d'offrir un mărțișor, petit bijou ou pompon attaché à un cordon rouge et blanc, symbole de renouveau et de bon augure pour l'année à venir ; cette tradition, partagée avec la Moldavie voisine, est inscrite depuis 2017 au patrimoine culturel immatériel de l'UNESCO.",
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/martisor-craftsmanship-of-traditional-spring-small-token-jewellery-01309",
    },
  ],
};
