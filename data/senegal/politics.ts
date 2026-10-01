import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République unitaire, laïque et décentralisée",
  regime: "Régime présidentiel avec Premier ministre responsable devant l'Assemblée nationale ; démocratie pluraliste n'ayant jamais connu de coup d'État",
  headOfState: {
    title: "Président de la République",
    name: "Bassirou Diomaye Faye",
    since: "2 avril 2024",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/2024_Senegalese_presidential_election",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Ahmadou Al Aminou Lô",
    since: "25 mai 2026",
    source: "Primature du Sénégal",
    sourceUrl: "https://primature.sn/le-gouvernement/monsieur-ahmadou-al-aminou-mohamed-lo",
  },
  legislature: {
    name: "Assemblée nationale",
    chambers: [{ name: "Assemblée nationale (monocamérale)", seats: 165 }],
  },
  constitution: {
    adopted: "Adoptée par référendum le 7 janvier 2001 ; révisée notamment en 2016 (mandat présidentiel ramené à cinq ans, limité à deux)",
    source: WIKI,
    sourceUrl: "https://fr.wikipedia.org/wiki/Constitution_du_S%C3%A9n%C3%A9gal",
  },
  summary:
    "Le président est élu au suffrage universel direct pour cinq ans, renouvelable une fois ; il nomme le Premier ministre, responsable devant une Assemblée nationale de 165 députés. Le Sénégal a connu trois alternances pacifiques (2000, 2012, 2024). En février 2024, le report de la présidentielle décidé par Macky Sall est annulé par le Conseil constitutionnel ; le 24 mars, Bassirou Diomaye Faye, candidat du parti Pastef libéré de prison dix jours plus tôt, l'emporte dès le premier tour avec 54,3 % des voix et nomme Premier ministre le chef de son parti, Ousmane Sonko, que sa condamnation pour diffamation avait rendu inéligible. Aux législatives anticipées du 17 novembre 2024, le Pastef obtient 130 sièges sur 165. Les tensions croissantes entre les deux hommes, notamment sur la dette et les relations avec le FMI, aboutissent au limogeage de Sonko le 22 mai 2026 ; élu président de l'Assemblée nationale dans les jours suivants, il dispose de la majorité parlementaire face à un gouvernement dirigé par Ahmadou Al Aminou Lô, ancien cadre de la BCEAO, auquel le Pastef a officiellement refusé de participer. Cette cohabitation de fait au sein du même camp constitue, au 1er octobre 2026, la principale incertitude politique du pays.",
};
