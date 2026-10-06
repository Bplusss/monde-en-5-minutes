import type { Region } from "@/lib/types";

/**
 * Les 12 États régionaux et les 2 villes à charte (Addis-Abeba, Dire Dawa)
 * depuis la création de l'Éthiopie centrale et de l'Éthiopie du Sud en 2023.
 * Codes ISO 3166-2:ET ; ET-CE et ET-SE sont des codes propres au site, l'ISO
 * n'en ayant pas encore attribué. Aucune population régionale n'est indiquée :
 * il n'y a pas eu de recensement depuis 2007, avant ce redécoupage.
 */
export const regions: Region[] = [
  { code: "ET-AA", name: "Addis-Abeba" },
  { code: "ET-AF", name: "Afar" },
  { code: "ET-AM", name: "Amhara" },
  { code: "ET-BE", name: "Benishangul-Gumuz" },
  { code: "ET-CE", name: "Éthiopie centrale" },
  { code: "ET-DD", name: "Dire Dawa" },
  { code: "ET-GA", name: "Gambela" },
  { code: "ET-HA", name: "Harar" },
  { code: "ET-OR", name: "Oromia" },
  { code: "ET-SE", name: "Éthiopie du Sud" },
  { code: "ET-SI", name: "Sidama" },
  { code: "ET-SO", name: "Somali" },
  { code: "ET-SW", name: "Éthiopie du Sud-Ouest" },
  { code: "ET-TI", name: "Tigré" },
];
