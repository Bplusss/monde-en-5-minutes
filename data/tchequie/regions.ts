import type { Region } from "@/lib/types";

/** Les 13 régions (kraje) tchèques et Prague, qui a le statut de région à part entière. */
export const regions: Region[] = [
  { code: "CZ-PR", name: "Prague" },
  { code: "CZ-ST", name: "Bohême-Centrale" },
  { code: "CZ-JC", name: "Bohême-du-Sud" },
  { code: "CZ-PL", name: "Plzeň" },
  { code: "CZ-KA", name: "Karlovy Vary" },
  { code: "CZ-US", name: "Ústí nad Labem" },
  { code: "CZ-LI", name: "Liberec" },
  { code: "CZ-KR", name: "Hradec Králové" },
  { code: "CZ-PA", name: "Pardubice" },
  { code: "CZ-VY", name: "Vysočina" },
  { code: "CZ-JM", name: "Moravie-du-Sud" },
  { code: "CZ-OL", name: "Olomouc" },
  { code: "CZ-ZL", name: "Zlín" },
  { code: "CZ-MO", name: "Moravie-Silésie" },
];
