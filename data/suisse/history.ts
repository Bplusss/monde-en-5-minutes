import type { HistoryData } from "@/lib/types";

const HLS = "Dictionnaire historique de la Suisse (HLS)";
const HLS_URL = "https://hls-dhs-dss.ch/fr/search/";
const CH_ADMIN = "Confédération suisse — admin.ch";
const CH_ADMIN_URL = "https://www.eda.admin.ch/aboutswitzerland/fr/home/geschichte/uebersicht.html";

export const history: HistoryData = {
  intro:
    "Quelques repères pour comprendre comment trois cantons alpins sont devenus une confédération de 26 États, neutre et multilingue — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "origines",
      title: "Origines de la Confédération",
      startYear: 1291,
      endYear: 1515,
      summary:
        "Trois cantons alpins s'allient pour défendre leurs libertés face aux Habsbourg ; l'alliance s'élargit progressivement à d'autres cantons et villes au fil des victoires militaires.",
      source: HLS,
      sourceUrl: HLS_URL,
      events: [
        {
          date: "1291",
          title: "Pacte fédéral des trois cantons",
          description:
            "Uri, Schwytz et Unterwald concluent une alliance défensive mutuelle, considérée comme l'acte fondateur traditionnel de la Confédération.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
        {
          date: "1315",
          title: "Bataille de Morgarten",
          description: "Les Confédérés défont une armée des Habsbourg, consolidant l'alliance naissante.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
        {
          date: "1499",
          title: "Paix de Bâle",
          description: "À l'issue de la guerre de Souabe, la Confédération obtient une indépendance de fait vis-à-vis du Saint-Empire.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
      ],
    },
    {
      id: "ancien-regime",
      title: "Ancien Régime et neutralité",
      startYear: 1515,
      endYear: 1798,
      summary:
        "Après la défaite de Marignan, la Confédération renonce à toute expansion militaire et adopte durablement une politique de neutralité.",
      source: HLS,
      sourceUrl: HLS_URL,
      events: [
        {
          date: "1515",
          title: "Défaite de Marignan",
          description: "La défaite face à la France marque la fin des ambitions territoriales confédérées et le début d'une politique de neutralité.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
        {
          date: "1648",
          title: "Reconnaissance de l'indépendance",
          description: "Les traités de Westphalie reconnaissent formellement l'indépendance de la Confédération vis-à-vis du Saint-Empire.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
      ],
    },
    {
      id: "etat-federal",
      title: "Naissance de l'État fédéral moderne",
      startYear: 1798,
      endYear: 1914,
      summary:
        "Après l'épisode napoléonien et un bref conflit interne, la Suisse se dote en 1848 d'une constitution fédérale qui fonde l'État moderne, tout en voyant sa neutralité perpétuelle reconnue internationalement.",
      source: HLS,
      sourceUrl: HLS_URL,
      events: [
        {
          date: "1815",
          title: "Neutralité perpétuelle reconnue",
          description: "Le Congrès de Vienne reconnaît et garantit la neutralité perpétuelle de la Suisse.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
        {
          date: "1847",
          title: "Guerre du Sonderbund",
          description: "Bref conflit civil entre cantons catholiques conservateurs et cantons libéraux, remporté par ces derniers.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
        {
          date: "12 septembre 1848",
          title: "Première Constitution fédérale",
          description: "La Suisse devient un État fédéral moderne, avec un gouvernement collégial et un parlement bicaméral.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
        {
          date: "1863",
          title: "Fondation du Comité international de la Croix-Rouge",
          description: "Henry Dunant fonde à Genève le CICR, qui ancre durablement la vocation humanitaire du pays.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
      ],
    },
    {
      id: "xxe-siecle",
      title: "XXe siècle",
      startYear: 1914,
      endYear: 2000,
      summary:
        "La Suisse traverse les deux guerres mondiales sans y être belligérante, développe son système de démocratie directe et devient un centre financier et diplomatique international.",
      source: HLS,
      sourceUrl: HLS_URL,
      events: [
        {
          date: "1914 – 1918",
          title: "Neutralité pendant la Première Guerre mondiale",
          description: "La Suisse reste à l'écart du conflit tout en accueillant des réfugiés et des négociations diplomatiques.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
        {
          date: "1939 – 1945",
          title: "Neutralité armée pendant la Seconde Guerre mondiale",
          description: "La Suisse maintient sa neutralité, mobilise son armée et accueille des réfugiés, tout en entretenant des relations économiques controversées avec l'Allemagne nazie.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
        {
          date: "1971",
          title: "Droit de vote des femmes au niveau fédéral",
          description: "Les femmes obtiennent le droit de vote et d'éligibilité au niveau fédéral, l'un des derniers pays d'Europe occidentale à l'accorder.",
          source: HLS,
          sourceUrl: HLS_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 2000,
      endYear: "present",
      summary:
        "La Suisse adhère à l'ONU en 2002 mais reste hors de l'Union européenne, avec laquelle elle organise ses relations par une série d'accords bilatéraux.",
      source: CH_ADMIN,
      sourceUrl: CH_ADMIN_URL,
      events: [
        {
          date: "2002",
          title: "Adhésion à l'Organisation des Nations unies",
          description: "Approuvée par référendum populaire, la Suisse devient membre de l'ONU — l'un des derniers États à y adhérer.",
          source: CH_ADMIN,
          sourceUrl: CH_ADMIN_URL,
        },
      ],
    },
  ],
};
