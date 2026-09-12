import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Présidente de la République",
    name: "Nataša Pirc Musar",
    since: "23 décembre 2022",
    source: "Présidence de la République de Slovénie",
    sourceUrl: "https://www.up-rs.si/up-rs/uprs-eng.nsf/en/index",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Janez Janša",
    since: "4 juin 2026",
    source: "Gouvernement de la République de Slovénie",
    sourceUrl: "https://www.gov.si/en/",
  },
  legislature: {
    name: "Parlement slovène",
    chambers: [
      { name: "Assemblée nationale (Državni zbor)", seats: 90 },
      { name: "Conseil national (Državni svet)", seats: 40 },
    ],
  },
  constitution: {
    adopted: "23 décembre 1991",
    source: "Assemblée nationale (Državni zbor)",
    sourceUrl: "https://www.dz-rs.si/wps/portal/en/Home/AboutNA/PoliticalSystem/Constitution",
  },
  summary:
    "La Slovénie est une république parlementaire dont le Parlement se compose de deux chambres aux pouvoirs très inégaux : l'Assemblée nationale, élue au suffrage universel direct pour quatre ans et seule véritable chambre législative, et le Conseil national, chambre consultative de 40 membres représentant les intérêts sociaux, économiques et locaux, doté d'un simple droit de veto suspensif. La présidente de la République, élue au suffrage universel direct pour cinq ans, exerce des fonctions largement représentatives, l'essentiel du pouvoir exécutif revenant au Premier ministre et à son gouvernement, responsables devant l'Assemblée nationale.",
};
