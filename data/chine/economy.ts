import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Renminbi (yuan)", code: "CNY", symbol: "¥" },
  gdp: {
    value: 18_743_803_000_000,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=CN",
    note: "2ᵉ PIB mondial en valeur nominale, 1er en parité de pouvoir d'achat depuis le milieu des années 2010.",
  },
  gdpPerCapita: {
    value: 13_308,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=CN",
    note: "Classe la Chine parmi les pays à revenu intermédiaire supérieur, loin derrière les économies développées malgré la taille de son PIB total.",
  },
  unemploymentRate: {
    value: 4.7,
    unit: "%",
    year: 2024,
    source: "Bureau national de statistique de Chine (taux d'enquête en zone urbaine)",
    sourceUrl: "https://www.stats.gov.cn/english/",
    note: "Taux d'enquête urbain officiel, qui ne couvre pas les travailleurs migrants ruraux ; le chômage des jeunes urbains a atteint des niveaux nettement plus élevés début 2020, avant que l'indicateur soit redéfini en 2023.",
  },
  sectors: [
    { name: "Services (tertiaire)", sharePercent: 56.7 },
    { name: "Industrie (secondaire)", sharePercent: 36.2 },
    { name: "Agriculture (primaire)", sharePercent: 7.1 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=CN", year: 2024 },
  indicators: [
    {
      label: "Réserves de change",
      value: { value: "environ 3 300 milliards", unit: "USD", year: 2025, source: "Banque populaire de Chine (PBoC)", sourceUrl: "http://www.pbc.gov.cn/en/3688006/index.html", note: "Les plus importantes réserves de change au monde, loin devant tout autre pays." },
    },
    {
      label: "Part dans les exportations mondiales de marchandises",
      value: { value: 14.6, unit: "%", year: 2023, source: "Organisation mondiale du commerce (OMC)", sourceUrl: "https://www.wto.org/", note: "Premier exportateur mondial de marchandises depuis 2009." },
    },
    {
      label: "Crise du secteur immobilier",
      value: { value: "en cours depuis 2021", unit: "", year: 2024, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/2020%E2%80%93present_Chinese_property_crisis", note: "Défauts de paiement en chaîne de grands promoteurs (dont Evergrande) après des années d'endettement massif d'un secteur qui pesait sur environ un quart du PIB." },
    },
  ],
  summary:
    "Depuis les réformes de 1978, la Chine a connu la croissance soutenue la plus rapide et la plus longue de l'histoire économique moderne, devenant l'« usine du monde » et sortant plusieurs centaines de millions de personnes de la pauvreté extrême. Elle domine désormais des secteurs technologiques de pointe (solaire, véhicules électriques, IA) tout en restant un pays « en développement » au PIB par habitant bien inférieur à celui des États-Unis. Depuis les années 2020, la croissance ralentit structurellement, aggravée par la crise immobilière, le chômage des jeunes diplômés et les tensions commerciales avec Washington.",
};
