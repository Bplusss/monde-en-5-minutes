import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Nil",
    lengthKm: {
      value: 6_650,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Nile",
      note: "L'un des deux plus longs fleuves du monde avec l'Amazone (le classement exact dépend de la méthode de mesure retenue) ; en Égypte, il ne coule plus que sur son cours aval, le pays n'en abritant ni la source ni l'essentiel du bassin versant, partagé avec dix autres pays d'Afrique de l'Est et centrale. Sans l'irrigation qu'il permet, l'agriculture égyptienne et l'essentiel du peuplement du pays seraient impossibles : plus de 95 % des Égyptiens vivent à moins de quelques kilomètres de son cours ou de son delta.",
    },
    source_location: "Lac Victoria (Ouganda/Tanzanie/Kenya), pour le Nil Blanc ; lac Tana (Éthiopie), pour le Nil Bleu — les deux branches confluant à Khartoum, au Soudan, bien en amont de la frontière égyptienne",
    mouth: "Mer Méditerranée, via un delta se ramifiant en deux branches principales (Rosette à l'ouest, Damiette à l'est), au nord du pays",
  },
];
