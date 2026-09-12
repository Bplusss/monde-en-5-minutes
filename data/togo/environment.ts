import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 75.1,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=TG",
    note: "Part très élevée mais trompeuse : elle reflète surtout le poids de la biomasse traditionnelle (bois de feu, charbon de bois) dans la consommation énergétique des ménages, plutôt qu'une électricité largement renouvelable — le mix électrique repose lui sur l'hydroélectricité (barrage de Nangbéto, partagé avec le Bénin), des centrales thermiques et des importations régionales.",
  },
  co2PerCapita: {
    value: 0.31,
    unit: "t",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=TG",
    note: "Parmi les plus faibles au monde, conséquence directe d'une industrialisation encore limitée.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 22.1, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=TG" },
    },
    {
      label: "Accès à l'électricité",
      value: { value: 61.1, unit: "% de la population", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=TG" },
    },
  ],
  risks: [
    "Inondations saisonnières et érosion côtière sur le littoral, notamment autour de Lomé et d'Aného",
    "Déforestation liée à la demande en bois de feu et à l'extension des terres agricoles",
    "Sécheresses affectant la savane du nord, en marge de la zone sahélienne",
  ],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Togo" },
  summary:
    "Le Togo affiche des émissions de CO2 par habitant parmi les plus faibles au monde, à la mesure de son faible niveau d'industrialisation, mais reste exposé à une érosion côtière préoccupante sur son étroit littoral et à une déforestation continue, la biomasse (bois de feu, charbon de bois) restant la principale source d'énergie des ménages. L'électrification du pays progresse rapidement mais demeure incomplète, en particulier dans les zones rurales du nord, tandis que la production électrique reste tributaire de l'hydroélectricité du barrage de Nangbéto (partagé avec le Bénin) et d'importations régionales via le réseau ouest-africain d'interconnexion.",
};
