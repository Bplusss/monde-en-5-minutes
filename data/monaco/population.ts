import type { PopulationData } from "@/lib/types";

const SRC = "IMSEE (Institut monégasque de la statistique et des études économiques)";
const URL = "https://www.imsee.mc/";

export const population: PopulationData = {
  total: {
    value: 38_857,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 18_500,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Densité la plus élevée de tous les États souverains du monde.",
  },
  urbanShare: {
    value: 100,
    unit: "%",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Le territoire tout entier forme une seule agglomération urbaine continue.",
  },
  summary:
    "Moins d'un quart des résidents monégasques possèdent la nationalité du pays ; Français et Italiens forment les communautés étrangères les plus nombreuses. Le nombre de travailleurs pendulaires venus chaque jour de France et d'Italie — plus de 50 000 — dépasse celui des habitants eux-mêmes, faisant de Monaco un pôle d'emploi largement extraverti.",
};
