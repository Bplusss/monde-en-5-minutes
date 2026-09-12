import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Italien",
      kind: "officielle",
      note: "Seule langue officielle, utilisée dans l'administration, l'enseignement et les médias.",
    },
    {
      name: "Sammarinais (dialecte romagnol)",
      kind: "parlée",
      note: "Variante locale du romagnol, dialecte roman du groupe émilien-romagnol proche de celui parlé dans la région italienne voisine de Rimini ; sans statut officiel et en net recul face à l'italien standard.",
    },
  ],
  summary:
    "L'italien standard est la seule langue officielle et la langue quotidienne de la quasi-totalité de la population. Le dialecte sammarinais, variante locale du romagnol, subsiste surtout chez les générations les plus âgées et dans quelques usages folkloriques, sans reconnaissance institutionnelle.",
};
