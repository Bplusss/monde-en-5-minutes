import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République fédérale",
  regime: "Régime parlementaire",
  headOfState: {
    title: "Président de la République fédérale démocratique d'Éthiopie",
    name: "Taye Atske Selassie",
    since: "7 octobre 2024",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Taye_Atske_Selassie",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Abiy Ahmed",
    since: "2 avril 2018",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Abiy_Ahmed",
  },
  legislature: {
    name: "Assemblée parlementaire fédérale",
    chambers: [
      { name: "Chambre des représentants des peuples", seats: 547 },
      { name: "Chambre de la Fédération", seats: 153 },
    ],
  },
  constitution: {
    adopted: "8 décembre 1994, entrée en vigueur le 21 août 1995",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Ethiopia",
  },
  summary:
    "L'Éthiopie est une république fédérale parlementaire fondée sur le fédéralisme ethnique : les régions sont largement découpées selon les peuples qui y vivent, et la Constitution leur reconnaît en théorie un droit à la sécession. Le Premier ministre, issu de la majorité parlementaire, détient l'essentiel du pouvoir, le président ayant un rôle protocolaire. Arrivé au pouvoir en 2018, Abiy Ahmed a reçu le prix Nobel de la paix en 2019 pour la réconciliation avec l'Érythrée, avant que son mandat ne soit marqué par la guerre du Tigré (2020-2022) puis par des insurrections en Amhara et en Oromia. Son Parti de la prospérité a remporté 438 des 547 sièges aux élections du 1er juin 2026, auxquelles le Tigré n'a pas pris part.",
};
