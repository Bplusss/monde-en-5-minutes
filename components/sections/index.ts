import type { ComponentType } from "react";
import type { Country, CategoryKey } from "@/lib/types";
import { GeographySection } from "./GeographySection";
import { PopulationSection } from "./PopulationSection";
import { LanguagesSection } from "./LanguagesSection";
import { ReligionSection } from "./ReligionSection";
import { PoliticsSection } from "./PoliticsSection";
import { EconomySection } from "./EconomySection";
import { HistorySection } from "./HistorySection";
import { CultureSection } from "./CultureSection";
import { TerritoriesSection } from "./TerritoriesSection";
import { CuriositiesSection } from "./CuriositiesSection";

export const SECTION_COMPONENTS: Record<CategoryKey, ComponentType<{ country: Country }>> = {
  geographie: GeographySection,
  population: PopulationSection,
  langues: LanguagesSection,
  religion: ReligionSection,
  politique: PoliticsSection,
  economie: EconomySection,
  histoire: HistorySection,
  culture: CultureSection,
  territoire: TerritoriesSection,
  curiosites: CuriositiesSection,
};
