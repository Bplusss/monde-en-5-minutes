import type { HistoryData } from "@/lib/types";

const TRECCANI = "Treccani — Enciclopedia";
const TRECCANI_URL = "https://www.treccani.it/enciclopedia/";
const QUIRINALE = "Presidenza della Repubblica";
const QUIRINALE_URL = "https://www.quirinale.it/";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction et de transformation du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "antiquite",
      title: "Antiquité",
      startYear: -753,
      endYear: 476,
      summary:
        "De la fondation légendaire de Rome à la chute de l'Empire romain d'Occident, cette période voit l'émergence d'une cité-État qui unifie la péninsule puis domine tout le bassin méditerranéen.",
      source: TRECCANI,
      sourceUrl: TRECCANI_URL,
      events: [
        {
          date: "753 av. J.-C.",
          title: "Fondation légendaire de Rome",
          description: "Date traditionnelle de la fondation de Rome, retenue par les auteurs antiques eux-mêmes.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
        {
          date: "509 av. J.-C.",
          title: "Instauration de la République romaine",
          description: "Fin de la royauté étrusque et mise en place d'un régime républicain à Rome.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
        {
          date: "27 av. J.-C.",
          title: "Avènement de l'Empire",
          description: "Octave reçoit le titre d'Auguste, marquant le début de l'Empire romain.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
        {
          date: "476",
          title: "Chute de l'Empire romain d'Occident",
          description: "Déposition du dernier empereur d'Occident, Romulus Augustule.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
      ],
    },
    {
      id: "moyen-age",
      title: "Moyen Âge",
      startYear: 476,
      endYear: 1492,
      summary:
        "La péninsule se fragmente en royaumes, cités-États et territoires pontificaux ; les républiques marchandes (Venise, Gênes, Florence) et la papauté deviennent des puissances majeures.",
      source: TRECCANI,
      sourceUrl: TRECCANI_URL,
      events: [
        {
          date: "756",
          title: "Naissance des États pontificaux",
          description: "Le roi franc Pépin le Bref fait donation de territoires au pape, fondant le pouvoir temporel pontifical.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
        {
          date: "XIᵉ – XIIIᵉ siècle",
          title: "Essor des cités-États",
          description: "Venise, Gênes, Pise et Florence deviennent des puissances commerciales et politiques majeures en Méditerranée.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
      ],
    },
    {
      id: "renaissance",
      title: "Renaissance",
      startYear: 1492,
      endYear: 1815,
      summary:
        "La péninsule italienne devient le foyer de la Renaissance artistique et intellectuelle, tout en restant politiquement divisée et disputée entre puissances européennes.",
      source: TRECCANI,
      sourceUrl: TRECCANI_URL,
      events: [
        {
          date: "XVᵉ – XVIᵉ siècle",
          title: "Renaissance italienne",
          description: "Florence, Rome et Venise deviennent des centres artistiques majeurs (Léonard de Vinci, Michel-Ange, Raphaël).",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
        {
          date: "1494 – 1559",
          title: "Guerres d'Italie",
          description: "La péninsule devient le champ de bataille des rivalités entre la France et les Habsbourg.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
      ],
    },
    {
      id: "unification-xixe",
      title: "Unification & XIXe siècle",
      startYear: 1815,
      endYear: 1914,
      summary:
        "Le mouvement du Risorgimento aboutit à l'unification politique de la péninsule sous une monarchie constitutionnelle, après des siècles de fragmentation.",
      source: TRECCANI,
      sourceUrl: TRECCANI_URL,
      events: [
        {
          date: "17 mars 1861",
          title: "Proclamation du royaume d'Italie",
          description: "Victor-Emmanuel II devient le premier roi d'une Italie unifiée, à l'issue du Risorgimento.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
        {
          date: "1870",
          title: "Rattachement de Rome",
          description: "Rome, dernier grand territoire pontifical, est rattachée au royaume d'Italie et en devient la capitale.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
      ],
    },
    {
      id: "xxe-siecle",
      title: "XXe siècle",
      startYear: 1914,
      endYear: 2000,
      summary:
        "Le siècle est marqué par la Première Guerre mondiale, l'instauration puis la chute du régime fasciste, et l'avènement de la République en 1946.",
      source: QUIRINALE,
      sourceUrl: QUIRINALE_URL,
      events: [
        {
          date: "1922",
          title: "Marche sur Rome",
          description: "Benito Mussolini est nommé chef du gouvernement, marquant le début du régime fasciste.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
        {
          date: "1940 – 1945",
          title: "Seconde Guerre mondiale",
          description: "L'Italie entre en guerre aux côtés de l'Allemagne nazie, puis connaît l'armistice de 1943 et une guerre civile jusqu'à la Libération.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
        {
          date: "2 juin 1946",
          title: "Référendum institutionnel",
          description: "Les Italiens votent l'abolition de la monarchie ; la République est proclamée.",
          source: QUIRINALE,
          sourceUrl: QUIRINALE_URL,
        },
        {
          date: "1ᵉʳ janvier 1948",
          title: "Entrée en vigueur de la Constitution",
          description: "La Constitution républicaine entre en vigueur, fondant le cadre institutionnel actuel.",
          source: QUIRINALE,
          sourceUrl: QUIRINALE_URL,
        },
        {
          date: "1957",
          title: "Traité de Rome",
          description: "L'Italie est membre fondateur de la Communauté économique européenne.",
          source: TRECCANI,
          sourceUrl: TRECCANI_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 2000,
      endYear: "present",
      summary:
        "L'Italie reste un État membre fondateur de l'Union européenne, dotée de l'euro, et continue de faire évoluer ses institutions et son économie.",
      source: TRECCANI,
      sourceUrl: TRECCANI_URL,
      events: [
        {
          date: "2002",
          title: "Passage à l'euro fiduciaire",
          description: "Les pièces et billets en euros remplacent la lire italienne dans les transactions courantes.",
          source: "Banca d'Italia",
          sourceUrl: "https://www.bancaditalia.it/",
        },
      ],
    },
  ],
};
