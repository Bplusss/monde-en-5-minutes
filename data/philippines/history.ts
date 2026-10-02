import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire philippine.",
  periods: [
    {
      id: "archipel-precolonial",
      title: "Chefferies, sultanats et arrivée des Européens",
      startYear: 900,
      endYear: 1565,
      summary:
        "L'archipel est divisé en communautés autonomes (barangay) commerçant avec la Chine et le monde malais. L'islam s'implante au sud à partir du XIVe siècle (sultanats de Sulu et de Maguindanao). Magellan atteint l'archipel en 1521.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Philippines_(900%E2%80%931565)",
      events: [
        {
          date: "27 avril 1521",
          title: "Bataille de Mactan",
          description: "Le chef Lapulapu repousse l'expédition espagnole et tue Magellan ; il est célébré comme le premier héros national.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Mactan",
        },
      ],
    },
    {
      id: "colonisation-espagnole",
      title: "La colonie espagnole",
      startYear: 1565,
      endYear: 1898,
      summary:
        "Fondée par Legazpi en 1565, la colonie a Manille pour capitale à partir de 1571. Pendant trois siècles, l'Espagne christianise l'archipel, hormis le sud musulman, et relie Manille à Acapulco par le commerce des galions. L'exécution du réformiste José Rizal en 1896 radicalise le mouvement indépendantiste.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Philippines_(1565%E2%80%931898)",
      events: [
        {
          date: "30 décembre 1896",
          title: "Exécution de José Rizal",
          description: "L'écrivain réformiste, auteur de Noli me tangere, est fusillé à Manille ; il devient le héros national du pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Jos%C3%A9_Rizal",
        },
        {
          date: "12 juin 1898",
          title: "Proclamation de l'indépendance",
          description: "Emilio Aguinaldo proclame l'indépendance à Kawit pendant la guerre hispano-américaine ; la date reste la fête nationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Philippine_Declaration_of_Independence",
        },
      ],
    },
    {
      id: "periode-americaine",
      title: "Domination américaine et occupation japonaise",
      startYear: 1898,
      endYear: 1946,
      summary:
        "Cédées aux États-Unis en 1898, les Philippines sont soumises au terme d'une guerre meurtrière. Washington diffuse l'école publique en anglais et accorde une autonomie croissante (Commonwealth en 1935). Dévasté par l'occupation japonaise (1942-1945), le pays devient indépendant en 1946.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Philippines_(1898%E2%80%931946)",
      events: [
        {
          date: "1899-1902",
          title: "Guerre américano-philippine",
          description: "La république d'Aguinaldo résiste à l'annexion ; le conflit fait plusieurs centaines de milliers de morts civils.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Philippine%E2%80%93American_War",
        },
        {
          date: "4 juillet 1946",
          title: "Indépendance",
          description: "Les États-Unis reconnaissent la souveraineté de la République des Philippines par le traité de Manille.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Manila_(1946)",
        },
      ],
    },
    {
      id: "republique-marcos",
      title: "La république et la dictature Marcos",
      startYear: 1946,
      endYear: 1986,
      summary:
        "Élu en 1965, Ferdinand Marcos instaure la loi martiale en 1972 : répression, insurrections communiste et moro, enrichissement massif du clan. L'assassinat de l'opposant Benigno Aquino (1983) puis une élection truquée provoquent la révolution pacifique d'EDSA, qui le chasse en 1986.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Martial_law_under_Ferdinand_Marcos",
      events: [
        {
          date: "21 septembre 1972",
          title: "Proclamation de la loi martiale",
          description: "Marcos suspend le Congrès et les libertés publiques ; la loi martiale dure jusqu'en 1981 et le régime jusqu'en 1986.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Proclamation_No._1081",
        },
        {
          date: "22-25 février 1986",
          title: "Révolution EDSA (People Power)",
          description: "Des centaines de milliers de manifestants soutiennent des militaires dissidents ; Marcos s'exile à Hawaï et Corazon Aquino devient présidente.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/People_Power_Revolution",
        },
      ],
    },
    {
      id: "democratie",
      title: "La démocratie restaurée",
      startYear: 1986,
      endYear: "present",
      summary:
        "La Constitution de 1987 rétablit la démocratie. Les bases américaines ferment en 1992, avant un retour de la coopération militaire face à la Chine. Rodrigo Duterte (2016-2022) mène une « guerre contre la drogue » meurtrière et se rapproche de Pékin ; Ferdinand Marcos Jr., élu en 2022, rompt avec lui.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Philippines_(1986%E2%80%93present)",
      events: [
        {
          date: "15 juin 1991",
          title: "Éruption du Pinatubo",
          description: "L'une des plus fortes éruptions du XXe siècle abaisse la température mondiale d'environ 0,5 °C.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1991_eruption_of_Mount_Pinatubo",
        },
        {
          date: "12 juillet 2016",
          title: "Sentence arbitrale sur la mer de Chine méridionale",
          description: "Un tribunal arbitral constitué sous la Convention des Nations unies sur le droit de la mer donne raison à Manille contre les revendications chinoises ; Pékin rejette la décision.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Philippines_v._China",
        },
        {
          date: "2016-2022",
          title: "La « guerre contre la drogue »",
          description: "La campagne lancée par Rodrigo Duterte fait plus de 6 000 morts selon la police, jusqu'à 30 000 selon des ONG.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Philippine_drug_war",
        },
        {
          date: "11 mars 2025",
          title: "Arrestation de Rodrigo Duterte",
          description: "L'ancien président est arrêté à Manille et transféré à La Haye sur mandat de la Cour pénale internationale ; les charges de crimes contre l'humanité sont confirmées en avril 2026.",
          source: "Cour pénale internationale",
          sourceUrl: "https://www.icc-cpi.int/philippines/duterte",
        },
      ],
    },
  ],
};
