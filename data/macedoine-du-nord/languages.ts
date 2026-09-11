import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Macédonien",
      kind: "officielle",
      sharePercent: { value: 65.0, unit: "%", year: 2021, source: "Recensement 2021, Office national de la statistique" },
      note: "Langue slave du sud, officielle sur l'ensemble du territoire ; sa reconnaissance internationale et sa proximité avec le bulgare restent des sujets sensibles avec la Bulgarie voisine.",
    },
    {
      name: "Albanais",
      kind: "officielle",
      sharePercent: { value: 24.3, unit: "%", year: 2021, source: "Recensement 2021, Office national de la statistique" },
      note: "Coofficielle sur tout le territoire depuis une réforme constitutionnelle de 2018, et déjà officielle localement dans les municipalités où les Albanais dépassent 20 % de la population depuis l'accord d'Ohrid de 2001.",
    },
    {
      name: "Turc",
      kind: "régionale",
      note: "Reconnue localement, langue de l'héritage ottoman et d'une minorité historique.",
    },
    {
      name: "Romani",
      kind: "régionale",
      note: "Langue de la communauté rom, elle aussi reconnue à l'échelle locale dans certaines municipalités.",
    },
    {
      name: "Serbe, aroumain, bosniaque",
      kind: "régionale",
      note: "Trois autres langues minoritaires bénéficiant d'un statut officiel local, reflet de la mosaïque ethnique du pays.",
    },
  ],
  summary:
    "Le macédonien et l'albanais sont coofficiels sur l'ensemble du pays depuis 2018, l'albanais l'étant de longue date dans les municipalités à forte minorité albanaise en application de l'accord-cadre d'Ohrid de 2001, qui avait mis fin au conflit intercommunautaire de la même année. Turc, romani, serbe, aroumain et bosniaque disposent chacun d'une reconnaissance officielle locale.",
};
