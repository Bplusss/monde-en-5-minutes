import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population 2011 (dernier recensement incluant la religion)",
  year: 2011,
  ageScope: "Population totale résidente",
  source: "KSH (Office central hongrois de la statistique)",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Hungary",
  points: [
    { label: "Catholiques (rite romain et grec)", sharePercent: 38.9 },
    { label: "Réformés (calvinistes)", sharePercent: 11.6 },
    { label: "Luthériens", sharePercent: 2.2 },
    { label: "Sans religion", sharePercent: 18.2 },
    { label: "Autres ou non déclaré", sharePercent: 29.1 },
  ],
  summary:
    "Le catholicisme, romain et gréco-catholique, reste la confession la plus répandue, suivi par l'Église réformée calviniste, historiquement forte dans l'est du pays. La proportion de personnes n'ayant pas répondu à la question religieuse est particulièrement élevée en Hongrie, ce qui limite la précision des comparaisons avec d'autres pays.",
  methodologyNote:
    "La question religieuse était facultative lors du recensement de 2011, ce qui explique la part très importante de réponses non déclarées ; aucun recensement plus récent n'a repris cette question.",
};
