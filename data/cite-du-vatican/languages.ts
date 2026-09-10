import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Italien",
      kind: "officielle",
      note: "Langue officielle de l'État de la Cité du Vatican pour l'administration quotidienne, en raison de son enclavement dans Rome.",
    },
    {
      name: "Latin",
      kind: "officielle",
      note: "Langue officielle du Saint-Siège en tant que sujet de droit international, utilisée pour les actes juridiques et diplomatiques les plus solennels de l'Église catholique ; le Vatican est le seul État au monde à en faire un usage officiel encore vivant.",
    },
    {
      name: "Français, allemand, espagnol, anglais",
      kind: "parlée",
      note: "Langues de travail courantes de la Curie romaine et de la diplomatie pontificale, reflétant l'origine internationale du personnel.",
    },
  ],
  summary:
    "L'italien sert de langue administrative courante, tandis que le latin conserve un statut officiel unique au monde pour les actes les plus solennels du Saint-Siège. La Curie romaine, très internationale, emploie couramment plusieurs autres grandes langues de travail dans sa diplomatie et son administration.",
};
