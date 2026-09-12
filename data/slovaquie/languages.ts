import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Slovaque",
      kind: "officielle",
      sharePercent: {
        value: 81.8,
        unit: "%",
        year: 2021,
        source: "Štatistický úrad SR, recensement 2021",
        sourceUrl: "https://www.scitanie.sk/en",
        note: "Part de la population ayant déclaré le slovaque comme langue maternelle.",
      },
      note: "Langue officielle, langue slave occidentale proche du tchèque, avec lequel elle reste largement intercompréhensible.",
    },
    {
      name: "Hongrois",
      kind: "régionale",
      sharePercent: {
        value: 7.75,
        unit: "%",
        year: 2021,
        source: "Štatistický úrad SR, recensement 2021",
        sourceUrl: "https://www.scitanie.sk/en",
        note: "Part de la population ayant déclaré la nationalité hongroise ; la langue bénéficie d'un statut co-officiel local dans les communes du sud du pays où la minorité hongroise dépasse 20 % des habitants.",
      },
      note: "Minorité nationale historique concentrée dans les districts frontaliers du sud, héritage du tracé de la frontière fixé après 1918-1920.",
    },
    {
      name: "Romani",
      kind: "parlée",
      sharePercent: {
        value: 1.8,
        unit: "%",
        year: 2021,
        source: "Štatistický úrad SR, recensement 2021",
        sourceUrl: "https://www.scitanie.sk/en",
        note: "Part de la population ayant déclaré le romani comme langue maternelle ; la population rom réelle est estimée nettement plus élevée par d'autres méthodes de recensement.",
      },
      note: "Langue de la communauté rom, souvent sous-déclarée dans les recensements par nationalité.",
    },
    {
      name: "Ruthène (rusyn), ukrainien, tchèque",
      kind: "parlée",
      note: "Langues d'autres minorités nationales reconnues, concentrées notamment dans les régions montagneuses du nord-est.",
    },
    {
      name: "Anglais, allemand",
      kind: "parlée",
      note: "Langues étrangères les plus enseignées, en particulier chez les jeunes générations.",
    },
  ],
  summary:
    "Le slovaque, langue slave occidentale proche du tchèque, est la langue maternelle de plus de quatre habitants sur cinq. La minorité hongroise, concentrée dans les districts du sud frontaliers de la Hongrie, constitue la principale minorité linguistique du pays et bénéficie d'un statut de co-officialité locale dans les communes où elle est fortement représentée ; les communautés rom, ruthène et ukrainienne complètent le paysage linguistique.",
};
