import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 25.26,
    unit: "%",
    year: 2023,
    source: "Eurostat",
    sourceUrl: "https://www.powergame.gr/green-power/777288/ellada-sto-2526-to-pososto-energeias-apo-ape-to-2023/",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie.",
  },
  co2PerCapita: {
    value: 4.69,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/greece",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 30.3, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=GR" },
    },
  ],
  risks: ["Feux de forêt", "Séismes", "Sécheresse"],
  risksSource: { source: "OASP (Organisme antisismique) / Pompiers helléniques", sourceUrl: "https://oasp.gr/" },
  summary:
    "Grâce à un fort ensoleillement et à un vent régulier dans l'Égée, la Grèce a rapidement développé l'éolien et le solaire, mais reste très exposée aux feux de forêt estivaux — l'incendie de l'Évros en 2023 a été le plus grand jamais enregistré dans l'Union européenne — ainsi qu'à un risque sismique élevé, le pays se situant à la jonction de plusieurs plaques tectoniques.",
};
