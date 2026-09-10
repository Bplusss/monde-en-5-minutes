import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Russe",
      kind: "officielle",
      sharePercent: {
        value: 71.4,
        unit: "%",
        year: 2019,
        source: "Belstat, recensement 2019",
        sourceUrl: "https://en.wikipedia.org/wiki/Languages_of_Belarus",
        note: "Part de la population déclarant le russe comme langue principale à la maison.",
      },
      note: "Langue officielle à égalité avec le biélorussien, très largement dominante dans les usages quotidiens, l'administration et les médias.",
    },
    {
      name: "Biélorussien",
      kind: "officielle",
      sharePercent: {
        value: 26.1,
        unit: "%",
        year: 2019,
        source: "Belstat, recensement 2019",
        sourceUrl: "https://en.wikipedia.org/wiki/Languages_of_Belarus",
      },
      note: "Langue nationale historique, langue slave orientale proche du russe et de l'ukrainien ; sa pratique quotidienne, minoritaire, reste plus vivace dans les campagnes de l'ouest du pays.",
    },
    {
      name: "Polonais, ukrainien",
      kind: "régionale",
      note: "Langues des minorités nationales, plus présentes dans les régions frontalières de l'ouest.",
    },
  ],
  summary:
    "Le russe et le biélorussien sont tous deux langues officielles, mais le russe domine très largement les usages quotidiens depuis le référendum de 1995 qui lui a redonné un statut officiel après une brève période de biélorussisation. Le biélorussien reste une langue de forte valeur identitaire, notamment portée par l'opposition politique, mais sa pratique courante recule depuis des décennies.",
};
