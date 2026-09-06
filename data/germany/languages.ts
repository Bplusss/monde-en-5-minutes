import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Allemand",
      kind: "officielle",
      note: "Langue officielle de la République fédérale, consacrée par l'usage constitutionnel et administratif.",
    },
    {
      name: "Bas-sorabe, haut-sorabe, danois, frison septentrional, romani, bas-allemand",
      kind: "régionale",
      note: "Reconnues comme langues minoritaires ou régionales au titre de la Charte européenne des langues régionales ou minoritaires, ratifiée par l'Allemagne en 1998.",
    },
  ],
  summary:
    "L'allemand est la langue officielle au niveau fédéral. Plusieurs langues minoritaires historiques (sorabe, frison, danois, romani) et le bas-allemand bénéficient d'une protection au titre de la Charte européenne des langues régionales ou minoritaires.",
};
