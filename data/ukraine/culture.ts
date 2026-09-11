import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Patrimoine",
      title: "La laure des Grottes de Kiev (Kyïv-Petchersk)",
      description:
        "Fondé en 1051, ce complexe monastique orthodoxe creusé dans des grottes est l'un des plus anciens et des plus vénérés du monde slave orthodoxe. Classé au patrimoine mondial de l'UNESCO, il reste un lieu de pèlerinage majeur malgré les tensions religieuses liées à son occupation passée par une communauté rattachée au patriarcat de Moscou.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/527/",
    },
    {
      category: "Gastronomie",
      title: "Le bortsch, patrimoine culturel inscrit à l'UNESCO",
      description:
        "Cette soupe à la betterave rouge, plat emblématique décliné dans toute l'Europe de l'Est, a vu sa « culture du bortsch ukrainien » inscrite en 2022 sur la liste du patrimoine culturel immatériel de l'UNESCO nécessitant une sauvegarde urgente, dans un contexte où la guerre menace sa transmission et où son origine fait l'objet de débats identitaires avec la Russie.",
      examples: ["Bortsch", "Varenyky (pierogi ukrainiens)", "Salo (lard fumé)"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/USL/la-culture-du-bortsch-ukrainien-01852",
    },
    {
      category: "Artisanat",
      title: "La vyshyvanka et les pysanky",
      description:
        "La vyshyvanka, chemise brodée de motifs symboliques propres à chaque région, est devenue un puissant marqueur d'identité nationale, portée lors d'occasions officielles et de la Journée de la vyshyvanka célébrée chaque année. Les pysanky, œufs de Pâques ornés de motifs traditionnels à la cire, relèvent d'un art ancestral toujours pratiqué.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Vyshyvanka",
    },
    {
      category: "Musique",
      title: "La bandura et la scène musicale contemporaine",
      description:
        "Instrument à cordes pincées emblématique, la bandura accompagnait traditionnellement les kobzars, bardes itinérants aveugles chantant l'histoire cosaque. Sur la scène contemporaine, l'Ukraine s'est distinguée à trois reprises à l'Eurovision (2004, 2016, 2022), la victoire de 2022 du groupe Kalush Orchestra survenant quelques mois après le début de l'invasion russe.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Bandura",
    },
    {
      category: "Identité",
      title: "Le tryzoub et le bleu-jaune",
      description:
        "Le tryzoub (trident), emblème hérité des princes de la Rus' de Kiev, et le drapeau bicolore bleu et jaune — symbolisant le ciel au-dessus des champs de blé — sont devenus depuis 2022 des symboles de résistance largement arborés bien au-delà des frontières ukrainiennes.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Flag_of_Ukraine",
    },
  ],
};
