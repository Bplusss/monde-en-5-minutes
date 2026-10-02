import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et de l'habitat",
  year: 2019,
  ageScope: "Population totale",
  source: "Office général de statistique du Vietnam (GSO), recensement 2019",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Vietnam",
  points: [
    { label: "Sans religion déclarée (dont religion populaire)", sharePercent: 86.32 },
    { label: "Catholicisme", sharePercent: 6.1 },
    { label: "Bouddhisme", sharePercent: 4.79 },
    { label: "Hòa Hảo", sharePercent: 1.02 },
    { label: "Protestantisme", sharePercent: 1.0 },
    { label: "Caodaïsme", sharePercent: 0.58 },
    { label: "Autres", sharePercent: 0.19 },
  ],
  summary:
    "La grande majorité des Vietnamiens ne se déclare membre d'aucune religion organisée, mais pratique le culte des ancêtres, présent dans presque tous les foyers, et une religion populaire mêlant bouddhisme mahayana, confucianisme et taoïsme. Le catholicisme, implanté par les missionnaires à partir du XVIIe siècle, rassemble environ 6 millions de fidèles. Deux religions nées au XXe siècle dans le delta du Mékong, le caodaïsme et le bouddhisme Hòa Hảo, y restent influentes. L'État contrôle les cultes par l'enregistrement obligatoire des organisations religieuses.",
  methodologyNote:
    "Le recensement ne compte que les fidèles des 16 religions officiellement reconnues : la religion populaire et le culte des ancêtres sont classés « sans religion », ce qui sous-estime fortement la pratique bouddhiste réelle.",
};
