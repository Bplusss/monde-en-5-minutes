import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 17.0,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=MY",
    note: "Part des énergies renouvelables dans la production électrique, surtout l'hydraulique du Sarawak ; le gaz et le charbon fournissent l'essentiel du reste.",
  },
  co2PerCapita: {
    value: 8.32,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=MY",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 57.7, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=MY" },
    },
  ],
  risks: ["Inondations de mousson", "Glissements de terrain", "Brumes de fumée (« haze ») venues des incendies indonésiens", "Déforestation et érosion côtière"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/malaysia" },
  summary:
    "La Malaisie fait partie des dix-sept pays « mégadivers » : ses forêts tropicales abritent orangs-outans, éléphants pygmées de Bornéo, tigres de Malaisie et la rafflésie, plus grande fleur du monde. Mais elles ont beaucoup reculé depuis les années 1970, en particulier au Sarawak et au Sabah, au profit de l'exploitation forestière et des plantations de palmiers à huile. Chaque fin d'année, la mousson provoque des inondations, comme celles de décembre 2021 qui ont touché Kuala Lumpur et le Selangor, et les incendies de forêts indonésiens enveloppent régulièrement le pays de brumes toxiques.",
};
