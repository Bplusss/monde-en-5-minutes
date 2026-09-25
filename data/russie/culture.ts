import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive d'un patrimoine culturel immense et multiethnique, déjà largement traité par ailleurs.",
  items: [
    {
      category: "Littérature",
      title: "L'âge d'or de la littérature russe",
      description:
        "La littérature russe du XIXe siècle, portée par des auteurs comme Alexandre Pouchkine (souvent considéré comme le fondateur de la langue littéraire russe moderne), Léon Tolstoï, Fiodor Dostoïevski ou Anton Tchekhov, compte parmi les plus influentes au monde et a profondément marqué la littérature mondiale par son exploration de la psychologie humaine, des questions morales et sociales. Au XXe siècle, plusieurs écrivains russes et soviétiques (Boris Pasternak, Mikhaïl Cholokhov, Alexandre Soljenitsyne, Joseph Brodsky) ont reçu le prix Nobel de littérature, certains dans un rapport de dissidence tendu avec le pouvoir soviétique.",
      examples: ["Guerre et Paix (Tolstoï)", "Crime et Châtiment (Dostoïevski)", "Eugène Onéguine (Pouchkine)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Russian_literature",
    },
    {
      category: "Musique et ballet",
      title: "Ballet classique et tradition musicale",
      description:
        "Le ballet russe, porté par des institutions prestigieuses comme le théâtre Bolchoï de Moscou et le théâtre Mariinski de Saint-Pétersbourg, et par des compositeurs comme Piotr Ilitch Tchaïkovski (Le Lac des cygnes, Casse-Noisette) ou Igor Stravinsky (Le Sacre du printemps), constitue l'un des apports culturels russes les plus universellement reconnus. La tradition de l'opéra et de la musique classique russe (Moussorgski, Rimski-Korsakov, Chostakovitch, Rachmaninov) reste jouée dans le monde entier.",
      examples: ["Théâtre Bolchoï", "Le Lac des cygnes", "Casse-Noisette"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Music_of_Russia",
    },
    {
      category: "Patrimoine architectural",
      title: "Kremlin, place Rouge et architecture orthodoxe",
      description:
        "Le Kremlin de Moscou et la place Rouge attenante, inscrits au patrimoine mondial de l'UNESCO, concentrent des siècles d'histoire politique et religieuse russe, dont la cathédrale Saint-Basile-le-Bienheureux, aux bulbes multicolores emblématiques, construite au XVIe siècle sur ordre d'Ivan le Terrible. Le centre historique de Saint-Pétersbourg, ville entièrement planifiée par Pierre le Grand au XVIIIe siècle sur un modèle européen, avec ses canaux, ses palais (dont l'Ermitage, l'un des plus grands musées d'art du monde) et son architecture baroque et néoclassique, est également classé au patrimoine mondial.",
      examples: ["Cathédrale Saint-Basile", "Musée de l'Ermitage", "Centre historique de Saint-Pétersbourg"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/545/",
    },
    {
      category: "Gastronomie",
      title: "Bortsch, blinis et pelmeni",
      description:
        "La cuisine russe, marquée par les longs hivers et les traditions paysannes, comprend des plats devenus emblématiques bien au-delà des frontières du pays : le bortsch, soupe de betteraves d'origine ukrainienne largement adoptée en Russie ; les blinis, crêpes fines traditionnellement servies avec du caviar ou de la crème smetana ; les pelmeni, raviolis fourrés à la viande ; et le caviar d'esturgeon de la mer Caspienne, longtemps symbole de raffinement impérial puis soviétique.",
      examples: ["Bortsch", "Blinis", "Pelmeni", "Caviar"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Russian_cuisine",
    },
    {
      category: "Sciences et exploration spatiale",
      title: "Pionnière de la conquête spatiale",
      description:
        "L'URSS puis la Russie ont joué un rôle pionnier dans l'exploration spatiale : lancement du premier satellite artificiel, Spoutnik 1, en 1957, et premier vol spatial habité de l'histoire avec Iouri Gagarine en 1961. L'agence spatiale russe Roscosmos, héritière du programme soviétique, reste un acteur majeur de la Station spatiale internationale et du lancement de satellites, en dépit d'un recul relatif de son rôle mondial depuis les années 2010.",
      examples: ["Spoutnik 1", "Vol de Iouri Gagarine", "Cosmodrome de Baïkonour (aujourd'hui au Kazakhstan)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Soviet_space_program",
    },
    {
      category: "Diversité ethnoculturelle",
      title: "Un patrimoine multiethnique et multiconfessionnel",
      description:
        "Au-delà de la culture russe dominante, le pays abrite les traditions vivantes de plus de 190 groupes ethniques officiellement recensés : architecture et musique des républiques musulmanes du Caucase et de la Volga, chant diphonique et traditions chamaniques des peuples turciques et mongols de Sibérie (Touvains, Bouriates, Iakoutes), ou encore bouddhisme tibétain pratiqué par les Kalmouks, seul peuple traditionnellement bouddhiste d'Europe.",
      examples: ["Chant diphonique touvain (khöömei)", "Datsan Gunzetchoinei (temple bouddhiste, Saint-Pétersbourg)", "Architecture du Tatarstan (Kremlin de Kazan)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ethnic_groups_in_Russia",
    },
  ],
};
