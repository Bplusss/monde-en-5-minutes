import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Musique",
      title: "L'iso-polyphonie albanaise",
      description:
        "Chant polyphonique traditionnel du sud de l'Albanie, fondé sur une mélodie et une contre-mélodie soutenues par un bourdon collectif, inscrit en 2005 au patrimoine culturel immatériel de l'UNESCO.",
      examples: ["Chants de mariage", "Chants de funérailles", "Chants de moisson"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/albanian-folk-iso-polyphony-00155",
    },
    {
      category: "Patrimoine",
      title: "Les villes-musées de Berat et Gjirokastër",
      description:
        "Ces deux cités du sud, aux maisons ottomanes en pierre étagées à flanc de colline, sont inscrites au patrimoine mondial de l'UNESCO : Gjirokastër depuis 2005, Berat en 2008 comme extension du même bien.",
      examples: ["Château de Gjirokastër", "Quartier de Mangalem à Berat (« ville aux mille fenêtres »)"],
      source: "UNESCO",
      sourceUrl: "https://en.wikipedia.org/wiki/Historic_Centres_of_Berat_and_Gjirokast%C3%ABr",
    },
    {
      category: "Patrimoine",
      title: "Le site archéologique de Butrint",
      description:
        "Cité antique fondée par les Grecs puis développée par les Romains, les Byzantins et Venise, nichée dans une réserve naturelle du sud du pays, inscrite au patrimoine mondial de l'UNESCO en 1992.",
      examples: ["Théâtre gréco-romain", "Baptistère paléochrétien"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/570/",
    },
    {
      category: "Héros national",
      title: "La figure de Skanderbeg",
      description:
        "Gjergj Kastrioti Skanderbeg, qui résista pendant vingt-cinq ans aux Ottomans au XVᵉ siècle, reste la figure historique la plus célébrée du pays : sa statue équestre domine la place centrale de Tirana et son casque à tête de chèvre est un symbole national.",
      source: "Encyclopaedia Britannica",
      sourceUrl: "https://www.britannica.com/biography/Skanderbeg",
    },
    {
      category: "Environnement bâti",
      title: "Les bunkers de l'ère communiste",
      description:
        "Plus de 173 000 bunkers en béton, construits sur ordre du dictateur Enver Hoxha entre les années 1960 et 1980 pour préparer le pays à une invasion qui n'est jamais venue, parsèment encore le paysage albanais et sont aujourd'hui en partie reconvertis en musées, cafés ou hébergements.",
      examples: ["BUNK'ART (Tirana)", "Bunker de Gjirokastër"],
      source: "National Geographic",
      sourceUrl: "https://www.nationalgeographic.com/travel/article/repurposed-bunkers-and-urban-art-help-albania-move-beyond-communism",
    },
  ],
};
