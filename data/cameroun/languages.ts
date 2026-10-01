import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    { name: "Français", kind: "officielle", note: "Langue officielle, dominante dans l'administration, l'enseignement et les médias ; langue d'usage des huit régions francophones, qui regroupent environ 80 % de la population." },
    { name: "Anglais", kind: "officielle", note: "Langue officielle à égalité avec le français depuis 1961 ; langue d'usage du Nord-Ouest et du Sud-Ouest, l'ancien Cameroun méridional sous tutelle britannique, où s'appliquent aussi la common law et un système éducatif anglo-saxon." },
    { name: "Pidgin camerounais (Kamtok)", kind: "parlée", note: "Créole à base anglaise, langue véhiculaire du Nord-Ouest, du Sud-Ouest et du Littoral, compris bien au-delà des régions anglophones." },
    { name: "Fulfulde (peul)", kind: "régionale", note: "Langue véhiculaire du Nord, de l'Adamaoua et de l'Extrême-Nord, diffusée avec les lamidats peuls au XIXe siècle." },
    { name: "Ewondo, bulu et autres langues beti-fang", kind: "régionale", note: "Langues du Centre et du Sud ; l'ewondo sert de langue véhiculaire à Yaoundé." },
    { name: "Langues bamiléké, bassa, duala", kind: "régionale", note: "Langues de l'Ouest et du littoral ; le duala fut la première langue écrite et enseignée par les missions au XIXe siècle." },
    { name: "Camfranglais", kind: "parlée", note: "Parler urbain mêlant français, anglais et langues locales, surtout utilisé par les jeunes de Douala et de Yaoundé." },
  ],
  summary:
    "Le Cameroun est officiellement bilingue français-anglais depuis la réunification de 1961, héritage du partage du territoire entre la France et le Royaume-Uni après la Première Guerre mondiale ; il est membre à la fois de l'Organisation internationale de la Francophonie et du Commonwealth. Dans les faits, le français domine l'appareil d'État et environ quatre habitants sur cinq vivent dans les régions francophones, un déséquilibre au cœur des revendications anglophones. Le pays compte aussi quelque 250 langues locales, l'une des plus fortes densités linguistiques au monde ; aucune n'a de statut officiel, mais le pidgin, le fulfulde et l'ewondo servent de langues véhiculaires régionales.",
};
