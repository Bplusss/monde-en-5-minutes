import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    { name: "Néerlandais", kind: "officielle" },
    {
      name: "Frison occidental",
      kind: "régionale",
      note: "Coofficiel dans la province de Frise ; reconnu au titre de la Charte européenne des langues régionales ou minoritaires.",
    },
    {
      name: "Bas-saxon néerlandais, limbourgeois",
      kind: "régionale",
      note: "Reconnus comme langues régionales au titre de la Charte européenne des langues régionales ou minoritaires.",
    },
    {
      name: "Papiamento, anglais",
      kind: "régionale",
      note: "Langues officielles dans les territoires caribéens du Royaume, aux côtés du néerlandais.",
    },
  ],
  summary:
    "Le néerlandais est la langue officielle du pays. Le frison occidental est coofficiel en Frise, tandis que le bas-saxon néerlandais et le limbourgeois bénéficient d'une reconnaissance régionale. Dans les territoires caribéens du Royaume, le papiamento et l'anglais sont également langues officielles.",
};
