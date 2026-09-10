import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Tchèque",
      kind: "officielle",
      sharePercent: {
        value: 88.4,
        unit: "%",
        year: 2021,
        source: "ČSÚ, recensement 2021",
        sourceUrl: "https://www.czso.cz/csu/czso/population-by-mother-tongue",
        note: "Part de la population ayant déclaré le tchèque comme langue maternelle.",
      },
      note: "Langue officielle, langue slave occidentale très proche du slovaque, avec lequel elle reste largement intercompréhensible.",
    },
    {
      name: "Slovaque, polonais, allemand, romani",
      kind: "régionale",
      note: "Langues des minorités nationales historiques reconnues, dont les communautés slovaque (héritage de la Tchécoslovaquie) et polonaise, concentrée en Silésie tchèque près de la frontière polonaise.",
    },
    {
      name: "Ukrainien",
      kind: "parlée",
      note: "Communauté en forte croissance depuis 2022 avec l'arrivée de réfugiés fuyant l'invasion russe.",
    },
    {
      name: "Anglais, allemand",
      kind: "parlée",
      note: "Langues étrangères les plus enseignées, en particulier chez les jeunes générations.",
    },
  ],
  summary:
    "Le tchèque, langue slave occidentale proche du slovaque et du polonais, est parlé nativement par la grande majorité de la population. Les minorités historiques (slovaque, polonaise, allemande, rom) restent modestes en nombre, tandis que l'immigration récente — ukrainienne en particulier — a diversifié le paysage linguistique du pays depuis 2022.",
};
