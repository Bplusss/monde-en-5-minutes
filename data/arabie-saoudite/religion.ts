import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Global Religious Landscape (estimations)",
  year: 2010,
  ageScope: "Population totale résidente (Saoudiens et étrangers)",
  source: "Pew Research Center",
  sourceUrl: "https://www.pewresearch.org/religion/2025/06/09/religion-in-the-middle-east-and-north-africa/",
  points: [
    { label: "Islam (majoritairement sunnite)", sharePercent: 93.0 },
    { label: "Christianisme", sharePercent: 4.4 },
    { label: "Hindouisme", sharePercent: 1.1 },
    { label: "Sans religion", sharePercent: 0.7 },
    { label: "Bouddhisme", sharePercent: 0.3 },
  ],
  summary:
    "L'islam est religion d'État ; le Coran et la Sunna tiennent lieu de constitution. Le royaume abrite La Mecque et Médine, les deux premiers lieux saints de l'islam, et le roi porte le titre de « Serviteur des deux saintes mosquées ». L'alliance conclue en 1744 entre les Saoud et le prédicateur Mohammed ibn Abd al-Wahhab a fait du wahhabisme, courant sunnite rigoriste, la doctrine officielle. Une minorité chiite, estimée à 10-15 % des citoyens, vit surtout dans la région de l'Est. Le culte non musulman public est interdit ; chrétiens et hindous sont presque tous des travailleurs étrangers.",
  methodologyNote:
    "Il n'existe aucune statistique officielle sur la religion. Les chiffres du Pew Research Center sont des estimations portant sur l'ensemble des résidents ; la quasi-totalité des citoyens est musulmane.",
};
