import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 22,
    unit: "%",
    year: 2023,
    source: "Umweltbundesamt (UBA)",
    sourceUrl: "https://www.umweltbundesamt.de/en/topics/climate-energy/renewable-energies/renewable-energies-in-figures",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie.",
  },
  co2PerCapita: {
    value: 7.06,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/germany",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: {
        value: 32.7,
        unit: "%",
        year: 2023,
        source: "Banque mondiale",
        sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=DE",
      },
    },
  ],
  risks: ["Inondations", "Tempêtes", "Canicules", "Sécheresse"],
  risksSource: {
    source: "BBK — Bundesamt für Bevölkerungsschutz und Katastrophenhilfe",
    sourceUrl:
      "https://www.bbk.bund.de/DE/Themen/Kritische-Infrastrukturen/KRITIS-Gefahrenlagen/Naturgefahren/naturgefahren_node.html",
  },
  summary:
    "Les émissions de CO₂ par habitant restent plus élevées que chez ses voisins européens, un mix électrique encore marqué par le charbon malgré la sortie du nucléaire en 2023. Le pays reste exposé aux inondations, comme la crue dévastatrice de la vallée de l'Ahr en 2021, ainsi qu'à des vagues de chaleur et des sécheresses estivales de plus en plus fréquentes.",
};
