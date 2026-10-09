import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et de l'habitat 2022",
  year: 2022,
  ageScope: "Population totale",
  source: "Bangladesh Bureau of Statistics",
  sourceUrl: "https://bbs.gov.bd/",
  points: [
    { label: "Islam", sharePercent: 91.04 },
    { label: "Hindouisme", sharePercent: 7.95 },
    { label: "Bouddhisme", sharePercent: 0.61 },
    { label: "Christianisme", sharePercent: 0.3 },
    { label: "Autres religions", sharePercent: 0.12 },
  ],
  summary:
    "L'islam, diffusé au Bengale par les soufis et les sultans à partir du XIIIe siècle, est religion d'État depuis 1988, mais la Constitution garantit aussi la laïcité et l'égalité des religions. Les musulmans, presque tous sunnites, forment l'une des plus grandes communautés musulmanes du monde. La part des hindous a fortement baissé depuis la partition de 1947, sous l'effet de vagues successives d'émigration vers l'Inde ; ils restent nombreux dans le Sud-Ouest et le Nord. Les bouddhistes vivent surtout dans les Chittagong Hill Tracts.",
  methodologyNote:
    "Religion déclarée lors du recensement de 2022 ; les pourcentages portent sur la population dénombrée, avant l'ajustement de couverture.",
};
