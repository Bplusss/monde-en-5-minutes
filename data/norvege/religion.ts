import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Statistiques des communautés religieuses et de vie",
  year: 2019,
  ageScope: "Ensemble de la population",
  source: "SSB (Statistisk sentralbyrå)",
  sourceUrl: "https://www.ssb.no/en/",
  points: [
    { label: "Église de Norvège (luthérienne)", sharePercent: 68.7 },
    { label: "Sans appartenance déclarée", sharePercent: 18.3 },
    { label: "Islam", sharePercent: 3.41 },
    { label: "Église catholique", sharePercent: 3.08 },
    { label: "Autres confessions chrétiennes", sharePercent: 2.21 },
    { label: "Humanisme séculier", sharePercent: 1.85 },
    { label: "Autres religions", sharePercent: 2.45 },
  ],
  summary:
    "L'Église de Norvège, luthérienne, reste la communauté religieuse la plus nombreuse, mais son poids relatif diminue régulièrement : elle rassemblait encore 96 % de la population dans les années 1960, contre 68,7 % en 2019 et 61,7 % en 2024 selon ses propres chiffres d'adhésion.",
  methodologyNote:
    "Chiffres 2019 de la Statistique norvégienne (SSB), fondés sur l'appartenance déclarée aux communautés religieuses et de vie enregistrées, non sur la pratique effective. La part de l'Église de Norvège a continué de baisser depuis (61,7 % selon ses propres registres en 2024).",
};
