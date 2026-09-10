import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Luxembourgeois (Lëtzebuergesch)",
      kind: "officielle",
      note: "Langue nationale depuis 1984, langue germanique parlée quotidiennement par la majorité des Luxembourgeois de souche, utilisée à l'oral et de plus en plus à l'écrit.",
    },
    {
      name: "Français",
      kind: "officielle",
      note: "Langue de la législation et de l'administration écrite, largement utilisée dans la vie publique, le commerce et par l'importante population frontalière et immigrée francophone.",
    },
    {
      name: "Allemand",
      kind: "officielle",
      note: "Langue de la presse écrite et de l'enseignement primaire, aux côtés du luxembourgeois, qui lui est étroitement apparenté.",
    },
    {
      name: "Portugais",
      kind: "parlée",
      note: "Langue de la plus importante communauté immigrée du pays, dépassant 15 % de la population résidente.",
    },
  ],
  summary:
    "Le Luxembourg est le seul pays au monde à reconnaître trois langues officielles à égalité de statut : le luxembourgeois, langue nationale et identitaire, le français, langue du droit et de l'administration, et l'allemand, langue de la presse et de l'école primaire. Cette configuration, unique en Europe, reflète la position du pays au carrefour des mondes roman et germanique.",
};
