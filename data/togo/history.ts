import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";
const WIKIPEDIA_URL = "https://fr.wikipedia.org/wiki/Histoire_du_Togo";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire togolaise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "colonisation",
      title: "Protectorat allemand puis partage franco-britannique",
      startYear: 1884,
      endYear: 1960,
      summary:
        "L'explorateur allemand Gustav Nachtigal signe le 5 juillet 1884 à Togoville un traité de protectorat avec le chef local Mlapa III, donnant naissance au « Togoland » allemand, reconnu par la conférence de Berlin de 1885. L'Allemagne y développe le port de Lomé, des voies ferrées et des plantations, avant de perdre la colonie au profit de la France et du Royaume-Uni après sa défaite en 1914. Le territoire est ensuite partagé en deux mandats de la Société des Nations (1922), puis en deux tutelles de l'ONU après 1945 : le Togo britannique, à l'ouest, qui rejoindra le Ghana indépendant en 1957 lors d'un référendum contesté, et le Togo français, à l'est, qui devient autonome au sein de la Communauté française en 1956 avant d'accéder à l'indépendance.",
      source: WIKIPEDIA,
      sourceUrl: WIKIPEDIA_URL,
      events: [
        {
          date: "5 juillet 1884",
          title: "Traité de Togoville",
          description: "L'explorateur allemand Gustav Nachtigal signe un traité de protectorat avec le chef Mlapa III, fondant le Togoland allemand.",
          source: WIKIPEDIA,
          sourceUrl: WIKIPEDIA_URL,
        },
        {
          date: "1922",
          title: "Mandats de la Société des Nations",
          description: "Après la défaite allemande de 1914, le Togoland est partagé entre la France et le Royaume-Uni sous mandat de la SDN.",
          source: WIKIPEDIA,
          sourceUrl: WIKIPEDIA_URL,
        },
      ],
    },
    {
      id: "independance-olympio",
      title: "Indépendance et présidence de Sylvanus Olympio",
      startYear: 1960,
      endYear: 1963,
      summary:
        "Le Togo accède à l'indépendance le 27 avril 1960 sous la présidence de Sylvanus Olympio, figure du mouvement nationaliste. Son régime, de plus en plus autoritaire, met fin au multipartisme dès 1961. Il est assassiné dans la nuit du 12 au 13 janvier 1963 par un groupe de militaires, dont le sergent Gnassingbé Eyadéma, lors d'un coup d'État généralement considéré comme le premier coup d'État militaire réussi de l'Afrique post-coloniale indépendante.",
      source: WIKIPEDIA,
      sourceUrl: WIKIPEDIA_URL,
      events: [
        {
          date: "27 avril 1960",
          title: "Indépendance du Togo",
          description: "Le Togo français devient indépendant, avec Sylvanus Olympio comme premier président.",
          source: WIKIPEDIA,
          sourceUrl: WIKIPEDIA_URL,
        },
        {
          date: "13 janvier 1963",
          title: "Assassinat de Sylvanus Olympio",
          description: "Le président Olympio est tué par un groupe de militaires, parmi lesquels le sergent Gnassingbé Eyadéma, lors du premier coup d'État de l'Afrique indépendante.",
          source: WIKIPEDIA,
          sourceUrl: WIKIPEDIA_URL,
        },
      ],
    },
    {
      id: "eyadema",
      title: "La prise du pouvoir et le long règne de Gnassingbé Eyadéma",
      startYear: 1963,
      endYear: 2005,
      summary:
        "Nicolas Grunitzky assure la présidence à partir de 1963 avant d'être renversé le 13 janvier 1967 par le lieutenant-colonel Étienne Gnassingbé Eyadéma, qui suspend la Constitution et dissout l'Assemblée nationale. Eyadéma installe un régime à parti unique — le Rassemblement du peuple togolais (RPT), fondé en 1969 — et dirige le pays pendant près de 38 ans, la plus longue durée au pouvoir d'un chef d'État en Afrique à l'époque. Sous la pression de manifestations populaires, il concède le multipartisme en 1991 à l'issue d'une Conférence nationale, mais reste au pouvoir à travers des élections présidentielles jugées non conformes aux standards internationaux par des organisations telles qu'Amnesty International, notamment en 1993 et 1998. Il meurt le 5 février 2005 d'un arrêt cardiaque, après 38 ans de pouvoir.",
      source: WIKIPEDIA,
      sourceUrl: WIKIPEDIA_URL,
      events: [
        {
          date: "13 janvier 1967",
          title: "Coup d'État de Gnassingbé Eyadéma",
          description: "Le lieutenant-colonel Eyadéma renverse le président Grunitzky et prend le pouvoir, qu'il conservera jusqu'à sa mort en 2005.",
          source: WIKIPEDIA,
          sourceUrl: WIKIPEDIA_URL,
        },
        {
          date: "Juillet-août 1991",
          title: "Conférence nationale et retour au multipartisme",
          description: "Sous la pression de la contestation populaire, Eyadéma accepte la tenue d'une Conférence nationale souveraine et la restauration du multipartisme.",
          source: WIKIPEDIA,
          sourceUrl: WIKIPEDIA_URL,
        },
        {
          date: "5 février 2005",
          title: "Mort de Gnassingbé Eyadéma",
          description: "Le président Eyadéma meurt d'un arrêt cardiaque après près de 38 ans au pouvoir.",
          source: WIKIPEDIA,
          sourceUrl: WIKIPEDIA_URL,
        },
      ],
    },
    {
      id: "faure-gnassingbe",
      title: "Faure Gnassingbé et la crise successorale de 2005",
      startYear: 2005,
      endYear: 2024,
      summary:
        "À la mort de son père, Faure Gnassingbé est installé président par l'armée dès le 6 février 2005, en violation de la Constitution qui prévoyait l'intérim du président de l'Assemblée nationale — un épisode qualifié de coup d'État par l'Union africaine et la communauté internationale. Face à cette pression, il démissionne le 25 février 2005 et se présente à une élection présidentielle organisée dans l'urgence le 24 avril 2005, qu'il remporte officiellement avec plus de 60 % des voix dans un scrutin contesté par l'opposition et marqué par de violentes émeutes ayant fait plusieurs centaines de morts selon l'ONU. Il est ensuite réélu en 2010, 2015 et 2020, la limitation à deux mandats présidentiels — réintroduite en 1992 puis supprimée par une révision constitutionnelle de 2002 — n'étant rétablie qu'en 2019, sans effet rétroactif sur ses mandats antérieurs.",
      source: WIKIPEDIA,
      sourceUrl: WIKIPEDIA_URL,
      events: [
        {
          date: "6 février 2005",
          title: "Installation de Faure Gnassingbé par l'armée",
          description: "L'armée proclame Faure Gnassingbé président en dehors du cadre constitutionnel, provoquant une condamnation internationale.",
          source: WIKIPEDIA,
          sourceUrl: WIKIPEDIA_URL,
        },
        {
          date: "24 avril 2005",
          title: "Élection présidentielle contestée",
          description: "Faure Gnassingbé remporte l'élection organisée après sa démission provisoire, dans un scrutin contesté marqué par de graves violences.",
          source: WIKIPEDIA,
          sourceUrl: WIKIPEDIA_URL,
        },
      ],
    },
    {
      id: "cinquieme-republique",
      title: "La Ve République et le nouveau régime parlementaire",
      startYear: 2024,
      endYear: "present",
      summary:
        "Le Parlement adopte le 19 avril 2024, sans consultation référendaire, une révision constitutionnelle transformant le Togo en république parlementaire et instaurant la fonction de Président du Conseil des ministres, doté de l'essentiel du pouvoir exécutif et désigné par l'Assemblée nationale sans limite de mandats. Faure Gnassingbé, alors en fin de second mandat présidentiel selon les règles antérieures, devient Président du Conseil des ministres le 3 mai 2025, tandis que Jean-Lucien Kwame Savi de Tové accède à la présidence de la République, désormais une fonction honorifique. L'opposition et plusieurs organisations de la société civile ont dénoncé cette réforme comme un moyen pour Faure Gnassingbé de prolonger indéfiniment son exercice du pouvoir, la famille Gnassingbé dirigeant le pays sans interruption depuis 1967.",
      source: WIKIPEDIA,
      sourceUrl: "https://fr.wikipedia.org/wiki/Constitution_du_Togo",
      events: [
        {
          date: "6 mai 2024",
          title: "Promulgation de la nouvelle Constitution",
          description: "La révision constitutionnelle instaurant la Ve République et le régime parlementaire entre en vigueur.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Constitution_du_Togo",
        },
        {
          date: "3 mai 2025",
          title: "Faure Gnassingbé devient Président du Conseil des ministres",
          description: "Faure Gnassingbé, président de la République depuis 2005, prend la tête du gouvernement dans le nouveau régime parlementaire, tandis que Jean-Lucien Kwame Savi de Tové devient président de la République.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Faure_Gnassingb%C3%A9",
        },
      ],
    },
  ],
};
