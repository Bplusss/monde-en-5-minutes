import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Fédération de Russie compte 83 sujets fédéraux internationalement reconnus, dont 21 républiques dotées de leur propre constitution. L'exclave de Kaliningrad, séparée du reste du pays par la Lituanie et la Pologne, est cartographiée à part. La Crimée, Sébastopol et les quatre oblasts ukrainiens dont la Russie a proclamé l'annexion en 2022 ne sont pas représentés comme territoire russe, comme côté ukrainien.",
  divisions: [
    { name: "Sujets fédéraux (total reconnu)", count: 83, note: "21 républiques, 9 kraïs, 46 oblasts, 2 villes fédérales (Moscou, Saint-Pétersbourg), 1 oblast autonome et 4 okrugs autonomes.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Federal_subjects_of_Russia" },
    { name: "Territoires revendiqués par la Russie mais non reconnus internationalement, hors carte", count: 6, note: "Crimée et Sébastopol (annexées en 2014), oblasts de Donetsk, Louhansk, Zaporijjia et Kherson (annexion proclamée en septembre 2022) — territoire ukrainien pour la quasi-totalité de la communauté internationale.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Annexation_of_Crimea_by_the_Russian_Federation" },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/russie-overseas.json",
  overseas: [
    {
      name: "Kaliningrad",
      status: "Oblast russe à part entière, mais exclave séparée du reste de la Russie par la Lituanie et la Pologne. Ancienne Königsberg allemande, annexée par l'URSS en 1945. Siège de la flotte de la Baltique et très militarisée, elle préoccupe l'OTAN, notamment autour du « corridor de Suwałki ».",
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
