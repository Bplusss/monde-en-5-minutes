import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 13,
    unit: "%",
    year: 2025,
    source: "Ember",
    sourceUrl: "https://ember-energy.org/countries-and-regions/egypt/",
    note: "Surtout hydroélectrique (barrage d'Assouan) et solaire, portée par le parc de Benban, l'un des plus grands parcs photovoltaïques du monde (1,8 GW) ; le pays vise 42 à 45 % d'ici le milieu des années 2030, contre environ 9 % en 2016.",
  },
  co2PerCapita: {
    value: 2.2,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas / Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/egypt",
    note: "Émissions par habitant modérées, mais en hausse structurelle sous l'effet de la croissance démographique et du gaz naturel dans la production électrique.",
  },
  indicators: [
    {
      label: "Parc solaire de Benban",
      value: { value: "1,8 GW de capacité installée", source: "Wikipedia / Banque africaine de développement", sourceUrl: "https://spectrum.ieee.org/egypts-massive-18gw-benban-solar-park-nears-completion", note: "L'un des plus grands complexes photovoltaïques au monde, près d'Assouan." },
    },
    {
      label: "Dépendance de l'agriculture au Nil",
      value: { value: "plus de 90 % des besoins en eau douce du pays proviennent du Nil", source: "Organisation des Nations unies pour l'alimentation et l'agriculture (FAO)", sourceUrl: "https://www.fao.org/aquastat/en/countries-and-basins/country-profiles/country/egy", note: "Rend l'Égypte vulnérable aux aménagements hydrauliques en amont, dont le barrage éthiopien de la Renaissance (GERD)." },
    },
  ],
  risks: [
    "Stress hydrique sévère et dépendance quasi totale au débit du Nil, menacée par le barrage éthiopien de la Renaissance (GERD)",
    "Élévation du niveau de la mer menaçant le delta du Nil, très peuplé et à faible altitude (dont Alexandrie)",
    "Désertification et salinisation des terres agricoles du delta",
    "Chaleurs extrêmes et tempêtes de sable (khamsin) dans un pays déjà très aride",
    "Pollution atmosphérique et de l'eau, notamment dans l'agglomération du Caire",
  ],
  risksSource: { source: "Programme des Nations unies pour l'environnement (PNUE) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Egypt" },
  summary:
    "L'environnement égyptien est structurellement dominé par la rareté de l'eau douce : le pays dépend du Nil pour plus de 90 % de ses besoins, une situation rendue plus précaire par le remplissage, achevé en 2025, du barrage éthiopien de la Renaissance (GERD), source de tensions diplomatiques persistantes avec l'Éthiopie. Le delta du Nil, zone agricole parmi les plus densément peuplées au monde, est particulièrement exposé à l'élévation du niveau de la mer et à la salinisation des sols côtiers. Sur le plan énergétique, l'Égypte a accéléré ses investissements renouvelables depuis le milieu des années 2010, portés par le parc solaire de Benban, mais reste encore très dépendante du gaz naturel.",
};
