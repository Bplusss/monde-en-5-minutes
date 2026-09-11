import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle héréditaire",
  regime: "Monarchie constitutionnelle",
  headOfState: {
    title: "Prince souverain",
    name: "Albert II",
    since: "6 avril 2005",
    source: "Palais princier de Monaco",
    sourceUrl: "https://www.palais.mc/",
  },
  headOfGovernment: {
    title: "Ministre d'État",
    name: "Christophe Mirmand",
    since: "Juillet 2025",
    source: "Gouvernement princier de Monaco",
    sourceUrl: "https://en.gouv.mc/",
  },
  legislature: {
    name: "Conseil national",
    chambers: [{ name: "Conseil national", seats: 24 }],
  },
  constitution: {
    adopted: "17 décembre 1962",
    source: "Conseil national",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Monaco",
  },
  summary:
    "Le prince souverain, issu de la famille Grimaldi qui règne sans interruption depuis 1297, détient un pouvoir exécutif étendu et partage l'initiative législative avec le Conseil national élu. Le ministre d'État, traditionnellement un haut fonctionnaire français nommé par le prince en accord avec Paris, dirige le gouvernement princier. Un traité franco-monégasque de 2002 a garanti la pérennité de la souveraineté monégasque même en l'absence d'héritier direct, mettant fin à la clause de 1918 qui prévoyait le rattachement à la France dans un tel cas.",
};
