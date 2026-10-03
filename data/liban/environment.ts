import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 43.8,
    unit: "%",
    year: 2024,
    source: "Ember, via Our World in Data",
    sourceUrl: "https://ourworldindata.org/grapher/share-electricity-renewables?country=~LBN",
    note: "Part de l'électricité, contre 5 % en 2019 : faute de courant fourni par l'opérateur public Électricité du Liban, ménages et entreprises ont massivement installé des panneaux solaires depuis 2022 (environ 30 % de l'électricité en 2024). Le reste provient surtout du fioul et de générateurs diesel privés.",
  },
  co2PerCapita: {
    value: 2.7,
    unit: "t",
    year: 2024,
    source: "Global Carbon Project, via Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/lebanon",
    note: "En baisse depuis 2019 sous l'effet de la crise économique et de l'essor du solaire.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: {
        value: 14.2,
        unit: "%",
        year: 2023,
        source: "Banque mondiale",
        sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=LB",
        note: "Pinèdes, chênaies et quelques reliques de cèdres, menacées par les incendies et l'urbanisation.",
      },
    },
  ],
  risks: [
    "Pollution des cours d'eau, dont le Litani et le lac de Qaraoun, par les eaux usées et les rejets industriels",
    "Crise de gestion des déchets, mis en décharge sauvage ou brûlés à l'air libre",
    "Incendies de forêt",
    "Séismes (faille de Yammouneh)",
    "Destructions et pollutions liées aux guerres, notamment dans le Sud",
  ],
  risksSource: { source: "Programme des Nations unies pour l'environnement (PNUE) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Lebanon#Environmental_issues" },
  summary:
    "Pays de montagnes bien arrosé, le Liban souffre pourtant de pénuries d'eau, faute d'infrastructures, et d'une pollution étendue. La crise des déchets de 2015 a donné naissance au mouvement « Vous puez ». L'effondrement du réseau électrique public a provoqué un essor rapide du solaire, tandis que les guerres ont détruit cultures et forêts dans le Sud.",
};
