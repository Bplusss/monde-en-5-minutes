import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 10.0,
    unit: "%",
    year: 2022,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=MT",
    note: "Essentiellement du solaire photovoltaïque ; Malte importe une part croissante de son électricité via un câble sous-marin la reliant à la Sicile.",
  },
  co2PerCapita: {
    value: 4.3,
    unit: "t",
    year: 2022,
    source: "Global Carbon Atlas",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
  },
  indicators: [],
  risks: ["Pénurie et stress hydrique", "Érosion côtière", "Vagues de chaleur estivales"],
  risksSource: { source: "Autorité maltaise pour les ressources (Energy and Water Agency)", sourceUrl: "https://ewa.org.mt/" },
  summary:
    "Dépourvue de cours d'eau permanents et de nappes phréatiques abondantes, Malte couvre une part croissante de ses besoins en eau potable par dessalement de l'eau de mer, une solution énergivore. La densité de population extrême et la faible superficie du territoire exposent le pays à un stress hydrique structurel, aggravé par des étés de plus en plus chauds et secs.",
};
