import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 100,
    unit: "%",
    year: 2023,
    source: "Orkustofnun (Office national de l'énergie d'Islande)",
    sourceUrl: "https://orkustofnun.is/",
    note: "Électricité produite à environ 70 % par l'hydroélectricité et 30 % par la géothermie ; le chauffage urbain, quasi entièrement géothermique, dessert environ 90 % des foyers.",
  },
  co2PerCapita: {
    value: 6.4,
    unit: "t",
    year: 2022,
    source: "Global Carbon Atlas",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
    note: "Émissions relativement élevées pour un pays 100 % électricité renouvelable, tirées par les fonderies d'aluminium énergivores et la flotte de pêche.",
  },
  indicators: [
    {
      label: "Part de la géothermie dans l'énergie primaire",
      value: { value: 65.0, unit: "%", year: 2023, source: "Orkustofnun", sourceUrl: "https://orkustofnun.is/" },
    },
  ],
  risks: ["Éruptions volcaniques", "Séismes", "Crues glaciaires (jökulhlaup)", "Tempêtes hivernales"],
  risksSource: { source: "Office météorologique islandais (Veðurstofa Íslands)", sourceUrl: "https://en.vedur.is/" },
  summary:
    "Grâce à d'abondantes ressources hydroélectriques et géothermiques, l'Islande produit la totalité de son électricité et l'essentiel de son chauffage sans combustibles fossiles — une situation quasi unique au monde. L'activité volcanique intense qui rend cette abondance énergétique possible expose en retour le pays à des éruptions fréquentes, à des séismes et à des crues glaciaires soudaines (jökulhlaup) provoquées par la fonte rapide de glace sous l'effet d'une éruption.",
};
