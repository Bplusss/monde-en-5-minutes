import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement général de la population et de l'habitat (RGPH 2021)",
  year: 2021,
  ageScope: "Population totale",
  source: "Institut national de la statistique (INS), cité par le Département d'État américain (rapport sur la liberté religieuse)",
  sourceUrl: "https://www.ecoi.net/en/document/2073995.html",
  points: [
    { label: "Islam", sharePercent: 42.5 },
    { label: "Christianisme (catholiques, évangéliques, méthodistes…)", sharePercent: 39.8 },
    { label: "Sans religion", sharePercent: 12.6 },
    { label: "Religions traditionnelles (animisme)", sharePercent: 2.2 },
    { label: "Autres / non déclaré", sharePercent: 2.9 },
  ],
  summary:
    "La Côte d'Ivoire est un pays religieusement partagé, sans religion d'État. L'islam, majoritairement sunnite, est surtout présent dans le nord et parmi les populations d'origine sahélienne ; le christianisme, catholique et de plus en plus évangélique, domine dans le sud et le centre. La basilique Notre-Dame-de-la-Paix de Yamoussoukro, consacrée par le pape Jean-Paul II en 1990, est l'un des plus grands édifices chrétiens du monde. La coexistence est généralement paisible, même si l'appartenance religieuse a recoupé les clivages régionaux et politiques lors des crises des années 2000.",
  methodologyNote:
    "Répartition issue du recensement de 2021, qui porte sur l'ensemble des résidents, y compris les étrangers (22 % de la population), majoritairement musulmans. Le reliquat « autres / non déclaré » est calculé par différence. Une part notable des croyants combine pratiques chrétiennes ou musulmanes et croyances traditionnelles.",
};
