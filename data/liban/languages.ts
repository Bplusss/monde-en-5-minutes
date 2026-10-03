import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    { name: "Arabe", kind: "officielle", note: "Seule langue officielle selon l'article 11 de la Constitution ; l'arabe standard moderne sert à l'écrit, à l'administration et aux médias." },
    { name: "Arabe libanais", kind: "parlée", note: "Dialecte levantin de la vie quotidienne, proche des parlers syriens et palestiniens." },
    { name: "Français", kind: "parlée", note: "Héritage du mandat français ; langue d'enseignement dans de nombreuses écoles. Le Liban est membre de l'Organisation internationale de la Francophonie." },
    { name: "Anglais", kind: "parlée", note: "En progression dans l'enseignement supérieur, les affaires et chez les jeunes." },
    { name: "Arménien", kind: "régionale", note: "Parlé par la communauté arménienne, installée notamment à Bourj Hammoud et Anjar après le génocide de 1915." },
  ],
  summary:
    "L'arabe est la seule langue officielle, mais le plurilinguisme est courant : le français et l'anglais sont des langues d'enseignement dès l'école, et passer d'une langue à l'autre dans une même phrase est fréquent à Beyrouth. Le syriaque subsiste comme langue liturgique de l'Église maronite.",
};
