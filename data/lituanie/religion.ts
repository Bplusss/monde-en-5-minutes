import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et des logements 2021",
  year: 2021,
  ageScope: "Ensemble de la population résidente ayant répondu à la question",
  source: "Office lituanien de statistique",
  sourceUrl: "https://osp.stat.gov.lt/en/2021-gyventoju-ir-bustu-surasymo-rezultatai/tautybe-gimtoji-kalba-ir-tikyba",
  points: [
    { label: "Catholiques romains", sharePercent: 74.2 },
    { label: "Orthodoxes", sharePercent: 4.1 },
    { label: "Sans religion / non-croyants", sharePercent: 6.1 },
    { label: "Autres religions (vieux-croyants, luthériens, autres)", sharePercent: 3.6 },
    { label: "Non déclaré", sharePercent: 12.0 },
  ],
  summary:
    "Le catholicisme romain, introduit lors du baptême du pays en 1387, domine largement le paysage religieux lituanien : près des trois quarts des habitants s'en réclament. Les minorités orthodoxe et vieille-croyante, liées aux communautés russe et biélorusse, ainsi qu'une petite communauté luthérienne (héritée notamment de la Petite Lituanie, ex-Prusse orientale), complètent ce tableau.",
  methodologyNote:
    "Les parts ci-dessus sont calculées sur l'ensemble des répondants au recensement 2021, y compris ceux n'ayant pas déclaré d'appartenance religieuse ; les pourcentages hors non-déclarés (soit un dénominateur plus restreint) sont légèrement plus élevés pour chaque catégorie.",
};
