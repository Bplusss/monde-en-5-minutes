import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 2,
    unit: "%",
    year: 2025,
    source: "Ember",
    sourceUrl: "https://ember-energy.org/countries-and-regions/saudi-arabia/",
    note: "Part du solaire et de l'éolien dans l'électricité ; le reste provient du gaz et du pétrole. Le pays vise 50 % d'électricité renouvelable en 2030.",
  },
  co2PerCapita: {
    value: 17.5,
    unit: "t",
    year: 2023,
    source: "EDGAR (Commission européenne), via Worldometers",
    sourceUrl: "https://www.worldometers.info/co2-emissions/saudi-arabia-co2-emissions/",
    note: "Parmi les plus élevées au monde, en raison du dessalement, de la climatisation et d'une électricité produite en partie à partir de pétrole.",
  },
  indicators: [
    {
      label: "Stress hydrique",
      value: {
        value: 974,
        unit: "% des ressources en eau douce renouvelables prélevées",
        year: 2022,
        source: "Banque mondiale (FAO, indicateur ODD 6.4.2)",
        sourceUrl: "https://data.worldbank.org/indicator/ER.H2O.FWST.ZS?locations=SA",
        note: "Le pays prélève près de dix fois ses ressources renouvelables : il puise dans des nappes fossiles et dépend du dessalement pour l'eau potable.",
      },
    },
    {
      label: "Couverture forestière",
      value: { value: 0.5, unit: "% du territoire", year: 2023, source: "Banque mondiale (FAO)", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=SA", note: "Genévriers des montagnes de l'Asir et mangroves côtières." },
    },
  ],
  risks: [
    "Épuisement des nappes fossiles et dépendance au dessalement",
    "Chaleurs extrêmes, en hausse avec le réchauffement climatique",
    "Tempêtes de sable et de poussière",
    "Crues soudaines dans les oueds, comme à Djeddah en 2009",
    "Pollution marine liée aux hydrocarbures dans le golfe Persique",
  ],
  risksSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Saudi_Arabia" },
  summary:
    "L'enjeu principal est l'eau : l'agriculture irriguée a épuisé une partie des nappes fossiles, et les villes dépendent du dessalement. Gros émetteur de CO₂ par habitant, le pays a fixé un objectif de neutralité carbone pour 2060 et développe le solaire, encore marginal dans sa production électrique.",
};
