import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 81.7,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=VE",
    note: "Part des énergies renouvelables dans la production électrique, presque entièrement hydroélectrique : le barrage de Guri, sur le Caroní, est l'un des plus puissants du monde.",
  },
  co2PerCapita: {
    value: 3.39,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=VE",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 53.4, unit: "% du territoire", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=VE" },
    },
  ],
  risks: ["Pluies torrentielles et coulées de boue", "Séismes", "Sécheresses", "Marées noires et pollution pétrolière"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/venezuela" },
  summary:
    "Le Venezuela fait partie des pays à la plus grande biodiversité du monde, des récifs de l'archipel de Los Roques à la forêt amazonienne et aux tepuis du parc national Canaima, inscrit au patrimoine mondial. Il est aussi le premier pays des temps modernes à avoir perdu tous ses glaciers : le dernier, le glacier Humboldt, dans les Andes, a été déclassé en 2024. Au sud de l'Orénoque, l'« Arc minier », ouvert en 2016, et l'orpaillage illégal détruisent la forêt et polluent les rivières au mercure. Les fuites des installations pétrolières vieillissantes souillent régulièrement le lac de Maracaibo et les côtes. En décembre 1999, des pluies diluviennes ont provoqué dans l'État de Vargas des coulées de boue qui ont fait des milliers de morts.",
};
