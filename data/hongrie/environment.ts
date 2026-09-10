import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 20.8,
    unit: "%",
    year: 2024,
    source: "Enerdata",
    sourceUrl: "https://www.enerdata.net/estore/energy-market/hungary/",
    note: "Part des renouvelables dans la consommation d'énergie primaire ; le pays est le premier de l'UE pour la part du solaire dans sa production électrique.",
  },
  co2PerCapita: {
    value: 4.5,
    unit: "t",
    year: 2024,
    source: "Global Carbon Atlas",
    sourceUrl: "https://www.worldometers.info/co2-emissions/hungary-co2-emissions/",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 22.6, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=HU" },
    },
  ],
  risks: ["Inondations (Danube, Tisza)", "Sécheresses estivales", "Canicules"],
  risksSource: { source: "Direction générale hongroise de la gestion de l'eau (OVF)", sourceUrl: "https://www.ovf.hu/" },
  summary:
    "Après une forte dépendance historique au charbon et au gaz russe, la Hongrie a connu depuis 2020 l'un des essors solaires les plus rapides d'Europe, le photovoltaïque couvrant désormais près d'un quart de sa production électrique. Le pays reste toutefois exposé aux crues du Danube et de la Tisza, ainsi qu'à des étés de plus en plus chauds et secs dans la Grande Plaine.",
};
