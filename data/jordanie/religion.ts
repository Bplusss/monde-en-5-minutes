import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Rapport sur la liberté religieuse dans le monde",
  year: 2022,
  ageScope: "Population totale",
  source: "Département d'État des États-Unis",
  sourceUrl: "https://www.state.gov/reports/2022-report-on-international-religious-freedom/jordan/",
  points: [
    { label: "Islam (sunnite)", sharePercent: 97.2 },
    { label: "Christianisme", sharePercent: 2.1 },
    { label: "Autres religions et sans religion", sharePercent: 0.7 },
  ],
  summary:
    "L'islam est la religion d'État, et la dynastie hachémite, qui affirme descendre du prophète Mahomet, assure depuis 1924 la garde des lieux saints musulmans et chrétiens de Jérusalem. La quasi-totalité des musulmans sont sunnites. Les chrétiens, surtout grecs-orthodoxes et catholiques, forment l'une des plus anciennes communautés chrétiennes du monde ; leur part a fortement baissé sous l'effet de l'émigration et de la croissance de la population musulmane, mais ils disposent de sièges réservés au Parlement. Le pays abrite aussi le site présumé du baptême du Christ, à Béthanie au-delà du Jourdain.",
  methodologyNote:
    "Le recensement jordanien ne publie pas de répartition religieuse ; ces chiffres sont des estimations reprises par le Département d'État américain.",
};
