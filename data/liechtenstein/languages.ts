import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Allemand",
      kind: "officielle",
      note: "Seule langue officielle, utilisée dans l'administration, l'enseignement et l'écrit ; l'allemand standard (Hochdeutsch) coexiste en diglossie avec le dialecte parlé au quotidien.",
    },
    {
      name: "Alémanique liechtensteinois",
      kind: "parlée",
      note: "Dialecte germanique alémanique de tous les jours, proche des dialectes suisses alémaniques parlés de l'autre côté du Rhin, dans les cantons voisins de Saint-Gall et des Grisons.",
    },
    {
      name: "Walser",
      kind: "régionale",
      note: "Dialecte alémanique distinct parlé à Triesenberg, hérité des migrants walser venus du Valais (Suisse) au XIIIᵉ siècle pour coloniser les hautes vallées alpines.",
    },
  ],
  summary:
    "L'allemand est la seule langue officielle du Liechtenstein, mais la langue de tous les jours est un dialecte alémanique proche du suisse allemand ; la commune de montagne de Triesenberg conserve en plus son propre dialecte walser, distinct du reste du pays et légué par des colons valaisans du Moyen Âge.",
};
