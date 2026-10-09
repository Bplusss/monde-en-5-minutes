import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Patrimoine",
      title: "Les forts et châteaux de la côte",
      description:
        "Une trentaine de forts construits par les Portugais, les Néerlandais, les Britanniques ou les Danois entre le XVe et le XVIIIe siècle jalonnent le littoral, dont le château d'Elmina, bâti en 1482, et celui de Cape Coast. Inscrits au patrimoine mondial de l'UNESCO en 1979, ils rappellent le commerce de l'or puis la traite des esclaves. Les bâtiments traditionnels ashantis de la région de Kumasi sont également inscrits.",
      examples: ["Château d'Elmina", "Château de Cape Coast", "Fort Christiansborg", "Bâtiments ashantis"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/34",
    },
    {
      category: "Artisanat",
      title: "Le kente et les symboles adinkra",
      description:
        "Le kente, tissé en bandes étroites aux couleurs vives par les Ashantis et les Éwés, était réservé à la royauté ; il est devenu un symbole de l'identité africaine dans le monde entier. Les symboles adinkra, motifs imprimés sur les tissus, expriment chacun un proverbe ou une valeur.",
      examples: ["Kente", "Adinkra", "Tabouret d'or ashanti"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Kente_cloth",
    },
    {
      category: "Musique",
      title: "Du highlife à l'afrobeats",
      description:
        "Né au début du XXe siècle du mélange de rythmes akans, de fanfares et de guitares, le highlife a été la bande-son de l'indépendance. Il a donné naissance dans les années 1990 au hiplife, qui le mêle au hip-hop, puis aux artistes d'afrobeats d'aujourd'hui.",
      examples: ["E. T. Mensah", "Highlife", "Hiplife", "Sarkodie", "Black Sherif"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Highlife",
    },
    {
      category: "Littérature",
      title: "Une littérature de l'après-indépendance",
      description:
        "Ayi Kwei Armah a dépeint la corruption des premières années dans « L'âge d'or n'est pas pour demain » (1968). La romancière et dramaturge Ama Ata Aidoo et le poète Kofi Awoonor sont d'autres grandes figures, et la romancière ghanéenne-américaine Yaa Gyasi a rencontré un succès mondial avec « No Home ».",
      examples: ["Ayi Kwei Armah", "Ama Ata Aidoo", "Kofi Awoonor", "Yaa Gyasi"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ghanaian_literature",
    },
    {
      category: "Gastronomie",
      title: "Fufu, banku et jollof",
      description:
        "La cuisine repose sur des pâtes d'igname, de manioc, de plantain ou de maïs, comme le fufu ou le banku, servies avec des soupes épicées à l'arachide ou à la noix de palme. Le riz jollof fait l'objet d'une rivalité amicale avec le Nigeria, et le waakye, riz aux haricots, est un petit-déjeuner populaire.",
      examples: ["Fufu", "Banku", "Riz jollof", "Waakye", "Kelewele"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ghanaian_cuisine",
    },
    {
      category: "Sport",
      title: "Les Black Stars",
      description:
        "Le football est une passion nationale. Quadruple champion d'Afrique, le Ghana a atteint les quarts de finale de la Coupe du monde 2010, éliminé par l'Uruguay après une main restée célèbre de Luis Suárez sur sa ligne. La boxe a aussi produit des champions, comme Azumah Nelson.",
      examples: ["Black Stars", "Abedi Pelé", "Michael Essien", "Azumah Nelson"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ghana_national_football_team",
    },
  ],
};
