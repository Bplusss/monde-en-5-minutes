import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 15.5,
    unit: "%",
    year: 2023,
    source: "DESNZ (Digest of UK Energy Statistics)",
    sourceUrl: "https://assets.publishing.service.gov.uk/media/664c827ff34f9b5a56adcb5d/UK_Energy_in_Brief_2023.pdf",
  },
  co2PerCapita: {
    value: 4.42,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/uk",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 13.29, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=GB" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 12.4, unit: "%", year: 2024, source: "Eurostat", sourceUrl: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260129-2" },
    },
  ],
  risks: ["Inondations", "Érosion côtière", "Tempêtes", "Canicules"],
  risksSource: {
    source: "Environment Agency (GOV.UK)",
    sourceUrl: "https://www.gov.uk/government/publications/national-assessment-of-flood-and-coastal-erosion-risk-in-england-2024/national-assessment-of-flood-and-coastal-erosion-risk-in-england-2024",
  },
  summary:
    "Le Royaume-Uni a fortement réduit ses émissions de CO2 par habitant grâce au recul du charbon dans l'électricité, mais reste l'un des pays européens les moins boisés et très exposé aux inondations et à l'érosion côtière.",
};
