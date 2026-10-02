import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimations agrégées (CIA World Factbook)",
  year: 2010,
  ageScope: "Population totale",
  source: "CIA World Factbook",
  sourceUrl: "https://www.cia.gov/the-world-factbook/countries/morocco/",
  points: [
    { label: "Islam sunnite (rite malékite)", sharePercent: 99.0 },
    { label: "Autres (christianisme, judaïsme, bahaïsme)", sharePercent: 1.0 },
  ],
  summary:
    "L'islam est la religion de l'État et le roi, en tant que « Commandeur des croyants », en est la plus haute autorité religieuse. La quasi-totalité des Marocains sont musulmans sunnites de rite malékite, avec une forte tradition soufie (confréries, zaouïas). La plus grande communauté juive du monde arabe — environ 250 000 personnes à la fin des années 1940 — ne compte plus que quelques milliers de membres, surtout à Casablanca. Les chrétiens sont pour l'essentiel des étrangers.",
  methodologyNote:
    "Le recensement marocain ne pose pas de question sur la religion : les chiffres sont des estimations. Le prosélytisme envers les musulmans est pénalement réprimé et les Marocains convertis à d'autres religions, dont le nombre est inconnu, ne sont pas reconnus officiellement.",
};
