import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimation CIA World Factbook",
  year: 2020,
  ageScope: "Population totale",
  source: "CIA World Factbook",
  sourceUrl: "https://www.cia.gov/the-world-factbook/countries/tunisia/",
  points: [
    { label: "Islam (sunnite, rite malékite)", sharePercent: 99 },
    { label: "Autres (christianisme, judaïsme, chiisme, bahaïsme)", sharePercent: 1 },
  ],
  summary:
    "L'islam sunnite de rite malékite est la religion de la quasi-totalité des Tunisiens. La Constitution de 2022 ne fait plus de l'islam la religion de l'État, mais dispose que la Tunisie fait partie de l'« oumma islamique » et que l'État doit en réaliser les finalités. La synagogue de la Ghriba, à Djerba, abrite l'une des plus anciennes communautés juives d'Afrique du Nord, aujourd'hui résiduelle. L'histoire récente est marquée par l'opposition entre courant islamiste (Ennahdha) et tradition sécularisatrice héritée de Bourguiba.",
  methodologyNote:
    "Le recensement tunisien ne pose pas de question sur la religion ; la répartition reprise ici est une estimation encyclopédique. Elle mesure l'appartenance déclarée et non la pratique.",
};
