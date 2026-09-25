import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimations agrégées (CIA World Factbook / Pew Research Center)",
  year: 2023,
  ageScope: "Population totale",
  source: "CIA World Factbook",
  sourceUrl: "https://www.cia.gov/the-world-factbook/countries/iran/",
  points: [
    { label: "Musulmans chiites (duodécimains, religion d'État)", sharePercent: 90 },
    { label: "Musulmans sunnites", sharePercent: 8 },
    { label: "Autres (chrétiens, zoroastriens, juifs, baha'is, sans religion)", sharePercent: 2 },
  ],
  summary:
    "L'islam chiite duodécimain est religion d'État depuis la dynastie safavide (XVIe siècle) et structure directement les institutions de la République islamique (voir « Politique »). La minorité sunnite (kurdes, baloutches) se plaint d'une sous-représentation politique. Les minorités reconnues par la Constitution — chrétiens, zoroastriens et juifs — disposent chacune d'un siège réservé au Majlis. La foi baha'ie, non reconnue, fait l'objet d'une persécution systématique documentée par les Nations unies.",
  methodologyNote:
    "Aucun recensement officiel iranien ne détaille l'appartenance confessionnelle au-delà de la catégorie « musulman » ; ces parts reposent sur des estimations d'organismes extérieurs.",
};
