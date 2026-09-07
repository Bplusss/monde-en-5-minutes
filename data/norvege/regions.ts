import type { Region } from "@/lib/types";

/** Les 15 comtés (fylker) norvégiens depuis le 1er janvier 2024, après la partition des fusions de 2020. */
export const regions: Region[] = [
  { code: "31", name: "Østfold" },
  { code: "32", name: "Akershus" },
  { code: "03", name: "Oslo" },
  { code: "34", name: "Innlandet" },
  { code: "33", name: "Buskerud" },
  { code: "39", name: "Vestfold" },
  { code: "40", name: "Telemark" },
  { code: "42", name: "Agder" },
  { code: "11", name: "Rogaland" },
  { code: "46", name: "Vestland" },
  { code: "15", name: "Møre og Romsdal" },
  { code: "50", name: "Trøndelag" },
  { code: "18", name: "Nordland" },
  { code: "55", name: "Troms" },
  { code: "56", name: "Finnmark" },
];
