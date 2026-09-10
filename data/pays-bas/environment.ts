import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 17.0,
    unit: "%",
    year: 2023,
    source: "CBS (Statistics Netherlands)",
    sourceUrl: "https://www.cbs.nl/nl-nl/nieuws/2024/23/energieverbruik-uit-hernieuwbare-bronnen-gestegen-naar-17-procent",
  },
  co2PerCapita: {
    value: 7.09,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/netherlands",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 11.1, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=NL" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 3.0, unit: "%", year: 2024, source: "Eurostat", sourceUrl: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260129-2", note: "Un seul réacteur en service, à Borssele." },
    },
  ],
  risks: ["Inondations", "Élévation du niveau de la mer", "Affaissement des sols", "Tempêtes"],
  risksSource: { source: "Rijkswaterstaat", sourceUrl: "https://www.rijkswaterstaat.nl/water/waterbeheer/bescherming-tegen-het-water" },
  summary:
    "Avec une large part du territoire au niveau de la mer ou en dessous, les Pays-Bas concentrent leurs enjeux environnementaux sur la protection contre l'eau, tandis que la part de renouvelable dans la consommation d'énergie reste inférieure à la moyenne de l'Union européenne.",
};
