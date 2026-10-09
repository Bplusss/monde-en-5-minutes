import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et de l'habitat 2021",
  year: 2021,
  ageScope: "Population totale",
  source: "Ghana Statistical Service",
  sourceUrl: "https://census2021.statsghana.gov.gh/",
  points: [
    { label: "Pentecôtistes et charismatiques", sharePercent: 31.6 },
    { label: "Protestants", sharePercent: 17.4 },
    { label: "Catholiques", sharePercent: 10.0 },
    { label: "Autres chrétiens", sharePercent: 12.3 },
    { label: "Islam", sharePercent: 19.9 },
    { label: "Religions traditionnelles", sharePercent: 3.2 },
    { label: "Autres religions", sharePercent: 4.5 },
    { label: "Sans religion", sharePercent: 1.1 },
  ],
  summary:
    "Le Ghana est l'un des pays les plus religieux du monde : près de 99 % des habitants déclarent une religion. Le christianisme, apporté par les missions protestantes du XIXe siècle, domine dans le Sud, où les Églises pentecôtistes et charismatiques ont connu un essor spectaculaire depuis les années 1980. L'islam, arrivé par les routes commerciales du Sahel, est majoritaire dans le Nord. Les relations entre religions sont apaisées, et les croyances traditionnelles, comme le culte des ancêtres, restent présentes jusque chez de nombreux chrétiens et musulmans.",
  methodologyNote:
    "Religion déclarée par les personnes recensées en 2021 ; les catégories chrétiennes sont celles du recensement, qui distingue les Églises pentecôtistes et charismatiques des Églises protestantes historiques (méthodistes, presbytériens, anglicans).",
};
