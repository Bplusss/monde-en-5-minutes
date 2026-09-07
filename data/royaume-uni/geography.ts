import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un archipel insulaire d'Europe du Nord-Ouest",
  areaKm2: {
    value: 241_930,
    unit: "km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/AG.LND.TOTL.K2",
    note: "Superficie terrestre.",
  },
  highestPoint: {
    name: "Ben Nevis",
    elevationM: 1345,
    source: "Ordnance Survey",
    sourceUrl: "https://www.ordnancesurvey.co.uk/",
  },
  borderingCountries: ["Irlande"],
  generalSource: { source: "Office for National Statistics (ONS)", sourceUrl: "https://www.ons.gov.uk/" },
  climate:
    "Climat océanique tempéré, aux hivers doux et étés frais, avec des précipitations fréquentes réparties sur l'année ; plus rudes et humides dans les reliefs du nord et de l'ouest.",
  summary:
    "Le Royaume-Uni occupe la majeure partie des îles Britanniques : la Grande-Bretagne (Angleterre, Écosse, Pays de Galles) et la partie nord-est de l'île d'Irlande (Irlande du Nord). Son relief associe plaines au sud et à l'est, et hauts plateaux et montagnes en Écosse, au Pays de Galles et dans le nord de l'Angleterre.",
};
