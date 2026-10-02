import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 13.0,
    unit: "%",
    year: 2024,
    source: "Agence internationale de l'énergie (AIE)",
    sourceUrl: "https://www.iea.org/countries/south-africa",
    note: "Modeste mais en croissance rapide : le charbon domine le mix électrique, mais la crise du délestage a déclenché depuis 2022-2023 un essor de l'autoproduction solaire privée.",
  },
  co2PerCapita: {
    value: 6.9,
    unit: "t",
    year: 2024,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Très élevées pour un pays à revenu intermédiaire, du fait du charbon (dont Sasol, qui le transforme en carburants liquides) ; parmi les plus hautes d'Afrique.",
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
        note: "Unique sur le continent : la centrale de Koeberg, près du Cap, exploitée par Eskom depuis 1984-1985, est la seule centrale nucléaire d'Afrique.",
      },
    },
    {
      label: "Part du charbon dans l'électricité",
      value: { value: 83.0, unit: "%", year: 2024, source: "lowcarbonpower.org / Agence internationale de l'énergie", sourceUrl: "https://www.iea.org/countries/south-africa", note: "L'un des mix les plus intensifs en charbon au monde ; le parc vieillissant est à l'origine de la crise de délestage." },
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
    "L'Afrique du Sud est l'un des pays les plus intensifs en carbone au monde rapporté à son niveau de développement, du fait du charbon et de la pétrochimie de synthèse Sasol, héritage des sanctions pétrolières de l'apartheid. Point chaud mondial de biodiversité endémique (fynbos du Cap, parc iSimangaliso), le pays reste structurellement pauvre en eau : Le Cap a frôlé le « Jour zéro » (rupture totale d'approvisionnement) en 2018.",
};
