import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 80.3,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=NG",
    note: "Part très élevée mais trompeuse : elle reflète avant tout le poids de la biomasse traditionnelle (bois de feu, charbon de bois) dans la consommation énergétique des ménages, faute d'accès généralisé à l'électricité, plutôt qu'un mix électrique réellement décarboné — celui-ci reste dominé par le gaz naturel et l'hydroélectricité.",
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
    "Premier producteur de pétrole d'Afrique, le Nigeria porte aussi le poids environnemental de cette production : le delta du Niger, région d'extraction historique, est considéré comme l'une des zones les plus polluées au monde, avec plusieurs dizaines de millions de litres d'hydrocarbures déversés sur le seul territoire ogoni entre 2006 et 2019 selon des relevés locaux, auxquels s'ajoute un torchage massif du gaz associé à l'extraction. Cette pollution a nourri, entre les années 1990 et la fin des années 2000, un mouvement de contestation puis de militantisme armé dans la région (dont le Mouvement pour l'émancipation du delta du Niger, MEND, actif contre les installations pétrolières jusqu'à une amnistie gouvernementale en 2009), sur fond de revendications autochtones portées dès 1990 par le mouvement non-violent MOSOP et son porte-parole Ken Saro-Wiwa, exécuté par le régime militaire en 1995. Au-delà du delta, le pays fait face à une avancée du désert dans le nord semi-aride et à une érosion côtière préoccupante sur son littoral atlantique, notamment autour de la mégapole de Lagos.",
};
