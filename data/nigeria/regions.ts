import type { Region } from "@/lib/types";

/**
 * Les 36 États fédérés et le Territoire de la capitale fédérale (Abuja),
 * codés selon ISO 3166-2:NG. Note : Natural Earth libelle l'État de
 * Nasarawa « Nassarawa » (orthographe non conforme à l'ISO) dans ses
 * données géographiques sous-jacentes — code identique (NG-NA), seul le
 * nom diffère.
 */
export const regions: Region[] = [
  { code: "NG-AB", name: "Abia" },
  { code: "NG-AD", name: "Adamawa" },
  { code: "NG-AK", name: "Akwa Ibom" },
  { code: "NG-AN", name: "Anambra" },
  { code: "NG-BA", name: "Bauchi" },
  { code: "NG-BY", name: "Bayelsa" },
  { code: "NG-BE", name: "Benue" },
  { code: "NG-BO", name: "Borno" },
  { code: "NG-CR", name: "Cross River" },
  { code: "NG-DE", name: "Delta" },
  { code: "NG-EB", name: "Ebonyi" },
  { code: "NG-ED", name: "Edo" },
  { code: "NG-EK", name: "Ekiti" },
  { code: "NG-EN", name: "Enugu" },
  { code: "NG-FC", name: "Territoire de la capitale fédérale" },
  { code: "NG-GO", name: "Gombe" },
  { code: "NG-IM", name: "Imo" },
  { code: "NG-JI", name: "Jigawa" },
  { code: "NG-KD", name: "Kaduna" },
  { code: "NG-KE", name: "Kebbi" },
  { code: "NG-KN", name: "Kano" },
  { code: "NG-KO", name: "Kogi" },
  { code: "NG-KT", name: "Katsina" },
  { code: "NG-KW", name: "Kwara" },
  { code: "NG-LA", name: "Lagos" },
  { code: "NG-NA", name: "Nasarawa" },
  { code: "NG-NI", name: "Niger" },
  { code: "NG-OG", name: "Ogun" },
  { code: "NG-ON", name: "Ondo" },
  { code: "NG-OS", name: "Osun" },
  { code: "NG-OY", name: "Oyo" },
  { code: "NG-PL", name: "Plateau" },
  { code: "NG-RI", name: "Rivers" },
  { code: "NG-SO", name: "Sokoto" },
  { code: "NG-TA", name: "Taraba" },
  { code: "NG-YO", name: "Yobe" },
  { code: "NG-ZA", name: "Zamfara" },
];
