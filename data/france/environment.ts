import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 22.2,
    unit: "%",
    year: 2023,
    source: "SDES — Ministère de la Transition écologique",
    sourceUrl:
      "https://www.statistiques.developpement-durable.gouv.fr/les-energies-renouvelables-en-france-en-2023-dans-le-cadre-du-suivi-de-la-directive-ue-20182001-0",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie.",
  },
  co2PerCapita: {
    value: 4.25,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/france",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: {
        value: 32.5,
        unit: "%",
        year: 2023,
        source: "Banque mondiale",
        sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=FR",
      },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 67.3, unit: "%", year: 2024, source: "Eurostat", sourceUrl: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260129-2", note: "Le plus fort taux de dépendance au nucléaire au monde." },
    },
  ],
  risks: ["Inondations", "Feux de forêt", "Mouvements de terrain", "Tempêtes"],
  risksSource: {
    source: "Géorisques — Ministère de la Transition écologique",
    sourceUrl: "https://www.georisques.gouv.fr/",
  },
  summary:
    "Grâce à un mix électrique très largement nucléaire, les émissions de CO₂ par habitant restent parmi les plus basses d'Europe de l'Ouest, alors même que la part des renouvelables dans la consommation d'énergie progresse plus lentement. Les inondations et les feux de forêt, en progression dans le sud du pays, restent les principaux risques naturels.",
};
