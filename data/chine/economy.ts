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
    note: "Dollars courants ; 2ᵉ PIB mondial en valeur nominale derrière les États-Unis, mais 1er au monde en parité de pouvoir d'achat depuis le milieu des années 2010.",
  },
  gdpPerCapita: {
    value: 13_308,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=CN",
    note: "Dollars courants ; classe la Chine parmi les pays à revenu intermédiaire de la tranche supérieure, loin derrière les économies développées malgré la taille de son PIB total.",
  },
  unemploymentRate: {
    value: 4.7,
    unit: "%",
    year: 2024,
    source: "Bureau national de statistique de Chine (taux d'enquête en zone urbaine)",
    sourceUrl: "https://www.stats.gov.cn/english/",
    note: "Taux d'enquête urbain officiel, qui ne couvre pas la vaste population de travailleurs migrants ruraux (nongmingong) ni le sous-emploi rural ; le chômage des jeunes urbains (16-24 ans) a atteint des niveaux nettement plus élevés au début des années 2020, jusqu'à ce que l'indicateur soit temporairement suspendu puis redéfini en 2023.",
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
      value: { value: "en cours depuis 2021", unit: "", year: 2024, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/2020%E2%80%93present_Chinese_property_crisis", note: "Défauts de paiement en chaîne de grands promoteurs (dont Evergrande, en faillite depuis 2023) après des années d'endettement massif du secteur, qui pesait avant la crise sur environ un quart du PIB." },
    },
  ],
  summary:
    "Deuxième économie mondiale en valeur nominale et première en parité de pouvoir d'achat, la Chine a connu depuis le lancement des réformes de 1978 la croissance soutenue la plus rapide et la plus longue de l'histoire économique moderne, tirée par l'industrialisation, les exportations manufacturières et des investissements massifs en infrastructures, qui ont permis de sortir de la pauvreté extrême plusieurs centaines de millions de personnes. Devenue l'« usine du monde », elle occupe désormais une position dominante dans des secteurs technologiques de pointe (panneaux solaires, batteries et véhicules électriques, intelligence artificielle) tout en restant, selon les statistiques officielles, un pays « en développement » au PIB par habitant environ six fois inférieur à celui des États-Unis. Depuis le début des années 2020, la croissance ralentit structurellement — vieillissement démographique, rendements décroissants de l'investissement — dans un contexte aggravé par une grave crise du secteur immobilier (faillite d'Evergrande), un chômage élevé chez les jeunes diplômés urbains et des tensions commerciales et technologiques croissantes avec les États-Unis.",
};
