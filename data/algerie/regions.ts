import type { Region } from "@/lib/types";

/**
 * Les 69 wilayas algériennes, dans l'ordre de leur numéro officiel (matricule),
 * selon la loi n° 26-06 du 4 avril 2026 relative à l'organisation territoriale :
 * 48 wilayas historiques (découpage de 1984), 10 wilayas créées en 2019
 * (n° 49 à 58, anciennes wilayas déléguées du Sud) et 11 wilayas créées en 2026
 * (n° 59 à 69, Hauts-Plateaux et Sud, transition administrative jusqu'au
 * 31 décembre 2026).
 *
 * Codes DZ-01 à DZ-58 : ISO 3166-2:DZ. Codes DZ-59 à DZ-69 : construits sur le
 * même modèle à partir du matricule officiel, la norme ISO n'ayant pas encore
 * intégré ces wilayas à la date de rédaction.
 *
 * Aucune population n'est indiquée : le dernier recensement publié (2008)
 * est antérieur aux deux redécoupages et ne correspond plus à ces périmètres.
 *
 * Carte : contours issus d'OpenStreetMap (scripts/geo/build-algerie-regions.mjs),
 * Natural Earth ne fournissant que les 48 wilayas de 1984.
 */
export const regions: Region[] = [
  { code: "DZ-01", name: "Adrar" },
  { code: "DZ-02", name: "Chlef" },
  { code: "DZ-03", name: "Laghouat" },
  { code: "DZ-04", name: "Oum El Bouaghi" },
  { code: "DZ-05", name: "Batna" },
  { code: "DZ-06", name: "Béjaïa" },
  { code: "DZ-07", name: "Biskra" },
  { code: "DZ-08", name: "Béchar" },
  { code: "DZ-09", name: "Blida" },
  { code: "DZ-10", name: "Bouira" },
  { code: "DZ-11", name: "Tamanrasset" },
  { code: "DZ-12", name: "Tébessa" },
  { code: "DZ-13", name: "Tlemcen" },
  { code: "DZ-14", name: "Tiaret" },
  { code: "DZ-15", name: "Tizi Ouzou" },
  { code: "DZ-16", name: "Alger" },
  { code: "DZ-17", name: "Djelfa" },
  { code: "DZ-18", name: "Jijel" },
  { code: "DZ-19", name: "Sétif" },
  { code: "DZ-20", name: "Saïda" },
  { code: "DZ-21", name: "Skikda" },
  { code: "DZ-22", name: "Sidi Bel Abbès" },
  { code: "DZ-23", name: "Annaba" },
  { code: "DZ-24", name: "Guelma" },
  { code: "DZ-25", name: "Constantine" },
  { code: "DZ-26", name: "Médéa" },
  { code: "DZ-27", name: "Mostaganem" },
  { code: "DZ-28", name: "M'Sila" },
  { code: "DZ-29", name: "Mascara" },
  { code: "DZ-30", name: "Ouargla" },
  { code: "DZ-31", name: "Oran" },
  { code: "DZ-32", name: "El Bayadh" },
  { code: "DZ-33", name: "Illizi" },
  { code: "DZ-34", name: "Bordj Bou Arréridj" },
  { code: "DZ-35", name: "Boumerdès" },
  { code: "DZ-36", name: "El Tarf" },
  { code: "DZ-37", name: "Tindouf" },
  { code: "DZ-38", name: "Tissemsilt" },
  { code: "DZ-39", name: "El Oued" },
  { code: "DZ-40", name: "Khenchela" },
  { code: "DZ-41", name: "Souk Ahras" },
  { code: "DZ-42", name: "Tipaza" },
  { code: "DZ-43", name: "Mila" },
  { code: "DZ-44", name: "Aïn Defla" },
  { code: "DZ-45", name: "Naâma" },
  { code: "DZ-46", name: "Aïn Témouchent" },
  { code: "DZ-47", name: "Ghardaïa" },
  { code: "DZ-48", name: "Relizane" },
  { code: "DZ-49", name: "Timimoun" },
  { code: "DZ-50", name: "Bordj Badji Mokhtar" },
  { code: "DZ-51", name: "Ouled Djellal" },
  { code: "DZ-52", name: "Béni Abbès" },
  { code: "DZ-53", name: "In Salah" },
  { code: "DZ-54", name: "In Guezzam" },
  { code: "DZ-55", name: "Touggourt" },
  { code: "DZ-56", name: "Djanet" },
  { code: "DZ-57", name: "El M'Ghair" },
  { code: "DZ-58", name: "El Meniaa" },
  { code: "DZ-59", name: "Aflou" },
  { code: "DZ-60", name: "Barika" },
  { code: "DZ-61", name: "El Kantara" },
  { code: "DZ-62", name: "Bir El Ater" },
  { code: "DZ-63", name: "El Aricha" },
  { code: "DZ-64", name: "Ksar Chellala" },
  { code: "DZ-65", name: "Aïn Oussera" },
  { code: "DZ-66", name: "Messaad" },
  { code: "DZ-67", name: "Ksar El Boukhari" },
  { code: "DZ-68", name: "Bou Saâda" },
  { code: "DZ-69", name: "El Abiodh Sidi Cheikh" },
];
