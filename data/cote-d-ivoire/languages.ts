import type { LanguagesData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://fr.wikipedia.org/wiki/Langues_en_C%C3%B4te_d%27Ivoire";

export const languages: LanguagesData = {
  entries: [
    { name: "Français", kind: "officielle", note: "Seule langue officielle, de l'administration, de l'enseignement et des médias ; parlé dans une variante locale et, à Abidjan, souvent comme première langue." },
    { name: "Dioula", kind: "parlée", note: "Langue mandingue, principale langue véhiculaire du commerce et des marchés, en particulier dans le nord et dans les villes." },
    { name: "Baoulé", kind: "régionale", note: "Langue akan du centre du pays (Bouaké, Yamoussoukro), la plus parlée comme langue maternelle." },
    { name: "Sénoufo", kind: "régionale", note: "Groupe de langues gour (voltaïques) du nord, autour de Korhogo." },
    { name: "Bété et autres langues krou", kind: "régionale", note: "Langues du centre-ouest et du sud-ouest (Gagnoa, Daloa, Soubré)." },
    { name: "Nouchi", kind: "parlée", note: "Argot urbain né à Abidjan dans les années 1970, mêlant français et langues ivoiriennes, très présent dans la musique et chez les jeunes." },
  ],
  summary:
    "Le français est la seule langue officielle de la Côte d'Ivoire, pays qui compte environ soixante-dix langues nationales réparties en quatre familles : kwa (dont le baoulé et l'agni, au centre et à l'est), mandé (dont le dioula et le yacouba, au nord-ouest et à l'ouest), gour (dont le sénoufo, au nord) et krou (dont le bété, au sud-ouest). Aucune ne domine à l'échelle nationale : le dioula sert de langue véhiculaire, tandis que le français, appris à l'école, joue un rôle de langue commune bien plus large que dans la plupart des pays voisins. À Abidjan s'est développé le nouchi, argot mêlant français et langues locales.",
};
