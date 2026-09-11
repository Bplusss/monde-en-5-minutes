import type { Region } from "@/lib/types";

/**
 * Les 32 raions, les 2 municipalités (Chișinău, Bălți), l'unité territoriale
 * autonome de Găgăuzia et les districts de la rive gauche du Dniestr
 * (Transnistrie, hors du contrôle de l'administration moldave) tels que
 * découpés par Natural Earth. Le code MD-SN regroupe la majeure partie du
 * territoire transnistrien sous le nom générique « Transnistrie » ; Camenca,
 * Grigoriopol et Bender apparaissent séparément car géométriquement
 * disjoints dans la source.
 */
export const regions: Region[] = [
  { code: "MD-BR", name: "Briceni" },
  { code: "MD-ED", name: "Edineț" },
  { code: "MD-RI", name: "Rîșcani" },
  { code: "MD-GL", name: "Glodeni" },
  { code: "MD-FA", name: "Fălești" },
  { code: "MD-UN", name: "Ungheni" },
  { code: "MD-NI", name: "Nisporeni" },
  { code: "MD-HI", name: "Hîncești" },
  { code: "MD-LE", name: "Leova" },
  { code: "MD-CT", name: "Cantemir" },
  { code: "MD-CA", name: "Cahul" },
  { code: "MD-OC", name: "Ocnița" },
  { code: "MD-DO", name: "Dondușeni" },
  { code: "MD-SO", name: "Soroca" },
  { code: "MD-CAM", name: "Camenca" },
  { code: "MD-RE", name: "Rezina" },
  { code: "MD-SN", name: "Transnistrie" },
  { code: "MD-GRI", name: "Grigoriopol" },
  { code: "MD-BD", name: "Bender" },
  { code: "MD-SV", name: "Ștefan Vodă" },
  { code: "MD-CS", name: "Căușeni" },
  { code: "MD-CM", name: "Cimișlia" },
  { code: "MD-BS", name: "Basarabeasca" },
  { code: "MD-TA", name: "Taraclia" },
  { code: "MD-GA", name: "Găgăuzia" },
  { code: "MD-CR", name: "Criuleni" },
  { code: "MD-ST", name: "Strășeni" },
  { code: "MD-AN", name: "Anenii Noi" },
  { code: "MD-OR", name: "Orhei" },
  { code: "MD-CU", name: "Chișinău" },
  { code: "MD-TE", name: "Telenești" },
  { code: "MD-SD", name: "Șoldănești" },
  { code: "MD-FL", name: "Florești" },
  { code: "MD-IA", name: "Ialoveni" },
  { code: "MD-CL", name: "Călărași" },
  { code: "MD-DR", name: "Drochia" },
  { code: "MD-SI", name: "Sîngerei" },
  { code: "MD-BA", name: "Bălți" },
];
