import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Estonien",
      kind: "officielle",
      sharePercent: {
        value: 68.7,
        unit: "%",
        year: 2021,
        source: "Statistikaamet, recensement 2021",
        sourceUrl: "https://www.stat.ee/en/find-statistics/statistics-theme/population/languages",
        note: "Part de la population ayant déclaré l'estonien comme langue maternelle.",
      },
      note: "Langue officielle unique, appartenant à la famille finno-ougrienne, proche du finnois.",
    },
    {
      name: "Russe",
      kind: "parlée",
      sharePercent: {
        value: 29.6,
        unit: "%",
        year: 2021,
        source: "Statistikaamet, recensement 2021",
        sourceUrl: "https://www.stat.ee/en/find-statistics/statistics-theme/population/languages",
      },
      note: "Langue maternelle de la minorité russophone, très majoritaire dans le nord-est industriel (Ida-Viru) et présente à Tallinn ; sans statut officiel malgré son usage répandu.",
    },
    {
      name: "Võro, seto",
      kind: "régionale",
      note: "Parlers du sud-est du pays, apparentés à l'estonien, dont la reconnaissance et la préservation font l'objet de politiques régionales spécifiques.",
    },
    {
      name: "Anglais, finnois",
      kind: "parlée",
      note: "Langues étrangères les plus largement pratiquées, en particulier chez les jeunes générations et dans les échanges avec la Finlande voisine.",
    },
  ],
  summary:
    "L'estonien, seule langue officielle, est parlé nativement par un peu plus des deux tiers de la population. La minorité russophone, héritée des migrations de la période soviétique, représente près de 30 % des habitants et reste concentrée dans le nord-est du pays (bassin industriel d'Ida-Viru) et à Tallinn, posant un enjeu durable d'intégration linguistique.",
};
