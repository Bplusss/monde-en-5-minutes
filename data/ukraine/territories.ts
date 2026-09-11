import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "L'Ukraine se divise officiellement en 24 oblasts, la République autonome de Crimée et deux villes à statut spécial (Kyiv et Sébastopol). La Crimée et Sébastopol, occupées et annexées unilatéralement par la Russie depuis 2014 sans reconnaissance internationale, ne disposent pas de géométrie cartographique côté ukrainien dans les sources utilisées ici et n'apparaissent donc pas sur la carte ci-dessous, qui représente les 24 oblasts et la ville de Kyiv. Depuis l'invasion de 2022, des portions supplémentaires des oblasts de Donetsk, Louhansk, Zaporijjia et Kherson sont également sous occupation militaire russe, sans que leurs limites administratives ukrainiennes n'aient changé.",
  divisions: [
    { name: "Oblasts", count: 24, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Oblasts_of_Ukraine" },
    { name: "Ville à statut spécial représentée sur la carte", count: 1, note: "Kyiv.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_divisions_of_Ukraine" },
    { name: "Territoires reconnus ukrainiens mais occupés, hors carte", count: 2, note: "République autonome de Crimée et ville de Sébastopol, annexées par la Russie en 2014.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Annexation_of_Crimea_by_the_Russian_Federation" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
