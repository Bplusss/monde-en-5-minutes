import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Anglais",
      kind: "officielle",
      note: "Langue maternelle et véhiculaire de la grande majorité de la population, coofficielle avec l'irlandais.",
    },
    {
      name: "Irlandais (Gaeilge)",
      kind: "officielle",
      sharePercent: {
        value: 40.0,
        unit: "%",
        year: 2022,
        source: "CSO, recensement 2022",
        sourceUrl: "https://www.cso.ie/en/releasesandpublications/ep/p-cp9lgs/cp9lgs/il/",
        note: "Part de la population se déclarant capable de parler l'irlandais ; l'usage quotidien effectif hors cadre scolaire est beaucoup plus restreint (moins de 2 %).",
      },
      note: "Première langue officielle et nationale selon la Constitution, langue celtique enseignée à tous les élèves ; parlée quotidiennement surtout dans les Gaeltachtaí, zones officiellement irlandophones de la côte ouest.",
    },
    {
      name: "Polonais, ukrainien",
      kind: "parlée",
      note: "Langues des communautés immigrées les plus nombreuses.",
    },
  ],
  summary:
    "L'anglais est la langue de la vie quotidienne pour la quasi-totalité de la population, tandis que l'irlandais, première langue officielle selon la Constitution, reste enseigné à l'école mais n'est parlé au quotidien que par une minorité, concentrée dans les Gaeltachtaí du littoral occidental.",
};
