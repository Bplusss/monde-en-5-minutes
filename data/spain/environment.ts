import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 25.0,
    unit: "%",
    year: 2023,
    source: "MITECO / Eurostat",
    sourceUrl:
      "https://www.eleconomista.es/energia/noticias/13145768/12/24/espana-sobrepasa-por-primera-vez-la-cuota-media-de-energias-renovables-de-la-ue.html",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie ; l'Espagne a dépassé pour la première fois la moyenne de l'UE en 2023.",
  },
  co2PerCapita: {
    value: 4.68,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/spain",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: {
        value: 37.2,
        unit: "%",
        year: 2023,
        source: "Banque mondiale",
        sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=ES",
      },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 18.7, unit: "%", year: 2024, source: "Eurostat", sourceUrl: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260129-2" },
    },
  ],
  risks: ["Inondations", "Feux de forêt", "Sécheresse", "Séismes"],
  risksSource: { source: "Protección Civil — Ministerio del Interior", sourceUrl: "https://www.proteccioncivil.es" },
  summary:
    "L'essor rapide de l'éolien et du solaire a porté la part des renouvelables au-dessus de la moyenne européenne, mais le pays reste fortement exposé à la sécheresse, aux feux de forêt et à des épisodes de pluies torrentielles (« DANA ») aggravés par le changement climatique.",
};
