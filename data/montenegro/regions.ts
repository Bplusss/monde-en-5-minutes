import type { Region } from "@/lib/types";

/**
 * Municipalités (opštine) telles que découpées par Natural Earth pour le Monténégro
 * (21 unités). Cette liste correspond au découpage administratif antérieur aux
 * scissions les plus récentes : Natural Earth ne distingue pas encore Tuzi
 * (détachée de Podgorica en 2018), Petnjica (détachée de Berane en 2013),
 * Gusinje (détachée de Plav en 2014) ni Zeta (détachée de Podgorica en 2022),
 * ce qui porte le nombre officiel actuel de municipalités à 25. Les noms
 * suivent l'orthographe monténégrine ; « Nikšić » est ici corrigé de la
 * coquille « Nikšic » présente dans la source Natural Earth (caron manquant
 * sur le c final).
 */
export const regions: Region[] = [
  { code: "ME-01", name: "Andrijevica" },
  { code: "ME-02", name: "Bar" },
  { code: "ME-03", name: "Berane" },
  { code: "ME-04", name: "Bijelo Polje" },
  { code: "ME-05", name: "Budva" },
  { code: "ME-06", name: "Cetinje" },
  { code: "ME-07", name: "Danilovgrad" },
  { code: "ME-08", name: "Herceg Novi" },
  { code: "ME-09", name: "Kolašin" },
  { code: "ME-10", name: "Kotor" },
  { code: "ME-11", name: "Mojkovac" },
  { code: "ME-12", name: "Nikšić" },
  { code: "ME-13", name: "Plav" },
  { code: "ME-14", name: "Pljevlja" },
  { code: "ME-15", name: "Plužine" },
  { code: "ME-16", name: "Podgorica" },
  { code: "ME-17", name: "Rožaje" },
  { code: "ME-18", name: "Šavnik" },
  { code: "ME-19", name: "Tivat" },
  { code: "ME-20", name: "Ulcinj" },
  { code: "ME-21", name: "Žabljak" },
];
