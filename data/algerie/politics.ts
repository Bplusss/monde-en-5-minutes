import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République unitaire à régime présidentiel",
  regime: "Pouvoir exécutif concentré entre les mains du président, appuyé sur l'armée ; multipartisme encadré, libertés de la presse et de manifestation restreintes selon les organisations de défense des droits humains",
  headOfState: {
    title: "Président de la République algérienne démocratique et populaire",
    name: "Abdelmadjid Tebboune",
    since: "19 décembre 2019",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Abdelmadjid_Tebboune",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Sifi Ghrieb",
    since: "28 août 2025 (par intérim, confirmé le 14 septembre 2025)",
    source: "Jeune Afrique",
    sourceUrl: "https://www.jeuneafrique.com/1721672/politique/en-algerie-abdelmadjid-tebboune-confirme-sifi-ghrieb-au-poste-de-premier-ministre/",
  },
  legislature: {
    name: "Parlement algérien",
    chambers: [
      { name: "Assemblée populaire nationale (APN)", seats: 407 },
      { name: "Conseil de la nation (deux tiers élus au suffrage indirect, un tiers nommé par le président)", seats: 174 },
    ],
  },
  constitution: {
    adopted: "Approuvée par référendum le 1ᵉʳ novembre 2020 ; révision « technique » de douze articles adoptée par le Parlement le 25 mars 2026",
    source: "Algérie Eco",
    sourceUrl: "https://algerie-eco.com/2026/03/25/algerie-le-parlement-adopte-le-projet-de-loi-sur-lamendement-technique-de-la-constitution/",
  },
  summary:
    "Le président, élu au suffrage universel direct pour cinq ans (deux mandats au plus), nomme le Premier ministre, préside le Conseil des ministres et détient le portefeuille de la Défense ; l'armée reste un pilier central du pouvoir depuis l'indépendance. Élu en décembre 2019 au terme du Hirak, mouvement de contestation qui avait obtenu le départ d'Abdelaziz Bouteflika, Abdelmadjid Tebboune a été réélu le 7 septembre 2024 avec 84,3 % des voix selon la Cour constitutionnelle, pour une participation de 46 %. Sifi Ghrieb, ancien dirigeant industriel sans étiquette, dirige le gouvernement depuis 2025. Aux législatives du 2 juillet 2026, marquées par une participation record à la baisse (20,9 %), le FLN est arrivé en tête (91 sièges) devant le RND (74) et le Front El Moustakbal (56) ; le gouvernement Ghrieb a été maintenu. Une révision constitutionnelle adoptée par le Parlement en mars 2026 a notamment modifié la représentation des wilayas au Conseil de la nation. À l'extérieur, Alger a rompu ses relations diplomatiques avec le Maroc en 2021 sur fond de soutien au Front Polisario au Sahara occidental, et a traversé avec la France une crise ouverte à l'été 2024, en voie d'apaisement depuis le printemps 2026.",
};
