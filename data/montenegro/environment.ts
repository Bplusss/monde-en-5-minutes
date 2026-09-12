import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 39.6,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=ME",
    note: "Le Monténégro n'a aucune centrale nucléaire ; sa production renouvelable repose presque entièrement sur l'hydroélectricité (barrages de Perućica et de Piva), complétée depuis les années 2020 par les premiers parcs éoliens.",
  },
  co2PerCapita: {
    value: 3.72,
    unit: "t",
    year: 2024,
    source: "Global Carbon Project (Our World in Data)",
    sourceUrl: "https://ourworldindata.org/co2/country/montenegro",
  },
  indicators: [
    {
      label: "Parcs nationaux",
      value: { value: 5, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/National_parks_of_Montenegro" },
    },
  ],
  risks: [
    "Sismicité active sur toute la zone côtière",
    "Incendies de forêt estivaux liés au climat méditerranéen",
    "Dépendance à la centrale à charbon de Pljevlja, qui fournit une large part de l'électricité produite dans le pays",
  ],
  risksSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Montenegro" },
  summary:
    "Grâce à l'hydroélectricité des barrages de Perućica et de Piva, le Monténégro affiche une part d'énergies renouvelables relativement élevée pour la région, encore renforcée depuis peu par ses premiers parcs éoliens et projets solaires. Il reste toutefois dépendant de la centrale à charbon de Pljevlja, seule centrale thermique du pays, pour une part importante de sa production, avec un objectif officiel de réduction progressive de son poids d'ici 2030. Le littoral adriatique, en zone sismique active, a notamment été frappé par un séisme meurtrier en 1979 ; les étés secs et chauds y favorisent par ailleurs les feux de forêt.",
};
