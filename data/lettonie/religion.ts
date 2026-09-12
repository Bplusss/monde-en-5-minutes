import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Rapport du ministère de la Justice sur les organisations religieuses (données 2019)",
  year: 2019,
  ageScope: "Population totale (estimation à partir des registres des communautés religieuses)",
  source: "Tieslietu ministrija (ministère letton de la Justice)",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Latvia",
  points: [
    { label: "Luthériens", sharePercent: 36.0 },
    { label: "Sans religion", sharePercent: 30.6 },
    { label: "Catholiques", sharePercent: 18.7 },
    { label: "Orthodoxes", sharePercent: 13.3 },
    { label: "Autres chrétiens (vieux-croyants, baptistes...)", sharePercent: 1.4 },
    { label: "Autres religions", sharePercent: 0.03 },
  ],
  summary:
    "Le luthéranisme, implanté depuis la Réforme du XVIᵉ siècle, reste la confession historiquement dominante en Lettonie, mais ne rassemble plus qu'un peu plus du tiers de la population, très au-dessus toutefois du catholicisme et de l'orthodoxie, cette dernière étant largement associée à la minorité russophone. La région de Latgale, à l'est, se distingue par une forte majorité catholique, héritée de son passé polono-lituanien.",
  methodologyNote:
    "La Lettonie ne pose pas de question sur la religion lors de son recensement de la population ; ces chiffres, les plus complets disponibles, sont des estimations du ministère de la Justice fondées sur les déclarations d'appartenance des communautés religieuses enregistrées, non sur une enquête directe auprès des habitants. Le taux de pratique régulière est nettement plus faible, de l'ordre de 7 % selon les mêmes sources.",
};
