import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 25.0,
    unit: "%",
    year: 2023,
    source: "Eurostat",
    sourceUrl: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Renewable_energy_statistics",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie (chauffage, transport et électricité confondus) ; l'électricité elle-même est largement décarbonée grâce à l'hydroélectricité et au nucléaire.",
  },
  co2PerCapita: {
    value: 5.81,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/slovenia",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: {
        value: 60.4,
        unit: "%",
        year: 2020,
        source: "Wikipedia (géographie de la Slovénie)",
        sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Slovenia",
        note: "Deuxième pays le plus boisé d'Europe après la Finlande.",
      },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 37.0,
        unit: "%",
        year: 2023,
        source: "Agence internationale de l'énergie (AIE)",
        sourceUrl: "https://www.iea.org/data-and-statistics/charts/share-of-nuclear-energy-in-total-electricity-generation-by-country-2023",
        note: "La centrale de Krško, seul réacteur du pays, est implantée en Slovénie mais détenue à parts égales (50/50) par la Slovénie et la Croatie, qui en reçoit l'autre moitié de la production ; la part slovène de Krško couvre à elle seule plus d'un tiers de l'électricité consommée dans le pays.",
      },
    },
  ],
  risks: ["Inondations (Sava, Drava, Savinja)", "Séismes", "Incendies de forêt (Karst)", "Sécheresses estivales"],
  risksSource: { source: "Administration slovène de la protection civile et des secours (URSZR)", sourceUrl: "https://www.gov.si/en/state-authorities/administration-of-the-republic-of-slovenia-for-civil-protection-and-disaster-relief/" },
  summary:
    "Grâce à son important couvert forestier, à son relief karstique et à un mix électrique dominé par l'hydroélectricité et le nucléaire, la Slovénie affiche des émissions de CO2 par habitant parmi les plus faibles d'Europe centrale. Le pays reste toutefois exposé à des inondations récurrentes de ses cours d'eau alpins et pannoniens — les crues d'août 2023, qui ont touché une grande partie du territoire et fait sept morts, ont occasionné au moins 7 milliards d'euros de dégâts — ainsi qu'à un risque sismique non négligeable, hérité du séisme de Ljubljana de 1895.",
};
