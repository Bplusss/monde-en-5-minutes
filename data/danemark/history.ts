import type { HistoryData } from "@/lib/types";

const DH = "danmarkshistorien.dk (Université d'Aarhus)";
const DH_URL = "https://danmarkshistorien.dk/";
const KONGEHUSET = "Kongehuset (maison royale danoise)";
const KONGEHUSET_URL = "https://www.kongehuset.dk/";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du royaume — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "ere-viking",
      title: "Ère viking et unification du royaume",
      startYear: 800,
      endYear: 1397,
      summary:
        "Les Danois participent aux expéditions vikings avant que Harald à la Dent bleue n'unifie et ne christianise le royaume au Xᵉ siècle, fondant l'une des monarchies continues les plus anciennes d'Europe.",
      source: DH,
      sourceUrl: DH_URL,
      events: [
        {
          date: "vers 965",
          title: "Christianisation du Danemark",
          description: "Harald Ier « à la Dent bleue » unifie le Danemark et le convertit au christianisme, fait qu'il commémore sur les pierres runiques de Jelling.",
          source: KONGEHUSET,
          sourceUrl: KONGEHUSET_URL,
        },
      ],
    },
    {
      id: "union-kalmar",
      title: "Union de Kalmar et pertes territoriales",
      startYear: 1397,
      endYear: 1814,
      summary:
        "Le Danemark domine un temps une union scandinave avec la Norvège et la Suède, avant de perdre la Norvège au profit de la Suède en 1814, à l'issue des guerres napoléoniennes.",
      source: DH,
      sourceUrl: DH_URL,
      events: [
        {
          date: "1397",
          title: "Union de Kalmar",
          description: "Le Danemark, la Norvège et la Suède sont réunis sous une même couronne.",
          source: DH,
          sourceUrl: DH_URL,
        },
        {
          date: "1814",
          title: "Traité de Kiel",
          description: "Le Danemark cède la Norvège à la Suède, mais conserve le Groenland, les îles Féroé et l'Islande.",
          source: DH,
          sourceUrl: DH_URL,
        },
      ],
    },
    {
      id: "monarchie-constitutionnelle",
      title: "Monarchie constitutionnelle et guerres du Schleswig",
      startYear: 1814,
      endYear: 1920,
      summary:
        "La monarchie absolue cède la place à une monarchie constitutionnelle en 1849, tandis que le pays perd le Schleswig-Holstein face à la Prusse et l'Autriche en 1864, avant d'en recouvrer la partie nord par référendum en 1920.",
      source: DH,
      sourceUrl: DH_URL,
      events: [
        {
          date: "5 juin 1849",
          title: "Première Constitution démocratique",
          description: "Frédéric VII signe la Constitution qui met fin à la monarchie absolue et instaure un régime parlementaire.",
          source: KONGEHUSET,
          sourceUrl: KONGEHUSET_URL,
        },
        {
          date: "1864",
          title: "Défaite face à la Prusse et l'Autriche",
          description: "Le Danemark perd le Schleswig-Holstein à l'issue de la Seconde Guerre du Schleswig.",
          source: DH,
          sourceUrl: DH_URL,
        },
        {
          date: "1920",
          title: "Réunification du Schleswig du Nord",
          description: "Un référendum organisé après la Première Guerre mondiale rattache le Schleswig du Nord au Danemark.",
          source: DH,
          sourceUrl: DH_URL,
        },
      ],
    },
    {
      id: "occupation-apres-guerre",
      title: "Occupation allemande et État-providence",
      startYear: 1940,
      endYear: 1973,
      summary:
        "Occupé par l'Allemagne nazie de 1940 à 1945, le Danemark rejoint l'OTAN dès sa création en 1949 puis bâtit un État-providence scandinave avant d'adhérer à la Communauté économique européenne en 1973.",
      source: DH,
      sourceUrl: DH_URL,
      events: [
        {
          date: "9 avril 1940 – 5 mai 1945",
          title: "Occupation allemande",
          description: "Le Danemark est occupé par l'Allemagne nazie, sous un régime d'occupation d'abord relativement souple puis plus dur à partir de 1943.",
          source: DH,
          sourceUrl: DH_URL,
        },
        {
          date: "1949",
          title: "Membre fondateur de l'OTAN",
          description: "Le Danemark rejoint l'Alliance atlantique dès sa création.",
          source: DH,
          sourceUrl: DH_URL,
        },
        {
          date: "1973",
          title: "Adhésion à la CEE",
          description: "Le Danemark rejoint la Communauté économique européenne, avec le Royaume-Uni et l'Irlande.",
          source: DH,
          sourceUrl: DH_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1973,
      endYear: "present",
      summary:
        "Membre de l'Union européenne avec plusieurs exceptions (pas d'euro, opt-out sur la défense commune), le Danemark a par ailleurs accordé une autonomie croissante au Groenland et aux îles Féroé.",
      source: DH,
      sourceUrl: DH_URL,
      events: [
        {
          date: "1992",
          title: "Opt-outs de Maastricht",
          description: "À la suite du rejet du traité de Maastricht par référendum, le Danemark négocie plusieurs clauses d'exemption, dont l'euro et la défense commune.",
          source: DH,
          sourceUrl: DH_URL,
        },
        {
          date: "2009",
          title: "Autonomie élargie du Groenland",
          description: "La loi sur l'autonomie du Groenland (Selvstyre) élargit ses compétences et reconnaît son droit à l'indépendance.",
          source: DH,
          sourceUrl: DH_URL,
        },
      ],
    },
  ],
};
