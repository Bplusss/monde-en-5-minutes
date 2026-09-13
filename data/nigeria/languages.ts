import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Anglais",
      kind: "officielle",
      note: "Langue officielle unique de l'État fédéral, héritée de la colonisation britannique ; langue de l'administration, de l'enseignement supérieur et des médias nationaux.",
    },
    {
      name: "Haoussa",
      kind: "régionale",
      sharePercent: { value: 25, unit: "% de la population", source: "Ethnologue", sourceUrl: "https://www.ethnologue.com/country/NG/", note: "Estimation ; parlée comme langue première ou seconde, y compris comme lingua franca dans une grande partie du nord." },
      note: "Reconnue par la Constitution comme langue pouvant être utilisée à l'Assemblée nationale ; dominante dans le nord et au Sahel ouest-africain au-delà des frontières nigérianes.",
    },
    {
      name: "Yoruba",
      kind: "régionale",
      sharePercent: { value: 21, unit: "% de la population", source: "Ethnologue", sourceUrl: "https://www.ethnologue.com/country/NG/", note: "Estimation." },
      note: "Langue du sud-ouest, également reconnue par la Constitution à l'Assemblée nationale.",
    },
    {
      name: "Igbo",
      kind: "régionale",
      sharePercent: { value: 18, unit: "% de la population", source: "Ethnologue", sourceUrl: "https://www.ethnologue.com/country/NG/", note: "Estimation." },
      note: "Langue du sud-est (ancienne Région orientale, cœur du territoire biafrais de 1967-1970), également reconnue à l'Assemblée nationale.",
    },
    {
      name: "Pidgin nigérian",
      kind: "parlée",
      note: "Créole à base lexicale anglaise, lingua franca informelle la plus répandue du pays, utilisée au quotidien et de plus en plus dans les médias (BBC Pidgin) et la musique, bien que sans statut officiel.",
    },
    {
      name: "Autres langues nigéro-congolaises et tchadiques",
      kind: "parlée",
      note: "Le Nigeria compte plus de 500 langues vivantes recensées (Fulfuldé/peul, Kanouri, Ijaw, Tiv, Ibibio, Edo...), l'une des diversités linguistiques les plus élevées au monde.",
    },
  ],
  summary:
    "Seul l'anglais est langue officielle au niveau fédéral, choix hérité de la période coloniale destiné à unifier administrativement un pays d'une exceptionnelle diversité linguistique : plus de 500 langues y sont recensées, ce qui en fait l'un des pays les plus plurilingues du monde. Trois langues dominent néanmoins largement en nombre de locuteurs et bénéficient d'une reconnaissance constitutionnelle particulière (usage possible à l'Assemblée nationale) : le haoussa dans le nord à majorité musulmane, le yoruba dans le sud-ouest et l'igbo dans le sud-est. Le pidgin nigérian, créole à base d'anglais né dans les zones portuaires et pétrolières, s'est imposé comme la véritable langue vernaculaire interethnique du pays, parlé quotidiennement par des dizaines de millions de personnes sans statut officiel.",
};
