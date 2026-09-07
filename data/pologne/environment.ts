import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 16.5,
    unit: "%",
    year: 2023,
    source: "GUS — Główny Urząd Statystyczny",
    sourceUrl: "https://stat.gov.pl/obszary-tematyczne/srodowisko-energia/energia/energia-ze-zrodel-odnawialnych-w-2023-roku,10,7.html",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie.",
  },
  co2PerCapita: {
    value: 7.63,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/poland",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 31.1, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=PL" },
    },
  ],
  risks: ["Inondations", "Sécheresse", "Canicules", "Tempêtes"],
  risksSource: { source: "IMGW-PIB (Institut météorologique et hydrologique polonais)", sourceUrl: "https://www.imgw.pl/" },
  summary:
    "Historiquement très dépendante du charbon pour son électricité, la Pologne affiche l'une des parts de renouvelable et l'un des niveaux d'émissions de CO2 par habitant les plus élevés d'Europe, tout en étant de plus en plus exposée aux sécheresses et aux crues, notamment de l'Oder.",
};
