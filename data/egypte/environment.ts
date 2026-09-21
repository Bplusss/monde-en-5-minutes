import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 13,
    unit: "%",
    year: 2025,
    source: "Ember",
    sourceUrl: "https://ember-energy.org/countries-and-regions/egypt/",
    note: "Essentiellement d'origine hydroélectrique (haut barrage d'Assouan) et solaire ; le pays a fortement accéléré ses investissements solaires depuis la mise en service du parc de Benban, l'un des plus grands parcs photovoltaïques du monde (1,8 GW), près d'Assouan, et vise désormais 42 à 45 % d'électricité renouvelable d'ici le milieu des années 2030, contre environ 9 % en 2016.",
  },
  co2PerCapita: {
    value: 2.2,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas / Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/egypt",
    note: "Émissions par habitant modérées au regard du niveau de développement du pays, mais en hausse structurelle sous l'effet de la croissance démographique et de la consommation croissante de gaz naturel dans la production électrique.",
  },
  indicators: [
    {
      label: "Parc solaire de Benban",
      value: { value: "1,8 GW de capacité installée", source: "Wikipedia / Banque africaine de développement", sourceUrl: "https://spectrum.ieee.org/egypts-massive-18gw-benban-solar-park-nears-completion", note: "L'un des plus grands complexes photovoltaïques au monde, situé près d'Assouan, dans le désert Occidental." },
    },
    {
      label: "Dépendance de l'agriculture au Nil",
      value: { value: "plus de 90 % des besoins en eau douce du pays proviennent du Nil", source: "Organisation des Nations unies pour l'alimentation et l'agriculture (FAO)", sourceUrl: "https://www.fao.org/aquastat/en/countries-and-basins/country-profiles/country/egy", note: "Une dépendance qui rend l'Égypte particulièrement vulnérable aux aménagements hydrauliques réalisés en amont, au premier rang desquels le grand barrage éthiopien de la Renaissance (GERD) sur le Nil bleu, source de tensions diplomatiques persistantes avec l'Éthiopie et le Soudan." },
    },
  ],
  risks: [
    "Stress hydrique sévère et dépendance quasi totale au débit du Nil, menacée par le remplissage du barrage éthiopien de la Renaissance (GERD)",
    "Élévation du niveau de la mer menaçant le delta du Nil, très peuplé et à faible altitude (dont Alexandrie)",
    "Désertification et salinisation des terres agricoles du delta",
    "Chaleurs extrêmes et tempêtes de sable (khamsin) dans un pays déjà très aride",
    "Pollution atmosphérique et de l'eau, notamment dans l'agglomération du Caire",
  ],
  risksSource: { source: "Programme des Nations unies pour l'environnement (PNUE) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Egypt" },
  summary:
    "L'environnement égyptien est structurellement dominé par la rareté de l'eau douce : le pays, presque entièrement désertique, dépend du Nil pour plus de 90 % de ses besoins, une situation rendue plus précaire encore par le remplissage, achevé en 2025, du grand barrage éthiopien de la Renaissance (GERD) sur le Nil bleu, qui alimente des tensions diplomatiques persistantes avec l'Éthiopie malgré l'absence d'accord contraignant sur le partage des eaux du fleuve. Le delta du Nil, l'une des zones agricoles les plus densément peuplées au monde, est par ailleurs particulièrement exposé à l'élévation du niveau de la mer et à la salinisation des sols côtiers, deux menaces qui pourraient affecter des millions d'habitants et une part significative des terres arables du pays d'ici le milieu du siècle. Sur le plan énergétique, l'Égypte a nettement accéléré ses investissements dans les renouvelables depuis le milieu des années 2010, portés notamment par le gigantesque parc solaire de Benban près d'Assouan, mais reste encore très dépendante du gaz naturel et, dans une moindre mesure, de l'hydroélectricité du haut barrage d'Assouan pour sa production électrique.",
};
