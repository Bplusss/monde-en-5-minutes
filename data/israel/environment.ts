import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 14,
    unit: "%",
    year: 2024,
    source: "Autorité israélienne de l'électricité, via Calcalist",
    sourceUrl: "https://calcalistech.com/ctechnews/article/2572qjusa",
    note: "Part des renouvelables (presque uniquement du solaire) dans la production d'électricité, contre 71 % pour le gaz naturel et 14 % pour le charbon. L'objectif de 20 % en 2025 n'a pas été atteint ; le pays vise 30 % en 2030.",
  },
  co2PerCapita: {
    value: 5.8,
    unit: "t",
    year: 2024,
    source: "Banque mondiale (base EDGAR)",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=IL",
    note: "Émissions de CO₂ par habitant en baisse depuis le remplacement progressif du charbon par le gaz offshore dans les années 2010.",
  },
  indicators: [
    {
      label: "Dessalement de l'eau de mer",
      value: { value: "cinq grandes usines sur la côte méditerranéenne, dont Sorek, parmi les plus grandes au monde", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Water_supply_and_sanitation_in_Israel", note: "Elles fournissent l'essentiel de l'eau potable domestique, et le pays réutilise pour l'agriculture près de 90 % de ses eaux usées traitées, record mondial." },
    },
    {
      label: "Mer Morte",
      value: { value: "baisse du niveau d'environ 1 m par an", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Dead_Sea", note: "Due aux prélèvements dans le Jourdain et à l'industrie des minéraux." },
    },
  ],
  risks: [
    "Stress hydrique structurel, compensé par le dessalement et la réutilisation des eaux usées",
    "Vagues de chaleur et allongement des sécheresses, accentués par le changement climatique",
    "Incendies de forêt, comme ceux des collines de Jérusalem en avril-mai 2025",
    "Séismes le long de la faille du Jourdain et de la mer Morte",
    "Recul de la mer Morte et pollution industrielle de la baie de Haïfa",
  ],
  risksSource: { source: "Ministère israélien de la Protection de l'environnement / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Israel" },
  summary:
    "Pays aride, Israël est devenu un laboratoire de la gestion de l'eau (irrigation au goutte-à-goutte, inventée sur place, dessalement, recyclage). L'électricité repose encore surtout sur le gaz naturel, et le solaire progresse moins vite que prévu.",
};
