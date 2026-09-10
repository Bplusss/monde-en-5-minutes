import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Finnois",
      kind: "officielle",
      sharePercent: {
        value: 84.9,
        unit: "%",
        year: 2023,
        source: "Statistics Finland",
        sourceUrl: "https://stat.fi/en/statistics/vaerak",
        note: "Part de la population ayant déclaré le finnois comme langue maternelle.",
      },
      note: "Langue officielle majoritaire, appartenant à la famille finno-ougrienne comme l'estonien et, plus lointainement, le hongrois.",
    },
    {
      name: "Suédois",
      kind: "officielle",
      sharePercent: {
        value: 5.1,
        unit: "%",
        year: 2023,
        source: "Statistics Finland",
        sourceUrl: "https://stat.fi/en/statistics/vaerak",
      },
      note: "Seconde langue officielle nationale, coofficielle avec le finnois ; langue maternelle de la minorité suédophone historique, concentrée sur la côte ouest et seule langue officielle des îles Åland.",
    },
    {
      name: "Same (sami)",
      kind: "régionale",
      note: "Langues indigènes reconnues, parlées par la minorité same de Laponie ; statut officiel local dans les communes du territoire same.",
    },
    {
      name: "Russe, ukrainien",
      kind: "parlée",
      note: "Langues des communautés immigrées les plus nombreuses, en croissance depuis 2022.",
    },
  ],
  summary:
    "Le finnois et le suédois sont tous deux langues officielles nationales, un héritage de plusieurs siècles de domination suédoise puis de statut particulier accordé à la minorité suédophone, aujourd'hui concentrée sur la côte ouest et aux îles Åland, entièrement suédophones. Les langues sames, parlées par le peuple autochtone du nord, bénéficient d'une reconnaissance officielle locale en Laponie.",
};
