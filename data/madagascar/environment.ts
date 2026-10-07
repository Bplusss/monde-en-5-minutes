import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 34.1,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=MG",
    note: "Part des énergies renouvelables dans la production électrique, surtout hydraulique ; le reste provient de centrales au fioul. Moins de la moitié de la population a accès à l'électricité.",
  },
  co2PerCapita: {
    value: 0.15,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=MG",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 21.3, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=MG" },
    },
  ],
  risks: ["Cyclones tropicaux", "Sécheresses et famines dans le Grand Sud", "Inondations", "Déforestation et érosion des sols", "Invasions de criquets"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/madagascar" },
  summary:
    "Isolée depuis des dizaines de millions d'années, Madagascar abrite une faune et une flore uniques : la grande majorité de ses espèces de plantes, de reptiles et d'amphibiens n'existent nulle part ailleurs, comme la centaine d'espèces de lémuriens. Ce patrimoine est menacé par la déforestation, due à l'agriculture sur brûlis (le « tavy »), au charbon de bois et à l'exploitation illégale des bois précieux. Le pays est frappé presque chaque année par des cyclones : en février 2026, Gezani a détruit une grande partie de Toamasina, le premier port. Dans le Grand Sud, des sécheresses répétées provoquent des crises alimentaires, comme le « kere » de 2021.",
};
