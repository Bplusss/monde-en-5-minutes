import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Fédération de Russie se compose de 83 sujets fédéraux internationalement reconnus — 21 républiques (dotées chacune de leur propre constitution et souvent d'une langue co-officielle), 9 kraïs, 46 oblasts, 1 oblast autonome et 4 okrugs autonomes, plus deux villes fédérales (Moscou, Saint-Pétersbourg). L'oblast de Kaliningrad, sur la Baltique, forme une exclave russe séparée du reste du pays par la Lituanie et la Pologne — un cas comparable au Svalbard norvégien — et fait l'objet d'un traitement cartographique distinct ci-dessous. La République de Crimée et la ville de Sébastopol, annexées unilatéralement par la Russie en 2014 mais internationalement reconnues comme territoire ukrainien, ainsi que quatre oblasts ukrainiens (Donetsk, Louhansk, Zaporijjia, Kherson) que la Russie prétend avoir annexés en septembre 2022 sans les contrôler entièrement, ne sont pas représentés comme territoire russe dans ce jeu de données, à l'identique du traitement retenu côté ukrainien (voir data/ukraine/territories.ts).",
  divisions: [
    { name: "Sujets fédéraux (total reconnu)", count: 83, note: "21 républiques, 9 kraïs, 46 oblasts, 2 villes fédérales (Moscou, Saint-Pétersbourg), 1 oblast autonome et 4 okrugs autonomes.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Federal_subjects_of_Russia" },
    { name: "Territoires revendiqués par la Russie mais non reconnus internationalement, hors carte", count: 6, note: "République de Crimée, ville de Sébastopol (annexées en 2014) et les oblasts de Donetsk, Louhansk, Zaporijjia et Kherson (annexion unilatérale proclamée en septembre 2022, sans contrôle territorial complet) — tous considérés comme territoire ukrainien par la quasi-totalité de la communauté internationale.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Annexation_of_Crimea_by_the_Russian_Federation" },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/russie-overseas.json",
  overseas: [
    {
      name: "Kaliningrad",
      status: "Oblast russe à part entière (pas un territoire à statut particulier), mais géographiquement une exclave séparée du reste de la Russie par la Lituanie et la Pologne. Ancien territoire allemand (Königsberg), annexé par l'URSS en 1945 après l'expulsion de sa population allemande. Fortement militarisée (siège de la flotte russe de la Baltique, unités susceptibles de porter des armes nucléaires tactiques), l'exclave est une préoccupation stratégique récurrente pour l'OTAN depuis l'adhésion de la Lituanie et de la Pologne, en particulier via le « corridor de Suwałki » qui relie la Pologne aux pays baltes.",
      population: {
        value: 1_064_747,
        year: 2025,
        source: "Rosstat, estimation préliminaire au 1er janvier 2025",
        sourceUrl: "https://en.wikipedia.org/wiki/Kaliningrad_Oblast",
      },
      mapGroupId: "kaliningrad",
    },
  ],
};
