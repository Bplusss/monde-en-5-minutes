import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non un inventaire d'une culture qui mêle héritages berbère, arabo-musulman, ottoman et méditerranéen.",
  items: [
    {
      category: "Patrimoine antique",
      title: "Timgad, Djémila et Tipasa",
      description:
        "Parmi les villes romaines les mieux conservées d'Afrique du Nord, inscrites au patrimoine mondial : Timgad, colonie fondée par Trajan au pied des Aurès, Djémila, cité de montagne, et Tipasa, sur le littoral.",
      examples: ["Timgad", "Djémila", "Tipasa"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/194/",
    },
    {
      category: "Patrimoine naturel et rupestre",
      title: "Le Tassili n'Ajjer",
      description:
        "Ce plateau gréseux du Sahara oriental abrite plus de 15 000 peintures et gravures rupestres, qui témoignent d'un Sahara autrefois humide, peuplé de grands animaux et d'éleveurs. Site inscrit au patrimoine mondial, culturel et naturel.",
      examples: ["Tassili n'Ajjer", "Hoggar"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/179/",
    },
    {
      category: "Villes historiques",
      title: "La Casbah d'Alger et la vallée du M'Zab",
      description:
        "La Casbah, médina d'époque ottomane étagée au-dessus du port, fut un haut lieu de la guerre d'indépendance. Les cinq ksour de la vallée du M'Zab, fondés à partir du XIᵉ siècle par les ibadites, ont inspiré des architectes modernes, dont Le Corbusier.",
      examples: ["Casbah d'Alger", "Ghardaïa", "Beni Isguen"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/565/",
    },
    {
      category: "Musique",
      title: "Raï, chaâbi et andalou",
      description:
        "Né dans la région d'Oran, le raï, popularisé dans le monde par Khaled ou Cheb Mami, est inscrit au patrimoine immatériel de l'UNESCO depuis 2022. Le chaâbi algérois, la musique arabo-andalouse et la chanson kabyle (Idir, Lounès Matoub) occupent aussi une place centrale.",
      examples: ["Khaled", "Dahmane El Harrachi", "Idir"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ra%C3%AF",
    },
    {
      category: "Littérature",
      title: "Une littérature en arabe, en berbère et en français",
      description:
        "Kateb Yacine (Nedjma, 1956), Mohammed Dib et Mouloud Feraoun décrivent la société colonisée ; Assia Djebar entre à l'Académie française en 2005. Houris de Kamel Daoud, prix Goncourt 2024, est interdit en Algérie.",
      examples: ["Kateb Yacine", "Assia Djebar", "Kamel Daoud"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Algerian_literature",
    },
    {
      category: "Gastronomie",
      title: "Couscous, chorba et pâtisseries",
      description:
        "Le couscous, inscrit en 2020 au patrimoine immatériel de l'UNESCO conjointement avec le Maroc, la Mauritanie et la Tunisie, est le plat des fêtes ; la chorba accompagne le ramadan, et chaque région a ses spécialités (chakhchoukha des Aurès, rechta algéroise).",
      examples: ["Couscous", "Chorba", "Chakhchoukha", "Makrout"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Couscous",
    },
  ],
};
