import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 31.8,
    unit: "%",
    year: 2023,
    source: "Eurostat",
    sourceUrl: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Renewable_energy_statistics",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie, portée par l'hydroélectricité.",
  },
  co2PerCapita: {
    value: 4.1,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/croatia",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 34.0, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=HR" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 16.0,
        unit: "%",
        year: 2024,
        source: "Centrale nucléaire de Krško (NEK)",
        sourceUrl: "https://www.nek.si/en/about-us/about-nek",
        note: "Sans réacteur sur son sol, la Croatie détient 50 % de la centrale slovène de Krško et reçoit la moitié de sa production.",
      },
    },
  ],
  risks: ["Séismes", "Incendies de forêt (littoral)", "Inondations", "Canicules et sécheresses estivales"],
  risksSource: { source: "Direction croate de la protection civile (DUZS)", sourceUrl: "https://civilna-zastita.gov.hr/" },
  summary:
    "Grâce à son relief karstique, à ses nombreux barrages hydroélectriques et à sa part de la centrale nucléaire slovène de Krško, la Croatie affiche l'un des mix électriques les plus décarbonés d'Europe centrale, mais son littoral dalmate, densément boisé de pins et exposé à la bora et au sirocco, subit chaque été des incendies de forêt de grande ampleur ; le pays reste par ailleurs situé dans une zone sismique active, comme l'a rappelé le séisme de Zagreb de 2020.",
};
