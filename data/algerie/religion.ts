import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimation CIA World Factbook",
  year: 2012,
  ageScope: "Population totale",
  source: "CIA World Factbook",
  sourceUrl: "https://www.cia.gov/the-world-factbook/countries/algeria/",
  points: [
    { label: "Islam (très majoritairement sunnite malékite)", sharePercent: 99 },
    { label: "Autres (christianisme, judaïsme, ahmadisme…)", sharePercent: 1 },
  ],
  summary:
    "L'islam est religion d'État selon la Constitution et la quasi-totalité des Algériens est musulmane, de rite sunnite malékite. La vallée du M'Zab abrite une communauté ibadite, branche minoritaire de l'islam. Les chrétiens, surtout protestants évangéliques en Kabylie, forment une petite minorité ; l'exercice des cultes non musulmans est encadré par une ordonnance de 2006, et de nombreuses églises protestantes ont été fermées depuis 2018. La communauté juive, présente depuis l'Antiquité, a quitté le pays pour l'essentiel en 1962.",
  methodologyNote:
    "Le recensement algérien ne comporte pas de question sur la religion. Le chiffre de 99 % est une estimation de la CIA ; la part des non-musulmans et des personnes sans religion n'est pas mesurée de façon fiable.",
};
