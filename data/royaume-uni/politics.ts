import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle",
  regime: "Monarchie parlementaire",
  headOfState: {
    title: "Roi",
    name: "Charles III",
    since: "8 septembre 2022",
    source: "Wikidata",
    sourceUrl: "https://www.wikidata.org/wiki/Q145",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Andy Burnham",
    since: "20 juillet 2026",
    source: "Wikidata",
    sourceUrl: "https://www.wikidata.org/wiki/Q145",
  },
  legislature: {
    name: "Parlement",
    chambers: [
      { name: "Chambre des communes", seats: 650 },
      { name: "Chambre des lords", seats: 800 },
    ],
  },
  constitution: {
    adopted: "Non codifiée — constitution coutumière, fondée sur un ensemble de lois, conventions et jurisprudences",
    source: "UK Parliament",
    sourceUrl: "https://www.parliament.uk/",
  },
  summary:
    "Le Royaume-Uni est une monarchie constitutionnelle sans constitution écrite unique : le roi est chef de l'État, avec un rôle largement cérémoniel, tandis que le Premier ministre, responsable devant la Chambre des communes, dirige le gouvernement.",
};
