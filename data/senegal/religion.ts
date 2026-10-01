import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimation CIA World Factbook (via Wikipedia)",
  year: 2019,
  ageScope: "Population totale",
  source: "Wikipedia (CIA World Factbook)",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Senegal",
  points: [
    { label: "Islam (sunnite, très majoritairement soufi)", sharePercent: 97.2 },
    { label: "Christianisme (surtout catholique)", sharePercent: 2.7 },
    { label: "Autres", sharePercent: 0.1 },
  ],
  summary:
    "L'islam, présent depuis le XIe siècle, est la religion de l'immense majorité des Sénégalais. Il s'organise autour de confréries soufies : la Tijaniyya (principal centre à Tivaouane), la Mouridiyya fondée par Cheikh Ahmadou Bamba (Touba), la Qadiriyya et les Layènes. Leurs guides, les marabouts, exercent une influence sociale et politique importante. La minorité catholique est surtout présente chez les Sérères et les Diolas. L'État est laïc selon la Constitution, et la coexistence interreligieuse est souvent citée en exemple : Léopold Sédar Senghor, premier président d'un pays très majoritairement musulman, était catholique.",
  methodologyNote:
    "Le recensement ne publie pas de répartition religieuse récente. Les estimations varient : environ 97 % de musulmans selon la CIA (2019), contre 89 % de musulmans et 10 % de chrétiens selon le Pew Research Center (2010). Des pratiques religieuses traditionnelles persistent, souvent mêlées à l'islam ou au christianisme.",
};
