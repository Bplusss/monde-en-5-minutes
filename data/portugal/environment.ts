import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 35.2,
    unit: "%",
    year: 2023,
    source: "DGEG / Eurostat",
    sourceUrl:
      "https://eco.sapo.pt/2024/12/19/portugal-e-o-7-o-pais-da-ue-com-mais-energia-proveniente-de-fontes-renovaveis/",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie.",
  },
  co2PerCapita: {
    value: 3.58,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/portugal",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: {
        value: 36.2,
        unit: "%",
        year: 2023,
        source: "Banque mondiale",
        sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=PT",
      },
    },
  ],
  risks: ["Feux de forêt", "Sécheresse", "Inondations", "Séismes"],
  risksSource: {
    source: "ANEPC — Autoridade Nacional de Emergência e Proteção Civil",
    sourceUrl: "https://prociv.gov.pt/pt/home/",
  },
  summary:
    "Le Portugal figure parmi les pays de l'Union européenne les plus avancés dans la transition vers les énergies renouvelables — solaire, éolien et hydraulique — et affiche l'une des empreintes carbone par habitant les plus faibles d'Europe. Le pays reste en revanche fortement exposé aux feux de forêt et à la sécheresse, en particulier dans l'intérieur et le sud.",
};
