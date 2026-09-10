import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Coprincipauté parlementaire",
  regime: "Démocratie parlementaire",
  headOfState: {
    title: "Coprinces (chefs d'État conjoints)",
    name: "Emmanuel Macron et Josep-Lluís Serrano Pentinat",
    since: "31 mai 2025",
    source: "Coprinces d'Andorre",
    sourceUrl: "https://en.wikipedia.org/wiki/Co-princes_of_Andorra",
  },
  headOfGovernment: {
    title: "Cap de Govern (chef du gouvernement)",
    name: "Xavier Espot Zamora",
    since: "16 mai 2019",
    source: "Govern d'Andorra",
    sourceUrl: "https://www.govern.ad/",
  },
  legislature: {
    name: "Consell General (Conseil général)",
    chambers: [{ name: "Consell General", seats: 28 }],
  },
  constitution: {
    adopted: "14 mars 1993",
    source: "Consell General",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Andorra",
  },
  summary:
    "L'Andorre est l'une des dernières coprincipautés au monde : ses deux chefs d'État, à égalité de rang, sont de droit le président de la République française et l'évêque catalan d'Urgell — une survivance directe du paréage de 1278 qui avait mis fin aux disputes féodales sur les vallées andorranes. Le président français devient coprince par sa fonction (son mandat suit donc les échéances électorales françaises), tandis que l'évêque d'Urgell l'est par sa nomination pontificale. Le pouvoir exécutif réel appartient toutefois au chef du gouvernement, responsable devant le Consell General, depuis la première Constitution écrite du pays, adoptée par référendum en 1993.",
};
