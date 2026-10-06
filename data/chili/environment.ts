import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 48.1,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=CL",
    note: "Part des énergies renouvelables dans la production électrique (hydroélectricité comprise), en forte hausse depuis avec l'essor du solaire dans le désert d'Atacama.",
  },
  co2PerCapita: {
    value: 3.9,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=CL",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 25.0, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=CL" },
    },
  ],
  risks: ["Séismes et tsunamis", "Éruptions volcaniques", "Sécheresse prolongée dans le centre du pays", "Incendies de forêt"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/chile" },
  summary:
    "Le désert d'Atacama, qui reçoit l'un des ensoleillements les plus intenses au monde, a fait du Chili un pionnier de l'énergie solaire en Amérique latine, et le pays s'est engagé à fermer toutes ses centrales à charbon d'ici 2040. Le centre du pays subit depuis 2010 une « méga-sécheresse » d'une durée inédite, qui menace l'approvisionnement en eau de Santiago et l'agriculture, et favorise des incendies meurtriers comme celui de Viña del Mar en février 2024. Les plantations de pins et d'eucalyptus ont par ailleurs remplacé une partie des forêts natives du Sud.",
};
