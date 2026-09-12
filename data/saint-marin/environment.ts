import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 12.0,
    unit: "%",
    year: 2025,
    source: "AASS (Azienda Autonoma di Stato per i Servizi Pubblici) / PV Magazine",
    sourceUrl: "https://www.pv-magazine.com/2026/05/25/san-marino-launches-solar-acquisition-program/",
    note: "Part du solaire photovoltaïque dans la consommation électrique annuelle au 31 décembre 2025 ; le plan énergétique national vise 15 % de production domestique d'ici 2027.",
  },
  co2PerCapita: {
    value: 5.19,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas / Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
    note: "Saint-Marin n'étant pas isolé dans la plupart des inventaires internationaux de CO₂, cette valeur correspond au chiffre combiné publié pour l'Italie, Saint-Marin et la Cité du Vatican, comptabilisés ensemble faute de données propres à ce micro-État.",
  },
  indicators: [],
  risks: ["Risque sismique (zone des Apennins)", "Vagues de chaleur estivales", "Dépendance énergétique quasi totale vis-à-vis de l'Italie"],
  risksSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/San_Marino" },
  summary:
    "Entièrement dépourvu de production fossile et sans réseau hydraulique significatif, Saint-Marin importe l'essentiel de son électricité d'Italie ; le développement du solaire photovoltaïque, encore marginal, doit progressivement réduire cette dépendance dans le cadre du plan énergétique national 2023-2026. Situé dans une zone sismiquement active des Apennins, le pays partage par ailleurs les risques naturels de sa région italienne d'implantation, l'Émilie-Romagne.",
};
