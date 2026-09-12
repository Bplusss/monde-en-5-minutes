import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Global Attitudes Survey (Pew Research Center)",
  year: 2023,
  ageScope: "Adultes (18 ans et plus), auto-identification",
  source: "Pew Research Center (via Wikipedia)",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Japan",
  points: [
    { label: "Bouddhisme", sharePercent: 46.0 },
    { label: "Sans religion", sharePercent: 42.0 },
    { label: "Christianisme", sharePercent: 2.0 },
    { label: "Autres religions (dont shintoïsme comme identité exclusive)", sharePercent: 9.0 },
    { label: "Ne sait pas / sans réponse", sharePercent: 1.0 },
  ],
  summary:
    "La très grande majorité des Japonais ne s'identifient à aucune religion exclusive, tout en participant couramment à des rites shintoïstes (visite au sanctuaire pour le Nouvel An, mariages) et bouddhistes (funérailles, fêtes des ancêtres), les deux traditions coexistant depuis des siècles sans s'exclure mutuellement. Le christianisme, introduit par des missionnaires portugais au XVIᵉ siècle puis brutalement réprimé pendant plus de deux siècles, reste minoritaire mais a laissé une empreinte durable, notamment autour de Nagasaki.",
  methodologyNote:
    "Les statistiques religieuses japonaises varient fortement selon la méthode : les décomptes officiels de l'Agence pour les affaires culturelles, fondés sur les registres d'adhérents déclarés par les sanctuaires et temples, additionnent environ 70 % de « shintoïstes » et 70 % de « bouddhistes » (total très supérieur à 100 %, du fait du cumul d'appartenances institutionnelles non exclusives), quand les enquêtes d'auto-identification individuelle comme celle-ci font apparaître une majorité de personnes se déclarant sans religion.",
};
