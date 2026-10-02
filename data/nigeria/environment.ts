import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 80.3,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=NG",
    note: "Part trompeuse : elle reflète surtout le poids du bois de feu et du charbon de bois chez les ménages, faute d'accès généralisé à l'électricité ; le mix électrique reste dominé par le gaz naturel et l'hydroélectricité.",
  },
  co2PerCapita: {
    value: 0.55,
    unit: "t",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=NG",
    note: "Parmi les plus faibles au monde au regard de la population, en raison d'un accès à l'électricité et d'une industrialisation encore limités — à ne pas confondre avec les émissions et le torchage de gaz liés à l'extraction pétrolière, concentrés dans le delta du Niger.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 23.4, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=NG" },
    },
    {
      label: "Accès à l'électricité",
      value: { value: 61.2, unit: "% de la population", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=NG" },
    },
  ],
  risks: [
    "Pollution pétrolière et dégradation environnementale du delta du Niger",
    "Désertification et avancée du Sahara dans le nord, aggravées par les sécheresses",
    "Érosion côtière et inondations saisonnières, notamment autour de Lagos et du delta",
    "Déforestation liée à la demande en bois de feu et à l'expansion agricole",
  ],
  risksSource: { source: "Programme des Nations unies pour l'environnement (PNUE) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Nigeria" },
  summary:
    "Le delta du Niger, région d'extraction historique, est l'une des zones les plus polluées au monde : plusieurs dizaines de millions de litres d'hydrocarbures ont été déversés sur le seul territoire ogoni entre 2006 et 2019 selon des relevés locaux, sans compter le torchage massif du gaz. Cette pollution a nourri les revendications du mouvement non-violent MOSOP, dont le porte-parole Ken Saro-Wiwa fut exécuté par le régime militaire en 1995, puis le militantisme armé du MEND jusqu'à l'amnistie de 2009. Ailleurs, le désert avance au nord et l'érosion menace le littoral, notamment autour de Lagos.",
};
