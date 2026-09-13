import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "L'Inde est une fédération de 28 États et 8 territoires de l'Union, ces derniers administrés directement (en tout ou partie) par le gouvernement central plutôt que par un gouvernement d'État de plein exercice. Le cas le plus sensible concerne l'ancien État princier du Jammu-et-Cachemire, disputé depuis 1947 entre l'Inde, le Pakistan et, pour une portion, la Chine, et réorganisé en 2019 en deux territoires de l'Union. L'Inde n'a par ailleurs aucun territoire situé hors du sous-continent : les archipels des Andaman-et-Nicobar et de Lakshadweep, bien qu'éloignés du continent, sont des territoires de l'Union à part entière, comptés parmi les 36 subdivisions ci-dessous plutôt que comme territoires d'outre-mer distincts.",
  divisions: [
    { name: "États", count: 28, source: "Gouvernement de l'Inde", sourceUrl: "https://en.wikipedia.org/wiki/States_and_union_territories_of_India" },
    { name: "Territoires de l'Union", count: 8, note: "Dont Delhi (capitale nationale), le Jammu-et-Cachemire et le Ladakh, les îles Andaman-et-Nicobar et Lakshadweep.", source: "Gouvernement de l'Inde", sourceUrl: "https://en.wikipedia.org/wiki/States_and_union_territories_of_India" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};

/**
 * Note sur le Cachemire (non modélisée comme `OverseasTerritory`, le différend
 * portant sur des territoires déjà comptés dans `regions` — Jammu-et-Cachemire
 * et Ladakh) : l'ancien État princier du Jammu-et-Cachemire est disputé depuis
 * 1947-1948 entre l'Inde, le Pakistan et la Chine. L'Inde en administre la
 * portion la plus vaste et la plus peuplée (vallée du Cachemire, Jammu, la
 * majeure partie du Ladakh) ; le Pakistan administre l'Azad Cachemire et le
 * Gilgit-Baltistan, à l'ouest et au nord ; la Chine administre l'Aksai Chin,
 * à l'est, également revendiqué par l'Inde. Une ligne de contrôle (LoC),
 * issue du cessez-le-feu de la guerre indo-pakistanaise de 1947-1948, sépare
 * de facto les zones sous administration indienne et pakistanaise, sans
 * qu'aucune des parties ne renonce à ses revendications sur l'ensemble du
 * territoire. Le 5 août 2019, le gouvernement indien a révoqué le statut
 * d'autonomie spéciale (article 370 de la Constitution) dont bénéficiait
 * l'État indien du Jammu-et-Cachemire, puis l'a réorganisé, à compter du
 * 31 octobre 2019, en deux territoires de l'Union administrés directement
 * par New Delhi : le Jammu-et-Cachemire et le Ladakh. Cette réorganisation
 * administrative est un fait vérifiable et daté ; la question de la
 * souveraineté sur l'ensemble du territoire reste, elle, un différend
 * international non tranché entre les parties. Par ailleurs, une partie de
 * l'Arunachal Pradesh (à l'est) est revendiquée par la Chine, qui la désigne
 * sous le nom de « Tibet du Sud », sans remise en cause de l'administration
 * indienne effective.
 */
