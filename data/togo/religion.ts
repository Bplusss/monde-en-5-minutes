import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "5ᵉ recensement général de la population et de l'habitat (RGPH-5)",
  year: 2022,
  ageScope: "Population totale ayant déclaré une appartenance",
  source: "INSEED / Division de statistique des Nations unies (UNdata)",
  sourceUrl: "https://data.un.org/Data.aspx?d=POP&f=tableCode%3A28",
  points: [
    { label: "Chrétiens", sharePercent: 49.2 },
    { label: "Musulmans", sharePercent: 18.6 },
    { label: "Religions traditionnelles (animisme, vodun...)", sharePercent: 17.0 },
    { label: "Sans religion", sharePercent: 9.4 },
    { label: "Autres / non déclaré", sharePercent: 5.8 },
  ],
  summary:
    "Le Togo est religieusement mixte, avec une majorité chrétienne (catholiques et protestants notamment) concentrée surtout au sud, une minorité musulmane plus présente au centre et au nord, et une part significative de la population qui suit des religions traditionnelles, en particulier le vodun (vaudou), dont la région côtière togolaise et ses environs (avec le Bénin et le Ghana voisins) constituent l'un des berceaux historiques. Dans la pratique, ces frontières sont poreuses : de nombreux Togolais chrétiens ou musulmans conservent des pratiques ou croyances issues des religions traditionnelles.",
  methodologyNote:
    "Données issues du recensement général de la population de 2022 (RGPH-5), les plus récentes disponibles à l'échelle nationale.",
};
