import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 79.2,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=CM",
    note: "Part élevée mais trompeuse : elle reflète surtout le poids du bois de feu et du charbon de bois dans la consommation des ménages, plutôt qu'un accès généralisé à une électricité propre.",
  },
  co2PerCapita: {
    value: 0.35,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=CM",
    note: "Parmi les plus faibles au monde ; la déforestation pèse davantage dans le bilan d'émissions du pays que les combustibles fossiles.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 42.7, unit: "% du territoire", year: 2023, source: "Banque mondiale (FAO)", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=CM", note: "Forêt dense humide du bassin du Congo, au sud et à l'est." },
    },
    {
      label: "Part de l'hydroélectricité dans l'électricité",
      value: { value: 74.7, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.HYRO.ZS?locations=CM", note: "Barrages d'Edéa, de Song Loulou, de Lagdo et de Nachtigal (420 MW), régulés par la retenue de Lom Pangar." },
    },
    {
      label: "Accès à l'électricité",
      value: { value: 72, unit: "% de la population", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=CM" },
    },
  ],
  risks: [
    "Déforestation liée à l'agriculture, à l'exploitation forestière et au bois de feu",
    "Sécheresses et désertification dans l'Extrême-Nord, recul du lac Tchad",
    "Inondations saisonnières dans le nord et à Douala",
    "Glissements de terrain sur les hauts plateaux de l'Ouest",
    "Risques volcaniques et lacs à dégazage brutal (Nyos, Monoun)",
    "Braconnage et commerce de viande de brousse",
  ],
  risksSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Cameroon" },
  summary:
    "Le Cameroun abrite une part importante des forêts du bassin du Congo et une biodiversité très riche, dont des populations de gorilles, de chimpanzés et d'éléphants de forêt, menacées par la déforestation et le braconnage. Au nord, le lac Tchad a perdu l'essentiel de sa surface depuis les années 1960, aggravant la pression sur les ressources dans une région déjà fragilisée par Boko Haram. La ligne volcanique de l'Ouest expose le pays à des risques rares : en 1986, une éruption limnique de dioxyde de carbone au lac Nyos a tué environ 1 700 personnes. L'électricité, majoritairement hydraulique, reste insuffisante, et les délestages sont fréquents.",
};
