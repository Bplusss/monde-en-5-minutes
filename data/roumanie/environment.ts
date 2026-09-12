import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 25.8,
    unit: "%",
    year: 2023,
    source: "Eurostat",
    sourceUrl: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Renewable_energy_statistics",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie ; l'hydroélectricité en constitue la principale source.",
  },
  co2PerCapita: {
    value: 3.7,
    unit: "t",
    year: 2023,
    source: "Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/romania",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 30.1, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=RO" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 19.0,
        unit: "%",
        year: 2025,
        source: "Agence internationale de l'énergie (AIE)",
        sourceUrl: "https://www.iea.org/countries/romania",
        note: "Fournie par les deux réacteurs CANDU de la centrale de Cernavodă, seule centrale nucléaire du pays.",
      },
    },
  ],
  risks: ["Inondations (Danube et affluents)", "Séismes (région de Vrancea)", "Sécheresses", "Glissements de terrain en zone carpatique"],
  risksSource: { source: "Département des situations d'urgence (DSU) de Roumanie", sourceUrl: "https://en.wikipedia.org/wiki/Department_for_Emergency_Situations_(Romania)" },
  summary:
    "L'hydroélectricité et le nucléaire (centrale de Cernavodă, environ un cinquième de la production électrique) forment la colonne vertébrale d'un mix électrique roumain déjà largement décarboné par rapport à la moyenne européenne, complété par une part croissante d'éolien (notamment dans la Dobrogée, près de la mer Noire) et de solaire. Le pays reste exposé à des inondations récurrentes dans les bassins du Danube et de ses affluents, ainsi qu'à un risque sismique notable dans la région de Vrancea, source des séismes les plus destructeurs qu'ait connus la Roumanie au XXᵉ siècle.",
};
