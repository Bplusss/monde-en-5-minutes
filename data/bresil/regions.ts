import type { Region } from "@/lib/types";

/**
 * Les 26 États fédérés et le District fédéral (Brasília), soit 27 unités
 * fédératives — codes ISO 3166-2:BR, tels que découpés par Natural Earth.
 */
export const regions: Region[] = [
  { code: "BR-AC", name: "Acre" },
  { code: "BR-AL", name: "Alagoas" },
  { code: "BR-AP", name: "Amapá" },
  { code: "BR-AM", name: "Amazonas" },
  { code: "BR-BA", name: "Bahia" },
  { code: "BR-CE", name: "Ceará" },
  { code: "BR-DF", name: "Distrito Federal" },
  { code: "BR-ES", name: "Espírito Santo" },
  { code: "BR-GO", name: "Goiás" },
  { code: "BR-MA", name: "Maranhão" },
  { code: "BR-MT", name: "Mato Grosso" },
  { code: "BR-MS", name: "Mato Grosso do Sul" },
  { code: "BR-MG", name: "Minas Gerais" },
  { code: "BR-PA", name: "Pará" },
  { code: "BR-PB", name: "Paraíba" },
  { code: "BR-PR", name: "Paraná" },
  { code: "BR-PE", name: "Pernambuco" },
  { code: "BR-PI", name: "Piauí" },
  { code: "BR-RJ", name: "Rio de Janeiro" },
  { code: "BR-RN", name: "Rio Grande do Norte" },
  { code: "BR-RS", name: "Rio Grande do Sul" },
  { code: "BR-RO", name: "Rondônia" },
  { code: "BR-RR", name: "Roraima" },
  { code: "BR-SC", name: "Santa Catarina" },
  { code: "BR-SP", name: "São Paulo" },
  { code: "BR-SE", name: "Sergipe" },
  { code: "BR-TO", name: "Tocantins" },
];
