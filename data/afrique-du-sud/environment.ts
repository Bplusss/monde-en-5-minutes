import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 13.0,
    unit: "%",
    year: 2024,
    source: "Agence internationale de l'énergie (AIE)",
    sourceUrl: "https://www.iea.org/countries/south-africa",
    note: "Part encore modeste mais en croissance rapide (solaire et éolien) : le mix électrique reste dominé à plus de 80 % par le charbon, extrait localement en grande quantité, mais la crise du délestage a déclenché depuis 2022-2023 un essor massif de l'autoproduction solaire privée (toitures résidentielles et commerciales), en dehors du réseau public d'Eskom.",
  },
  co2PerCapita: {
    value: 6.9,
    unit: "t",
    year: 2024,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Très élevées pour un pays à revenu intermédiaire, en raison de la place centrale du charbon dans la production électrique et industrielle (notamment la pétrochimie de synthèse Sasol, qui transforme le charbon en carburants liquides) ; parmi les plus hautes d'Afrique et proches de nombreux pays européens.",
  },
  indicators: [
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 4.0,
        unit: "%",
        year: 2024,
        source: "World Nuclear Association",
        sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-o-s/south-africa",
        note: "Part modeste mais unique sur le continent : la centrale de Koeberg, près du Cap et exploitée par Eskom depuis 1984-1985, est la seule centrale nucléaire d'Afrique.",
      },
    },
    {
      label: "Part du charbon dans l'électricité",
      value: { value: 83.0, unit: "%", year: 2024, source: "lowcarbonpower.org / Agence internationale de l'énergie", sourceUrl: "https://www.iea.org/countries/south-africa", note: "L'un des mix électriques les plus intensifs en charbon au monde, hérité de vastes réserves nationales bon marché, mais reposant sur un parc de centrales vieillissant, source directe de la crise de délestage des années 2020." },
    },
  ],
  risks: [
    "Sécheresses récurrentes, notamment dans la région du Cap (crise du « Jour zéro » de 2018)",
    "Stress hydrique structurel et vieillissement des infrastructures d'approvisionnement en eau",
    "Feux de végétation (fynbos du Cap, savanes du highveld)",
    "Érosion côtière et élévation du niveau de la mer",
    "Perte de biodiversité dans des écosystèmes endémiques exceptionnels",
  ],
  risksSource: { source: "Programme des Nations unies pour l'environnement (PNUE) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_South_Africa" },
  summary:
    "L'Afrique du Sud reste l'un des pays les plus intensifs en carbone au monde rapporté à son niveau de développement, du fait de la place centrale du charbon dans son mix électrique (plus de 80 %) et de la présence d'une industrie pétrochimique de synthèse (Sasol) qui transforme directement le charbon en carburants liquides — un choix industriel hérité des sanctions pétrolières de l'époque de l'apartheid. La crise chronique de délestage électrique du début des années 2020, provoquée par le vieillissement du parc de centrales à charbon d'Eskom, a paradoxalement accéléré un essor rapide et largement privé du solaire, les ménages et entreprises cherchant à s'affranchir d'un réseau public défaillant. Sur le plan des ressources naturelles, le pays est un point chaud mondial de biodiversité endémique, notamment dans la région florale du Cap (fynbos, l'un des six grands royaumes floraux de la planète malgré sa petite taille) et le long de la côte du KwaZulu-Natal (parc iSimangaliso) ; il reste par ailleurs structurellement pauvre en eau et exposé à des sécheresses sévères, dont celle qui a menacé Le Cap d'un « Jour zéro » (rupture totale de l'approvisionnement en eau courante) en 2018, évité de justesse grâce à des restrictions drastiques de consommation.",
};
