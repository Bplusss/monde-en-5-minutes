import type { EnvironmentData } from "@/lib/types";

const WB = "Banque mondiale";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 23.8,
    unit: "%",
    year: 2021,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=CA",
    note: "Part des renouvelables dans la consommation finale d'énergie ; l'électricité elle-même est très largement décarbonée, l'hydroélectricité en fournissant à elle seule environ 60 %.",
  },
  co2PerCapita: {
    value: 14.0,
    unit: "t",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=CA",
    note: "Parmi les plus élevées des pays développés, du fait de l'exploitation des sables bitumineux, des grandes distances à parcourir et d'un climat rigoureux nécessitant un chauffage important.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 39.5, unit: "%", year: 2023, source: WB, sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=CA" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 13.0,
        unit: "%",
        year: 2025,
        source: "Wikipedia, citant les données de la Régie de l'énergie du Canada (REC)",
        sourceUrl: "https://en.wikipedia.org/wiki/Nuclear_power_in_Canada",
        note: "Chiffre national ; le nucléaire est en réalité très concentré en Ontario, où il fournit plus de la moitié de l'électricité de la province (53 % en 2022), produite par 16 des 17 réacteurs commerciaux du pays. Tous les réacteurs canadiens sont de conception CANDU, une technologie à eau lourde pressurisée mise au point au Canada, qui permet d'utiliser de l'uranium naturel non enrichi.",
      },
    },
  ],
  risks: ["Feux de forêt de grande ampleur", "Inondations printanières", "Dégel du pergélisol dans le Grand Nord", "Tempêtes de verglas et hivers rigoureux"],
  risksSource: { source: "Ressources naturelles Canada", sourceUrl: "https://natural-resources.canada.ca/climate-change-adapting/climate-change-impacts-and-adaptation/10419" },
  summary:
    "Grâce à une production électrique dominée par l'hydroélectricité et complétée par un parc nucléaire concentré en Ontario, le mix électrique canadien est largement décarboné, mais les émissions de CO2 par habitant restent parmi les plus élevées des pays développés du fait de l'exploitation pétrolière et gazière, notamment des sables bitumineux albertains. Le pays est de plus en plus exposé à des feux de forêt majeurs, comme lors de la saison record de 2023, ainsi qu'au dégel accéléré du pergélisol dans l'Arctique canadien, qui menace les infrastructures et les modes de vie des communautés nordiques.",
};
