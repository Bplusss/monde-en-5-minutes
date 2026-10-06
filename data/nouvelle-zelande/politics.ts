import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle",
  regime: "Régime parlementaire",
  headOfState: {
    title: "Roi de Nouvelle-Zélande, représenté par un gouverneur général",
    name: "Charles III",
    since: "8 septembre 2022",
    source: "Gouverneur général de Nouvelle-Zélande",
    sourceUrl: "https://gg.govt.nz/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Christopher Luxon",
    since: "27 novembre 2023",
    source: "Gouvernement de Nouvelle-Zélande",
    sourceUrl: "https://www.beehive.govt.nz/",
  },
  legislature: {
    name: "Parlement",
    chambers: [{ name: "Chambre des représentants", seats: 123 }],
  },
  constitution: {
    adopted: "Pas de constitution écrite unique : Constitution Act de 1986, traité de Waitangi de 1840 et autres lois fondamentales",
    source: "Parlement de Nouvelle-Zélande",
    sourceUrl: "https://www.parliament.nz/",
  },
  summary:
    "Royaume du Commonwealth, la Nouvelle-Zélande a pour souverain le roi Charles III, représenté par un gouverneur général. Le pouvoir est exercé par un gouvernement issu d'un Parlement monocaméral, le Sénat ayant été supprimé en 1951. Depuis 1996, les députés sont élus pour trois ans à la proportionnelle mixte, avec des circonscriptions réservées aux électeurs māori, ce qui conduit presque toujours à des coalitions. Le pays n'a pas de constitution écrite unique, et le traité de Waitangi, signé en 1840 avec des chefs māori, occupe une place centrale mais débattue dans ses institutions. Christopher Luxon, chef du Parti national, dirige depuis 2023 une coalition de droite avec ACT et New Zealand First ; les prochaines élections législatives sont fixées au 7 novembre 2026.",
};
