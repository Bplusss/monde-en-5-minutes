import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle",
  regime: "Monarchie parlementaire",
  headOfState: {
    title: "Roi",
    name: "Carl XVI Gustaf",
    since: "15 septembre 1973",
    source: "Sveriges Kungahus",
    sourceUrl: "https://www.kungahuset.se/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Ulf Kristersson",
    since: "18 octobre 2022",
    source: "Government Offices of Sweden",
    sourceUrl: "https://www.government.se/government-of-sweden/prime-ministers-office/ulf-kristersson/",
  },
  legislature: {
    name: "Riksdag",
    chambers: [{ name: "Riksdag (monocaméral)", seats: 349 }],
  },
  constitution: {
    adopted: "1ᵉʳ janvier 1975 (Regeringsformen de 1974, l'une des quatre lois fondamentales)",
    source: "Sveriges riksdag",
    sourceUrl: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/grundlagarna/",
  },
  summary:
    "La Suède est une monarchie constitutionnelle où le roi n'exerce plus aucun pouvoir politique depuis la réforme de 1974 : son rôle est purement représentatif. Le pouvoir exécutif appartient au gouvernement, responsable devant le Riksdag, parlement monocaméral élu à la proportionnelle tous les quatre ans.",
};
