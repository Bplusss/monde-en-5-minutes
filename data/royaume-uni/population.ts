import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 69_487_000,
    unit: "habitants",
    year: 2025,
    source: "Office for National Statistics (ONS)",
    sourceUrl: "https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/timeseries/ukpop/pop",
    note: "Estimation mi-2025, confirmée par la Banque mondiale.",
  },
  density: {
    value: 287.2,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population ONS ÷ superficie Banque mondiale)",
    note: "Valeur dérivée, non publiée directement par une source unique.",
  },
  summary:
    "Avec 69,5 millions d'habitants, le Royaume-Uni est l'un des pays les plus peuplés d'Europe. La population se concentre très fortement dans le sud-est de l'Angleterre, autour de Londres, ainsi que dans les grandes agglomérations industrielles du centre et du nord (Manchester, Birmingham, Leeds).",
};
