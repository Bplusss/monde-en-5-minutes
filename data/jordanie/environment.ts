import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 24.9,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=JO",
    note: "Part des énergies renouvelables dans la production électrique, presque entièrement solaire et éolienne, partie de presque rien en 2014 ; le reste provient du gaz naturel importé.",
  },
  co2PerCapita: {
    value: 2.09,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=JO",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 1.1, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=JO" },
    },
  ],
  risks: ["Pénurie d'eau et sécheresses", "Crues éclair", "Séismes le long du rift du Jourdain", "Tempêtes de sable", "Désertification"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/jordan" },
  summary:
    "La Jordanie est l'un des pays du monde les plus pauvres en eau : les nappes souterraines sont surexploitées, et le Jourdain, détourné en amont par Israël et la Syrie, n'est plus qu'un mince filet. La mer Morte, privée de ses apports, baisse d'environ un mètre par an. Pour y faire face, le pays construit une grande usine de dessalement à Aqaba, reliée à Amman par un aqueduc de plus de 400 km. Les crues éclair sont un danger dans les canyons, comme à Petra et près de la mer Morte, où une inondation a coûté la vie à 21 personnes, dont des écoliers, en 2018.",
};
