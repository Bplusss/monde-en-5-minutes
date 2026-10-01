import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive de la culture marocaine, à la croisée des héritages amazigh, arabe, andalou, juif et africain.",
  items: [
    {
      category: "Villes historiques",
      title: "Médinas de Fès et de Marrakech",
      description:
        "Les médinas, villes anciennes entourées de remparts, sont inscrites au patrimoine mondial de l'UNESCO pour plusieurs villes marocaines. Fès el-Bali, fondée au IXᵉ siècle, est l'une des plus grandes zones urbaines piétonnes au monde ; à Marrakech, la place Jemaa el-Fna, avec ses conteurs et musiciens, est inscrite au patrimoine culturel immatériel.",
      examples: ["Médina de Fès", "Place Jemaa el-Fna", "Médina de Tétouan", "Essaouira"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/170/",
    },
    {
      category: "Patrimoine bâti",
      title: "Ksour, kasbahs et architecture de terre",
      description:
        "Dans les vallées présahariennes, les ksour (villages fortifiés) et les kasbahs en pisé illustrent une architecture adaptée au climat aride. Le ksar d'Aït-Ben-Haddou, près de Ouarzazate, souvent utilisé comme décor de cinéma, est inscrit au patrimoine mondial.",
      examples: ["Aït-Ben-Haddou", "Vallée du Drâa", "Kasbah de Taourirt"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/444/",
    },
    {
      category: "Gastronomie",
      title: "Couscous, tajine et thé à la menthe",
      description:
        "Le couscous, préparé traditionnellement le vendredi, est inscrit depuis 2020 au patrimoine immatériel de l'UNESCO au titre du Maghreb. Les tajines, mijotés dans un plat de terre cuite, associent souvent viande, fruits secs et épices ; le thé vert à la menthe accompagne l'hospitalité.",
      examples: ["Couscous", "Tajine", "Pastilla", "Harira", "Thé à la menthe"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/knowledge-know-how-and-practices-pertaining-to-the-production-and-consumption-of-couscous-01602",
    },
    {
      category: "Musique",
      title: "Gnaoua, musique andalouse et chaâbi",
      description:
        "La musique gnaoua, héritée de descendants d'esclaves d'Afrique subsaharienne et associée à des rituels de transe, est inscrite au patrimoine immatériel de l'UNESCO ; le festival d'Essaouira lui est consacré. La musique arabo-andalouse perpétue l'héritage d'Al-Andalus, tandis que le chaâbi et la musique amazighe (ahidous, ahwach) restent très populaires.",
      examples: ["Festival Gnaoua d'Essaouira", "Musique arabo-andalouse", "Ahidous"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/gnawa-01170",
    },
    {
      category: "Artisanat",
      title: "Zellige, tapis et cuir",
      description:
        "L'artisanat occupe une place importante dans l'économie et l'identité du pays : mosaïques de zellige, tapis amazighs du Moyen Atlas, cuir tanné dans les tanneries de Fès, bois de thuya d'Essaouira. L'huile d'argan, produite par des coopératives féminines du Souss, est inscrite au patrimoine immatériel de l'UNESCO.",
      examples: ["Zellige", "Tanneries Chouara (Fès)", "Huile d'argan"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/argan-practices-and-know-how-concerning-the-argan-tree-01205",
    },
    {
      category: "Sport",
      title: "Le football, passion nationale",
      description:
        "En 2022, au Qatar, le Maroc devient la première équipe africaine et arabe à atteindre une demi-finale de Coupe du monde. Le pays a accueilli la Coupe d'Afrique des nations 2025 et co-organisera la Coupe du monde 2030 avec l'Espagne et le Portugal.",
      examples: ["Demi-finale de la Coupe du monde 2022", "Coupe du monde 2030"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Morocco_national_football_team",
    },
  ],
};
