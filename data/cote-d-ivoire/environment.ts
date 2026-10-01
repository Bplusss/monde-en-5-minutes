import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 58.2,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=CI",
    note: "Part de la consommation finale d'énergie ; elle reflète surtout l'usage de la biomasse traditionnelle (bois de feu, charbon de bois) par les ménages. L'électricité provient majoritairement de centrales au gaz, complétées par l'hydroélectricité (barrages de Kossou, Taabo, Buyo, Soubré).",
  },
  co2PerCapita: {
    value: 0.59,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=CI",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 7.9, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=CI", note: "La forêt dense, qui couvrait environ la moitié du territoire au début du XXe siècle, a été largement défrichée, principalement au profit des plantations de cacao." },
    },
    {
      label: "Accès à l'électricité",
      value: { value: 72.9, unit: "% de la population", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=CI" },
    },
  ],
  risks: [
    "Déforestation liée à l'extension des plantations de cacao, y compris dans les forêts classées",
    "Érosion côtière et inondations urbaines, notamment à Abidjan pendant la grande saison des pluies",
    "Irrégularité croissante des pluies, qui affecte les rendements agricoles et la production hydroélectrique",
    "Pollution liée à l'orpaillage clandestin dans le centre et le nord",
  ],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Ivory_Coast" },
  summary:
    "La Côte d'Ivoire a perdu l'essentiel de sa forêt tropicale en un siècle, sous l'effet de l'expansion agricole et en premier lieu des plantations de cacao, qui ont aussi empiété sur les aires protégées. Le parc national de Taï, l'un des derniers grands massifs de forêt primaire d'Afrique de l'Ouest, et le parc national de la Comoé sont inscrits au patrimoine mondial de l'UNESCO. Le règlement européen contre la déforestation importée pousse la filière à tracer l'origine des fèves. Les émissions de CO2 par habitant restent faibles, mais le littoral, et en particulier Abidjan, est exposé à l'érosion et aux inondations meurtrières lors des fortes pluies.",
};
