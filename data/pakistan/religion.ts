import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population",
  year: 2023,
  ageScope: "Population totale (quatre provinces et territoire de la capitale)",
  source: "Pakistan Bureau of Statistics (recensement 2023)",
  sourceUrl: "https://www.pbs.gov.pk/digital-census/detailed-results",
  points: [
    { label: "Islam", sharePercent: 96.35 },
    { label: "Hindouisme", sharePercent: 2.17 },
    { label: "Christianisme", sharePercent: 1.37 },
    { label: "Ahmadis", sharePercent: 0.07 },
    { label: "Autres religions", sharePercent: 0.04 },
  ],
  summary:
    "Créé en 1947 comme patrie des musulmans du sous-continent, le Pakistan est devenu en 1956 la première « république islamique » ; la Constitution fait de l'islam la religion d'État. Les sunnites sont largement majoritaires, avec une importante minorité chiite. Les hindous vivent surtout dans le Sind, les chrétiens au Pendjab. Les lois sur le blasphème, durcies dans les années 1980, sont régulièrement invoquées contre les minorités, et les ahmadis, déclarés non musulmans par une révision constitutionnelle de 1974, sont particulièrement discriminés.",
  methodologyNote:
    "Le recensement ne distingue pas sunnites et chiites ; la part des chiites est généralement estimée entre 10 et 15 % de la population. Le chiffre de l'hindouisme inclut les castes répertoriées, comptées à part par le recensement (0,56 %).",
};
