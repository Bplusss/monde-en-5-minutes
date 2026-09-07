import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Norvégien (bokmål et nynorsk)",
      kind: "officielle",
      note: "Deux formes écrites officielles du norvégien, bokmål et nynorsk, avec statut égal ; les communes choisissent leur forme administrative.",
    },
    {
      name: "Sami (du Nord, lule, du Sud)",
      kind: "régionale",
      note: "Langues officielles au même titre que le norvégien dans les municipalités de la zone d'administration sami, en vertu de la loi sur les Samis.",
    },
    {
      name: "Kven, romani, romanès",
      kind: "régionale",
      note: "Reconnues comme langues minoritaires au titre de la Charte européenne des langues régionales ou minoritaires.",
    },
  ],
  summary:
    "Le norvégien existe sous deux formes écrites officielles, le bokmål et le nynorsk. Les langues samies bénéficient d'un statut officiel dans les zones d'administration sami, aux côtés d'autres langues minoritaires reconnues comme le kven et le romani.",
};
