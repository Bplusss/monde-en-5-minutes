import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Ukrainien",
      kind: "officielle",
      note: "Seule langue officielle de l'État depuis l'indépendance, sa promotion a été renforcée par la loi sur la langue d'État de 2019.",
    },
    {
      name: "Russe",
      kind: "parlée",
      note: "Langue maternelle d'une part importante de la population, en particulier dans l'est et le sud du pays ; son usage dans l'espace public a fortement reculé depuis 2014, et plus encore depuis l'invasion de 2022.",
    },
    {
      name: "Tatar de Crimée",
      kind: "parlée",
      note: "Langue turcique du peuple autochtone tatar de Crimée, reconnue par la Constitution ukrainienne ; sa transmission est fragilisée par l'occupation russe de la péninsule depuis 2014.",
    },
    {
      name: "Hongrois et roumain",
      kind: "parlée",
      note: "Langues de minorités nationales concentrées respectivement en Transcarpatie et dans la région de Tchernivtsi.",
    },
  ],
  summary:
    "L'ukrainien est la seule langue officielle du pays, mais le russe reste une langue de communication très répandue, héritage de décennies de politique linguistique soviétique. La question linguistique est hautement politisée depuis l'annexion de la Crimée en 2014 et l'invasion de 2022, la Russie ayant invoqué la « protection des russophones » pour justifier son agression, ce qui a accéléré un mouvement de bascule vers l'ukrainien y compris chez des locuteurs russophones de naissance.",
};
