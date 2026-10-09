import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 1.5,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=BD",
    note: "Part des énergies renouvelables dans la production électrique, qui repose surtout sur le gaz naturel, le fioul et, de plus en plus, le charbon importé. Le premier réacteur de la centrale nucléaire de Rooppur, construite par la Russie, est en cours de mise en service en 2026.",
  },
  co2PerCapita: {
    value: 0.72,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=BD",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 14.4, unit: "% du territoire", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=BD" },
    },
  ],
  risks: ["Cyclones et ondes de tempête", "Inondations de mousson", "Érosion des berges", "Montée du niveau de la mer et salinisation des terres"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/bangladesh" },
  summary:
    "Le Bangladesh est l'un des pays les plus exposés au changement climatique : une montée d'un mètre du niveau de la mer submergerait près d'un cinquième de son territoire. Le cyclone de Bhola, en 1970, a fait au moins 300 000 morts ; depuis, un réseau d'abris et d'alertes a réduit le bilan des tempêtes à quelques dizaines de victimes. Les Sundarbans, inscrits au patrimoine mondial, abritent des tigres du Bengale et protègent la côte. L'air de Dacca est l'un des plus pollués du monde, et l'arsenic naturellement présent dans les nappes souterraines contamine l'eau de millions de puits.",
};
