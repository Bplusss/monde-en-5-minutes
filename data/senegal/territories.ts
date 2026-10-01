import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Sénégal est un État unitaire décentralisé, divisé en 14 régions (les trois dernières — Kaffrine, Kédougou et Sédhiou — créées en 2008), 46 départements, eux-mêmes subdivisés en arrondissements et en communes. La réforme de décentralisation dite « Acte III » (2013) a supprimé les régions en tant que collectivités élues au profit des départements et des communes ; les régions restent des circonscriptions administratives dirigées par un gouverneur. Le territoire est d'un seul tenant, mais la Gambie, enclavée le long du fleuve du même nom, sépare la Casamance au sud du reste du pays. Le Sénégal ne possède aucun territoire d'outre-mer et n'est partie à aucun litige frontalier majeur. La Casamance n'est revendiquée par aucun État voisin, mais la région a connu à partir de 1982 un conflit armé de basse intensité entre l'État et le Mouvement des forces démocratiques de Casamance (MFDC), indépendantiste. Les combats ont fait plusieurs milliers de morts et des dizaines de milliers de déplacés. Après un cessez-le-feu de 2014 et des opérations militaires en 2021-2022, un accord de paix signé en août 2022 à Bissau avec la faction Front Sud du MFDC a été consolidé le 23 février 2025 : il prévoit le dépôt des armes, la réinsertion des combattants et le retour des déplacés.",
  divisions: [
    { name: "Régions", count: 14, source: "Wikipedia", sourceUrl: "https://fr.wikipedia.org/wiki/R%C3%A9gions_du_S%C3%A9n%C3%A9gal" },
    { name: "Départements", count: 46, note: "Dont Keur Massar, 46e département créé en 2021 dans la région de Dakar.", source: "Vie publique Sénégal", sourceUrl: "https://www.vie-publique.sn/collectivites-territoriales/departements" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
