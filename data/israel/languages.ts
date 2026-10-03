import type { LanguagesData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Languages_of_Israel";

export const languages: LanguagesData = {
  entries: [
    { name: "Hébreu", kind: "officielle", note: "Seule langue officielle depuis la loi fondamentale « État-nation » de 2018. Langue liturgique devenue langue parlée moderne à la fin du XIXe siècle." },
    { name: "Arabe", kind: "parlée", note: "Langue co-officielle jusqu'en 2018, dotée depuis d'un « statut spécial » ; langue maternelle de la population arabe." },
    { name: "Russe", kind: "parlée", note: "Parlé par une large partie des quelque un million d'immigrants venus de l'ex-URSS depuis 1989 et de leurs enfants." },
    { name: "Anglais", kind: "parlée", note: "Enseigné dès l'école primaire, très répandu dans l'enseignement supérieur, la haute technologie et les affaires." },
    { name: "Amharique, yiddish, français, ladino", kind: "parlée", note: "Langues de communautés immigrées : Juifs éthiopiens, ultra-orthodoxes (yiddish), immigrants de France et du Maghreb, descendants des Juifs séfarades (judéo-espagnol)." },
  ],
  summary:
    "L'hébreu moderne, ressuscité par le mouvement sioniste autour d'Eliezer Ben-Yehuda, est la langue commune d'une société d'immigrants. La rétrogradation de l'arabe en 2018 a été dénoncée par les citoyens arabes et les Druzes comme une discrimination ; le gouvernement l'a présentée comme symbolique, l'usage de l'arabe étant maintenu dans les faits.",
};
