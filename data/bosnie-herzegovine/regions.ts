import type { Region } from "@/lib/types";

/**
 * La Bosnie-Herzégovine se compose de deux entités quasi autonomes — la
 * Fédération de Bosnie-et-Herzégovine (10 cantons) et la Republika Srpska
 * (ici représentée par ses 7 régions statistiques, faute de subdivision
 * administrative intermédiaire officielle) — plus le district de Brčko,
 * sous administration conjointe. Codes internes au site (Natural Earth ne
 * fournit pas de code ISO 3166-2 unique par subdivision bosnienne).
 */
export const regions: Region[] = [
  // Fédération de Bosnie-et-Herzégovine (10 cantons)
  { code: "BA-FBIH-USK", name: "Una-Sana" },
  { code: "BA-FBIH-PK", name: "Posavina" },
  { code: "BA-FBIH-TK", name: "Tuzla" },
  { code: "BA-FBIH-ZDK", name: "Zenica-Doboj" },
  { code: "BA-FBIH-BPK", name: "Podrinje bosniaque (Goražde)" },
  { code: "BA-FBIH-SBK", name: "Bosnie centrale" },
  { code: "BA-FBIH-HNK", name: "Herzégovine-Neretva" },
  { code: "BA-FBIH-ZHK", name: "Herzégovine occidentale" },
  { code: "BA-FBIH-KS", name: "Sarajevo" },
  { code: "BA-FBIH-K10", name: "Canton 10 (Bosnie occidentale)" },
  // Republika Srpska (7 régions statistiques)
  { code: "BA-RS-BL", name: "Banja Luka" },
  { code: "BA-RS-DO", name: "Doboj" },
  { code: "BA-RS-BI", name: "Bijeljina" },
  { code: "BA-RS-VL", name: "Vlasenica" },
  { code: "BA-RS-SR", name: "Sarajevo-Romanija" },
  { code: "BA-RS-FO", name: "Foča" },
  { code: "BA-RS-TR", name: "Trebinje" },
  // District sous administration conjointe
  { code: "BA-BRC", name: "District de Brčko" },
];
