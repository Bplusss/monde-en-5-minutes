import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive d'un patrimoine culturel immense et multiethnique, déjà largement traité par ailleurs.",
  items: [
    {
      category: "Littérature",
      title: "L'âge d'or de la littérature russe",
      description:
        "La littérature russe du XIXe siècle, portée par Pouchkine, Tolstoï, Dostoïevski ou Tchekhov, compte parmi les plus influentes au monde. Au XXe siècle, plusieurs écrivains soviétiques (Pasternak, Soljenitsyne, Brodsky) ont reçu le prix Nobel, certains en rupture avec le pouvoir.",
      examples: ["Guerre et Paix (Tolstoï)", "Crime et Châtiment (Dostoïevski)", "Eugène Onéguine (Pouchkine)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Russian_literature",
    },
    {
      category: "Musique et ballet",
      title: "Ballet classique et tradition musicale",
      description:
        "Le ballet russe, porté par le Bolchoï et le Mariinski et par des compositeurs comme Tchaïkovski ou Stravinsky, est l'un des apports culturels russes les plus reconnus. L'opéra et la musique classique russes (Moussorgski, Chostakovitch, Rachmaninov) restent joués dans le monde entier.",
      examples: ["Théâtre Bolchoï", "Le Lac des cygnes", "Casse-Noisette"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Music_of_Russia",
    },
    {
      category: "Patrimoine architectural",
      title: "Kremlin, place Rouge et architecture orthodoxe",
      description:
        "Le Kremlin et la place Rouge, inscrits au patrimoine mondial de l'UNESCO, concentrent des siècles d'histoire russe, dont la cathédrale Saint-Basile (XVIe siècle). Le centre historique de Saint-Pétersbourg, planifié par Pierre le Grand, avec ses canaux et l'Ermitage, est également classé.",
      examples: ["Cathédrale Saint-Basile", "Musée de l'Ermitage", "Centre historique de Saint-Pétersbourg"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/545/",
    },
    {
      category: "Gastronomie",
      title: "Bortsch, blinis et pelmeni",
      description:
        "La cuisine russe, marquée par les longs hivers, comprend des plats devenus emblématiques : le bortsch (soupe de betteraves d'origine ukrainienne), les blinis servis au caviar ou à la crème smetana, les pelmeni (raviolis à la viande) et le caviar d'esturgeon de la Caspienne.",
      examples: ["Bortsch", "Blinis", "Pelmeni", "Caviar"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Russian_cuisine",
    },
    {
      category: "Sciences et exploration spatiale",
      title: "Pionnière de la conquête spatiale",
      description:
        "L'URSS a lancé le premier satellite artificiel, Spoutnik 1, en 1957, et le premier vol spatial habité avec Iouri Gagarine en 1961. Roscosmos, héritière du programme soviétique, reste un acteur majeur de la Station spatiale internationale malgré un recul relatif depuis les années 2010.",
      examples: ["Spoutnik 1", "Vol de Iouri Gagarine", "Cosmodrome de Baïkonour (aujourd'hui au Kazakhstan)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Soviet_space_program",
    },
    {
      category: "Diversité ethnoculturelle",
      title: "Un patrimoine multiethnique et multiconfessionnel",
      description:
        "Le pays abrite les traditions de plus de 190 groupes ethniques : architecture des républiques musulmanes du Caucase et de la Volga, chant diphonique des peuples de Sibérie (Touvains, Bouriates, Iakoutes), ou bouddhisme tibétain des Kalmouks, seul peuple bouddhiste d'Europe.",
      examples: ["Chant diphonique touvain (khöömei)", "Datsan Gunzetchoinei (temple bouddhiste, Saint-Pétersbourg)", "Architecture du Tatarstan (Kremlin de Kazan)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ethnic_groups_in_Russia",
    },
  ],
};
