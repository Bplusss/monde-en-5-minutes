import type { ComponentType } from "react";
import type { CategoryKey, Country } from "@/lib/types";
import { GeographyCompare } from "./GeographyCompare";
import { PopulationCompare } from "./PopulationCompare";
import { LanguagesCompare } from "./LanguagesCompare";
import { ReligionCompare } from "./ReligionCompare";
import { PoliticsCompare } from "./PoliticsCompare";
import { EconomyCompare } from "./EconomyCompare";
import { HistoryCompare } from "./HistoryCompare";
import { CultureCompare } from "./CultureCompare";
import { TerritoryCompare } from "./TerritoryCompare";
import { CuriositiesCompare } from "./CuriositiesCompare";

export const COMPARE_CATEGORY_COMPONENTS: Record<CategoryKey, ComponentType<{ a: Country; b: Country }>> = {
  geographie: GeographyCompare,
  population: PopulationCompare,
  langues: LanguagesCompare,
  religion: ReligionCompare,
  politique: PoliticsCompare,
  economie: EconomyCompare,
  histoire: HistoryCompare,
  culture: CultureCompare,
  territoire: TerritoryCompare,
  curiosites: CuriositiesCompare,
};
