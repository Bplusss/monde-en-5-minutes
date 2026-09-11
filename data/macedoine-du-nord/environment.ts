import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 32.0,
    unit: "%",
    year: 2022,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=MK",
    note: "Hydroélectricité pour l'essentiel ; le pays reste par ailleurs dépendant de deux grandes centrales à charbon (Bitola, Oslomej).",
  },
  co2PerCapita: {
    value: 4.6,
    unit: "t",
    year: 2022,
    source: "Global Carbon Atlas",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 39.6, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=MK" },
    },
  ],
  risks: ["Séismes", "Feux de forêt estivaux", "Crues de la vallée du Vardar"],
  risksSource: { source: "Direction pour la protection et le sauvetage de Macédoine du Nord", sourceUrl: "https://en.wikipedia.org/wiki/1963_Skopje_earthquake" },
  summary:
    "Toujours dépendante du charbon pour une bonne partie de son électricité malgré un potentiel hydroélectrique significatif, la Macédoine du Nord affiche des émissions par habitant proches de la moyenne des Balkans. Le pays reste marqué par le souvenir du séisme dévastateur qui a détruit une grande partie de Skopje en 1963, et demeure exposé au risque sismique ainsi qu'aux feux de forêt estivaux dans ses massifs montagneux.",
};
