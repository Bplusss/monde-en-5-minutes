import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République unitaire à régime présidentiel",
  regime: "Régime présidentiel (IIIe République, Constitution de 2016) dominé par le parti présidentiel, le RHDP, dans un cadre multipartite",
  headOfState: {
    title: "Président de la République",
    name: "Alassane Ouattara",
    since: "4 décembre 2010 (effectivement au pouvoir depuis le 11 avril 2011) ; réinvesti pour un quatrième mandat le 8 décembre 2025",
    source: "Conseil constitutionnel, via APA News",
    sourceUrl: "https://fr.apanews.net/news/alassane-ouattara-prete-serment-pour-un-4e-mandat/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Robert Beugré Mambé",
    since: "16 octobre 2023 (reconduit en janvier 2026, gouvernement Beugré Mambé II)",
    source: WIKI,
    sourceUrl: "https://fr.wikipedia.org/wiki/Gouvernement_Beugr%C3%A9_Mamb%C3%A9_II",
  },
  legislature: {
    name: "Parlement de Côte d'Ivoire",
    chambers: [
      { name: "Assemblée nationale", seats: 255 },
      { name: "Sénat (deux tiers élus au suffrage indirect, un tiers nommés par le président)", seats: 99 },
    ],
  },
  constitution: {
    adopted: "Approuvée par référendum le 30 octobre 2016, promulguée le 8 novembre 2016 (IIIe République) ; révisée en mars 2020",
    source: WIKI,
    sourceUrl: "https://fr.wikipedia.org/wiki/Constitution_ivoirienne_de_2016",
  },
  summary:
    "Le président, élu au suffrage universel direct pour cinq ans, détient l'essentiel du pouvoir exécutif ; il nomme le vice-président (Tiémoko Meyliet Koné depuis 2022) et le Premier ministre. Alassane Ouattara a été réélu le 25 octobre 2025 pour un quatrième mandat avec 89,77 % des suffrages exprimés et une participation de 50 %. Ses deux principaux adversaires avaient été écartés : Laurent Gbagbo, radié des listes électorales après une condamnation pénale, et Tidjane Thiam, président du PDCI, jugé inéligible pour avoir encore détenu la nationalité française lors de son inscription. L'opposition conteste la légalité de ces candidatures successives, que le pouvoir justifie par la remise à zéro du décompte des mandats avec la Constitution de 2016. Le scrutin a été suivi de violences ayant fait au moins onze morts selon le gouvernement. Aux législatives du 27 décembre 2025 (participation de 35 %), le RHDP a obtenu 197 des 255 sièges, devant le PDCI (32).",
};
