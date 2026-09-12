import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 26.7,
    unit: "%",
    year: 2024,
    source: "Institute for Sustainable Energy Policies (ISEP)",
    sourceUrl: "https://www.isep.or.jp/en/",
    note: "Part des renouvelables dans la production électrique (solaire 11,4 %, hydraulique 7,9 %, biomasse 5,9 %, éolien 1,1 %), en progression continue depuis le lancement d'un tarif de rachat garanti en 2012.",
  },
  co2PerCapita: {
    value: 7.54,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas / Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
    note: "En recul de plus de 20 % depuis 2000, mais tiré vers le haut par une production électrique restée très dépendante du charbon et du gaz depuis l'arrêt du parc nucléaire après 2011.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 66.7, unit: "%", source: "Wikipedia (foresterie au Japon)", sourceUrl: "https://en.wikipedia.org/wiki/Forestry_in_Japan", note: "Environ les deux tiers du territoire, l'un des taux de boisement les plus élevés des pays développés." },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 8.2, unit: "%", year: 2024, source: "Institute for Sustainable Energy Policies (ISEP)", sourceUrl: "https://www.isep.or.jp/en/" },
    },
  ],
  risks: ["Séismes et tsunamis", "Éruptions volcaniques (111 volcans actifs)", "Typhons et inondations", "Coulées de boue et glissements de terrain"],
  risksSource: { source: "Agence météorologique du Japon (JMA)", sourceUrl: "https://www.jma.go.jp/jma/indexe.html" },
  summary:
    "Le nucléaire fournissait environ 30 % de l'électricité japonaise avant l'accident de Fukushima Daiichi en mars 2011 ; la quasi-totalité des réacteurs a ensuite été mise à l'arrêt, ramenant la part du nucléaire à zéro dès 2012, avant une lente remontée à mesure que certains réacteurs redémarrent sous des normes de sûreté renforcées — environ 8,2 % en 2024, avec un objectif gouvernemental de 20 à 22 % à l'horizon 2030. Situé sur la ceinture de feu du Pacifique, le Japon reste par ailleurs l'un des pays du monde les plus exposés aux risques naturels — séismes, tsunamis, éruptions volcaniques et typhons —, ce qui explique des normes de construction parasismique et des dispositifs d'alerte parmi les plus avancés au monde.",
};
