import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 34.9,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=GH",
    note: "Part des énergies renouvelables dans la production électrique, presque entièrement hydroélectrique (barrages d'Akosombo, de Kpong et de Bui) ; le reste provient surtout de centrales au gaz.",
  },
  co2PerCapita: {
    value: 0.7,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=GH",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 30.9, unit: "% du territoire", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=GH" },
    },
    {
      label: "Accès à l'électricité",
      value: { value: 91.9, unit: "% de la population", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=GH" },
    },
  ],
  risks: ["Inondations", "Érosion côtière", "Sécheresses dans le Nord", "Pollution des rivières par l'orpaillage illégal"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/ghana" },
  summary:
    "Le Ghana a perdu une grande partie de ses forêts primaires au profit du cacao, de l'exploitation forestière et des mines. L'orpaillage illégal, appelé « galamsey », est devenu le principal problème environnemental du pays : il détruit des forêts et des terres agricoles et empoisonne au mercure des rivières comme la Pra et l'Ankobra. Sur la côte, l'érosion engloutit des villages entiers, notamment autour de Keta, à l'est. Le pays abrite encore des parcs remarquables, comme celui de Mole, peuplé d'éléphants, et la forêt de Kakum.",
};
