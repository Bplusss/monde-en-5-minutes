import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle fédérale élective",
  regime: "Régime parlementaire",
  headOfState: {
    title: "Roi (Yang di-Pertuan Agong)",
    name: "Sultan Ibrahim",
    since: "31 janvier 2024",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Ibrahim_of_Johor",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Anwar Ibrahim",
    since: "24 novembre 2022",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Anwar_Ibrahim",
  },
  legislature: {
    name: "Parlement",
    chambers: [
      { name: "Dewan Rakyat (Chambre des représentants)", seats: 222 },
      { name: "Dewan Negara (Sénat)", seats: 70 },
    ],
  },
  constitution: {
    adopted: "En vigueur le 27 août 1957, quelques jours avant l'indépendance de la Fédération de Malaisie ; étendue à la Malaisie en 1963",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Malaysia",
  },
  summary:
    "La Malaisie a une monarchie unique au monde : le roi est élu pour cinq ans par la Conférence des souverains parmi les neuf dirigeants héréditaires des États malais, à tour de rôle. Le Premier ministre est issu de la majorité de la Chambre des représentants. La coalition Barisan Nasional a gouverné sans interruption de l'indépendance à 2018, date de sa défaite sur fond de scandale de détournement de fonds public 1MDB, qui a valu la prison à l'ancien Premier ministre Najib Razak. Après une période d'instabilité, les élections de 2022 ont produit un Parlement sans majorité, et Anwar Ibrahim, longtemps figure de l'opposition, dirige un gouvernement d'union. Les prochaines élections législatives doivent se tenir au plus tard début 2028.",
};
