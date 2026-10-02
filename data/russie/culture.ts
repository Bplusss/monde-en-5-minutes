import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive.",
  items: [
    {
      category: "Littérature",
      title: "L'âge d'or de la littérature russe",
      description:
        "La littérature russe du XIXe siècle (Pouchkine, Tolstoï, Dostoïevski, Tchekhov) compte parmi les plus influentes au monde. Au XXe siècle, Pasternak, Soljenitsyne et Brodsky ont reçu le prix Nobel.",
      examples: ["Guerre et Paix (Tolstoï)", "Crime et Châtiment (Dostoïevski)", "Eugène Onéguine (Pouchkine)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Russian_literature",
    },
    {
      category: "Musique et ballet",
      title: "Ballet classique et tradition musicale",
      description:
        "Le ballet russe (Bolchoï, Mariinski, Tchaïkovski, Stravinsky) est l'un des apports culturels russes les plus reconnus, comme la musique de Moussorgski, Chostakovitch ou Rachmaninov.",
      examples: ["Théâtre Bolchoï", "Le Lac des cygnes", "Casse-Noisette"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Music_of_Russia",
    },
    {
      category: "Patrimoine architectural",
      title: "Kremlin, place Rouge et architecture orthodoxe",
      description:
        "Le Kremlin et la place Rouge, avec la cathédrale Saint-Basile (XVIe siècle), sont inscrits à l'UNESCO, comme le centre historique de Saint-Pétersbourg et ses canaux.",
      examples: ["Cathédrale Saint-Basile", "Musée de l'Ermitage", "Centre historique de Saint-Pétersbourg"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/545/",
    },
    {
      category: "Gastronomie",
      title: "Bortsch, blinis et pelmeni",
      description:
        "Plats emblématiques de la cuisine russe : le bortsch (soupe de betteraves d'origine ukrainienne), les blinis à la smetana, les pelmeni (raviolis à la viande) et le caviar de la Caspienne.",
      examples: ["Bortsch", "Blinis", "Pelmeni", "Caviar"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Russian_cuisine",
    },
    {
      category: "Sciences et exploration spatiale",
      title: "Pionnière de la conquête spatiale",
      description:
        "L'URSS a lancé le premier satellite, Spoutnik 1, en 1957, et le premier vol habité avec Iouri Gagarine en 1961. Roscosmos reste un acteur majeur de la Station spatiale internationale.",
      examples: ["Spoutnik 1", "Vol de Iouri Gagarine", "Cosmodrome de Baïkonour (aujourd'hui au Kazakhstan)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Soviet_space_program",
    },
    {
      category: "Diversité ethnoculturelle",
      title: "Un patrimoine multiethnique et multiconfessionnel",
      description:
        "Le pays abrite les traditions de plus de 190 groupes ethniques : architecture des républiques musulmanes, chant diphonique des peuples de Sibérie, bouddhisme des Kalmouks, seul peuple bouddhiste d'Europe.",
      examples: ["Chant diphonique touvain (khöömei)", "Datsan Gunzetchoinei (temple bouddhiste, Saint-Pétersbourg)", "Architecture du Tatarstan (Kremlin de Kazan)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ethnic_groups_in_Russia",
    },
  ],
};
