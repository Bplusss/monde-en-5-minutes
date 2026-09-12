import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République parlementaire à direction collégiale (diarchie)",
  regime: "Démocratie parlementaire",
  headOfState: {
    title: "Capitaines-Régents (deux chefs d'État conjoints)",
    name: "Vladimiro Selva et Alice Mina",
    since: "1er avril 2026",
    source: "Grand Conseil général / Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Captain_Regent",
  },
  headOfGovernment: {
    title: "Secrétaire d'État aux Affaires étrangères (chef de facto du gouvernement)",
    name: "Luca Beccari",
    since: "8 janvier 2020",
    source: "Segreteria di Stato per gli Affari Esteri",
    sourceUrl: "https://en.wikipedia.org/wiki/San_Marino_Secretary_of_State_for_Foreign_and_Political_Affairs",
  },
  legislature: {
    name: "Grand Conseil général (Consiglio Grande e Generale)",
    chambers: [{ name: "Grand Conseil général (monocaméral)", seats: 60 }],
  },
  constitution: {
    adopted: "8 juillet 1974 (Déclaration des droits des citoyens, qui complète les Statuts de 1600)",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Politics_of_San_Marino",
  },
  summary:
    "Particularité unique au monde : Saint-Marin est dirigé par deux Capitaines-Régents, élus conjointement par le Grand Conseil général pour un mandat de seulement six mois (du 1ᵉʳ avril au 1ᵉʳ octobre, puis du 1ᵉʳ octobre au 1ᵉʳ avril), traditionnellement issus de forces politiques opposées afin de maintenir un équilibre entre les principaux courants du pays. Dans la pratique quotidienne, c'est le secrétaire d'État aux Affaires étrangères qui assume, en l'absence de fonction de premier ministre dans les institutions sammarinaises, le rôle de chef de facto du gouvernement. Les Statuts de 1600, toujours partiellement en vigueur, sont souvent cités comme l'une des plus anciennes constitutions écrites encore appliquées au monde.",
};
