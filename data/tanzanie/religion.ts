import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Global Religious Landscape (estimations)",
  year: 2010,
  ageScope: "Population totale",
  source: "Pew Research Center",
  sourceUrl: "https://www.pewresearch.org/religion/2012/12/18/global-religious-landscape-exec/",
  points: [
    { label: "Christianisme", sharePercent: 61.4 },
    { label: "Islam", sharePercent: 35.2 },
    { label: "Religions traditionnelles", sharePercent: 1.8 },
    { label: "Sans religion", sharePercent: 1.4 },
    { label: "Autres religions", sharePercent: 0.2 },
  ],
  summary:
    "Le christianisme, catholique, luthérien, anglican ou évangélique, est majoritaire sur le continent, où il s'est diffusé avec les missions du XIXe siècle. L'islam, présent sur la côte depuis le Moyen Âge, est la religion de la quasi-totalité des habitants de Zanzibar et d'une grande partie de la côte. Les fêtes chrétiennes et musulmanes sont toutes jours fériés, et une règle non écrite veut que la présidence alterne entre un chrétien et un musulman. Les croyances traditionnelles persistent, parfois mêlées aux grandes religions.",
  methodologyNote:
    "Le recensement ne pose plus de question sur la religion depuis 1967 : les proportions sont des estimations, qui varient selon les sources.",
};
