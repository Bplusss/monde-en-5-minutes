import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire de la péninsule et du royaume saoudien — pas un résumé exhaustif.",
  periods: [
    {
      id: "arabie-preislamique-islam",
      title: "Royaumes caravaniers et naissance de l'islam",
      startYear: -1000,
      endYear: 750,
      summary:
        "Des royaumes prospèrent sur les routes de l'encens, comme les Nabatéens à Hégra. Au VIIe siècle, Mahomet fonde l'islam à La Mecque puis à Médine ; ses successeurs unifient la péninsule. Le califat se déplace ensuite à Damas puis à Bagdad, et l'Arabie redevient une périphérie, à l'exception des villes saintes.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Saudi_Arabia",
      events: [
        {
          date: "Ier siècle",
          title: "Apogée nabatéen à Hégra",
          description: "La cité d'Al-Ula (Hégra) devient la principale ville nabatéenne au sud de Pétra.",
          source: "UNESCO",
          sourceUrl: "https://whc.unesco.org/en/list/1293/",
        },
        {
          date: "622",
          title: "Hégire",
          description: "Mahomet quitte La Mecque pour Médine ; l'événement marque le début du calendrier musulman.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Hijrah",
        },
        {
          date: "630",
          title: "Prise de La Mecque",
          description: "Mahomet entre à La Mecque ; la Kaaba devient le centre du culte musulman.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Conquest_of_Mecca",
        },
      ],
    },
    {
      id: "etats-saoudiens",
      title: "Les deux premiers États saoudiens",
      startYear: 1727,
      endYear: 1891,
      summary:
        "Dans le Nejd, la famille Saoud s'allie au prédicateur Mohammed ibn Abd al-Wahhab. Le premier État saoudien, centré sur Diriyah, conquiert La Mecque mais est détruit par les troupes de l'Égypte ottomane. Un second État, à Riyad, est renversé par les Rachidi de Haïl.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Emirate_of_Diriyah",
      events: [
        {
          date: "1744",
          title: "Pacte de Diriyah",
          description: "Mohammed ben Saoud et Mohammed ibn Abd al-Wahhab s'allient, associant pouvoir dynastique et réforme religieuse.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Muhammad_ibn_Abd_al-Wahhab",
        },
        {
          date: "1818",
          title: "Chute de Diriyah",
          description: "Les troupes égyptiennes d'Ibrahim Pacha détruisent la capitale saoudienne.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ottoman%E2%80%93Wahhabi_war",
        },
      ],
    },
    {
      id: "fondation-royaume-petrole",
      title: "Ibn Saoud, fondation du royaume et découverte du pétrole",
      startYear: 1902,
      endYear: 1953,
      summary:
        "Abdelaziz ibn Saoud reprend Riyad en 1902 puis conquiert le Nejd, le Hasa, le Hedjaz et l'Asir. Le royaume est proclamé en 1932. La découverte du pétrole en 1938 et l'alliance avec les États-Unis transforment un pays pauvre en puissance énergétique.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Unification_of_Saudi_Arabia",
      events: [
        {
          date: "1902",
          title: "Reprise de Riyad",
          description: "Ibn Saoud s'empare de Riyad, point de départ de l'unification.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Riyadh_(1902)",
        },
        {
          date: "23 septembre 1932",
          title: "Proclamation du royaume d'Arabie saoudite",
          description: "Le Nejd et le Hedjaz sont unifiés ; la date est devenue la fête nationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Saudi_National_Day",
        },
        {
          date: "1938",
          title: "Découverte du pétrole à Dammam",
          description: "Le puits Dammam n° 7 entre en production commerciale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Dammam_No._7",
        },
        {
          date: "14 février 1945",
          title: "Rencontre Roosevelt–Ibn Saoud",
          description: "À bord du croiseur Quincy, sur le canal de Suez, naît l'alliance entre Washington et Riyad.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Saudi_Arabia%E2%80%93United_States_relations",
        },
      ],
    },
    {
      id: "royaume-petrolier",
      title: "Le royaume pétrolier",
      startYear: 1953,
      endYear: 2015,
      summary:
        "Les fils d'Ibn Saoud se succèdent sur le trône. L'embargo de 1973 révèle le poids du pays sur les marchés. Après la prise de la Grande Mosquée en 1979, le pouvoir renforce l'emprise religieuse sur la société. Allié des États-Unis pendant la guerre du Golfe, le royaume est aussi le pays d'origine de 15 des 19 auteurs des attentats du 11 septembre 2001.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Saudi_Arabia",
      events: [
        {
          date: "1973",
          title: "Embargo pétrolier",
          description: "Pendant la guerre du Kippour, le roi Fayçal mène l'embargo arabe contre les soutiens d'Israël.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1973_oil_crisis",
        },
        {
          date: "novembre 1979",
          title: "Prise de la Grande Mosquée de La Mecque",
          description: "Des insurgés islamistes occupent le sanctuaire pendant deux semaines.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Grand_Mosque_seizure",
        },
        {
          date: "1990-1991",
          title: "Guerre du Golfe",
          description: "Après l'invasion du Koweït par l'Irak, le royaume accueille la coalition menée par les États-Unis.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Gulf_War",
        },
      ],
    },
    {
      id: "salmane-mbs",
      title: "Le règne de Salmane et l'ascension de Mohammed ben Salmane",
      startYear: 2015,
      endYear: "present",
      summary:
        "Le roi Salmane fait de son fils Mohammed le dirigeant de fait du pays. Celui-ci lance la Vision 2030, ouvre le pays au tourisme et aux loisirs et autorise les femmes à conduire, tout en durcissant la répression. Le royaume intervient au Yémen dès 2015, se réconcilie avec l'Iran en 2023, puis est frappé par des missiles iraniens et houthis pendant la guerre régionale de 2026.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mohammed_bin_Salman",
      events: [
        {
          date: "mars 2015",
          title: "Intervention au Yémen",
          description: "Une coalition menée par Riyad intervient contre les rebelles houthis ; une trêve de l'ONU suspend les combats en 2022.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Saudi-led_intervention_in_the_Yemeni_civil_war",
        },
        {
          date: "2 octobre 2018",
          title: "Assassinat de Jamal Khashoggi",
          description: "Le journaliste est tué au consulat saoudien d'Istanbul ; un rapport du renseignement américain de 2021 conclut que le prince héritier a approuvé l'opération, ce que Riyad conteste.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Assassination_of_Jamal_Khashoggi",
        },
        {
          date: "10 mars 2023",
          title: "Rétablissement des relations avec l'Iran",
          description: "Sous médiation chinoise, Riyad et Téhéran renouent, sept ans après la rupture de 2016.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Iran%E2%80%93Saudi_Arabia_relations",
        },
        {
          date: "depuis le 28 février 2026",
          title: "Le royaume pris dans la guerre contre l'Iran",
          description: "Après les frappes américano-israéliennes contre l'Iran, Téhéran vise Riyad, des bases et des installations pétrolières saoudiennes ; en septembre, les Houthis prennent le contrôle de la rive yéménite du détroit de Bab el-Mandeb et frappent le sud du royaume.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_Saudi_Arabia",
        },
      ],
    },
  ],
};
