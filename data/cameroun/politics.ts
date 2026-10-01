import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République unitaire décentralisée",
  regime: "Régime présidentiel dominé depuis 1982 par Paul Biya et le Rassemblement démocratique du peuple camerounais (RDPC), dans un cadre multipartite depuis 1990 ; classé « non libre » par plusieurs organisations de défense des droits humains et de la démocratie",
  headOfState: {
    title: "Président de la République",
    name: "Paul Biya",
    since: "6 novembre 1982",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/2025_Cameroonian_presidential_election",
  },
  headOfGovernment: {
    title: "Premier ministre, chef du gouvernement",
    name: "Joseph Dion Ngute",
    since: "4 janvier 2019",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Joseph_Ngute",
  },
  legislature: {
    name: "Parlement du Cameroun",
    chambers: [
      { name: "Assemblée nationale", seats: 180 },
      { name: "Sénat (70 élus au suffrage indirect, 30 nommés par le président)", seats: 100 },
    ],
  },
  constitution: {
    adopted: "Loi constitutionnelle du 18 janvier 1996 ; révisée en 2008 (suppression de la limitation du nombre de mandats présidentiels) et en avril 2026 (création d'un poste de vice-président nommé)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Cameroon",
  },
  summary:
    "Le président, élu pour sept ans au suffrage universel direct à un seul tour et sans limite de mandats depuis 2008, concentre l'essentiel du pouvoir ; il nomme le Premier ministre, traditionnellement originaire de l'une des régions anglophones depuis 1992. Paul Biya, au pouvoir depuis 1982, a été proclamé réélu le 27 octobre 2025 à 92 ans, avec 53,7 % des voix selon le Conseil constitutionnel, face à Issa Tchiroma Bakary (35,2 %), ancien ministre passé à l'opposition, qui a revendiqué la victoire ; Maurice Kamto, principal opposant, avait été écarté de la course. Les manifestations qui ont suivi ont fait entre 16 morts selon le gouvernement et 48 selon des sources onusiennes ; Issa Tchiroma s'est exilé en Gambie et l'opposant Anicet Ekane est mort en détention en décembre 2025. En avril 2026, le Parlement a créé un poste de vice-président nommé par le chef de l'État et appelé à lui succéder en cas de vacance ; il restait vacant fin septembre 2026. Les législatives, initialement prévues en 2025, ont été repoussées deux fois, le mandat des députés étant prorogé jusqu'au 20 décembre 2026, et les municipales l'ont été à février 2027 ; le gouvernement de Joseph Dion Ngute, en place depuis 2019, n'avait toujours pas été remanié malgré l'annonce faite par le président fin 2025.",
};
