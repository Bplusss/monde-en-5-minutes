import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Patrimoine",
      title: "La Vieille Havane et Trinidad",
      description:
        "Le centre historique de La Havane et ses fortifications, inscrits au patrimoine mondial en 1982, réunissent places coloniales, palais baroques et façades Art déco ; Trinidad, ville sucrière du XVIIIe siècle aux rues pavées, et la vallée de Viñales, avec ses plantations de tabac, sont également inscrites.",
      examples: ["Vieille Havane", "Malecón", "Trinidad", "Vallée de Viñales"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/204",
    },
    {
      category: "Musique",
      title: "Son, rumba et salsa",
      description:
        "Né dans l'est de l'île du mélange de la guitare espagnole et des percussions africaines, le son cubain est à l'origine de la salsa. La rumba, inscrite au patrimoine immatériel de l'UNESCO en 2016, se danse au son des tambours. Le Buena Vista Social Club a fait redécouvrir au monde les vieux musiciens du son à la fin des années 1990.",
      examples: ["Son", "Rumba", "Buena Vista Social Club", "Celia Cruz"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Music_of_Cuba",
    },
    {
      category: "Littérature",
      title: "De José Martí à Alejo Carpentier",
      description:
        "Poète et penseur de l'indépendance, José Martí est l'auteur des « Versos sencillos », dont les vers sont chantés dans « Guantanamera ». Alejo Carpentier, inventeur du « réel merveilleux », le poète Nicolás Guillén et, en exil, Guillermo Cabrera Infante ou Reinaldo Arenas ont marqué la littérature du XXe siècle.",
      examples: ["José Martí", "Alejo Carpentier", "Nicolás Guillén", "Leonardo Padura"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cuban_literature",
    },
    {
      category: "Artisanat",
      title: "Cigares et rhum",
      description:
        "Les cigares roulés à la main avec le tabac de la région de Pinar del Río, considéré comme l'un des meilleurs du monde, sont un emblème national, comme le rhum, base du mojito et du daiquiri, deux cocktails nés dans l'île.",
      examples: ["Cohiba", "Montecristo", "Mojito", "Daiquiri"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cuban_cigar",
    },
    {
      category: "Sport",
      title: "Le baseball et la boxe",
      description:
        "Le baseball, introduit au XIXe siècle, est le sport national, et beaucoup de joueurs cubains ont fait carrière aux États-Unis. Cuba est aussi une puissance de la boxe amateur : ses boxeurs, comme Teófilo Stevenson, triple champion olympique, ont remporté des dizaines de titres olympiques.",
      examples: ["Baseball", "Teófilo Stevenson", "Félix Savón"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Sport_in_Cuba",
    },
    {
      category: "Gastronomie",
      title: "Riz, haricots noirs et ropa vieja",
      description:
        "La cuisine créole cubaine associe influences espagnoles, africaines et caribéennes : riz aux haricots noirs (congrí ou « moros y cristianos »), bœuf effiloché (ropa vieja), porc rôti et bananes plantain frites. Le carnet de rationnement, instauré en 1962, reste en vigueur pour les produits de base.",
      examples: ["Ropa vieja", "Congrí", "Tostones", "Café cubano"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cuban_cuisine",
    },
  ],
};
