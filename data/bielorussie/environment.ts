import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 3.4,
    unit: "%",
    year: 2024,
    source: "Our World in Data",
    sourceUrl: "https://ourworldindata.org/energy/country/belarus",
    note: "Part des renouvelables dans la consommation d'énergie primaire — l'une des plus faibles d'Europe.",
  },
  co2PerCapita: {
    value: 5.9,
    unit: "t",
    year: 2024,
    source: "Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/belarus",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 42.7, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=BY" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 35.0, unit: "%", year: 2024, source: "World Nuclear Association", sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-a-f/belarus" },
    },
  ],
  risks: ["Zones contaminées par Tchernobyl (sud-est)", "Sécheresses estivales", "Feux de forêt et de tourbières"],
  risksSource: { source: "Ministère biélorusse des Situations d'urgence (MChS)", sourceUrl: "https://mchs.gov.by/" },
  summary:
    "Près de quarante ans après la catastrophe de Tchernobyl, environ un cinquième du territoire biélorusse reste soumis à des restrictions liées à la contamination radioactive, en particulier dans les régions de Gomel et de Mogilev. Depuis la mise en service de la première centrale nucléaire du pays à Astravyets en 2021, le nucléaire fournit plus d'un tiers de l'électricité biélorusse, réduisant la dépendance historique au gaz russe mais suscitant des inquiétudes de sûreté chez ses voisins européens.",
};
