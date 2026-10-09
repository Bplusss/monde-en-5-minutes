import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 11.0,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=KZ",
    note: "Part des énergies renouvelables (hydroélectricité surtout, puis éolien et solaire) dans la production électrique ; le charbon en fournit plus de la moitié.",
  },
  co2PerCapita: {
    value: 12.57,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=KZ",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 1.3, unit: "% du territoire", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=KZ" },
    },
  ],
  risks: ["Séismes dans le sud-est (Almaty)", "Inondations printanières", "Sécheresses et désertification", "Pollution de l'air en hiver"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/kazakhstan" },
  summary:
    "L'époque soviétique a laissé de lourdes cicatrices. La mer d'Aral, privée de l'eau du Syr-Daria et de l'Amou-Daria détournée pour irriguer le coton, a perdu l'essentiel de sa surface, mais le barrage de Kokaral, construit en 2005, a permis à sa partie nord, kazakhe, de remonter. Autour de Semipalatinsk, 456 essais nucléaires ont été réalisés de 1949 à 1989, exposant des centaines de milliers d'habitants aux radiations. Très dépendant du charbon, le pays émet beaucoup de CO2 par habitant. La steppe a vu renaître l'antilope saïga, passée de quelques dizaines de milliers d'individus au début des années 2000 à plusieurs millions.",
};
