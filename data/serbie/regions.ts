import type { Region } from "@/lib/types";

/**
 * Les 25 districts (okruzi) de la Serbie hors Kosovo, plus la Ville de
 * Belgrade (statutairement distincte, code RS-00) — codes ISO 3166-2:RS.
 * Les cinq districts du Kosovo (RS-25 à RS-29) n'existent ni dans le jeu de
 * données Natural Earth utilisé pour générer les cartes du site, ni ici :
 * la géométrie (outline et régions) ne couvre que le territoire sous
 * administration effective de Belgrade, cf. territories.ts.
 *
 * Note : le jeu de données Natural Earth mélange par erreur les libellés de
 * RS-13 et RS-19, qu'il nomme tous deux « Pomoravski » ; le nom correct de
 * RS-19 (Rasinski / Rasina) est restauré ici. La Voïvodine et le Kosovo étant
 * des provinces plutôt que des districts, ils ne figurent pas comme tels
 * dans cette liste de niveau district (voir territories.ts pour la
 * Voïvodine et le Kosovo en tant qu'entités).
 */
export const regions: Region[] = [
  { code: "RS-00", name: "Ville de Belgrade" },
  { code: "RS-01", name: "Bačka du Nord" },
  { code: "RS-02", name: "Banat central" },
  { code: "RS-03", name: "Banat du Nord" },
  { code: "RS-04", name: "Banat du Sud" },
  { code: "RS-05", name: "Bačka occidentale" },
  { code: "RS-06", name: "Bačka du Sud" },
  { code: "RS-07", name: "Srem" },
  { code: "RS-08", name: "Mačva" },
  { code: "RS-09", name: "Kolubara" },
  { code: "RS-10", name: "Podunavlje" },
  { code: "RS-11", name: "Braničevo" },
  { code: "RS-12", name: "Šumadija" },
  { code: "RS-13", name: "Pomoravlje" },
  { code: "RS-14", name: "Bor" },
  { code: "RS-15", name: "Zaječar" },
  { code: "RS-16", name: "Zlatibor" },
  { code: "RS-17", name: "Moravica" },
  { code: "RS-18", name: "Raška" },
  { code: "RS-19", name: "Rasina" },
  { code: "RS-20", name: "Nišava" },
  { code: "RS-21", name: "Toplica" },
  { code: "RS-22", name: "Pirot" },
  { code: "RS-23", name: "Jablanica" },
  { code: "RS-24", name: "Pčinja" },
];
