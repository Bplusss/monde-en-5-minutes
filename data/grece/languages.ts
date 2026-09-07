import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Grec",
      kind: "officielle",
      note: "Seule langue officielle de la République hellénique, utilisée dans l'administration, l'enseignement et la justice.",
    },
    {
      name: "Turc, pomaque, romani",
      kind: "parlée",
      note: "Langues de la minorité musulmane de Thrace occidentale, officiellement reconnue par le traité de Lausanne (1923), qui bénéficie d'un enseignement bilingue dans certaines écoles.",
    },
    {
      name: "Albanais, arabe, bulgare, roumain…",
      kind: "parlée",
      note: "Langues parlées par les communautés immigrées et par la minorité albanophone historique (arvanite) dans certaines régions rurales.",
    },
  ],
  summary:
    "Le grec est la seule langue officielle de l'État. La minorité musulmane de Thrace occidentale, reconnue par le traité de Lausanne de 1923, parle principalement le turc, le pomaque ou le romani ; l'immigration récente a par ailleurs diversifié le paysage linguistique du pays.",
};
