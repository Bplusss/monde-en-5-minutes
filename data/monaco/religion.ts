import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimation externe (absence de recensement religieux officiel)",
  year: 2023,
  ageScope: "Population totale résidente (estimation)",
  source: "Association of Religion Data Archives / Wikipedia",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Monaco",
  points: [
    { label: "Catholiques", sharePercent: 83.0 },
    { label: "Autres chrétiens", sharePercent: 6.0 },
    { label: "Sans religion", sharePercent: 6.0 },
    { label: "Autres religions", sharePercent: 5.0 },
  ],
  summary:
    "Le catholicisme est religion d'État à Monaco, la liberté de culte étant par ailleurs garantie par la Constitution de 1962. La population résidente, très internationale, pratique toutefois une diversité de religions plus large que ne le suggère ce statut officiel.",
  methodologyNote:
    "Monaco ne mène pas de recensement religieux officiel ; ces chiffres proviennent d'estimations externes et doivent être interprétés avec prudence.",
};
