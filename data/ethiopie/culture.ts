import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Traditions",
      title: "La cérémonie du café",
      description:
        "Originaire des forêts du sud-ouest du pays, le café se prépare en famille lors d'une cérémonie (buna) : les grains sont torréfiés sur place, moulus puis infusés dans une cruche en terre, la jebena, et servis en trois tournées accompagnées d'encens.",
      examples: ["Jebena", "Buna", "Café de Yirgacheffe", "Café de Sidamo"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Coffee_production_in_Ethiopia",
    },
    {
      category: "Patrimoine",
      title: "Lalibela, Aksoum et Gondar",
      description:
        "L'Éthiopie compte parmi les pays africains les plus riches en sites du patrimoine mondial : églises monolithes de Lalibela, stèles géantes d'Aksoum, châteaux impériaux de Gondar et ville fortifiée de Harar, haut lieu de l'islam.",
      examples: ["Bete Giyorgis", "Stèles d'Aksoum", "Fasil Ghebbi", "Harar Jugol"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/18",
    },
    {
      category: "Calendrier",
      title: "Un calendrier à treize mois",
      description:
        "Le calendrier éthiopien, hérité du calendrier copte, compte douze mois de trente jours et un treizième de cinq ou six jours ; il a environ sept à huit ans de décalage avec le calendrier grégorien et le Nouvel An, Enkutatash, tombe le 11 septembre. Les heures se comptent à partir du lever du soleil.",
      examples: ["Enkutatash", "Pagumē (13e mois)", "Meskel"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ethiopian_calendar",
    },
    {
      category: "Gastronomie",
      title: "L'injera",
      description:
        "Grande galette acidulée de teff fermenté, céréale cultivée presque uniquement en Éthiopie, l'injera sert à la fois d'assiette et de couverts : on y dépose des ragoûts épicés au berbéré (wat) et on la déchire avec la main droite. Les jeûnes orthodoxes, nombreux, ont développé une riche cuisine végétalienne.",
      examples: ["Injera", "Doro wat", "Shiro", "Tej (hydromel)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ethiopian_cuisine",
    },
    {
      category: "Sport",
      title: "Les coureurs de fond",
      description:
        "En remportant pieds nus le marathon olympique de Rome en 1960, Abebe Bikila devient le premier champion olympique d'Afrique subsaharienne. Les hauts plateaux ont depuis produit des légendes du fond comme Haile Gebrselassie, Kenenisa Bekele ou Tirunesh Dibaba.",
      examples: ["Abebe Bikila", "Haile Gebrselassie", "Kenenisa Bekele", "Tirunesh Dibaba"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Abebe_Bikila",
    },
    {
      category: "Musique",
      title: "L'éthio-jazz",
      description:
        "Né dans l'Addis-Abeba des années 1960-1970, l'éthio-jazz mêle les gammes pentatoniques éthiopiennes au jazz et au funk ; redécouvert dans le monde grâce à la série de disques « Éthiopiques », il est incarné par Mulatu Astatke.",
      examples: ["Mulatu Astatke", "Mahmoud Ahmed", "Éthiopiques"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ethio-jazz",
    },
  ],
};
