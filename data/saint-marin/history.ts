import type { HistoryData } from "@/lib/types";

const WIKI = "Wikipedia";
const HIST_URL = "https://en.wikipedia.org/wiki/History_of_San_Marino";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays — pas un résumé exhaustif de l'histoire sammarinaise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "fondation-commune-medievale",
      title: "Fondation légendaire et commune médiévale",
      startYear: 301,
      endYear: 1600,
      summary:
        "Selon la tradition, Saint-Marin est fondée en 301 par Marin, tailleur de pierre chrétien originaire de Dalmatie, qui se serait réfugié sur le mont Titano pour fuir les persécutions religieuses de l'empereur Dioclétien — un récit mêlant légende et éléments historiques difficiles à établir avec certitude. La fonction de Capitaines-Régents, chefs d'État conjoints élus par l'assemblée des citoyens, apparaît dès 1243, et les premiers statuts écrits de la commune datent de 1263, avant d'être compilés et codifiés dans les Statuts de 1600, qui resteront la base du droit sammarinais pendant des siècles.",
      source: WIKI,
      sourceUrl: HIST_URL,
      events: [],
    },
    {
      id: "reconnaissance-independance",
      title: "Reconnaissance de l'indépendance et résistance aux occupations",
      startYear: 1600,
      endYear: 1815,
      summary:
        "Le Saint-Siège confirme l'indépendance de Saint-Marin en 1631, sur la base d'un traité de protection conclu avec le pape Clément VIII en 1602. Le petit État connaît deux occupations militaires éphémères — celle du cardinal Alberoni en 1739, suivie d'un rétablissement de l'indépendance en février 1740 après une résistance civile, puis la protection accordée par Napoléon Bonaparte en 1797, qui refuse l'offre d'agrandissement territorial faite au pays pour préserver son indépendance. Le traité de Tolentino (1797) puis le congrès de Vienne (1815) confirment sa souveraineté.",
      source: WIKI,
      sourceUrl: HIST_URL,
      events: [
        {
          date: "5 février 1740",
          title: "Fin de l'occupation du cardinal Alberoni",
          description: "Après une occupation militaire commencée en octobre 1739, l'indépendance de Saint-Marin est restaurée grâce à l'intervention du pape Clément XII ; cette date devient la fête de sainte Agathe, patronne du pays.",
          source: WIKI,
          sourceUrl: HIST_URL,
        },
      ],
    },
    {
      id: "unification-italienne-guerres",
      title: "Unification italienne et neutralité dans les deux guerres mondiales",
      startYear: 1815,
      endYear: 1945,
      summary:
        "Un traité d'amitié signé en 1862 avec le royaume d'Italie nouvellement unifié, révisé en 1872, garantit la pérennité de l'indépendance sammarinaise face à sa puissante voisine. Saint-Marin reste neutre lors de la Première Guerre mondiale. Pendant la Seconde Guerre mondiale, le pays, officiellement neutre, accueille plus de 100 000 civils fuyant les combats sur la ligne gothique, avant d'être envahi par les troupes allemandes en septembre 1944 puis brièvement occupé par les forces alliées après la bataille de Saint-Marin (17-20 septembre 1944).",
      source: WIKI,
      sourceUrl: HIST_URL,
      events: [
        {
          date: "1862",
          title: "Traité d'amitié avec le royaume d'Italie",
          description: "Le traité, révisé en 1872, reconnaît et garantit l'indépendance de Saint-Marin au lendemain de l'unification italienne.",
          source: WIKI,
          sourceUrl: HIST_URL,
        },
        {
          date: "17-20 septembre 1944",
          title: "Bataille de Saint-Marin",
          description: "Après l'invasion allemande du 13 septembre, des combats opposent les forces de l'Axe aux troupes britanniques et gurkhas sur le territoire sammarinais.",
          source: WIKI,
          sourceUrl: HIST_URL,
        },
      ],
    },
    {
      id: "republique-communiste-integration-europeenne",
      title: "République communiste, puis intégration européenne",
      startYear: 1945,
      endYear: "present",
      summary:
        "De 1945 à 1957, Saint-Marin est gouverné par une coalition entre le Parti communiste et le Parti socialiste sammarinais, l'une des toutes premières expériences au monde d'un gouvernement communiste porté au pouvoir par des élections démocratiques ; elle prend fin avec les « Fatti di Rovereta » de 1957. Le pays rejoint le Conseil de l'Europe comme membre à part entière en 1988, puis l'ONU en 1992. Son intégration économique avec l'Union européenne se renforce progressivement : union douanière en 1991, convention monétaire lui permettant d'utiliser l'euro en 2000-2001, puis conclusion en décembre 2023 des négociations d'un accord d'association donnant accès au marché unique européen.",
      source: WIKI,
      sourceUrl: HIST_URL,
      events: [
        {
          date: "1957",
          title: "Fatti di Rovereta",
          description: "Une crise politique met fin à douze années de gouvernement communiste-socialiste, la plus longue expérience de gouvernement communiste démocratiquement élu au monde à l'époque.",
          source: WIKI,
          sourceUrl: HIST_URL,
        },
        {
          date: "1992",
          title: "Adhésion à l'Organisation des Nations unies",
          description: "Saint-Marin devient membre de l'ONU, après avoir déjà rejoint le Conseil de l'Europe en 1988.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/San_Marino",
        },
        {
          date: "Décembre 2023",
          title: "Conclusion de l'accord d'association avec l'Union européenne",
          description: "Saint-Marin et l'Andorre concluent les négociations d'un accord d'association avec l'UE, leur ouvrant l'accès au marché intérieur européen tout en préservant leur souveraineté.",
          source: "Commission européenne",
          sourceUrl: "https://www.eeas.europa.eu/un-rome/european-union-and-san-marino_en",
        },
      ],
    },
  ],
};
