import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Malais (bahasa Melayu)",
      kind: "officielle",
      note: "Seule langue nationale selon l'article 152 de la Constitution, écrite en alphabet latin ; l'écriture arabe jawi reste utilisée dans le domaine religieux.",
    },
    {
      name: "Anglais",
      kind: "parlée",
      note: "Très répandu dans les affaires, la justice et l'enseignement supérieur ; langue officielle au Sarawak aux côtés du malais.",
    },
    {
      name: "Chinois (mandarin, cantonais, hokkien…)",
      kind: "parlée",
      note: "Le mandarin est la langue des écoles chinoises ; les différents dialectes du sud de la Chine restent parlés en famille et dans le commerce.",
    },
    {
      name: "Tamoul",
      kind: "parlée",
      note: "Langue de la majorité des Malaisiens d'origine indienne, enseignée dans des écoles publiques tamoules.",
    },
    {
      name: "Langues autochtones de Bornéo (iban, kadazan-dusun…)",
      kind: "régionale",
      note: "Des dizaines de langues parlées au Sabah et au Sarawak ; l'iban est la plus répandue.",
    },
  ],
  summary:
    "Le malais est la langue nationale et la langue d'enseignement des écoles publiques, mais la Malaisie est l'un des pays les plus multilingues d'Asie : beaucoup d'habitants passent quotidiennement du malais à l'anglais, au mandarin, au cantonais ou au tamoul. Le système scolaire conserve des écoles primaires publiques en chinois et en tamoul, une particularité régionale. Le « manglish », anglais mâtiné de mots malais et chinois, sert de langue familière dans les villes.",
};
