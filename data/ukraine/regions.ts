import type { Region } from "@/lib/types";

/**
 * Les 24 oblasts et la ville à statut spécial de Kyiv, tels que découpés par
 * Natural Earth. La République autonome de Crimée et la ville de Sébastopol
 * — internationalement reconnues comme territoire ukrainien mais occupées
 * par la Russie depuis 2014 — n'apparaissent pas dans cette couche cartographique
 * (Natural Earth n'en fournit pas de géométrie côté ukrainien depuis
 * l'annexion) ; voir territories.ts.
 */
export const regions: Region[] = [
  { code: "UA-74", name: "Tchernihiv" },
  { code: "UA-07", name: "Volhynie" },
  { code: "UA-56", name: "Rivne" },
  { code: "UA-18", name: "Jytomyr" },
  { code: "UA-32", name: "Kyiv (oblast)" },
  { code: "UA-21", name: "Transcarpatie" },
  { code: "UA-77", name: "Tchernivtsi" },
  { code: "UA-26", name: "Ivano-Frankivsk" },
  { code: "UA-51", name: "Odesa" },
  { code: "UA-05", name: "Vinnytsia" },
  { code: "UA-46", name: "Lviv" },
  { code: "UA-59", name: "Soumy" },
  { code: "UA-63", name: "Kharkiv" },
  { code: "UA-09", name: "Louhansk" },
  { code: "UA-14", name: "Donetsk" },
  { code: "UA-65", name: "Kherson" },
  { code: "UA-23", name: "Zaporijjia" },
  { code: "UA-48", name: "Mykolaïv" },
  { code: "UA-53", name: "Poltava" },
  { code: "UA-68", name: "Khmelnytskyi" },
  { code: "UA-61", name: "Ternopil" },
  { code: "UA-12", name: "Dnipropetrovsk" },
  { code: "UA-71", name: "Tcherkassy" },
  { code: "UA-35", name: "Kirovohrad" },
  { code: "UA-30", name: "Kyiv (ville)" },
];
