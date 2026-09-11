import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 8.9,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=UA",
    note: "Avant-guerre, l'électricité ukrainienne dépendait fortement du nucléaire (plus de la moitié de la production) plutôt que des renouvelables.",
  },
  co2PerCapita: {
    value: 3.1,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.ATM.CO2E.PC?locations=UA",
    note: "En net recul depuis l'invasion de 2022, conséquence directe de l'effondrement de la production industrielle plutôt que d'une transition énergétique.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 16.8, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=UA" },
    },
  ],
  risks: [
    "Zone d'exclusion de Tchernobyl, contaminée depuis la catastrophe nucléaire de 1986",
    "Destruction du barrage de Kakhovka en juin 2023, provoquant des inondations catastrophiques et un désastre écologique dans le sud du pays",
    "Contamination par les mines et munitions non explosées d'une part considérable des terres agricoles",
    "Risque nucléaire lié à l'occupation militaire de la centrale de Zaporijjia, la plus grande d'Europe",
  ],
  risksSource: { source: "Wikipedia / PNUE", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_impact_of_the_Russian_invasion_of_Ukraine" },
  summary:
    "Au-delà de l'héritage de la catastrophe de Tchernobyl, dont la zone d'exclusion s'étend toujours au nord du pays, l'invasion russe depuis 2022 a causé des dommages environnementaux d'une ampleur inédite en Europe depuis des décennies : destruction du barrage de Kakhovka, pollution des sols et des eaux par les combats, déforestation et contamination durable de vastes surfaces agricoles par les mines. La centrale nucléaire de Zaporijjia, la plus puissante d'Europe, reste sous occupation militaire russe et sous surveillance constante de l'Agence internationale de l'énergie atomique en raison du risque d'accident.",
};
