import type { EnvironmentData } from "@/lib/types";

const DOE = "Department of Energy (DOE) des Philippines, statistiques de production électrique 2024";
const DOE_URL = "https://legacy.doe.gov.ph/sites/default/files/pdf/energy_statistics/04_Gross%20Generation.pdf";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 22.2,
    unit: "%",
    year: 2024,
    source: DOE,
    sourceUrl: DOE_URL,
    note: "Part des renouvelables dans la production d'électricité : géothermie (8,5 %) et hydroélectricité (8,6 %) en tête, solaire et éolien autour de 4 %. Objectif national : 35 % en 2030.",
  },
  co2PerCapita: {
    value: 1.5,
    unit: "t",
    year: 2024,
    source: "Banque mondiale (EDGAR)",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=PH",
  },
  indicators: [
    {
      label: "Part du charbon dans l'électricité",
      value: { value: 62.5, unit: "%", year: 2024, source: DOE, sourceUrl: DOE_URL, note: "Un moratoire sur les nouvelles centrales à charbon est en vigueur depuis 2020, mais les projets déjà engagés se poursuivent." },
    },
    {
      label: "Couverture forestière",
      value: { value: 24.5, unit: "% du territoire", year: 2023, source: "Banque mondiale (FAO)", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=PH" },
    },
  ],
  risks: [
    "Typhons (une vingtaine par an dans la zone de surveillance philippine)",
    "Inondations et glissements de terrain",
    "Séismes et tsunamis (Ceinture de feu du Pacifique)",
    "Éruptions volcaniques (Mayon, Taal, Kanlaon…)",
    "Élévation du niveau de la mer et blanchissement des récifs coralliens",
  ],
  risksSource: { source: "PAGASA / PHIVOLCS / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_the_Philippines" },
  summary:
    "Les Philippines figurent parmi les pays les plus exposés aux catastrophes naturelles ; le typhon Haiyan (Yolanda) a fait plus de 6 000 morts en 2013. L'archipel compte aussi parmi les pays de « mégadiversité » et se situe au cœur du Triangle de corail, zone marine la plus riche du monde, mais déforestation, surpêche et urbanisation ont fortement dégradé ces milieux. Le mix électrique reste dominé par le charbon, malgré une production géothermique parmi les premières au monde.",
};
