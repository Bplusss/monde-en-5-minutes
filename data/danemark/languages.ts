import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Danois",
      kind: "officielle",
      note: "Langue officielle de fait du royaume (aucune loi ne le proclame explicitement, mais son usage officiel est universel).",
    },
    {
      name: "Allemand",
      kind: "régionale",
      note: "Reconnu comme langue de la minorité allemande du Jutland du Sud (Sønderjylland), en vertu de la déclaration de Copenhague de 1955.",
    },
    {
      name: "Groenlandais et féroïen",
      kind: "régionale",
      note: "Langues officielles respectives du Groenland et des îles Féroé, deux territoires autonomes du royaume du Danemark — non parlées au Danemark métropolitain.",
    },
    {
      name: "Anglais",
      kind: "parlée",
      note: "Très largement maîtrisé par la population, enseigné dès l'école primaire.",
    },
  ],
  summary:
    "Le danois est la langue de facto du Danemark métropolitain. L'allemand bénéficie d'une reconnaissance historique au Jutland du Sud, tandis que le groenlandais et le féroïen sont les langues officielles des deux territoires autonomes du royaume, distincts du Danemark métropolitain.",
};
