import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "World Factbook (estimations)",
  year: 2020,
  ageScope: "Population totale",
  source: "CIA World Factbook, cité par Wikipedia",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Cuba",
  points: [
    { label: "Christianisme (surtout catholique)", sharePercent: 58.9 },
    { label: "Sans religion", sharePercent: 23.2 },
    { label: "Religions populaires (dont cultes afro-cubains)", sharePercent: 17.6 },
    { label: "Autres religions", sharePercent: 0.3 },
  ],
  summary:
    "Après la révolution, l'État s'est déclaré athée et a marginalisé les Églises ; il est devenu laïque en 1992, et les visites des papes Jean-Paul II en 1998, Benoît XVI en 2012 et François en 2015 ont marqué un apaisement. Le catholicisme reste la principale référence religieuse, mais la pratique est faible. Les cultes afro-cubains, comme la santería, qui associe des divinités yorubas (orishas) à des saints catholiques, sont très répandus et souvent pratiqués en parallèle du catholicisme. Les Églises évangéliques progressent rapidement.",
  methodologyNote:
    "Cuba ne publie aucune statistique officielle sur la religion, et les estimations varient fortement : une enquête Univision de 2015 comptait 44 % de Cubains se déclarant sans religion. Beaucoup de pratiquants des cultes afro-cubains se disent aussi catholiques.",
};
