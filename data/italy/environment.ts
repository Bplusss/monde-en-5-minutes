import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 19.6,
    unit: "%",
    year: 2023,
    source: "ISPRA",
    sourceUrl: "https://indicatoriambientali.isprambiente.it/en/energy/share-energy-renewable-sources-final-consumption",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie.",
  },
  co2PerCapita: {
    value: 5.19,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/italy",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: {
        value: 32.9,
        unit: "%",
        year: 2023,
        source: "Banque mondiale",
        sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=IT",
      },
    },
  ],
  risks: ["Séismes", "Inondations", "Glissements de terrain", "Éruptions volcaniques"],
  risksSource: {
    source: "Dipartimento della Protezione Civile",
    sourceUrl: "https://rischi.protezionecivile.gov.it/it/approfondimento/rischi/",
  },
  summary:
    "Située à la jonction des plaques africaine et eurasiatique, l'Italie est le pays européen le plus exposé au risque sismique et volcanique, et le dissesto idrogeologico — glissements de terrain et inondations — touche une large part de son territoire. Sa part d'énergies renouvelables reste inférieure à la moyenne de l'Union européenne.",
};
