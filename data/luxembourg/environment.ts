import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 11.6,
    unit: "%",
    year: 2023,
    source: "Eurostat",
    sourceUrl: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Renewable_energy_statistics",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie — la plus faible de l'Union européenne, le pays importe l'essentiel de son électricité.",
  },
  co2PerCapita: {
    value: 10.6,
    unit: "t",
    year: 2024,
    source: "Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/luxembourg",
    note: "Élevé en partie du fait du « tourisme à la pompe » : le carburant, moins taxé qu'en France, en Belgique et en Allemagne, y est vendu en grande quantité à des non-résidents dont les émissions sont comptabilisées au Luxembourg.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 33.8, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=LU" },
    },
  ],
  risks: ["Inondations (Moselle, Sûre, Alzette)", "Sécheresses estivales", "Tempêtes"],
  risksSource: { source: "Administration luxembourgeoise de la gestion de l'eau", sourceUrl: "https://eau.gouvernement.lu/" },
  summary:
    "Sans production nucléaire ni fossile significative sur son sol, le Luxembourg importe l'essentiel de son électricité de ses voisins — dont la centrale française de Cattenom, à la frontière, dont le pays a longtemps demandé la fermeture par crainte d'un accident. Ses émissions de CO₂ par habitant, parmi les plus élevées d'Europe, s'expliquent en grande partie par les ventes massives de carburant à bas prix à une clientèle transfrontalière, plutôt que par la consommation réelle des résidents.",
};
