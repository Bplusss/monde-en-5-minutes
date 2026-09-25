import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Coréen",
      kind: "officielle",
      sharePercent: { value: 100, unit: "%", source: "Wikipedia (Languages of Korea)", sourceUrl: "https://en.wikipedia.org/wiki/Languages_of_Korea", note: "Langue isolée, sans lien génétique établi avec le chinois ou le japonais." },
    },
    {
      name: "Anglais",
      kind: "parlée",
      note: "Langue étrangère la plus enseignée, obligatoire dès le primaire ; un vaste marché privé de soutien scolaire (hagwon) s'est développé autour.",
    },
    {
      name: "Chinois et japonais",
      kind: "parlée",
      note: "Deuxièmes langues étrangères les plus répandues dans le secondaire.",
    },
  ],
  summary:
    "Le coréen s'écrit depuis 1446 au moyen du hangeul, alphabet phonétique conçu par le roi Sejong le Grand pour remplacer les sinogrammes classiques réservés à l'élite lettrée, considéré comme l'un des systèmes d'écriture les plus rationnels jamais créés. La division de la péninsule depuis 1945 a entraîné une divergence lexicale croissante entre le coréen du Sud, riche en emprunts à l'anglais, et celui du Nord.",
};
