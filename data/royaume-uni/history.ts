import type { HistoryData } from "@/lib/types";

const PARL = "UK Parliament";
const PARL_URL = "https://www.parliament.uk/";
const GOV = "gov.uk";
const GOV_URL = "https://www.gov.uk/";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction et de transformation du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "formation-royaume",
      title: "Formation du royaume",
      startYear: 1066,
      endYear: 1707,
      summary:
        "La conquête normande de 1066 refonde le royaume d'Angleterre, qui s'unit progressivement avec le Pays de Galles avant l'union des couronnes d'Angleterre et d'Écosse en 1603.",
      source: PARL,
      sourceUrl: PARL_URL,
      events: [
        {
          date: "1066",
          title: "Conquête normande",
          description: "Guillaume le Conquérant s'empare du trône d'Angleterre après la bataille de Hastings.",
          source: PARL,
          sourceUrl: PARL_URL,
        },
        {
          date: "1215",
          title: "Magna Carta",
          description: "La Grande Charte limite pour la première fois le pouvoir royal et pose les bases du droit constitutionnel anglais.",
          source: PARL,
          sourceUrl: PARL_URL,
        },
      ],
    },
    {
      id: "union-royaumes",
      title: "Union des royaumes",
      startYear: 1707,
      endYear: 1914,
      summary:
        "L'Acte d'Union de 1707 fusionne l'Angleterre et l'Écosse en un royaume de Grande-Bretagne, rejoint par l'Irlande en 1801, tandis que le pays devient la première puissance industrielle et impériale mondiale.",
      source: PARL,
      sourceUrl: PARL_URL,
      events: [
        {
          date: "1707",
          title: "Acte d'Union avec l'Écosse",
          description: "L'Angleterre et l'Écosse fusionnent en un royaume unique de Grande-Bretagne.",
          source: PARL,
          sourceUrl: PARL_URL,
        },
        {
          date: "1801",
          title: "Acte d'Union avec l'Irlande",
          description: "Le royaume de Grande-Bretagne et le royaume d'Irlande fusionnent, formant le Royaume-Uni de Grande-Bretagne et d'Irlande.",
          source: PARL,
          sourceUrl: PARL_URL,
        },
      ],
    },
    {
      id: "xxe-siecle",
      title: "XXᵉ siècle",
      startYear: 1914,
      endYear: 1998,
      summary:
        "Deux guerres mondiales, l'indépendance de l'Irlande du Sud en 1922 et la décolonisation transforment profondément le pays et son empire, tandis que l'État providence se construit après 1945.",
      source: GOV,
      sourceUrl: GOV_URL,
      events: [
        {
          date: "1922",
          title: "Indépendance de l'État libre d'Irlande",
          description: "La majeure partie de l'Irlande devient indépendante ; six comtés du nord restent au sein du Royaume-Uni sous le nom d'Irlande du Nord.",
          source: PARL,
          sourceUrl: PARL_URL,
        },
        {
          date: "1948",
          title: "Création du National Health Service",
          description: "Le NHS instaure un système de santé public gratuit à l'accès, pilier de l'État providence britannique d'après-guerre.",
          source: GOV,
          sourceUrl: GOV_URL,
        },
        {
          date: "1997 – 1998",
          title: "Dévolution",
          description: "Création du Parlement écossais, de l'Assemblée galloise et de l'Assemblée nord-irlandaise, qui reçoivent des compétences propres.",
          source: PARL,
          sourceUrl: PARL_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1998,
      endYear: "present",
      summary:
        "L'accord du Vendredi saint de 1998 met fin au conflit nord-irlandais ; le pays quitte l'Union européenne après le référendum de 2016, effectif en 2020.",
      source: GOV,
      sourceUrl: GOV_URL,
      events: [
        {
          date: "10 avril 1998",
          title: "Accord du Vendredi saint",
          description: "Accord de paix mettant fin à trois décennies de conflit en Irlande du Nord.",
          source: PARL,
          sourceUrl: PARL_URL,
        },
        {
          date: "23 juin 2016",
          title: "Référendum sur le Brexit",
          description: "51,9 % des votants se prononcent pour la sortie de l'Union européenne.",
          source: GOV,
          sourceUrl: GOV_URL,
        },
        {
          date: "31 janvier 2020",
          title: "Sortie de l'Union européenne",
          description: "Le Royaume-Uni quitte officiellement l'Union européenne.",
          source: GOV,
          sourceUrl: GOV_URL,
        },
      ],
    },
  ],
};
