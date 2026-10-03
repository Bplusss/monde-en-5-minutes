import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Statistical Abstract of Israel (population par religion)",
  year: 2023,
  ageScope: "Population totale (périmètre du CBS)",
  source: "Bureau central des statistiques d'Israël (CBS), via Wikipedia",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Israel",
  points: [
    { label: "Judaïsme", sharePercent: 73.7 },
    { label: "Islam (sunnite)", sharePercent: 18.3 },
    { label: "Christianisme", sharePercent: 1.9 },
    { label: "Religion druze", sharePercent: 1.6 },
    { label: "Sans classification religieuse", sharePercent: 4.5 },
  ],
  summary:
    "Israël se définit comme l'État-nation du peuple juif, sans religion d'État formelle, mais le mariage et le divorce relèvent des tribunaux religieux de chaque communauté (rabbinat orthodoxe pour les Juifs), faute de mariage civil. Parmi les Juifs adultes, environ 45 % se disent laïcs, les autres traditionalistes, religieux ou ultra-orthodoxes.",
  methodologyNote:
    "Classification du registre de la population, sur le périmètre du CBS (Jérusalem-Est, Golan et colonies de Cisjordanie inclus). La catégorie « sans classification » regroupe surtout des immigrants de l'ex-URSS non reconnus comme juifs par le rabbinat. La répartition laïcs/religieux provient des enquêtes sociales du CBS.",
};
