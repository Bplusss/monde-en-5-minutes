import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Patrimoine",
      title: "36 sites inscrits au patrimoine mondial de l'UNESCO",
      description:
        "Avec 36 biens inscrits, le Mexique est le pays comptant le plus grand nombre de sites du patrimoine mondial de l'UNESCO en Amérique. Il combine des cités précolombiennes majeures — Chichén Itzá et sa pyramide de Kukulcán, Teotihuacan et ses pyramides du Soleil et de la Lune, la cité maya de Palenque — et un riche patrimoine colonial, comme le centre historique de Mexico, bâti sur les ruines de Tenochtitlan.",
      examples: ["Chichén Itzá", "Teotihuacan", "Palenque", "Centre historique de Mexico"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/etatsparties/mx",
    },
    {
      category: "Fêtes et traditions",
      title: "Le Jour des morts (Día de los Muertos)",
      description:
        "Célébré les 1er et 2 novembre, il mêle croyances mésoaméricaines et catholicisme : les familles dressent des autels (ofrendas) décorés de fleurs de cempasúchil, de photographies et des mets préférés des défunts, et se rassemblent dans les cimetières pour honorer leurs morts dans une ambiance qui privilégie le souvenir joyeux au deuil. Inscrit en 2008 au patrimoine culturel immatériel de l'UNESCO.",
      examples: ["Ofrendas", "Pan de muerto", "Calaveras en sucre"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/la-fete-indigene-dediee-aux-morts-00054",
    },
    {
      category: "Musique",
      title: "Le mariachi",
      description:
        "Né au XIXe siècle dans la région de Cocula, dans l'État de Jalisco, l'ensemble typique de mariachi associe violons, trompettes, guitares, vihuela et guitarrón (grande guitare basse). Inscrit en 2011 au patrimoine culturel immatériel de l'UNESCO, il accompagne aussi bien les fêtes familiales que les cérémonies publiques.",
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/la-musique-de-mariachi-chant-et-instruments-a-cordes-00575",
    },
    {
      category: "Gastronomie",
      title: "La cuisine traditionnelle mexicaine",
      description:
        "Fondée sur la triade maïs-haricot-piment héritée des civilisations mésoaméricaines et enrichie par les apports coloniaux espagnols, la cuisine mexicaine a été inscrite en 2010 au patrimoine culturel immatériel de l'UNESCO, le Michoacán étant cité en exemple de ce modèle culinaire. Elle est indissociable des rituels sociaux et festifs : moles, tamales et autres plats emblématiques accompagnent mariages, fêtes religieuses et célébrations familiales.",
      examples: ["Tacos", "Mole poblano", "Tamales", "Pozole"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/la-cuisine-traditionnelle-mexicaine-culture-communautaire-ancestrale-et-vivante-le-paradigme-de-michoacan-00400",
    },
    {
      category: "Arts",
      title: "Le muralisme mexicain",
      description:
        "Dans les années 1920, au lendemain de la Révolution, l'État commande de vastes fresques murales à des artistes comme Diego Rivera, David Alfaro Siqueiros et José Clemente Orozco, chargées de raconter l'histoire nationale et les luttes sociales à un public populaire largement analphabète. Le mouvement, dont l'épouse de Diego Rivera, la peintre Frida Kahlo, est devenue une figure culturelle mondiale, a durablement marqué l'art public mexicain.",
      examples: ["Diego Rivera", "Frida Kahlo", "Palacio Nacional de Mexico"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Mexican_muralism",
    },
  ],
};
