import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire kényane.",
  periods: [
    {
      id: "cites-swahilies",
      title: "Cités swahilies et commerce de l'océan Indien",
      startYear: 900,
      endYear: 1895,
      summary:
        "Dès le premier millénaire, des cités-États commerçantes comme Lamu, Malindi ou Mombasa naissent sur la côte, où se forme la culture swahilie, mêlant traditions bantoues, arabes et persanes et largement islamisée. Les Portugais s'y installent au XVIe siècle, avant d'être chassés par le sultanat d'Oman, puis de Zanzibar. L'intérieur reste le domaine de sociétés agricoles et pastorales, que les caravanes relient au commerce de l'ivoire et des esclaves.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Kenya",
      events: [
        {
          date: "1498",
          title: "Vasco da Gama à Malindi",
          description: "Le navigateur portugais y trouve le pilote qui le guide jusqu'en Inde.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Malindi",
        },
        {
          date: "1593",
          title: "Construction du fort Jésus",
          description: "Les Portugais élèvent à Mombasa une forteresse aujourd'hui inscrite au patrimoine mondial.",
          source: "UNESCO",
          sourceUrl: "https://whc.unesco.org/fr/list/1295",
        },
      ],
    },
    {
      id: "colonisation",
      title: "La colonisation britannique",
      startYear: 1895,
      endYear: 1952,
      summary:
        "Le Royaume-Uni établit un protectorat en 1895 et construit le chemin de fer de l'Ouganda, de Mombasa au lac Victoria, le long duquel naît Nairobi. Devenue colonie de la Couronne en 1920, le Kenya voit les meilleures terres des hauts plateaux, les « White Highlands », réservées aux colons européens, tandis que les Africains, notamment les Kikuyu, sont repoussés dans des réserves et soumis au travail forcé et à l'impôt.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Kenya_Colony",
      events: [
        {
          date: "1er juillet 1895",
          title: "Protectorat d'Afrique orientale britannique",
          description: "Londres prend le contrôle direct du territoire, jusque-là administré par une compagnie à charte.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/East_Africa_Protectorate",
        },
        {
          date: "1899",
          title: "Fondation de Nairobi",
          description: "Simple dépôt du chemin de fer, la ville devient capitale de la colonie dès 1907.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nairobi",
        },
      ],
    },
    {
      id: "mau-mau-independance",
      title: "La révolte des Mau Mau et l'indépendance",
      startYear: 1952,
      endYear: 1963,
      summary:
        "La révolte des Mau Mau, menée surtout par des Kikuyu privés de leurs terres, est écrasée par l'armée britannique : plus de 11 000 insurgés sont tués et des dizaines de milliers de Kényans internés dans des camps où la torture est systématique. La répression n'empêche pas la marche vers l'indépendance, obtenue en 1963 sous la direction de Jomo Kenyatta.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mau_Mau_rebellion",
      events: [
        {
          date: "20 octobre 1952",
          title: "État d'urgence",
          description: "Les autorités coloniales proclament l'état d'urgence et arrêtent Jomo Kenyatta, condamné à sept ans de travaux forcés.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mau_Mau_rebellion",
        },
        {
          date: "12 décembre 1963",
          title: "Indépendance",
          description: "Le Kenya devient indépendant ; il devient une république un an plus tard, avec Jomo Kenyatta pour président.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Jamhuri_Day",
        },
      ],
    },
    {
      id: "kenyatta-moi",
      title: "Kenyatta, Moi et le parti unique",
      startYear: 1963,
      endYear: 2002,
      summary:
        "Jomo Kenyatta (1964-1978) puis Daniel arap Moi (1978-2002) gouvernent un pays stable et pro-occidental, mais de plus en plus autoritaire : la KANU devient parti unique de droit en 1982. Sous la pression intérieure et des bailleurs, le multipartisme est rétabli en 1991, mais Moi remporte les élections de 1992 et 1997, entachées de fraudes et de violences.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Daniel_arap_Moi",
      events: [
        {
          date: "1er août 1982",
          title: "Tentative de coup d'État",
          description: "Une mutinerie d'officiers de l'armée de l'air échoue ; Moi durcit son régime.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1982_Kenyan_coup_d%27%C3%A9tat_attempt",
        },
        {
          date: "7 août 1998",
          title: "Attentat contre l'ambassade américaine",
          description: "Al-Qaïda fait plus de 200 morts à Nairobi, le même jour qu'un attentat à Dar es Salam.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1998_United_States_embassy_bombings",
        },
      ],
    },
    {
      id: "crise-nouvelle-constitution",
      title: "Alternance, crise post-électorale et nouvelle Constitution",
      startYear: 2002,
      endYear: 2013,
      summary:
        "L'élection de Mwai Kibaki en 2002 marque la première alternance démocratique. Sa réélection contestée en décembre 2007 déclenche des violences interethniques qui font plus de 1 100 morts et des centaines de milliers de déplacés. Une médiation conduite par Kofi Annan aboutit à un gouvernement d'union avec Raila Odinga comme Premier ministre, puis à l'adoption par référendum de la Constitution de 2010.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/2007%E2%80%932008_Kenyan_crisis",
      events: [
        {
          date: "30 décembre 2007",
          title: "Proclamation contestée des résultats",
          description: "L'annonce de la réélection de Kibaki face à Raila Odinga déclenche deux mois de violences.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2007_Kenyan_presidential_election",
        },
        {
          date: "4 août 2010",
          title: "Référendum constitutionnel",
          description: "67 % des votants approuvent une nouvelle Constitution qui décentralise le pouvoir vers 47 comtés.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2010_Kenyan_constitutional_referendum",
        },
      ],
    },
    {
      id: "comtes-generation-z",
      title: "L'ère des comtés et de la génération Z",
      startYear: 2013,
      endYear: "present",
      summary:
        "Uhuru Kenyatta, fils du premier président, gouverne de 2013 à 2022, période marquée par les attentats des shebab somaliens et par l'annulation de l'élection présidentielle de 2017 par la Cour suprême. William Ruto lui succède en 2022. En juin 2024, un projet de loi de finances augmentant les impôts provoque des manifestations massives de jeunes, qui envahissent le Parlement ; la répression fait des dizaines de morts. Figure de l'opposition depuis trois décennies, Raila Odinga meurt en octobre 2025.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/2024_Kenyan_protests",
      events: [
        {
          date: "21 septembre 2013",
          title: "Attaque du Westgate",
          description: "Un commando shebab tue 67 personnes dans un centre commercial de Nairobi.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Westgate_shopping_mall_attack",
        },
        {
          date: "1er septembre 2017",
          title: "Annulation de l'élection présidentielle",
          description: "Pour la première fois en Afrique, une Cour suprême invalide la réélection d'un président sortant pour irrégularités.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2017_Kenyan_general_election",
        },
        {
          date: "25 juin 2024",
          title: "Envahissement du Parlement",
          description: "Des manifestants pénètrent dans le Parlement ; le président Ruto retire le lendemain le projet de loi de finances.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2024_Kenyan_protests",
        },
      ],
    },
  ],
};
