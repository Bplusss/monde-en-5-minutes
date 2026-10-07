import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Patrimoine",
      title: "Petra, la cité rose",
      description:
        "Capitale des Nabatéens, Petra est accessible par un étroit canyon, le Siq, qui débouche sur le Khazneh, façade monumentale taillée dans le grès. Inscrite au patrimoine mondial en 1985, elle compte des centaines de tombeaux, temples et habitations creusés dans la roche, redécouverts par les Européens en 1812.",
      examples: ["Le Khazneh (Trésor)", "Le Monastère (Ad-Deir)", "Le Siq", "Les tombeaux royaux"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/326",
    },
    {
      category: "Patrimoine",
      title: "Jerash, Wadi Rum et les châteaux du désert",
      description:
        "Jerash est l'une des villes romaines les mieux conservées du Proche-Orient, avec son forum ovale et ses rues à colonnades. Le désert du Wadi Rum, aux falaises de grès, et le château omeyyade de Qusayr Amra, orné de fresques du VIIIe siècle, sont inscrits au patrimoine mondial.",
      examples: ["Jerash", "Wadi Rum", "Qusayr Amra", "Château de Kerak"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/1377",
    },
    {
      category: "Gastronomie",
      title: "Le mansaf",
      description:
        "Plat national, le mansaf associe de l'agneau cuit dans une sauce au jameed, yaourt de brebis séché, servi sur un lit de riz et de pain fin. Plat bédouin de l'hospitalité, il se mange traditionnellement debout, avec la main droite, lors des mariages et des fêtes ; il est inscrit au patrimoine immatériel de l'UNESCO depuis 2022.",
      examples: ["Mansaf", "Maqluba", "Knafeh", "Falafel"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Mansaf",
    },
    {
      category: "Traditions",
      title: "La culture bédouine",
      description:
        "Les tribus bédouines, longtemps nomades, restent le socle de l'identité « est-jordanienne » et un pilier de la monarchie et de l'armée. Hospitalité, café amer à la cardamome servi dans de petites tasses, tentes en poil de chèvre et keffieh rouge et blanc, le shmagh, en sont des symboles.",
      examples: ["Café bédouin", "Shmagh", "Tentes en poil de chèvre"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Bedouin",
    },
    {
      category: "Musique",
      title: "La dabké",
      description:
        "Danse en ligne au rythme des pieds frappant le sol, la dabké est dansée dans tout le Levant lors des mariages et des fêtes. La musique bédouine s'accompagne du rababa, vièle à une corde.",
      examples: ["Dabké", "Rababa", "Festival de Jerash"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Dabke",
    },
    {
      category: "Artisanat",
      title: "Les mosaïques de Madaba",
      description:
        "Madaba, surnommée la « ville des mosaïques », conserve de nombreux pavements byzantins, dont la célèbre carte de la Terre sainte ; une école d'artisans y perpétue cet art. Les tapis tissés par les femmes bédouines et les bouteilles de sable coloré de Petra sont d'autres artisanats réputés.",
      examples: ["Carte de Madaba", "Mont Nébo", "Tapis bédouins"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Madaba",
    },
  ],
};
