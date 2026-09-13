import type { Region } from "@/lib/types";

/**
 * Les 28 États et 8 territoires de l'Union, selon la norme ISO 3166-2:IN.
 * Le Jammu-et-Cachemire (IN-JK) et le Ladakh (IN-LA) sont, depuis le
 * 31 octobre 2019, deux territoires de l'Union distincts issus de la
 * réorganisation de l'ancien État du Jammu-et-Cachemire (voir Territoires).
 */
export const regions: Region[] = [
  // États (28)
  { code: "IN-AP", name: "Andhra Pradesh" },
  { code: "IN-AR", name: "Arunachal Pradesh" },
  { code: "IN-AS", name: "Assam" },
  { code: "IN-BR", name: "Bihar" },
  { code: "IN-CG", name: "Chhattisgarh" },
  { code: "IN-GA", name: "Goa" },
  { code: "IN-GJ", name: "Gujarat" },
  { code: "IN-HR", name: "Haryana" },
  { code: "IN-HP", name: "Himachal Pradesh" },
  { code: "IN-JH", name: "Jharkhand" },
  { code: "IN-KA", name: "Karnataka" },
  { code: "IN-KL", name: "Kerala" },
  { code: "IN-MP", name: "Madhya Pradesh" },
  { code: "IN-MH", name: "Maharashtra" },
  { code: "IN-MN", name: "Manipur" },
  { code: "IN-ML", name: "Meghalaya" },
  { code: "IN-MZ", name: "Mizoram" },
  { code: "IN-NL", name: "Nagaland" },
  { code: "IN-OD", name: "Odisha" },
  { code: "IN-PB", name: "Punjab" },
  { code: "IN-RJ", name: "Rajasthan" },
  { code: "IN-SK", name: "Sikkim" },
  { code: "IN-TN", name: "Tamil Nadu" },
  { code: "IN-TS", name: "Telangana" },
  { code: "IN-TR", name: "Tripura" },
  { code: "IN-UP", name: "Uttar Pradesh" },
  { code: "IN-UK", name: "Uttarakhand" },
  { code: "IN-WB", name: "Bengale-Occidental" },
  // Territoires de l'Union (8)
  { code: "IN-AN", name: "Îles Andaman-et-Nicobar" },
  { code: "IN-CH", name: "Chandigarh" },
  { code: "IN-DH", name: "Dadra-et-Nagar-Haveli-et-Daman-et-Diu" },
  { code: "IN-DL", name: "Delhi (NCT)" },
  { code: "IN-JK", name: "Jammu-et-Cachemire" },
  { code: "IN-LA", name: "Ladakh" },
  { code: "IN-LD", name: "Lakshadweep" },
  { code: "IN-PY", name: "Puducherry" },
];
