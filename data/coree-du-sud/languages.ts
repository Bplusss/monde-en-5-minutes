import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Coréen",
      kind: "officielle",
      sharePercent: { value: 100, unit: "%", source: "Wikipedia (Languages of Korea)", sourceUrl: "https://en.wikipedia.org/wiki/Languages_of_Korea", note: "Langue maternelle de la quasi-totalité de la population, sans lien génétique établi avec le chinois ou le japonais malgré des influences lexicales et historiques croisées." },
    },
    {
      name: "Anglais",
      kind: "parlée",
      note: "Langue étrangère la plus enseignée, obligatoire dès l'école primaire et centrale dans les concours d'entrée à l'université et de recrutement en entreprise ; un marché privé du soutien scolaire (hagwon) considérable s'est développé autour de son apprentissage intensif.",
    },
    {
      name: "Chinois et japonais",
      kind: "parlée",
      note: "Deuxièmes langues étrangères les plus répandues dans l'enseignement secondaire, héritage des liens historiques et culturels anciens (écriture, bouddhisme, colonisation japonaise) et des relations économiques actuelles avec ces deux voisins.",
    },
  ],
  summary:
    "Le coréen, langue isolée sans filiation certaine avec ses voisins régionaux, s'écrit depuis 1446 au moyen du hangeul, un alphabet phonétique conçu sous le règne du roi Sejong le Grand pour remplacer les sinogrammes classiques, alors réservés à une élite lettrée, et permettre l'alphabétisation du plus grand nombre. Considéré par de nombreux linguistes comme l'un des systèmes d'écriture les plus rationnels et efficaces jamais créés, le hangeul est aujourd'hui utilisé quasi exclusivement (les sinogrammes hanja ne subsistent que ponctuellement, à des fins de clarification ou dans un usage académique). La division de la péninsule depuis 1945 a par ailleurs entraîné une divergence lexicale croissante entre le coréen du Sud, riche en emprunts à l'anglais, et celui du Nord, plus normé par l'État et coupé de ces mêmes influences.",
};
