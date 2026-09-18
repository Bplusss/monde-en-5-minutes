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
    "L'islam chiite duodécimain est religion d'État depuis son instauration par la dynastie safavide au XVIe siècle, et structure directement les institutions de la République islamique (voir « Politique ») : environ 90 % des Iraniens s'identifient comme chiites. La minorité sunnite (kurdes, baloutches, une partie des Turkmènes) est concentrée dans les régions périphériques et se plaint de longue date d'une sous-représentation dans les postes politiques et religieux de haut rang. Les minorités religieuses non musulmanes reconnues par la Constitution — chrétiens (surtout arméniens et assyriens), zoroastriens (héritiers de la religion préislamique de la Perse) et juifs (l'une des plus anciennes communautés juives du monde, présente depuis l'époque achéménide) — disposent chacune d'un siège réservé au Majlis mais restent minoritaires et en déclin démographique du fait de l'émigration. La foi baha'ie, née en Iran au XIXe siècle mais non reconnue par la Constitution car considérée comme une déviance hérétique de l'islam, fait l'objet d'une persécution systématique documentée par les Nations unies : interdiction de culte, exclusion de l'enseignement supérieur et de la fonction publique, arrestations arbitraires.",
  methodologyNote:
    "Aucun recensement officiel iranien ne détaille l'appartenance confessionnelle au-delà de la catégorie « musulman » ; les parts chiite/sunnite et le poids des minorités religieuses reposent donc sur des estimations d'organismes extérieurs (CIA World Factbook, Pew Research Center, rapports d'ONG), avec une marge d'incertitude significative, en particulier concernant l'ampleur réelle de la sécularisation de la société iranienne, un sujet sensible sur lequel plusieurs enquêtes non officielles suggèrent une part croissante d'Iraniens se déclarant non pratiquants ou sans religion.",
};
