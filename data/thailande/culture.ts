import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer les habitudes réelles de chacun.",
  items: [
    {
      category: "Monarchie et société",
      title: "Le roi au centre de la vie publique",
      description:
        "Portraits royaux dans l'espace public, hymne royal avant les séances de cinéma, jours fériés dédiés à la famille royale : la monarchie occupe une place symbolique centrale. L'article 112 du Code pénal punit la lèse-majesté de 3 à 15 ans de prison par chef d'accusation, ce qui limite fortement le débat public sur l'institution.",
      examples: ["Article 112", "Anniversaire du roi (28 juillet)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/L%C3%A8se-majest%C3%A9_in_Thailand",
    },
    {
      category: "Fêtes",
      title: "Songkran, le Nouvel An thaï",
      description:
        "Célébré mi-avril, Songkran associe rites de purification dans les temples, hommage aux aînés et grandes batailles d'eau dans les rues. La fête est inscrite au patrimoine culturel immatériel de l'UNESCO depuis 2023. Loy Krathong, en novembre, voit flotter des milliers de petites offrandes sur les rivières.",
      examples: ["Songkran", "Loy Krathong", "Yi Peng (Chiang Mai)"],
      source: "UNESCO (via Wikipedia)",
      sourceUrl: "https://en.wikipedia.org/wiki/Songkran_(Thailand)",
    },
    {
      category: "Gastronomie",
      title: "Équilibre des saveurs, de la rue au palais",
      description:
        "La cuisine thaïe combine piquant, acide, salé et sucré, avec de fortes variantes régionales : salades épicées de l'Isan, currys du Sud, cuisine du Nord influencée par la Birmanie. La soupe tom yum kung est inscrite à l'UNESCO depuis 2024, et la cuisine de rue fait partie de la vie quotidienne à Bangkok.",
      examples: ["Tom yum kung", "Pad thaï", "Som tam", "Curry vert", "Khao soi"],
      source: "UNESCO (via Wikipedia)",
      sourceUrl: "https://en.wikipedia.org/wiki/Tom_yum",
    },
    {
      category: "Arts du spectacle et du corps",
      title: "Khon, massage thaï et boxe thaïe",
      description:
        "Le khon, drame dansé et masqué tiré du Ramakien (version thaïe du Ramayana), et le massage traditionnel nuad thai sont inscrits à l'UNESCO (2018 et 2019). Le muay thaï, sport national, s'est diffusé dans le monde entier.",
      examples: ["Khon", "Nuad thai", "Muay thaï"],
      source: "UNESCO (via Wikipedia)",
      sourceUrl: "https://en.wikipedia.org/wiki/Khon",
    },
    {
      category: "Patrimoine architectural",
      title: "Temples et anciennes capitales",
      description:
        "Les ruines de Sukhothai et d'Ayutthaya sont classées au patrimoine mondial de l'UNESCO depuis 1991. À Bangkok, le Grand Palais abrite le Wat Phra Kaeo et son Bouddha d'émeraude, palladium du royaume.",
      examples: ["Ayutthaya", "Sukhothai", "Wat Phra Kaeo", "Wat Arun"],
      source: "UNESCO (via Wikipedia)",
      sourceUrl: "https://en.wikipedia.org/wiki/Historic_City_of_Ayutthaya",
    },
  ],
};
