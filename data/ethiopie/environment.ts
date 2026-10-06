import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 95.4,
    unit: "%",
    year: 2020,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=ET",
    note: "Part des énergies renouvelables dans la production électrique, presque entièrement hydraulique.",
  },
  co2PerCapita: {
    value: 0.15,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=ET",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 14.9, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=ET" },
    },
    {
      label: "Accès à l'électricité",
      value: { value: 56.6, unit: "% de la population", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=ET" },
    },
  ],
  risks: ["Sécheresses récurrentes", "Inondations", "Invasions de criquets pèlerins", "Érosion et dégradation des sols"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/ethiopia" },
  summary:
    "L'Éthiopie produit une électricité presque entièrement renouvelable grâce à ses barrages, dont le Grand barrage de la Renaissance (GERD) sur le Nil Bleu, inauguré en septembre 2025, le plus puissant d'Afrique ; il suscite un long différend avec l'Égypte et le Soudan, qui craignent pour leur approvisionnement en eau. Près de la moitié des habitants n'ont pourtant pas encore accès à l'électricité. Les sécheresses à répétition menacent les éleveurs et les agriculteurs, et l'érosion des hauts plateaux, longtemps déboisés, a motivé de vastes campagnes de reboisement comme l'initiative « Green Legacy » lancée en 2019.",
};
