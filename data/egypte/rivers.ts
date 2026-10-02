import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Nil",
    lengthKm: {
      value: 6_650,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Nile",
      note: "L'un des deux plus longs fleuves du monde avec l'Amazone, selon la méthode de mesure. L'Égypte n'en abrite que le cours aval ; le bassin est partagé avec dix autres pays. Sans lui, l'agriculture et l'essentiel du peuplement du pays seraient impossibles.",
    },
    source_location: "Lac Victoria (Ouganda/Tanzanie/Kenya), pour le Nil Blanc ; lac Tana (Éthiopie), pour le Nil Bleu — les deux branches confluant à Khartoum, au Soudan, bien en amont de la frontière égyptienne",
    mouth: "Mer Méditerranée, via un delta se ramifiant en deux branches principales (Rosette à l'ouest, Damiette à l'est), au nord du pays",
  },
];
