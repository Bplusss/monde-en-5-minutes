import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 87.0,
    unit: "%",
    year: 2024,
    source: "Empresa de Pesquisa Energética (EPE) / Agence internationale de l'énergie",
    sourceUrl: "https://www.iea.org/countries/brazil",
    note: "Part des renouvelables (hydroélectricité, éolien, solaire, biomasse) dans la production électrique — l'une des plus élevées du monde pour un grand pays industrialisé, grâce à la prépondérance de l'hydroélectricité.",
  },
  co2PerCapita: {
    value: 2.3,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Très inférieur à la moyenne des grandes économies grâce à un mix électrique largement décarboné ; les émissions totales du pays sont en revanche nettement plus élevées si l'on inclut le changement d'usage des sols lié à la déforestation.",
  },
  indicators: [
    {
      label: "Part de l'hydroélectricité dans l'électricité",
      value: {
        value: 56.0,
        unit: "%",
        year: 2024,
        source: "World Nuclear Association",
        sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-a-f/brazil",
      },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 2.0,
        unit: "%",
        year: 2024,
        source: "World Nuclear Association",
        sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-a-f/brazil",
        note: "Faible non pas parce que le nucléaire serait en repli, mais parce que l'hydroélectricité domine très largement le mix électrique brésilien ; les deux réacteurs d'Angra dos Reis (Angra 1 et 2) en sont l'unique source, un troisième (Angra 3) étant en construction très prolongée depuis les années 1980.",
      },
    },
    {
      label: "Déforestation annuelle en Amazonie légale (PRODES)",
      value: {
        value: 6_288,
        unit: "km²",
        year: 2024,
        source: "INPE (Instituto Nacional de Pesquisas Espaciais)",
        sourceUrl: "https://www.gov.br/inpe/pt-br",
        note: "En baisse de plus de 30 % sur un an et au plus bas depuis 2015, après un pic de près de 27 800 km² en 2004 ; l'INPE assure ce suivi par satellite via les systèmes PRODES (bilan annuel) et DETER (alertes en temps quasi réel).",
      },
    },
  ],
  risks: ["Sécheresses (Nordeste et bassin amazonien)", "Inondations et glissements de terrain (Sud-Est)", "Incendies de forêt (Amazonie, Pantanal, Cerrado)"],
  risksSource: { source: "INPE / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Brazil" },
  summary:
    "Grâce à la prépondérance de l'hydroélectricité — plus de la moitié de sa production électrique —, le Brésil affiche un mix électrique très largement décarboné et un taux d'émissions de CO₂ par habitant parmi les plus bas des grandes économies. Le nucléaire, avec les deux réacteurs de la centrale d'Angra dos Reis, n'y joue donc qu'un rôle d'appoint marginal, sa faible part reflétant la domination de l'hydroélectricité plutôt qu'un retrait de la filière. L'enjeu environnemental le plus documenté reste la déforestation de l'Amazonie, suivie annuellement par satellite par l'INPE : après un pic en 2004 et une nouvelle hausse entre 2019 et 2022, elle a nettement reculé en 2023 et 2024 pour revenir à son niveau le plus bas depuis près d'une décennie, sans que la tendance de long terme soit à ce jour stabilisée.",
};
