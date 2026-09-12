import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Principauté héréditaire constitutionnelle",
  regime: "Monarchie parlementaire à pouvoirs princiers étendus",
  headOfState: {
    title: "Prince régnant",
    name: "Hans-Adam II",
    since: "13 novembre 1989",
    source: "Maison princière de Liechtenstein",
    sourceUrl: "https://en.wikipedia.org/wiki/Hans-Adam_II_of_Liechtenstein",
  },
  headOfGovernment: {
    title: "Chef du gouvernement (Premier ministre)",
    name: "Brigitte Haas",
    since: "10 avril 2025",
    source: "Regierung des Fürstentums Liechtenstein",
    sourceUrl: "https://www.regierung.li/",
  },
  legislature: {
    name: "Landtag",
    chambers: [{ name: "Landtag", seats: 25 }],
  },
  constitution: {
    adopted: "5 octobre 1921 (révisée en profondeur par référendum le 16 mars 2003)",
    source: "Landtag du Liechtenstein",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Liechtenstein",
  },
  summary:
    "Le Liechtenstein est dirigé depuis 1989 par le prince Hans-Adam II, chef de la maison princière de Liechtenstein — l'une des plus anciennes dynasties régnantes d'Europe — mais celui-ci a délégué en 2004 la conduite quotidienne des affaires de l'État à son fils et héritier, le prince héréditaire Alois, agissant comme régent. Un référendum approuvé à 64 % des voix en 2003 a considérablement renforcé les prérogatives du prince, qui peut notamment refuser indéfiniment de sanctionner une loi, révoquer le gouvernement ou dissoudre le Landtag, faisant du Liechtenstein la monarchie aux pouvoirs réels les plus étendus d'Europe occidentale. Le chef du gouvernement, élu par le Landtag puis nommé par le prince, dirige l'exécutif au quotidien ; en 2025, Brigitte Haas est devenue la première femme à occuper cette fonction.",
};
