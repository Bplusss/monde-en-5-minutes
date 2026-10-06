import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Anglais",
      kind: "officielle",
      note: "Langue de la quasi-totalité de la population, officielle de fait sans loi qui la désigne ; l'anglais néo-zélandais se distingue par ses voyelles et par de nombreux emprunts au māori (« kia ora », « whānau »).",
    },
    {
      name: "Māori (te reo Māori)",
      kind: "officielle",
      note: "Langue polynésienne des Māori, officielle depuis le Maori Language Act de 1987 ; menacée au milieu du XXe siècle, elle connaît un renouveau grâce aux écoles d'immersion (kura kaupapa) et à sa présence croissante dans l'espace public.",
    },
    {
      name: "Langue des signes néo-zélandaise",
      kind: "officielle",
      note: "Reconnue langue officielle en 2006, l'un des premiers pays au monde à le faire.",
    },
    {
      name: "Samoan, chinois, hindi, tongien…",
      kind: "parlée",
      note: "Langues des communautés immigrées ; le samoan est l'une des langues les plus parlées après l'anglais, surtout à Auckland.",
    },
  ],
  summary:
    "L'anglais est la langue commune, mais la Nouvelle-Zélande compte trois langues officielles depuis 2006 : l'anglais de fait, le māori et la langue des signes néo-zélandaise. Le te reo Māori, qui avait failli disparaître sous l'effet de la politique d'assimilation, a fait l'objet d'un effort de revitalisation depuis les années 1980 ; de nombreuses institutions publiques portent aujourd'hui un nom bilingue, et le pays lui-même est souvent appelé Aotearoa.",
};
